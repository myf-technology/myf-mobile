export interface registerCompanyParams {
  document: string;
  legal_name: string;
  fantasy_name: string;
  email: string;
  phone: string;
  revenues: number;
}

export type registerCompanyData =
  | registerCompanyDataSuccess
  | registerCompanyDataError;

export interface registerCompanyDataError {
  code: number;
  message: string;
  status: string;
  // todo: add more fields to data
  data: any | null;
}
export interface registerCompanyDataSuccess {
  data: {
    cellphone: string;
    created_at: string;
    document: string;
    document_type: 'CNPJ' | 'CPF';
    email: string;
    employes: number;
    fantasy_name: string;
    id: number;
    indication_code: string;
    is_blocked: boolean;
    legal_name: string;
    pedding_approve: boolean;
    phone: number;
    pre_register: boolean;
    public_key: string;
    updated_at: string;
    uuid: string;
  };
  message: string;
  status: string;
  code: number;
}
