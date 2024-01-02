'use client'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '@/layout';

import DailyProblems from "@/containers/DailyProblems";

export default function Problems() {

  return (
    <Layout>
      <DailyProblems/>
    </Layout>
  )

}