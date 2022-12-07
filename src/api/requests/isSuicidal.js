async function isSuicidal(text) {
  const body = { text };
  const response = await fetch('/is-suicidal', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(body),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });

  return response.json();
}

export default isSuicidal;
