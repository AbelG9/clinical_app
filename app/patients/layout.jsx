'use client'

import Navbar from '@/components/Navbar'
import BreadCrumb from '@/components/BreadCrumb'

export default function PatientsLayout({ children }) {  return (
    <>
      <main className="flex flex-col items-center min-h-screen">
        <Navbar />
        <div className="container pt-24 flex flex-col">
          <BreadCrumb className="flex"/>
          <div className='mt-4'>
            {children}
          </div>
        </div>
      </main>
    </>
  )
}