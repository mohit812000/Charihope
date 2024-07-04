import React from 'react'

const MiniCard = ({miniData}) => {
  // console.log(miniData)
  return (
    <div className='flex minicard_div'>
        <img src={miniData.img} alt="" className='h-[90px] w-[70px] mt-2' style={{objectFit:"cover"}}/>
        <div className='text-left ms-3'>
            <h5 className='text-lg font-bold'>{miniData.title}</h5>
            <p className='text-sm'>{miniData.date}</p>
        </div>

    </div>
  )
}

export default MiniCard