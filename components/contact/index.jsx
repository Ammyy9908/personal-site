import React from 'react'
import Link from 'next/link'

function ContactSection() {
  return (
    <section className="py-32 md:py-32 bg-gray-100" id='contact'>
      <div className="w-[85%] mx-auto md:w-[90%] lg:w-[80%] xl:w-[70%]">
        <div className="rounded-3xl py-32 md:py-32 relative group overflow-hidden ">
          <div className="max-w-3xl mx-auto text-center space-y-8 md:space-y-12">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              Want to debug the world together?
              <br />
              Or at least optimize our workflows?
            </h2>
            <div className="flex items-center justify-center">
              <Link
                href="mailto:sb78639@gmail.com"
                className="group inline-flex items-center text-lg md:text-xl hover:opacity-70 transition-opacity"
              >
                <span className="mr-2">🔍</span>
                <span className="relative">
                  Send me a pull request (aka email)
                  <span className="absolute left-0 right-0 bottom-0 border-b border-gray-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </Link>
            </div>
          </div>
         
        </div>
        
      </div>
     
    </section>
  )
}

export default ContactSection