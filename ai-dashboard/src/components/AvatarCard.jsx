import React from 'react'

function AvatarCard({ name, avatar }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center transition hover:scale-105 hover:md:shadow-2xl">
      <img src={avatar} alt={name} className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <button className="mt-3 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-800">
        Edit
      </button>
    </div>
  )
}

export default AvatarCard