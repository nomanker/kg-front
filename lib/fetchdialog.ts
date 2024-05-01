import axios from "@/lib/http";

export const fetchAllDialogue = () =>
  axios
    .get("/dialogue/all")
    .then((res) => res.data)
    .catch((err) => null);

export const fetchDialogue = (id: number) =>
  axios
    .get(`/dialogue?did=${id}`)
    .then((res) => res.data.history)
    .catch((err) => null);

export const ask = (question, database, id) =>
  axios
    .put(
      "/dialogue",
      {},
      {
        params: {
          question,
          database,
          did: id,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => null);

export const fetchAllGraphs = () =>
  axios
    .get("/graph/all")
    .then((res) => res.data)
    .catch((err) => null);

export const fetchGraph = (id) =>
  axios
    .get(`/graph?gid=${id}`)
    .then((res) => res.data)
    .catch((err) => null);
