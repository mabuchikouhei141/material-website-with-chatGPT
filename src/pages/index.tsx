import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import "@/style/globals.css"
import Main from '@/components/Main'
import Footer from '@/components/Footer'

function index() {
  return (
    <>
    <Header />
    <Main />
    <Sidebar />
    <Footer />
    </>
  )
}

export default index