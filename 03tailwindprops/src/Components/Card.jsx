import React from 'react'

function Card({username}) {
  console.log(username);
  
  return (
<div className="bg-black  dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">{username}</h3>
  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
  )
}

export default Card
