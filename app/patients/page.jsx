"use client"

import React, { useEffect, useState } from 'react'
import TablePatients from '@/components/patients/TablePatients'

const page = () => {
  const [fields, setFields] = useState([])

  const initialFields = 
    [
      "index",
      "patient",
      "gender",
      "document",
      "phone number",
      "status",
      "actions"
    ]

    const [patients, setPatients] = useState([])

    const initialData = [
        {
            id: 1,
            name: "Abel",
            lastname: "Guevara",
            email: "abel@gmail.com",
            gender: "Masculino",
            num_documento: 48451278,
            phone_number: 963258741,
            status: "Activo"
        },
        {
            id: 2,
            name: "Javier",
            lastname: "Guevara",
            email: "javier@gmail.com",
            gender: "Masculino",
            num_documento: 48451278,
            phone_number: 963258741,
            status: "Activo"
        },
        {
            id: 3,
            name: "Julia",
            lastname: "Guerra",
            email: "julia@gmail.com",
            gender: "Femenino",
            num_documento: 48451278,
            phone_number: 963258741,
            status: "Inactivo"
        },
        {
            id: 4,
            name: "Angela",
            lastname: "Rodriguez",
            email: "angela@gmail.com",
            gender: "Masculino",
            num_documento: 48451278,
            phone_number: 963258741,
            status: "Activo"
        }
    ]

    useEffect(() => {
      setFields(initialFields)
      setPatients(initialData)
    }, [])
    

  return (
    <>
        <TablePatients fields={fields} patients={patients}/>
    </>
  )
}

export default page