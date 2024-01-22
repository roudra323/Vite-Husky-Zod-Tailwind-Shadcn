import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';

const Home = () => {
    const schema = z
        .object({
            firstName: z.string().min(2).max(20).optional(),
            lastName: z.string().min(2).max(20).optional(),
            email: z.string().email(),
            age: z
                .string()
                .transform((val) => parseInt(val))
                .refine((val) => val >= 18 && val <= 120, {
                    message: 'Age must be between 18 and 120',
                })
                .optional(),
            password: z.string().min(8).max(100),
            confirmPassword: z.string().min(8).max(100),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: 'Passwords do not match',
            path: ['confirmPassword'],
        });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(schema) });

    const onSubmit = (data) => console.log(data);

    return (
        <div className="FormContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label> First Name: </label>
                <input type="text" {...register('firstName')} />
                {errors.firstName && <p>{errors.firstName.message}</p>}

                <label> Last Name: </label>
                <input type="text" {...register('lastName')} />
                {errors.lastName && <p>{errors.lastName.message}</p>}

                <label> Email: </label>
                <input type="email" {...register('email')} />
                {errors.email && <p>{errors.email.message}</p>}

                <label> Age </label>
                <input type="number" {...register('age')} />
                {errors.age && <p>{errors.age.message}zod</p>}

                <label> Password: </label>
                <input type="password" {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}

                <label> Confirm Password: </label>
                <input type="password" {...register('confirmPassword')} />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                <Button>Button</Button>
            </form>
        </div>
    );
};

export default Home;
