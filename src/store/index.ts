import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { history } from './rootReducer';
// TODO uncomment when any sagas was written
// import rootSagas from './rootSagas';

export type AppState = ReturnType<typeof rootReducer>;
export type StoreConfig = ReturnType<typeof configureStore>;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, {}, composeWithDevTools(middleWareEnhancer));
  // TODO uncomment when any sagas was written
  // rootSagas.forEach(sagaMiddleware.run);

  return { store, history };
}
