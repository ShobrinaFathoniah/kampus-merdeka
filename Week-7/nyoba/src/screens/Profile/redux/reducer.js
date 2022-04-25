const initialState = {
  name: 'audy pratama',
  age: 20,
  kriteria: {height: '180 cm', weight: '72 lbs'},
};

export const profileReducer = (state = initialState, action) => {
  // if (action.type === 'SET_NAMA') {
  //   return {
  //     ...state,
  //     name: action.nama,
  //   };
  // }

  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.nama,
      };

    case 'SET_AGE':
      return {};

    default:
      return {...state}; //toples baru -> dianggap sebagai objek baru -> agar dapat merender ulang karena ada data baru
  }
};

// bikin sedinamis mungkin implement redux di
