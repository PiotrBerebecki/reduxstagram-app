function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log('Incrementing likes');
      const i = action.index;
      return [
        ...state,
        {...state[i], likes: state[i].likes + 1},
      ];
      
    default:
      return state;
  }
}

export default posts;
