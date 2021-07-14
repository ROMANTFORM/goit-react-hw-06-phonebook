import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './pb-actions';


const contactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
];

const items = createReducer(contactsState, {
    [actions.addContact]: (state, action) => [action.payload, ...state],

    [actions.deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
    [actions.filterContact]: (state, action) => action.payload,
});


// const items = (state = contactsState, {type, payload}) => {
//     switch (type) {
//         case types.ADD:
//             return [payload, ...state];
        
//         case types.DELETE:
//             return state.filter(contact => contact.id !== payload);
       
//         default:
//             return state;
//    }
// };

// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//         case types.FILTER:
//             return payload;
       
//         default:
//             return state;
//    }
// };

export default combineReducers({
    items,
    filter,
});