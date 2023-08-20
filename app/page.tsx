"use client"
import { } from 'next/font/google'
import { BasicInfo } from "@/containers/BasicIntro/BasicIntro";
import { About } from "@/containers/About/About";
import { TechStack } from "@/containers/TechStack";
import { Nuggets } from "@/containers/Nuggets";
import { Blogs } from "@/containers/Blogs";
import { Contact } from "@/containers/Contact";

import Header from '@/components/Header'
import Footer from '@/components/Footer'



export default function Page() {

  return (
    <>
      <Header />
      <BasicInfo />
      <About />
      <TechStack />
      <Nuggets />
      {false && <Blogs />}
      <Contact />
      <Footer />
    </>
  );
}


// const App = ({ Component, pageProps }) => {
//   return <Component {...pageProps} />;
// };

// export default App;