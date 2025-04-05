import React from 'react'

function Card({cardTxt}) {
  return (
    <div>
      <div className="w-72 h-auto rounded-xl shadow-lg bg-white overflow-hidden mx-auto mt-8">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="rounded-t-xl w-full"
        />
        <div className="glass py-4 px-5 bg-gradient-to-r from-purple-500 to-indigo-500 text-center">
          <h1 className="font-bold font-mono text-xl text-white">
            {cardTxt}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Card
