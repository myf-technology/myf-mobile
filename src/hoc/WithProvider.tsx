import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

interface Iprops {
  children: ReactElement<any, any>;
  store: Store;
}

// [TODO]: type these variables
export const WithProvider = ({ children, store }: Iprops) => (
  <Provider store={store}>{children}</Provider>
);
