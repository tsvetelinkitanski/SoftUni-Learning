import * as authService from "./authService.js";

export async function request(method, url, data) {
  let options = {};

  if (method != "GET") {
    options.method = method;
    options.headers = {
      "Content-Type": "application/json",
      "X-Authorization": authService.getToken(),
    };
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(host + url, options);

    if (response.ok != true) {
      if (response.status == 403) {
        authService.deleteUser();
      }

      const error = response.json();
      throw new Error(error.message);
    }

    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

export const get = request.bind({}, "get");
export const post = request.bind({}, "post");
export const put = request.bind({}, "put");
export const patch = request.bind({}, "patch");
export const del = request.bind({}, "delete");
