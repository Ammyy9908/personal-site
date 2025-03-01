import React from 'react'
import Link from 'next/link'

const mainLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/ammyy9908' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/sumitbighaniya' }
]

function FooterLink({ href, children }) {
  return (
    <Link 
      href={href}
      className="text-gray-600 hover:text-gray-900 transition-colors"
    >
      {children}
    </Link>
  )
}

function Footer() {
  return (
    <footer className="py-12 border-t border-gray-100">
      <div className="w-[85%] mx-auto">
        {/* Top Navigation */}
        <nav className="flex flex-col md:flex-row justify-between gap-8">
          {/* Main Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {mainLinks.map((link) => (
              <FooterLink key={link.name} href={link.href}>
                {link.name}
              </FooterLink>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {socialLinks.map((link) => (
              <FooterLink key={link.name} href={link.href}>
                {link.name}
              </FooterLink>
            ))}
          </div>
        </nav> 
      
      </div>
    </footer>
  )
}

export default Footer