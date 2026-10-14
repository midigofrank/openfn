  create('trackedEntityInstances', {
    trackedEntityType: 'nEenWmSyUEp', // a person
    orgUnit: 'DiszpKrYNg8',
    attributes: [
      {
        attribute: 'w75KJ2mc4zz', // attribute id for first name
        value: state.names[0] // the first name from submission
      },
      {
        attribute: 'zDhUuAYrxNC', // attribute id for last name
        value: state.names[1] // the last name from submission
      }
    ]
  });
