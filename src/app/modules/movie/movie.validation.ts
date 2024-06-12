import { z } from 'zod';

const createMovieValidationSchema = z.object({
    body: z.object({
        title: z.string().max(200),
        description: z.string(),
        releaseDate: z.string().datetime(),
        genre: z.string(),
    }),
});
const updateMovieValidationSchema = z.object({
    body: z.object({
        title: z.string().max(200).optional(),
        description: z.string().optional(),
        releaseDate: z.string().datetime().optional(),
        genre: z.string().optional(),
    }),
});

const MovieValidations = {
    createMovieValidationSchema,
    updateMovieValidationSchema,
};

export default MovieValidations;
