import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>A1Agriculture ! The Agri world...</title>
        <meta name="description" content="A1Agriculture ! welcome to the agri world" />
        <link rel="icon" href="/favicon.png" />
      </Head>

     <div>
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Welcome to the Agriworld</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
    </div>
    
    <div className="flex flex-wrap -m-4 justify-center">
      <div className="xl:w-1/3 md:w-2/5 p-4 ">
      <Link href={'/post'}>
        <div className="border border-gray-200 p-6 rounded-lg bg-gradient-to-r from-purple-700 to-pink-600 cursor-pointer">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 className="text-lg text-white font-semibold title-font mb-2">Recent Post</h2>
          <p className="leading-relaxed text-base text-white">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
        </Link>
      </div>
      <div className="xl:w-1/3 md:w-2/5 p-4">
      <Link href={'/quiz'}>
        <div className="border cursor-pointer border-gray-200 p-6 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-500">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <h2 className="text-lg text-white font-semibold title-font mb-2">Quiz</h2>
          <p className="leading-relaxed text-base text-white">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
        </Link>
      </div>
      <div className="xl:w-1/3 md:w-2/5 p-4">
      <Link href={'/books'}>
        <div className="border cursor-pointer border-gray-200 p-6 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 className="text-lg text-white font-semibold title-font mb-2">Review Books</h2>
          <p className="leading-relaxed text-base text-white">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
        </Link>
      </div>
      <div className="xl:w-1/3 md:w-2/5 p-4">
      <Link href={'/404'}>
        <div className="border cursor-pointer border-gray-200 p-6 rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
            </svg>
          </div>
          <h2 className="text-lg font-semibold  title-font mb-2 text-white">Current updates</h2>
          <p className="leading-relaxed text-base text-white">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
        </Link>
      </div>

      <div className="xl:w-1/3 md:w-2/5 p-4">
      <Link href={'/profile'}>
        <div className="border cursor-pointer border-gray-200 p-6 rounded-lg bg-gradient-to-tl  from-purple-500 to-pink-500">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </div>
          <h2 className="text-lg text-white font-semibold title-font mb-2">My Test Analysis</h2>
          <p className="leading-relaxed text-base text-white">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
        </Link>
      </div>
      <div className="xl:w-1/3 md:w-2/5 p-4">
      <Link href={'/post'}>
        <div className="border cursor-pointer border-gray-200 p-6 rounded-lg bg-gradient-to-tr from-indigo-600 to-blue-500">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2 className="text-lg text-white font-semibold title-font mb-2">Liked Blogs</h2>
          <p className="leading-relaxed text-base text-white">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
        </Link>
      </div>
    </div>
  </div>
</section>
     </div>
    
    </div>
  )
}
