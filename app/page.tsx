import Counter from '@/containers/Counter';
import './globals.css'

export default function Page() {

  return (
    <>
      <h1 className="text-3xl font-bold underline" >hello</h1>
      <Counter/>
    </>
  );
}

export async function getServerSideProps() { 
      
  // Fetching data 
  const res = await fetch( 
  'https://jsonplaceholder.typicode.com/users'); 
  const data = await res.json() ; 

  // Passing data to the Product Page using props 
  return { 
      props : {data} 
  } 
} 