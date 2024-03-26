"use client"

import { useState } from "react";
import LoginNavbar from "@/components/LoginNavbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login } from "../services/auth";
import { toast } from "sonner"

export default function Home() {
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

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await login(form)

      if (!response.data) {
        router.push('/')
        toast.error("Usuario inválido, revise sus credenciales")
        return
      }

      localStorage.setItem('auth-token', response.token)

      router.push('/patients')
      toast.info("Bienvenido!")
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
    <LoginNavbar />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {JSON.stringify(form)} */}
      <div className="flex flex-col gap-4">
        <div className="mb-4 text-center text-white">
          <h1 className="text-4xl font-semibold mb-6">Login</h1>
          <label className="text-sm">Enter your email below to login your account.</label>
        </div>
        <form className="flex flex-col max-w-sm" onSubmit={handleLogin}>
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
          {/* <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
          </div> */}
          <div className="flex justify-center gap-2 mb-5">
              <label>Don&apos;t have an account?</label> <Link href="/register" className="text-blue-300 hover:text-gray-900">Register</Link>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800">Login</button>
          </div>
        </form>
      </div>
      
    </main>
    </>
  );
}
