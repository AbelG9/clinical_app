"use client"

import React, { useEffect, useState } from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import CustomPatientsTable from '@/components/patients/CustomPatientsTable'
import Modal from '@/components/Modal'
import { findAllPersons, getReniecInfo } from '@/services/patients'
import { toast } from 'sonner'

const page = () => {
  const [patients, setPatients] = useState([])
  const [tableFields, setTableFields] = useState([])
  const [modalFields, setModalFields] = useState([])
  
  const [modalTitle, setModalTitle] = useState("")

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

  const [form, setForm] = useState(initialModalData)

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
        label: "Document Number",
        fieldName: "num_documento",
        type: "number"
      },
      {
        label: "Name",
        fieldName: "name"
      },
      {
        label: "Last Name",
        fieldName: "lastname"
      },
      {
        label: "Email",
        fieldName: "email",
        type: "email"
      },
      {
        label: "Gender",
        fieldName: "gender"
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

    const handleChange = async(event) => {
      const { name, value } = event.target

      setForm({ ...form, [name]: value })

      if (name == "num_documento" && value.length == 8) {
        getReniecInfo(value)
        .then(data => {
          if (!data.data) {
            toast.error("DNI inválido o de un menor de edad")
            return
          }
          setForm({
            ...form,
            name: data.data.nombres,
            lastname: data.data.apellidoPaterno + ' ' + data.data.apellidoMaterno,
            num_documento: value
          })
        })
      }      
    }

    const routeList = ["Patients"]
    const routeUrl = "/patients"

    useEffect(() => {
      const getAllPatients = async() => {
        try {
          const response = await findAllPersons()

          if (!response.data) {
            if (response.code == 1004) {
              toast.warning(response.message)
              setPatients(response.data)
            }
          }
        } catch(error) {
            console.log(error)
        }
      }

      getAllPatients()

      setTableFields(initialTableFields)
      setModalFields(initialModalFields)
      // setPatients(templatePatientsData)
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
          modalTitle={modalTitle}
        />
        <CustomPatientsTable 
          fields={tableFields} 
          data={patients} 
          toggle={toggle} 
          setToggle={setToggle}
          setModalTitle={setModalTitle}
        />
    </>
  )
}

export default page