import tokenService from "./tokenService";

const BASE_URL = "/api/plantMatch";

export function create(match) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(match),
  }).then((res) => res.json());
}

export function update(match) {
  return fetch(`${BASE_URL}/${match._id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(match),
  }).then((res) => res.json());
}
