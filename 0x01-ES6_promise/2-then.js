// eslint-disable-next-line
export default function handleResponseFromAPI(promise) {
  return promise
    // eslint-disable-next-line
    .then(() => ({ status: 200, body: 'Success' }))
    .catch(() => new Error())
    .finally(() => { console.log('Got a response from the API'); });
}
