import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

// [TODO]: create middlewares for envs.
// process.env.NODE_ENV
// https://github.com/frodare/addon-redux#enhancer

// [TODO]: storybook is not updating store.
// either using this addon-redux will not update the store,
// or using the WithProvider HOC in the storybook directly
// will display the code wrongly in the DOCS
// this can be because .storybook/preview.js is being ignored by storybook
// thigns that can help:
// https://medium.com/ingenious/storybook-meets-redux-6ab09a5be346
// https://github.com/gregorskii/storybook-addon-redux-listener

const middleWare = [thunkMiddleware];

const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
