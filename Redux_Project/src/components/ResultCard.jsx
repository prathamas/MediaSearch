import React, { use } from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({item}) => {

  const dispatch=useDispatch()
  
  const addToCollection=(item)=>{
      dispatch(addCollection(item))
      dispatch(addedToast())
  }

  return (
    <div className='w-[17vw] relative h-64 bg-white rounded-xl overflow-hidden'>
        <a target='_blank' href={item.url} className='h-full'>
            {item.type=='photos'?<img className='h-full w-full object-cover object-center' src={item.src} alt="" />:''}
            {item.type=='videos'?<video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video>:''}
            {item.type=='gif'?<img className='h-full w-full object-cover object-center' src={item.src} alt="" />:''}
        </a>
      <div id='bottom' className='flex justify-between gap-3 items-centre w-full px-4 py-6 absolute bottom-0 text-white'>
        <h2 className='text-sm font-semibold capitalize h-10 overflow-hidden'>{item.title}</h2>
        <button onClick={()=>addToCollection(item)}
         className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'>Save</button>
      </div>
    </div>
  )
}

export default ResultCard
