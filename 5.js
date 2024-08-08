

const payload = [
  { data: "payload1" },
  { data: "payload2" },
  { data: "payload3" },
  { data: "payload4" },
];
endpoint="https://httpbin.org/Anything/"
const requests = payload.map(payload => 
    fetch(endpoint, {
        method: 'POST',
        headers: {
             'Content-Type': 'application'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .catch(error => ({ error: error.message }))
);

//Promise.all settled as it settles all the promises/requests weather failure or success
Promise.allSettled(requests)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Request ${index + 1} succeeded with response`);
            } else {
                console.log(`Request ${index + 1} failed with error`);
            }
        });
    });