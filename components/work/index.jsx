import React from 'react'
import Link from 'next/link'

const skills = [
  {
    title: "Backend Development",
    category: "API Gateway",
    image: "https://plus.unsplash.com/premium_vector-1689096757560-314e2a7a2fe5?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-emerald-50",
    href: "/work/api-gateway"
  },
  {
    title: "Microservices Architecture",
    category: "Backend Development",
    image: "https://plus.unsplash.com/premium_vector-1689096833880-42980c252802?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-blue-50",
    href: "/work/microservices-architecture"
  },
  {
    title: "Database Optimization",
    category: "Backend Development",
    image: "https://plus.unsplash.com/premium_vector-1722172771884-4113dbdb2caf?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-slate-50",
    href: "/work/database-optimization"
  },
  {
    title: "Cloud Infrastructure",
    category: "Backend Development",
    image: "https://plus.unsplash.com/premium_vector-1736170933165-8d96f01f4676?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-gray-50",
    href: "/work/cloud-infrastructure"
  }
]

function SkillCard({ skill }) {
  return (
    <Link 
      href={skill.href} 
      className="group block overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 bg-gray-100 relative hover:bg-black hover:text-white"
    >
      <div className="h-[120px] w-full relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out z-10" />
        <img 
          src={skill.image} 
          alt={skill.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-white">{skill.title}</h3>
        <p className="text-sm text-gray-500 group-hover:text-white">{skill.category}</p>
      </div>
    </Link>
  )
}

function Skills() {
  return (
    <section className="py-20" id='skills'>
      <div className="w-[85%] mx-auto">
        <h2 className="mb-12 text-2xl font-medium">Key Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills