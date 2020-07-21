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

export function getAllMatches() {
    return fetch(BASE_URL, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + tokenService.getToken(),
        },
    }).then(res => res.json())
}


export function update(match) {
  return fetch(`${BASE_URL}/${match._id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(match),
  }).then((res) => console.log(res.json()));
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}
