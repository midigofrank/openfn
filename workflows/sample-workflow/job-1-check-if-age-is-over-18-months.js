  fn(state => {
    console.log(state);
    
    if (state.data.age_in_months > 18) {
      console.log('Eligible for program.');
      return state;
    }
    else { throw 'Error, patient ineligible.' }
  });
