import React from 'react'

function AvatarModel({ isOpen, onClose }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Create New Avatar</h2>
        <p className="text-sm mb-4 text-gray-600">This is just a mock UI.</p>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Close
        </button>
      </div>
    </div>
  )
}

export default AvatarModel