/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function About() {
  return (
    <section className='flex items-center min-h-[60rem]'>
  <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 ">
    <div className="flex flex-wrap lg:flex-row-reverse items-center mx-auto max-w-7xl">
      <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
        <div>
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

            <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <img className="lg:absolute left-20 -top-60 object-cover object-center mx-auto rounded-lg shadow-2xl aspect-auto bg-slate-500 h-[30rem] " alt="hero" src="/Mr Tidy SM Post 1a.jpg" />
              <img className="hidden lg:block absolute right-25 object-cover object-center mx-auto rounded-lg shadow-2xl aspect-auto bg-slate-500 h-[30rem] " alt="hero" src="/Mr Tidy SM Post 1.jpg" />
            </div>
            
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pr-24 xl:pl -24 md:mb-0 xl:mt-0">
                      <h1
                        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl mb-5"
                        >
                        About Us
                        </h1>
                      <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
                      A team of dedicated professionals committed to leading the change in effective environment and waste management practices in Nigeria through: 
                      Research | Data | Advocacy | Innovation
                      </p>
      </div>
      
                  
    </div>
  </div>
</section>
  )
}
