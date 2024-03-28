"use client"

import React, { useEffect, useState } from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import CustomPatientsTable from '@/components/patients/CustomPatientsTable'
import Modal from '@/components/Modal'
import { findAllPersons, getReniecInfo, createPatient, udpatePatient, deletePatient } from '@/services/patients'
import { toast } from 'sonner'
import Swal from 'sweetalert2'

const page = () => {
  const [patients, setPatients] = useState([])
  const [tableFields, setTableFields] = useState([])
  const [modalFields, setModalFields] = useState([])
  
  const [modalTitle, setModalTitle] = useState("")
  const [toggle, setToggle] = useState(false)

  const initialPatientData = 
    {
      idPersons: null,
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
      "id",
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

    const closeModal = () => {
      setToggle(!toggle)
      setForm(initialPatientData)
    }

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
        var response = {}
        console.log(form);
        if (form.idPersons) {
          const formUpdate =
            {
              numDocument: form.numDocument,
              email: form.email,
              phoneNumber: form.phoneNumber,
              gender: form.gender,
              documentTypeId: 1,
              userId: form.idPersons
            }
          response = await udpatePatient(formUpdate)
        } else {
          response = await createPatient(form)
        }
        if (!response.data) {
          toast.error("Data invalid")
          return
        }
    
        form.idPersons? toast.success("Data modified successfully") : toast.success("Patient saved successfully!")
        setToggle(false)
        setForm(initialPatientData)
        getAllPatients()
      } catch(error) {
        console.log(error)
      }
    }

    const handleDelete = async(id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to delete this patient?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          try {
            const response = await deletePatient(id)
            console.log(response);
            if (!response.data) {
              toast.error('It couldnt be deleted!')
            }
            toast.success('Patient deleted successfully.')
            getAllPatients()
          } catch(error) {
              console.log(error)
          }

          }
        }
      );
    }

    const routeList = ["Patients"]
    const routeUrl = "/patients"

    useEffect(() => {
      getAllPatients()

      setTableFields(initialTableFields)
      setModalFields(initialModalFields)
    }, [])

  return (
    <>
        <BreadCrumb routeList={routeList} routeUrl={routeUrl}/>
        <Modal 
          toggle={toggle} 
          closeModal={closeModal}
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
          setForm={setForm}
          handleDelete={handleDelete}
        />
    </>
  )
}

export default page