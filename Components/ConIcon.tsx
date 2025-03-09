import React from 'react'
import { FaWhatsapp } from "react-icons/fa"; // Import phone and WhatsApp icons
import { MdEmail } from "react-icons/md"; // Import email icon

const ConIcon = () => {
  return (
    <div>
       <div className="flex justify-center items-center space-x-8 mt-16">
            {/* Social media and contact icons */}
            <a
              href="https://wa.me/+447867914452?text=Hello%Are%You%Free"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl md:text-7xl text-green-500"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:info@projecthub.live"  
              className="text-5xl md:text-7xl text-red-600"
            >
              <MdEmail />
            </a>
          </div>
    </div>
  )
}

export default ConIcon
