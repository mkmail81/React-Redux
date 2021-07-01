import ChangeTheNumber from "./plus-minus.js";
import MultipleTheNumber from "./mult-div.js";
import {combineReducers} from "redux";

const rootReducer = combineReducers({

    ChangeTheNumber,
    MultipleTheNumber,

})

export default rootReducer;