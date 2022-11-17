import React from 'react'

const About = () => {
  return (
    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
      <div
        className="bg-white pb-40 flex flex-col-reverse lg:flex-row items-center gap-20"
      >

        <div className="flex flex-col gap-3 pt-10 max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
          <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
          <h1 className="text-3xl font-medium">Better Design</h1>
          <h1 className="text-3xl font-medium">
            Better Experience
          </h1>
          <p className="text-gray-400">
            I design and build digital products. I'm also a multi-disciplinary
            maker with over 10 years of experiences in wide range of design
            disciplines.
          </p>
          <h2 className="text-gray-400 font-medium">HTML</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Javascript</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">React</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About