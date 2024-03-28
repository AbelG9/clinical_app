import React from 'react'
import { TbPencil, TbTrashX } from 'react-icons/tb';

const CustomPatientsTable = ({ fields, data, toggle, setToggle, setModalTitle, setForm, handleDelete }) => {
    return (
      <>
      {
        data && data.length > 0 ? 
        (
          <div className='px-1 md:px-16 lg:px-20'>
              <div className="flex items-center rounded-lg justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900 mb-1">
                  <div className="relative mx-auto md:ml-3">
                      <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                          </svg>
                      </div>
                      <input 
                        type="text" 
                        id="table-search-users" 
                        className="block p-1 ps-10 text-sm w-60 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Search" 
                      />
                  </div>
                  <div className="relative mx-auto md:mr-3">
                    <button 
                        data-modal-hide="default-modal" 
                        type="submit" 
                        className="flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => {
                            setToggle(!toggle);
                            setModalTitle("New patient");
                        }}
                    >
                        Save new patient
                    </button>
                  </div>
              </div>
              <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                      {
                          fields.map((field, index) => {
                              return (
                                  <th scope="col" className="px-6 py-3" key={index}>
                                      {field}
                                  </th>
                              )
                          })
                      }
                      </tr>
                  </thead>
                  <tbody>
                  {
                      data.map((patient, index) => {
                          return (
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                                  <td className="text-center">
                                      {patient.idPersons}
                                  </td>
                                  <th scope="row" className="flex items-center px-2 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                      <div className="ps-3">
                                          <div className="text-base font-semibold">{patient.name} {patient.lastname}</div>
                                          <div className="font-normal text-gray-500">{patient.email}</div>
                                      </div> 
                                  </th>
                                  <td className="px-6 py-4">
                                      {patient.gender}
                                  </td>
                                  <td className="px-6 py-4">
                                      {patient.numDocument}
                                  </td>
                                  <td className="px-6 py-4">
                                      {patient.phoneNumber}
                                  </td>
                                  <td className="px-6 py-4">
                                      <div className="flex items-center">
                                          <div 
                                              className={`${patient.status == 1 ? 'bg-green-500' : 'bg-red-600'} h-2.5 w-2.5 rounded-full me-2 `}>
                                          </div> 
                                          {patient.status == 1 ? 'Activo' : 'Inactivo'}
                                      </div>
                                  </td>
                                  <td className="px-6 pt-2 flex flex-wrap items-center justify-between">
                                      {/* <!-- Modal toggle --> */}
                                      <a 
                                          href="#" 
                                          type="button" 
                                          data-modal-show="editPatientModal" 
                                          className="justify-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                          onClick={() => {
                                            setToggle(!toggle);
                                            setModalTitle("Edit patient");
                                            setForm(patient)
                                          }}
                                        >
                                            <TbPencil size={24} />
                                      </a>
                                      <a 
                                          href="#" 
                                          type="button" 
                                          data-modal-show="deletePatientModal" 
                                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                          onClick={() => {
                                            handleDelete(patient.idPersons)
                                          }}
                                        >
                                            <TbTrashX size={24} />
                                      </a>
                                  </td>
                              </tr>
                          )
                      })
                  }
                  </tbody>
                </table>
              </div>
          </div>
          ) : (
            <div className='flex flex-col justify-center items-center'>
                <div href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">No patients data registered</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center items-center mb-4">Add some patients to show.</p>  
                    <div className='flex flex-col justify-center items-center'>
                        <button 
                            data-modal-hide="default-modal" 
                            type="submit" 
                            className="flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => {
                                setToggle(!toggle);
                                setModalTitle("New patient");
                            }}
                        >
                            Save new patient
                        </button>
                    </div>
                </div>
            </div>
          )
        }
      </>
    )
  }

export default CustomPatientsTable