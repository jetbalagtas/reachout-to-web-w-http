import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// request interceptor
axios.interceptors.request.use(request => {
  console.log(request);
  // you can also Edit the request config such as add headers, etc.
  return request;
  // for the when the request sending fails
}, error => {
  console.log(error);
  return Promise.reject(error);
});

// response interceptor. so we still forward the error to our component, where we are catching the error
axios.interceptors.response.use(response => {
  console.log(response);
  // Edit request config
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

// If you may need to remove an interceptor later you can:
// const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
