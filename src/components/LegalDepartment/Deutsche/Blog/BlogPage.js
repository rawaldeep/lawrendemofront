import React from 'react';
import BlogNav from '../Navigation/BlogNav'
import CategoryNav from './CategoryNav';
import Footer from '../Footer/Footer';

export default function Blog() {
    return (
        <div className="App">
            <BlogNav/>
            <h1 className="text-center p-5">Blog</h1>
            <CategoryNav/>
            <Footer/>
        </div>
    )
}
