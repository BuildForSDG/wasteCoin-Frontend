import { ADD_TO_NUMBERS } from "./constant";

function sample(state=[], action){
  switch(action.type) {
    case ADD_TO_NUMBERS:
      return [{"operation": 1}];
    default:
      return state;
  }
}

export default sample;
