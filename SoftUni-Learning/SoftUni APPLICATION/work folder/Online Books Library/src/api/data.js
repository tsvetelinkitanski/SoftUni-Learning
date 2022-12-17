import * as api from "./api.js";
const endpoints = {
  allCatalogs: "/data/books?sortBy=_createdOn%20desc",
  details: "/data/books/",
  onDelete: "/data/books/",
  update: "/data/books/",
  create: "/data/books/",
};

export async function getAll() {
  return await api.get(endpoints.allCatalogs);
}
export async function getDetails(id) {
  return await api.get(endpoints.details + id);
}

export async function deleteDetail(id) {
  return api.del(endpoints.onDelete + id);
}

export async function onUpdate(id, data) {
  return await api.put(endpoints.update + id, data);
}

export async function createOffer(data) {
    return api.post(endpoints.create, data)
}