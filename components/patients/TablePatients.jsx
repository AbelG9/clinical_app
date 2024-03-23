import React from 'react'

const TablePatients = ({fields, patients}) => {
  return (
    <>
        <div className='px-4 md:px-16 lg:px-20'>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
                  {/* <div>
                      <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                          <span className="sr-only">Action button</span>
                          Action
                          <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                          </svg>
                      </button> */}
                      {/* <!-- Dropdown menu --> */}
                      {/* <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                              <li>
                                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                              </li>
                              <li>
                                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                              </li>
                              <li>
                                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                              </li>
                          </ul>
                          <div className="py-1">
                              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                          </div>
                      </div>
                  </div> */}
                  {/* <label htmlFor="table-search" className="sr-only text-white">Search</label> */}
                  <div>
                      <div className=" ml-4 absolute inset-y-0 rtl:inset-r-0 start-0 flex p-5 ps-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                          </svg>
                      </div>
                      <input 
                        type="text" 
                        id="table-search-patients" 
                        className="block ml-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Search for patients" 
                      />
                  </div>
              </div>
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
                        patients.map((patient, index) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                                    <td className="text-center">
                                        {index + 1}
                                    </td>
                                    <th scope="row" className="flex items-center px-2 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                         {/* <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" /> */}
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
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> {patient.status}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* <!-- Modal toggle --> */}
                                        <a href="#" type="button" data-modal-show="editPatientModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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

export default TablePatients