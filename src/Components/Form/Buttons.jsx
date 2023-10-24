import React from 'react'

const Buttons = ({active,setActive,size}) => {

  const nextHandler = ()=>{
    if(active<size-1){
      setActive(active+1)
    }
  }

  const backHandler = ()=>{
    if(active>0){
      setActive(active-1)
    }
  }

  return (
    <div className='w-11/12 flex justify-between pl-3 font-head text-xl mt-16'>
        <button className='bg-surface p-2 rounded-full w-32 text-onSurface' onClick={backHandler}
        style={{
          visibility: (active==0)? 'hidden':'visible'
        }}
        >
            Back
        </button>
        <button className='bg-primary p-3 rounded-full w-32 text-onPrimary' onClick={nextHandler}>
            {(active==size-1)? "Submit" : "Next"}
        </button>
    </div>
  )
}

export default Buttons