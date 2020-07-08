import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const appUrl = "https://lawra.be/wp-json/wp/v2/";


export default function UseCases() {
    const [state, setState] = useState({ 
        loading: true,
        usecases: []
     });
    useEffect(() => {
      const fetchData = async () => {
        let res = await fetch(`${appUrl}usecases`);
    let response = await res.json();
    let filter = (post) =>{
      if(post.acf.language === "English"){
        if(post.acf.website === "Legal-department"){
        return post;
        }
      }
      return
    }
    let filtered = await response.filter(filter);
    setState({
    loading: false,
    usecases: filtered
    });
      };
      fetchData();
    }, []);

    let useCaseLoop = state.usecases.slice(0, 8).map((usecase, index) => {
        
    return (
           <li key={index}>
            <Link to={`/usecase/${usecase.id}`}>
           {usecase.title.rendered}
           </Link>
           </li> 
    )
    
    });

    if (!state.loading) {
      if(state.usecases.length){
        return useCaseLoop;
    }else{
    return (
      <li>
              <Link to={`/`}>
             No Usecases
             </Link>
       </li> 
    )
    }
    }
    return null
}
