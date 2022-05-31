import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#ffffff] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/28732851-55d8-4fe1-81f5-431d25bc8981" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600 text-[#000000]'>Contact</p>
                <p className='text-[#000000] py-4'>// Vous pouvez utiliser le formulaire ci-dessous pour me contacter.</p>
            </div>
            <input className='bg-purple-50 p-2' type="text" placeholder='Nom' name='nom' />
            <input className='my-4 p-2 bg-purple-50' type="email" placeholder='Email' name='Courriel' />
            <textarea className='bg-purple-50 p-2' name="message" rows="10" placeholder='Votre message'></textarea>
            <button className='text-black border-2 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center'>Envoyer</button>
        </form>
    </div>
  )
}

export default Contact