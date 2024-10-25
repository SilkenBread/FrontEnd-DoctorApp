import React from 'react'

export const FuncionsCrud = (props) => {
  return (
    <div>
        <button className=' text-white border-none p-1 rounded-md hover:bg-red-700' style={{backgroundColor: props.color}} onClick={props.functionC}>
            {props.icon}
        </button>
    </div>
  )
}
