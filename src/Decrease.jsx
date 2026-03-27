import React from 'react'

const Decrease = ({count,setCount,setColor}) => {
    
  return (
    <div>
      

      <button  disabled ={count<=-10}
          className="px-6 py-2 bg-red-600 text-white rounded-xl"
          onClick={() => {
            setCount(count - 1)
            setColor("text-red-600")
            

          }
          }
        >
          Decrease
        </button>
    </div>
  )
}

export default Decrease
