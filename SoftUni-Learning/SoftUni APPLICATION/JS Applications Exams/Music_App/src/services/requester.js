import * as authService from './authService.js';

export const request = (method, url, data) => {
  let options = {};

  if (method != "GET") {
    options.method = method;
    options.headers = { 
      "Content-Type": "application/json",
      "X-Authorization": authService.getToken(),
    };
    options.body = JSON.stringify(data);
  }

  return fetch(url, options).then((res) => res.json());
};

export const get = request.bind({}, "get");
export const post = request.bind({}, "post");
export const put = request.bind({}, "put");
export const patch = request.bind({}, "patch");
export const del = request.bind({}, "delete");
