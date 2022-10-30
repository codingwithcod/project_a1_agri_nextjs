import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import axios from 'axios';



const PostId = ({post}) => {

  const router = useRouter()
  
  useEffect(() => {
    const rukojara = async() => {
      if(post.error === true){
        await router.push('/404')
       }
    } 
    rukojara()   
   
  }, []);

  const {title, category, img1, img2, img3, home_para, para_1, para_2, para_3} = post;


  
  return (
    <div>

        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full  h-64 object-cover object-center rounded" src={img1}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed indent-10">{home_para}</p>
       
      </div>
    </div>
    <p className="leading-loose tracking-wide indent-10">{para_1}</p>
    <br />
    
    {
      (img2 !== "") ? <div className='flex justify-center mb-5'>
            <img alt="ecommerce" className="lg:w-1/2 text-center w-full  h-64 object-cover object-center rounded" src={img2}/>
            </div> 
            :
            <br/>
    }
    
    {
      (para_2 !== "") ? <p className="lleading-loose tracking-wide indent-10">{para_2}</p> : <br/>
                    
    }
    <br/>

    {
      (img3 !== "") ? <div className='flex justify-center mb-5'>
            <img alt="ecommerce" className="lg:w-1/2 text-center w-full  h-64 object-cover object-center rounded" src={img3}/>
            </div> 
            :
            <br/>
    }

    {
      (para_3 !== "") ? <p className="leading-loose tracking-wide indent-10">{para_3}</p> : <br/>
                    
    }





  </div>
</section>



    </div>
  )
};


export async function getServerSideProps({params:{post_slug}}){

  // const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/post/${post_slug}`)

  // const post = await res.json();

  
  
  const resAxios = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/admin/post/${post_slug}`)
  const post = await resAxios.data

  return{
    props:{
      post
    }
  }
}


export default PostId