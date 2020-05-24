import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./index";

const composedEnhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__()
: (f) => f);


export default function configureStore() {
 return createStore(
  rootReducer,
   composedEnhancers
 );
}