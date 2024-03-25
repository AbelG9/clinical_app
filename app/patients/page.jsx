"use client"

import React, { useEffect, useState } from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import CustomPatientsTable from '@/components/patients/CustomPatientsTable'
import Modal from '@/components/Modal'

const page = () => {
  const [patients, setPatients] = useState([])
  const [tableFields, setTableFields] = useState([])
  const [modalFields, setModalFields] = useState([])
  const [form, setForm] = useState([])

  const initialTableFields = 
    [
      "index",
      "patient",
      "gender",
      "document",
      "phone number",
      "status",
      "actions"
    ]

    const initialModalFields = [
      {
        label: "Name",
        fieldName: "name",
        type: "text"
      },
      {
        label: "Last Name",
        fieldName: "lastname",
        type: "text"
      },
      {
        label: "Email",
        fieldName: "email",
        type: "email"
      },
      {
        label: "Gender",
        fieldName: "gender",
        type: "text"
      },
      {
        label: "Document Number",
        fieldName: "num_documento",
        type: "number"
      },
      {
        label: "Phone Number",
        fieldName: "phone_number",
        type: "number"
      }
    ]

    const templatePatientsData = [
        {
            id: 1,
            name: "Abel",
            lastname: "Guevara",
            email: "abel@gmail.com",
            gender: "Masculino",
            num_documento: 48451278,
            phone_number: 963258741,
            status: 1
        },
        {
            id: 2,
            name: "Javier",
            lastname: "Guevara",
            email: "javier@gmail.com",
            gender: "Masculino",
            num_documento: 48451278,
            phone_number: 963258741,
            status: 1
        },
        {
            id: 3,
            name: "Julia",
            lastname: "Guerra",
            email: "julia@gmail.com",
            gender: "Femenino",
            num_documento: 48451278,
            phone_number: 963258741,
            status: 0
        },
        {
            id: 4,
            name: "Angela",
            lastname: "Rodriguez",
            email: "angela@gmail.com",
            gender: "Masculino",
            num_documento: 48451278,
            phone_number: 963258741,
            status: 1
        }
    ]

    const initialModalData = 
      {
        id: 0,
        name: "",
        lastname: "",
        email: "",
        gender: "",
        num_documento: 0,
        phone_number: 0,
        status: 1
      }

      const handleChange = (event) => {
        // console.log(event.target.name, event.target.value)
        const { name, value } = event.target
    
        setForm({ ...form, [name]: value })
      }

    const routeList = ["Patients"]
    const routeUrl = "/patients"

    useEffect(() => {
      setTableFields(initialTableFields)
      setModalFields(initialModalFields)
      setPatients(templatePatientsData)
      setForm(initialModalData)
    }, [])
    
    const [toggle, setToggle] = useState(false)

  return (
    <>
        <BreadCrumb routeList={routeList} routeUrl={routeUrl}/>
        <Modal 
          toggle={toggle} 
          setToggle={setToggle}
          fields={modalFields}
          form={form}
          handleChange={handleChange}
        />
        <CustomPatientsTable 
          fields={tableFields} 
          data={patients} 
          toggle={toggle} 
          setToggle={setToggle}
        />
    </>
  )
}

export default page