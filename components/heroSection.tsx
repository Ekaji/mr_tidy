import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative bg-[url('https://res.cloudinary.com/tacafrica/image/upload/v1679325020/IMG_9738_bryfni.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-white/25"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center sm:text-left">
                <h1 className="font-extrabold text-5xl text-white">
                    {/* MrTidy Nigeria */}
                    <strong className="text-4xl block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 ">
                        Towards a Cleaner and Safer Environment
                    </strong>
                </h1>

                <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
                    We are a leading waste management company in Nigeria,
                                        dedicated to providing efficient and reliable services
                                        to residential, commercial and industrial clients.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-center">
                   
                    <a href="#" className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
