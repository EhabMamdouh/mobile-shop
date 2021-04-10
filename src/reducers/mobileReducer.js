import uuid from 'uuid/v4';

export const mobileReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOBILE':
      return [...state, {
        model: action.mobile.model, 
        year: action.mobile.year,
        brand: action.mobile.brand,
        memory: action.mobile.memory,
        screen: action.mobile.screen,
        color: action.mobile.color,
        options: action.mobile.options, 
        id: uuid()}
      ]
    case 'REMOVE_MOBILE':
      return state.filter(mobile => mobile.id !== action.id);
    default:
      return state;
  }
} 