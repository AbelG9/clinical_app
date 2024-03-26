"use client"

import React from 'react'
import { signUp } from '@/services/auth'
import { useState } from 'react'
import LoginNavbar from '@/components/LoginNavbar'
import { toast } from 'sonner'
import { useRouter } from "next/navigation";

const Register = () => {
    const router = useRouter()

    const initialState = {
        username: '',
        password: '',
    }

    const [form, setForm] = useState(initialState)

    const handleChange = (event) => {
        const { name, value } = event.target
    
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signUp(form)

            if (!response.data) {
                toast.error("Datos inválidos")
                return
            }
            toast.info("Usuario registrado exitosamente!")
            router.push('/')

        } catch(error) {
            console.log(error)
        }
    }

  return (
    <>
        <LoginNavbar />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col gap-4">
                <div className="mb-4 text-center text-white">
                    <h1 className="text-4xl font-semibold mb-6">SignUp</h1>
                    <label className="text-sm">Enter your email below to register your account.</label>
                </div>
                <form className="flex flex-col max-w-sm" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label 
                    htmlFor="email" 
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Your email
                    </label>
                    <input 
                    type="email" 
                    id="username" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="jhondoe@mail.com"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                    required 
                    />
                </div>
                <div className="mb-5">
                    <label 
                    htmlFor="password" 
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Your password
                    </label>
                    <input 
                    type="password" 
                    id="password" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Ej. supersecret"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    required 
                    />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800">Register</button>
                    <button 
                        data-modal-hide="default-modal" 
                        type="button" 
                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={() => router.push('/')}
                    >
                        Cancel
                    </button>
                </div>
                </form>
            </div>
        </main>
    </>
  )
}

export default Register