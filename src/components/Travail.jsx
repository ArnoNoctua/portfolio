import React from 'react'
import voyage from '../assets/voyage.jpg'
import gestion from '../assets/gestion.jpg'
import vin from '../assets/vin.jpg'

const Travail = () => {
  return (
    <div name='travail' className='w-full md:h-screen text-[#000000] bg-[#ffffff]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#000000] border-purple-600'>Projets</p>
                <p className='py-6'>// Mes projets : </p>
                <p className='font-bold'>Template agence de voyage :</p>
                <p className=''>Template React 100% responsive. Utilisé pour des sites web simple comme une page de restaurant ou une agence de voyage. </p>
                <p className='font-bold mt-6'>Blog (vin) NextJs, React et GraphQL :</p>
                <p className=''>Application de blog complète NextJs, React et GraphQL qui utilise GraphCMS pour publier le contenu. Il est possible de faire des commentaires, choisir des articles vedettes
                et d'avoir différentes publications avec différents auteurs dans différentes catégories. Le CSS est fait avec SASS et Tailwind.</p>
                <p className='font-bold mt-6'>Gestion client :</p>
                <p className=''>Application simple ASP.NET/MVC de gestion de clients qui sollicite une base de données SQL. Elle permet d'afficher tous les clients, de chercher un client,
                d'ajouter un client et de supprimer un client. Vous pouvez tester l'application dans Visual Studio.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div
                style={{backgroundImage: `url(${voyage})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Template agence
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://template-voyage.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/ArnoNoctua/templateVoyage'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                style={{backgroundImage: `url(${vin})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Blog Vin Arnaud
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://vin-arnaud.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/ArnoNoctua/vinArnaud'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                style={{backgroundImage: `url(${gestion})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Gestion Client
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/ArnoNoctua/GestionClient'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Travail