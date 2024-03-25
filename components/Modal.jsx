import React from 'react'

const Modal = ({ toggle, setToggle, fields, form, handleChange }) => {
  return (
    <>
        {/* <!-- Edit user modal --> */}
        <div 
            id="editModal" 
            tabIndex="-1" 
            aria-hidden="true"
            data-modal-backdrop="static"
            className={`${!toggle && 'hidden'} fixed bg-slate-900 bg-opacity-90 z-50 flex items-center justify-center w-full overflow-x-auto overflow-y-auto inset-0 max-h-full px-auto`}
        >
            <div className="relative w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <form className="relative bg-white rounded-lg shadow dark:bg-gray-700 mx-auto w-5/6 md:w-full">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Edit
                        </h3>
                    <button 
                        type="button" 
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="editUserModal"
                        onClick={() => setToggle(!toggle)}
                    >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span 
                            className="sr-only"
                        >Close modal</span>
                    </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-6 space-y-6">
                        {/* {JSON.stringify(form)} */}
                        <div className="grid grid-cols-6 gap-6">
                            {
                                fields.map((field, index) => {
                                    return (
                                        <div className="col-span-6 sm:col-span-3" key={index}>
                                            <label 
                                                htmlFor={field.fieldName} 
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                {field.label}
                                            </label>
                                            <input 
                                                type={field.type} 
                                                name={field.fieldName} 
                                                id={field.fieldName} 
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                placeholder={field.label} 
                                                value={form[field.fieldName]}
                                                onChange={handleChange}
                                                required={true} 
                                            />
                                        </div>
                                    )
                                })
                            }
                            {/* <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="new-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                                <input type="password" name="new-password" id="new-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required="" />
                            </div> */}
                        </div>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button 
                            data-modal-hide="default-modal" 
                            type="submit" 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Save all
                        </button>
                        <button 
                            data-modal-hide="default-modal" 
                            type="button" 
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            onClick={() => setToggle(!toggle)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Modal