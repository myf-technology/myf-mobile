import moment from 'moment';

const today = moment().format('DD/MM/YYYY');

export interface IFormData {
  id: string;
  value: string;
  label: string;
  placeholder: string;
  key: string;
}

export const formData: IFormData[] = [
  {
    id: '0',
    value: '',
    label: 'Categoria',
    placeholder: '',
    key: 'categoryId',
  },
  {
    id: '1',
    value: today,
    label: 'Data',
    placeholder: today,
    key: 'eventDate',
  },
  {
    id: '2',
    value: '',
    label: 'Valor',
    placeholder: 'R$ 0,00',
    key: 'amount',
  },
  {
    id: '3',
    value: '',
    label: 'Descrição',
    placeholder: 'Descrição',
    key: 'description',
  },
];
