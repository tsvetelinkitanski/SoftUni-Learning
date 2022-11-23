import * as api from "./api.js";

const endpoints = {
  getCatalogInfo: "/data/albums?sortBy=_createdOn%20desc&distinct=name",
};

export async function getAll() {
  return api.get(endpoints.getCatalogInfo);
}
