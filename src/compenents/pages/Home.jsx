import React from 'react'
import Ajout from './Ajout';
// import Liste from './Liste';


function Home() {
  return (
    <div className='container bg-dark p-4 mt-5'>
      <div className="mt-5 text-center">
        <h2 className='text-white'>-TO-DO NOW-</h2>
        <hr className='text-secondary'/>
      </div>

      <Ajout />
      {/* <Liste /> */}
    </div>
  )
}

export default Home
