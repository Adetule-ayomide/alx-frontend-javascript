export const weakMap = new WeakMap();
export default function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;	  
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
   weakMap.set(endpoint, count + 1);
}



const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
