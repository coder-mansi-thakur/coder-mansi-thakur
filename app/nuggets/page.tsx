'use client'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Nuggets from "@/containers/NuggetContainer"


export default function Page() {
  return (
    <>
      <Header isLoggedIn={false}/>
      <Nuggets />
      <Footer />
    </>
  )
}