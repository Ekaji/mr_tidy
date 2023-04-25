/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { images } from '../api/galleryImages';

const ImageGallery = () => {
    return (
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Explore our Albums</h1>
            <p className="mt-4 max-w-xl text-gray-500 lg:text-2xl sm:text-xl sm:leading-relaxed">Browse individual folders to explore all photos within. Feel free to download:) </p>
          </div>
          <div className='lg:mx-auto'>
            <div className="flex flex-wrap -m-4 mx-auto">
              {
                    images.map(({ title, slug, displayImage, date, images}) => (
                      <div key={title} className="lg:w-1/3 w-full  p-1 mb-8">
                      <a href={`/events/${slug}`}>
                          <div className="flex flex-col lg:w-11/12 shadow-md hover:shadow-xl relative">
                              <img alt={ title } className=" inset-0 h-[250px] p-4 pb-0 object-cover object-center" src={images[0].src} />
                              {/* <div className='absolute h-[234px] w-11/12 top-4 left-4 hover:bg-slate-600/60'>
                                <span className='absolute top-2/4 left-2/4 -mt-[17px] -ml-[50px] '>
                                  <p className='hidden hover:absolute hover:text-gray-700 hover:bg-white'>see photos</p>
                                </span>
                              </div> */}
                              <div className="px-8 pt-8 w-full text-gray-700 h-[150px] ">
                                  <h1 className="title-font text-sm font-bold mb-3">{ title }</h1>
                                  <p className='mb-1 text-xs'>{ date }</p>
                              </div>
                          </div> 
                      </a>
                    </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
  );
}

export default ImageGallery;