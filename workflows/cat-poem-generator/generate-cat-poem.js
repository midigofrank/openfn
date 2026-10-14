prompt('Write a short, fun poem about cats.', { model: 'gemini-3.6-flash' });

fn(state => {
  console.log('prompt response:', JSON.stringify(state.data, null, 2));
  return { ...state, catPoem: { text: state.data.response } };
});