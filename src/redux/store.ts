import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { initialStateI, reducer, initialState } from './reducer';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = createStore<initialStateI, any, any, any>(
    reducer,
    initialState,
    applyMiddleware(),
);

export default store;
