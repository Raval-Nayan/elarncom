import React from 'react'
import CourceCard from '../courcecard/CourceCard'

const Wishlist = () => {

  const data = localStorage.getItem('courseCardData');
  const cardData =JSON.parse(data)
  console.log(cardData)

// Check if data exists
if (cardData) {
  console.log('Data found:', cardData);
  // Data exists, do something with it
  return(
<div className='row'>
{
  cardData.map((item)=>{
    return(
      <div className='col-12 col-md-4'>
      <CourceCard title={item.title} dec={item.dec} lessons={item.lessons} students={item.students}></CourceCard>
      </div>
    )
  })
}

</div>
  )
 
} else {
  // Data doesn't exist
  return <div>No data found in local storage</div>
  
}
 
}

export default Wishlist