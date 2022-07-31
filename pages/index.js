import Head from 'next/head'
import Image from 'next/image'
import AffortlessProcess from '../Components/AffortlessProcess'
import Business from '../Components/Business'
import Faq from '../Components/Faq'
import Features from '../Components/Features'
import InstentSetup from '../Components/instentSetup'
import Integration from '../Components/Integration'
import Landing from '../Components/Landing'
import Navbar from '../Components/Navbar'
import Testimonial from '../Components/Testimonial'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Influitive landing page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main>
      <Navbar/>
      <Landing/>
      <Features/>
      <Integration/>
      <Business/>
     <InstentSetup/>
     <AffortlessProcess/>
     <Faq/>
     <Testimonial/>
    </main>

    
    </div>
  )
}
