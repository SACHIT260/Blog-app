// import { useState } from "react";
// //we pass references of handle click
// //name stores the value,setName is use to update the value
// const Home = () => {

//     const [name,setName]=useState('mario');
//     const [age,setAge]=useState(10);


//     const handleClick=()=>{
//         // console.log('hello,ninja',e);
//         setName('luigi');
//         setAge(34);
//     }
//     // const handleClickAgain=(name,e)=>{
//     //     console.log('hello,'+ name,e.target);
//     // }
//     return ( 
//         <div className="Home">
//             <h2>Homepage</h2>
//             <p>{name} is {age} years old</p>
//             <button onClick={handleClick}>Click me</button>
//             {/* <button onClick={(e)=>handleClickAgain('Mario',e)}>Click me again</button> */}
//         </div>
//      );
// }
 
// export default Home;



//Blog Website
// import { useState,useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch.js";
import { useEffect, useState } from "react";
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';


const Home=()=>{

    // const [blogs,setBlogs]=useState([
    //     {title:'My new Wbsite',body:'lorem ipsum...',author:'mario',id:1},
    //     {title:'Welcome party',body:'lorem ipsum...',author:'yioshi',id:2},
    //     {title:'Wev div top tips',body:'lorem ipsum...',author:'mario',id:3}
    //   ]);

    // const [blogs,setBlogs]=useState(null);
    // const [isPending,setIsPending]=useState(true);
    // const [error,setError]=useState(null);
      // const [name,setName]=useState('mario');

      // const handleDelete=(id)=>{
      //   const newBlogs=blogs.filter(blog => blog.id!==id);
      //   setBlogs(newBlogs);
      // }
      // useEffect(()=>{
      //   console.log('use effect is running');
      // },[name]);

      // useEffect(()=>{
      //   fetch('http://localhost:8000/blogs')
      //   .then(res=>{
      //     return res.json();
      //   })
      //   .then(data=>{
      //     // console.log(data);
      //     setBlogs(data);
      //   })
      // },[]);


      // useEffect(()=>{
      //   setTimeout(()=>{fetch('http://localhost:8000/blogs')
      //   .then(res=>{
      //     if(!res.ok){
      //       throw Error('could not fetch the data for that resource');
      //     }
      //     return res.json();
      //   })
      //   .then(data=>{
      //     // console.log(data);
      //     setBlogs(data);
      //     setIsPending(false);
      //     setError(null);
      //   })
      //   .catch(err=>{
      //     // console.log(err.message)
      //     setIsPending(false);
      //     setError(err.message);
      //   })
      //   },1000);
      // },[]);

      const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs')
    return(
      
        <div className="home">
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          { blogs && <Bloglist blogs={blogs} title="All blogs" />}
           {/* { blogs && <Bloglist blogs={blogs} title="All blogs" handleDelete={handleDelete}/>} */}
            {/* <Bloglist blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's blogs"/> */}
            {/* <button onClick={()=>setName('luigi')}>Change Nmae</button> */}
            {/* <p>{name}</p> */}
        </div>
        
    );
}
export default Home;
