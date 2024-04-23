"use client";

import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { useTransition, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import {
    Form,
    FormControl,
    FormLabel,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';

import Buttons from '@/components/auth/buttons'
import Link from 'next/link'
import { LoginSchema } from '@/schemas';
import { FormError } from '@/components/auth/formError';
import { FormSuccess } from '@/components/auth/formSucces';
import { login } from '@/actions/login';

const page = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const urlError = searchParams.get("error") === "OAtuhAccountNotLinked" ? "Bu mail adresiyle girili başka bir hesap var." : "";
    const email = searchParams.get("email") || "";
    
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: email,
            password: '',
        },
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            login(values, callbackUrl)
            .then((data) => {
                setError(data?.error);
                // setSuccess(data?.success);
                //for 2fa
            })
        });
    }

    return (
        <div className='bg-white rounded-lg  gap-7 flex flex-col  py-6 px-20 max-md:px-2 max-md:py-3 max-md:mt-3 max-md:mb-3'>
            <div className='flex items-center justify-center gap-2 '>
                <img className='w-10' src="https://em-content.zobj.net/source/apple/354/locked-with-key_1f510.png" alt="locked" />
                <h2 className='font-bold text-4xl'>Auth</h2>
            </div>
            <p className='text-center opacity-85 font-normal'>Tekrar hoşgeldin!</p>
            <p className='text-lg font-normal'>Giriş Formu!</p>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-4'
                >
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder='ahmet.teke@example.com'
                                            type='email'
                                            autoComplete='email'
                                            value={email ? email : undefined}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Şifre</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder='******'
                                            type='password'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                    <Button
                                        size="sm"
                                        variant="link"
                                        asChild
                                        className='px-0 font-normal'
                                    >
                                        <Link href="/auth/reset">
                                        Şifreni mi unuttun?</Link>
                                    </Button>
                                </FormItem>
                            )} />
                    </div>
                    <FormError message={error || urlError} />
                    <FormSuccess message={success} />
                    <Button className='w-full' disabled={isPending}>
                        Giriş Yap
                    </Button>
                </form>
            </Form>
            <Buttons />
            <Link href={"/auth/register"} className='underline text-sm opacity-90 text-center'>Hesabınız yok mu?</Link>
        </div>
    )
}

export default page