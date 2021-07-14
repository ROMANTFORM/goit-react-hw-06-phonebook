import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';


export const addContact = createAction('addContact', (name, number) => ({
    payload: {id: shortid.generate(), name, number}
}));
export const deleteContact = createAction('deleteContact');
export const filterContact = createAction('fitlerContact');



// export const addContact = (name, number) => ({
//     type: types.ADD,
//     payload: {id: shortid.generate(), name, number},
// });

// export const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// });

// export const filterContact = value => ({
//     type: types.FILTER,
//     payload: value,
// });
