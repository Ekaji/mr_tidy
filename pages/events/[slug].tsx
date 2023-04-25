/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { images } from '../api/galleryImages';

const ImageGallery = ({ post } : any) => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{post[0]?.title}</h1>
        <p className="mt-4 max-w-xl text-gray-500 lg:text-2xl sm:text-xl sm:leading-relaxed">{post[0]?.content} </p>
      </div>
        <div key={5} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-8 " >
          {post[0]?.images.map(({ src, alt }: any, i: React.Key | null | undefined) => (
            <img key={i} src={src} alt={ alt} className="w-full h-[200px] object-cover transition ease-in-out delay-150 hover:scale-[2] " />
          ))}
        </div>
      </div>
  );
}


export const getStaticProps = async ({ params } : any ) => {
  let filtered = () => {
    return images.filter((image) => {
      return image.slug === params.slug
    })
  }

  let res = filtered()
    return {
      props: {
        post : res
      },
      // revalidate: 60
    };
  };
  
export const getStaticPaths = async () => {
    const posts = images
    const paths = posts.map( image => ({ params: { slug: `${image.slug}`}})) 
    return {
      paths,
      fallback: false,
    };
  };
  


export default ImageGallery;