const options = {
  method: 'POST',
  headers: {
    Authorization: 'Bearer sk-0796b4d31dc64fa0a517714c9d5711ee',
    'Content-Type': 'application/json'
  },
  body: '{"question":"What is DSA","search_count":2}'
};

fetch('https://api.worqhat.com/api/ai/search/v3', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));