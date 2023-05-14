import { combineReducers, createStore } from "redux";
import { wordsReducer } from "./wordsReducer";

const rootReducer = combineReducers({
  words: wordsReducer
})

export const store = createStore(rootReducer);