import { Measure } from "../interfaces/Measure"
import { ApproachData } from "../interfaces/ApproachData"

export interface Asteroid {
    links: {
        self: string
    },
    id: string,
    neo_reference_id: string,
    name: string,
    nasa_jpl_url: string,
    absolute_magnitude_h: number,
    estimated_diameter: Measure,
    is_potentially_hazardous_asteroid: boolean,
    close_approach_data: Array<ApproachData>,
    is_sentry_object: boolean
}