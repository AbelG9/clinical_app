'use client'

import Navbar from '@/components/Navbar'

export default function PatientsLayout({ children }) {  return (
    <>
      <main className="flex flex-col items-center min-h-screen">
        <Navbar />
        <div className="container pt-24">
          {children}
        </div>
      </main>
    </>
  )
}