/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  concurrentFeatures: true,
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'imgix',
    path: '/',
  }
}