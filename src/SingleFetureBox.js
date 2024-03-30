import React from 'react'

import './Component/Layout/singleproduct.css'
const SingleFetureBox = ({Icon ,title ,dec}) => {
  return (
    <div className='car d-flex flex-column gap-2 text-start shadow rounded p-4 '>
  <div>  <Icon className='display-4 py-2' /></div>
    <h5 className=''>{title}</h5>
    <p>{dec}</p>
    </div>
  )
}

export default SingleFetureBox