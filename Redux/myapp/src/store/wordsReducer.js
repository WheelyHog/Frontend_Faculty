import { words } from "../data";

const ADD_NEW_WORD = 'ADD_NEW_WORD'
const ROTATE_CARD = 'ROTATE_CARD'

const defaultState = words;

export const wordsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NEW_WORD:
      return [...state, action.payload]
    case ROTATE_CARD:
      const copyState = [...state]
      const item = copyState.find(elem => elem.id === action.payload)
      item.lang = item.lang === 'rus' ? 'eng' : 'rus';
      return copyState
    default:
      return state
  }
}

export const addNewWordAction = (payload) => ({ type: ADD_NEW_WORD, payload })
export const rotateCardAction = (payload) => ({ type: ROTATE_CARD, payload })