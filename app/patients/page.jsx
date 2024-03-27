"use client"

import React, { useEffect, useState } from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import CustomPatientsTable from '@/components/patients/CustomPatientsTable'
import Modal from '@/components/Modal'
import { findAllPersons, getReniecInfo, createPatient } from '@/services/patients'
import { toast } from 'sonner'

const page = () => {
  const [patients, setPatients] = useState([])
  const [tableFields, setTableFields] = useState([])
  const [modalFields, setModalFields] = useState([])
  
  const [modalTitle, setModalTitle] = useState("")

  const initialPatientData = 
    {
      name: "",
      lastname: "",
      email: "",
      gender: "",
      numDocument: 0,
      phoneNumber: 0,
      documentTypeId: 1
    }

  const [form, setForm] = useState(initialPatientData)

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
        fieldName: "numDocument",
        type: "number"
      },
      {
        label: "Name",
        fieldName: "name",
        disabled: true
      },
      {
        label: "Last Name",
        fieldName: "lastname",
        disabled: true
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
        fieldName: "phoneNumber",
        type: "number"
      }
    ]

    const getAllPatients = async() => {
      try {
        const response = await findAllPersons()
        
        if (!response.data) {
          if (response.code == 1004) {
            toast.warning(response.message)
            setPatients(response.data)
            return
          }
        }
        setPatients(response.data)
      } catch(error) {
          console.log(error)
      }
    }

    const handleChange = async(event) => {
      const { name, value } = event.target
      setForm({ ...form, [name]: value })

      if (name == "numDocument" && value.length == 8) {
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
            numDocument: value
          })
        })
      }
    }

    const handleSubmit = async(event) => {
      event.preventDefault();

      try {
        const response = await createPatient(form)
        if (!response.data) {
          toast.error("Datos inválidos")
          return
        }
    
        toast.success("Paciente guardado exitosamente!")
        setToggle(false)
        setForm(initialPatientData)
        getAllPatients()
      } catch(error) {
        console.log(error)
      }
    }

    const routeList = ["Patients"]
    const routeUrl = "/patients"

    useEffect(() => {
      getAllPatients()

      setTableFields(initialTableFields)
      setModalFields(initialModalFields)
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
          handleSubmit={handleSubmit}
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