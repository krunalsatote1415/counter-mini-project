import React from 'react'

const Reset = ({count,setCount,setColor}) => {
  return (
    <div>
        <button
          className="px-6 py-2 bg-yellow-500 text-white rounded-xl"
          onClick={
            () =>{ setCount(0);
            setColor("text-black")
          }}
        >
          Reset
        </button>
    </div>
  )
}

export default Reset
