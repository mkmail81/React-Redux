const initialState = 5;
function MultipleTheNumber(state=initialState, action) {
   switch(action.type){
       case "MULTIPLY": return state * 5;
       case "DIVIDE": return state / 5;
       default: return state;
   }
}

export default MultipleTheNumber;