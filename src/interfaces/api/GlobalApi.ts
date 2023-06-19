import { Asteroid } from "../../models/Asteroid"

export interface GlobalApi {
  code: number,
  message?: string,
  error?: Object | null,
  asteroids?: Asteroid[] | null
}

