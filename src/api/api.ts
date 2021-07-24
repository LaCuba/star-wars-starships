import axios from "axios"

const instance = axios.create({
  baseURL: "https://swapi.dev/api/",
})

export const starshipsApi: any = {
  getFilm(episode: number) {
    return instance.get(`films/${episode}/`)
  },
}
