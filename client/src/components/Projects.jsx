import React from 'react'

const Projects = () => {
  return (
    <div id="works" className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-10">

        <div className="flex flex-col gap-3 items-center pb-10">
          <h1 className="text-indigo-600 font-bold">PORTFOLIO</h1>
          <h1 className="text-3xl">Works & Projects</h1>
          <p className="w-1/2 text-center text-gray-400">
            I help designers, small agencies and businesses bring their ideas to
            life. Powered by Figma, VS Code and coffee, I turn your requirements
            into a well-designed websites
          </p>
        </div>

        <div className="p-5 sm:p-0 flex flex-wrap justify-between">

        <div class="w-full md:w-1/2 xl:w-1/3 px-4 transition-all hover:scale-110">
            <div class="bg-white overflow-hidden mb-10">
            <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  alt="image"
                  class="w-full"
                  />
            </div>
        </div>

        <div class="w-full md:w-1/2 xl:w-1/3 px-4 transition-all hover:scale-110">
            <div class="bg-white overflow-hidden mb-10">
            <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  alt="image"
                  class="w-full"
                  />
            </div>
        </div>

        <div class="w-full md:w-1/2 xl:w-1/3 px-4 transition-all hover:scale-110">
            <div class="bg-white overflow-hidden mb-10">
            <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  alt="image"
                  class="w-full"
                  />
            </div>
        </div>


        </div>
      </div>
    </div>
  )
}

export default Projects