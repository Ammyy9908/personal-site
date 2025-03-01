import React from 'react'

const experiences = [
  {
    company: "KodNest Pvt Ltd",
    role: "Backend Engineer",
    period: "November 2022–today"
  },
  {
    company: "Phirlo",
    role: "Backend Engineer",
    period: "July 2021–December 2022"
  }
]

function ExperienceItem({ experience }) {
  return (
    <div className="py-8 border-t border-gray-200">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium text-gray-900">{experience.company}</h3>
        <p className="text-lg text-gray-600">{experience.role}</p>
        <p className="text-base text-gray-500">{experience.period}</p>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section className="py-20" id='experience'>
      <div className="w-[85%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <a href="/cv.pdf" download>
              <button className=' bg-black text-white px-4 py-2 rounded mt-6'>
                Download Resume
              </button>
            </a>
          </div>
          <div className="flex flex-col">
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience