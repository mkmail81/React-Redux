import {createStore} from "redux";
import rootReducer from "./ActionExecute/index.js";
const store = createStore(rootReducer);

export default store;