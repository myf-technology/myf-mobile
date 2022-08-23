import moment from 'moment';

const today = moment().format('DD/MM/YYYY');

export interface IFormData {
  id: string;
  value: string;
  label: string;
  placeholder: string;
}

export const formData: IFormData[] = [
  {
    id: '0',
    value: '',
    label: 'Categoria',
    placeholder: '',
  },
  {
    id: '1',
    value: today,
    label: 'Data',
    placeholder: today,
  },
  {
    id: '2',
    value: '',
    label: 'Valor',
    placeholder: 'R$ 0,00',
  },
  {
    id: '3',
    value: '',
    label: 'Descrição',
    placeholder: 'Descrição',
  },
];
