import React from 'react'

function SponsorCard({ img, name, handle, gradient }) {
  return (
    <>
      {' '}
      <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto ">
    <img src="https://picsum.photos/200/300?image=0" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
   </article>
    </>
  )
}

export default SponsorCard;
