import { Request, Response } from 'express';
import { Asteroid } from '../models/Asteroid';
import { config, errors, responses } from '../constants';
import { getApiResponse } from '../utils/utilities';
import axios from 'axios'

/**
 * Function to retrieve the list of asteroids filtered by start_date and end_date
 * @param start_date Start date for calculating the range of near_earth_objects array
 * @param end_date End date for calculating the range of near_earth_objects array
 * @return Array of asteroids --> Asteroid[]
 */
export const getAsteroids = async (req: Request, res: Response) => {
    try {
        const { start_date, end_date } = req.query;

        // Start date or end_date don't exit, we return an error
        // We could include here more validations for dates if they are not valid, etc, not only if they don't exist
        if (!start_date || !end_date) {
            res.status(errors.badRequest).json(
                getApiResponse(errors.badRequest)
            )
        }

        const response: Response = await axios.get(`${config.apiUrl}?start_date=${start_date}&end_date=${end_date}&api_key=${config.apiKey}`)
        const asteroids: Asteroid[] = response?.data
        
        if(!asteroids) {
            res.status(errors.serverError.code).json(
                getApiResponse({
                    error: `${errors.serverError}: ${response.error}`,
                    ...errors.serverError
                })
            )
        }

        res.status(responses.getAsteroids.code).json(
            getApiResponse({
                asteroids: asteroids,
                ...responses.getAsteroids
            })
        )
    } catch (e) {
        res.status(errors.serverError.code).json(
            getApiResponse({
                error: `${errors.serverError}: ${e.response.data.error_message}`,
                ...errors.serverError
            })
        )
    }
};