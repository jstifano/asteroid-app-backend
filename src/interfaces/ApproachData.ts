export interface ApproachData {
  close_approach_date: string,
  close_approach_date_ful: string,
  epoch_date_close_approach: number,
  relative_velocity: {
    kilometers_per_second: string,
    kilometers_per_hour: string,
    miles_per_hour: string
  },
  miss_distance: {
    astronomical: string,
    lunar: string,
    kilometers: string,
    miles: string
  },
  orbiting_body: string
}