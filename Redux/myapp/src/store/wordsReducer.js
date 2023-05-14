import { words } from "../data";

const ADD_NEW_WORD = 'ADD_NEW_WORD'
const ROTATE_CARD = 'ROTATE_CARD'
const ALL_TO_LANG = 'ALL_TO_LANG'
const REMOVE_BY_ID = 'REMOVE_BY_ID'

const defaultState = words;

export const wordsReducer = (state = defaultState, action) => {
  const copyState = [...state]
  switch (action.type) {
    case ADD_NEW_WORD:
      return [...state, action.payload]
    case ROTATE_CARD:
      const item = copyState.find(elem => elem.id === action.payload)
      item.lang = item.lang === 'rus' ? 'eng' : 'rus';
      return copyState;
    case ALL_TO_LANG:
      copyState.map(elem => {
        return elem.lang = action.payload;
      })
      return [...copyState]
    case REMOVE_BY_ID:
      return copyState.filter(elem => elem.id !== action.payload)
    default:
      return state
  }
}

export const addNewWordAction = (payload) => ({ type: ADD_NEW_WORD, payload })
export const rotateCardAction = (payload) => ({ type: ROTATE_CARD, payload })
export const allToLangAction = (payload) => ({ type: ALL_TO_LANG, payload })
export const removeByIdAction = (payload) => ({ type: REMOVE_BY_ID, payload })