import React from 'react'

const Increase = ({count,setCount,setColor}) => {
  return (
    <div>
       <button disabled={count === 10}
          className="px-6 py-2 bg-green-600 text-white rounded-xl"
          onClick={() => {
            setCount(count + 1);
            setColor("text-green-600");
          }}
        >
          Increase
        </button>
    </div>
  )
}

export default Increase
