import React from 'react'
import { fetchGIF, fetchPhotos, fetchVideo } from './api/mediaApi'
import { ToastContainer, toast } from 'react-toastify';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <div className='min-h-screen w-full bg-gray-900 text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<CollectionPage/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
