import React from 'react'
import { Check, XCircle } from 'lucide-react';

const ModalGen = ({ info, isOpen, setOpen, Title, Description, ButtonLabel, isSuccess, onConfirm, ButtonLabelTrue2, ButtonLabell  }) => {
    const handleConfirm = () => {
        onConfirm(); // Llama a la función `onConfirm` pasada como prop
        setOpen(false); // Cierra el modal después de ejecutar la acción
      };
  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full  sm:mx-0 sm:h-10 sm:w-10">
              {isSuccess ? <Check className="h-10 w-10 p-1 text-green-600 bg-green-100 rounded-full" aria-hidden="true" /> : <XCircle className="h-10 w-10 p-1 text-red-600 rounded-full bg-red-100" aria-hidden="true" />}
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">{Title}</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{Description}</p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-${isSuccess ? 'blue' : 'red'}-500 text-base font-medium text-slate-200 hover:bg-${isSuccess ? 'green' : 'red'}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${isSuccess ? 'green' : 'red'}-500 sm:ml-3 sm:w-auto sm:text-sm`}
              onClick={handleConfirm}
            >
              {ButtonLabel}
            </button>
            <button
              type="button"
              className={`mt-3 w-full ${ButtonLabelTrue2 ? 'inline-flex' : 'hidden'} justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm`}
              onClick={() => setOpen(false)}
            >
               {ButtonLabell}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalGen;