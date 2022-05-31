import instance from '..';
import { readToken } from '../../storage/storageToken';

export const getStatmentAPI = async (startDate, endDate) => {
  try {
    const res = await instance({
      method: 'GET',
      url: `/movimentations?startDate=${startDate}&finalDate=${endDate}`,
      headers: {
        Authorization: await readToken(),
      },
    });

    type newObjType = {
      [args: string]: {
        amount: number;
        invoiceType: string;
      }[];
    };

    const dateArr: string[] = [];
    const newObj: newObjType = {};

    const getFirstPageData = await instance({
      method: 'GET',
      url: res.data.data.first_page_url,
      headers: {
        Authorization: await readToken(),
      },
    });

    getFirstPageData.data.data.data.forEach((transactions: any) => {
      if (!dateArr.includes(transactions.payment_in)) {
        dateArr.push(transactions.payment_in);
      }
    });

    dateArr.forEach((date) => {
      newObj[date] = [];
    });

    getFirstPageData.data.data.data.forEach((transactions: any) => {
      newObj[transactions.payment_in].push({
        amount: transactions.amount,
        invoiceType: transactions.invoice_type.slug,
      });
    });

    return newObj;
  } catch (error) {
    return error.response.data;
  }
};
