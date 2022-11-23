import * as api from "./api.js";

const endpoints = {
  allShoes: "/data/shoes?sortBy=_createdOn%20desc",
  createShoe: "/data/shoes",
  details: "/data/shoes/",
  delShoe: "/data/shoes/",
  updateInfo: "/data/shoes/",
};

export async function getAll() {
  return api.get(endpoints.allShoes);
}

export async function createShoe(data) {
  return api.post(endpoints.createShoe, data);
}

export async function detailsForShoe(id) {
  return api.get(endpoints.details + id);
}

export async function deleteShoe(id) {
  return api.del(endpoints.delShoe + id);
}

export async function update(id, data) {
  return api.put(endpoints.updateInfo + id, data);
}
