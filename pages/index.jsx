import Head from 'next/head';
import Header from '../components/Header';


export default function Home() {
  return (
    <>
			<Head>
				<title>Joshua Liu | Home</title>
			</Head>
			<main className='bg-gray-200 min-h-screen'>
				<Header></Header>
			</main>
		</>
  )
}