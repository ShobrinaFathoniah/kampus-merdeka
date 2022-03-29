import {createStore} from 'redux';

const dataProfile = (
  state = {
    namaLengkap: 'Shobrina',
  },
  action,
) => {
  return state;
};

export const store = createStore(dataProfile);
