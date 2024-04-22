import * as z from 'zod';

export const Schema = z.object({
    Region: z.string().email({
        message: "Please enter a valid email address"
    }),
    Language: z.string().min(1, {
        message: "Please enter your name"
    }),
    PreferredTime: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    }),
    PreferredDays: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    }),
    Subjects: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    }),
    Mode: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    })

})

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
})
})