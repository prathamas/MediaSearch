import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection,removeToast } from '../redux/features/collectionSlice'

const CollectionPage = () => {
  const collection =useSelector(state=>state.collection.items)
  const dispatch=useDispatch()  

    const clearFromCollection=(item)=>{
          dispatch(clearCollection(item))
          dispatch(removeToast())
      }
  return (
    <div className='overflow-auto px-10 py-8'>
      <div className='flex justify-between mb-6'>
        <h2 className='text-3xl font-medium pt-2'>
          Your Collection</h2>
        <button onClick={()=>{
          clearFromCollection()
        }}
         className='active:scale-95 transition cursor-pointer bg-red-700 px-5 py-2 text-base font-medium rounded'>Clear Collection</button>
      </div>
      <div className='flex justify-start w-full flex-wrap gap-6  '>
      {collection.map((item,idx)=>{
          return <CollectionCard key={idx} item={item}/>
      })}
    </div>
    </div>
  )
}

export default CollectionPage
