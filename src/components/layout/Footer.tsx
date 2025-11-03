'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock, ShieldCheck, BadgeCheck, Star } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Botox & Anti-Wrinkle', href: '/services/botox' },
      { name: 'Dermal Fillers', href: '/services/fillers' },
      { name: 'Vitamin Infusions', href: '/vitamin-infusions' },
      { name: 'Skin Treatments', href: '/services/skin-treatments' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Testimonials', href: '/#testimonials' },
      { name: 'Before & After', href: '/#gallery' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Book Consultation', href: '/booking' },
      { name: 'Patient Portal', href: '/patient-portal' },
      { name: 'FAQ', href: '/faq' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Medical Disclaimer', href: '/disclaimer' },
      { name: 'Cancellation Policy', href: '/cancellation' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Logo size="md" variant="light" showText={true} />
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Enhancing your natural beauty with safe, effective treatments. 
              Dr. Ayaan and our team are committed to helping you look and feel your best.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-sage-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Rachel House, 214-218 High Road, N15 4NP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-sage-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-sage-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Hello@finelineClinic.co.uk</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-sage-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Mon-Fri: 9AM-7PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-sage-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-sage-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-sage-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-sage-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-poppins font-semibold text-lg mb-2">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest news about treatments, special offers, and beauty tips.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="btn-primary px-6 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <div className="border-t border-gray-800">
        <div className="container-max py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 rounded-xl bg-gray-800/50 p-4">
              <ShieldCheck className="text-sage-400" size={18} />
              <span className="text-sm text-gray-200">GMC Verified</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-gray-800/50 p-4">
              <BadgeCheck className="text-sage-400" size={18} />
              <span className="text-sm text-gray-200">CQC Registered</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-gray-800/50 p-4">
              <Star className="text-sage-400" size={18} />
              <span className="text-sm text-gray-200">Google Reviews</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-gray-800/50 p-4">
              <Star className="text-sage-400" size={18} />
              <span className="text-sm text-gray-200">Doctify Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} FineLine Clinic. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sage-500 transition-colors"
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 