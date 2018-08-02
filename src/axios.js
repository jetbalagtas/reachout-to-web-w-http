import axios from 'axios';

// creating and using axios instances for use in places you choose
// usage: for customizing headers, using different baseURLs, etc.
const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com',
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// you can also set your own interceptors, just like the default ones
// instance.interceptors.request...

export default instance;
