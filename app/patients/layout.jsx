'use client'

import Navbar from '@/components/Navbar'

export default function PatientsLayout({ children }) {  return (
    <>
      <Navbar />
      <main className="m-6">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
    </>
  )
}