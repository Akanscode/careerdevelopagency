import React from 'react'
 import { servicedata } from './data';

import { HiArrowLongRight } from "react-icons/hi2";

 const ServicesSection = () => {
   return (
       <div>
           <div className=' container mx-auto w-full'>
               <div className='relative py-16 lg:py-20 mx-auto'>
                   <div className="flex justify-center items-center mt-10 md:mt-20">
                       <div>
                           <h3 className="font-bold text-center text-xl md:text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 uppercase ">
                           what i do
                       </h3>
                       <div className="mt-1">
                           <span className="inline-block w-20 h-1 bg-indigo-600 rounded-full md:w-32 lg:w-40"></span>
                           <span className="inline-block w-3 h-1 ml-1 bg-indigo-600 rounded-full"></span>
                           <span className="inline-block w-3 h-1 ml-1 bg-indigo-600 rounded-full"></span>
                       </div>
                       </div>
                       </div>
                       <div className='grid gap-6 md:mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-4'>
                           {servicedata.map((services) => (
                               <div key={services.id}>
                                   <div className='group space-y-6 border border-gray-100 rounded-3xl bg-white p-5 overflow-hidden text-center shadow-2xl shadow-gray-600/10'>
                                       <img
                                           className="mx-auto bg-cover "
                                           src={ services.cover}
                                           alt="illustration"
                                           loading="lazy"
                                           width={80}
                                           height={80}
                                           
                                           />
                                        <h4 className="text-2xl font-semibold text-gray-800">{ services.title}</h4>
                                       <p className=' text-justify font-normal text-sm max-w-md'>{services.text}</p>
                                       <a
                                           href="#"
                                           className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
                                       >
                                           <HiArrowLongRight className=" text-indigo-600 w-6 h-px"/>
                                       </a>
                                   </div>
                                  
                                   
                               </div>
                           ))}
                       </div>
                   </div>
               </div>
           
     </div>
   )
 }
 
 export default ServicesSection