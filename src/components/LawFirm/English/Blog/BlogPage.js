import React from 'react';
import BlogNav from '../Navigation/BlogNav';
import MobileNav from '../Navigation/MobileNav';
import CategoryNav from './CategoryNav';
import Footer from '../Footer/Footer';


function MobileBlog(){
    return(
<div className="App">
             <MobileNav/>
             <h1 className="text-center p-5">Blog</h1>
             <CategoryNav/>
             <Footer/>
             </div>
    )
} 

export default function Blog() {
         let width = window.innerWidth; 
         if(width > 768){
           return (
             <div className="App">
             <BlogNav/>
             <h1 className="text-center p-5">Blog</h1>
             <CategoryNav/>
             <Footer/>
             </div>
           );
         }
         else{
           return <MobileBlog/>
         }
   
}
