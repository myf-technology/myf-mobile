export interface IVerifyEmailAsyncPayload {
  email: string;
}

export interface ILoginState {
  controls: {
    state: null | 'pending' | 'fulfilled' | 'rejected';
    message: string;
  };
}
