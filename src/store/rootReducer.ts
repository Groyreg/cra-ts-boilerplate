import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export type ApplicationState = ReturnType<typeof rootReducer>;

const appReducer = combineReducers({
  form,
  router: connectRouter(history),
});

const rootReducer = (state: any, action: any) => appReducer(state, action);

export default rootReducer;
