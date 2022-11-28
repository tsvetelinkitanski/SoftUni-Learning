import * as api from "./api.js";
const endpoints = {
  allCatalogs: "/data/posts?sortBy=_createdOn%20desc",
  myPosts: (userId) =>
    `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  details: "/data/posts/",
  onDelete: "/data/posts/",
  update: "/data/posts/",
  create: "/data/posts/",
};

export async function getAll() {
  return await api.get(endpoints.allCatalogs);
}

export async function getMyPosts(id) {
  return await api.get(endpoints.myPosts(id));
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
  return api.post(endpoints.create, data);
}
