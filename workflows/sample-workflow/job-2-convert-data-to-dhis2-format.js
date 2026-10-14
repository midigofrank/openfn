  fn(state => {
    const names = state.data.name.split(' ');
    return { ...state, names };
  });
