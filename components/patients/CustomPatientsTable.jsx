import React from 'react'

const CustomPatientsTable = ({ fields, data, toggle, setToggle }) => {
    return (
      <>
          <div className='px-1 md:px-16 lg:px-20'>
              <div className="flex items-center rounded-lg justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900 mb-1">
                  <div className="relative ml-3">
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
                                      {index + 1}
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
                                      {patient.num_documento}
                                  </td>
                                  <td className="px-6 py-4">
                                      {patient.phone_number}
                                  </td>
                                  <td className="px-6 py-4">
                                      <div className="flex items-center">
                                          <div 
                                              className={`${patient.status == 1 ? 'bg-green-500' : 'bg-red-600'} h-2.5 w-2.5 rounded-full me-2 `}>
                                          </div> 
                                          {patient.status == 1 ? 'Activo' : 'Inactivo'}
                                      </div>
                                  </td>
                                  <td className="px-6 py-4">
                                      {/* <!-- Modal toggle --> */}
                                      <a 
                                          href="#" 
                                          type="button" 
                                          data-modal-show="editPatientModal" 
                                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                          onClick={() => setToggle(!toggle)}
                                      >
                                          Edit
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
      </>
    )
  }

export default CustomPatientsTable