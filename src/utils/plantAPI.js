const BASE_URL = "/api/plants";

export function getAll() {
  console.log("hitting getAll function");
  return fetch(BASE_URL).then((res) => {
    console.log("res", res);
    return res.json();
  });
}