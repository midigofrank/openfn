// Read data from the Google Sheet
getValues('17xd3lmxlup-bxVS-U6agvD6L7UQm6DzEsU43Iw2Fas4', 'Sheet1!A:Z');

// Convert the rows into JSON objects (first row = headers)
fn(state => {
  const [headers, ...rows] = state.data.values;
  const json = rows.map(row => {
    return headers.reduce((obj, key, i) => {
      obj[key] = row[i];
      return obj;
    }, {});
  });

  return { ...state, data: json };
});
