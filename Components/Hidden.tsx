import Link from 'next/link'
import React from 'react'

interface HiddenProps {
  estimatedCost: number
}

const Hidden: React.FC<HiddenProps> = ({ estimatedCost }) => {
  return (
    <div>
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Estimated Project Cost
        </h2>
        <p className="text-lg text-indigo-600">
          रु. {estimatedCost.toFixed(2)}
        </p>
        <div className="mt-2">
          <Link
            href="/contact"
            className="w-full mt-2 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hidden
