import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#ffffff]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-purple-600'>Bonjour, je m'appelle</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#000000]'>Arnaud Caouette.</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#545658]'>Voici mon portfolio.</h2>
        <p className='text-[#000000] py-4 max-w-[700px]'>Au plaisir de travailler avec vous.</p>
        <div>
          <Link to="travail">
          <button href="travail" className='text-black-600 group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-200 hover:opacity-100'>
            Voir mes projets 
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3 '/>
          </span>
          </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home