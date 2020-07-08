import React, {useState, useEffect} from 'react';
import Test from './Test';
const appUrl = "https://lawra.be/wp-json/wp/v2/";

export default function CategoryNav() {
    const [state, setState] = useState({
        loading: true,
        categories: [],
        activeCategory: 'All'
      })
    
    
      useEffect(() => {
        const fetchData = async () => {
          let res = await fetch(`${appUrl}blog`);
      let response = await res.json();
      let filter = (post) =>{
        if(post.acf.language === "Français"){
          return post;
        }
        return
      }
      let filtered = await response.filter(filter);
      filtered.map(item => {
        if(state.categories.indexOf(item.acf.blog_category) === -1){
          state.categories.push(item.acf.blog_category)
        }
      });
      setState({ ...state,
        loading: false
        });
    };
        fetchData();
      }, []);
      const handleclick = e =>{
          document.querySelector("li.active").classList.remove("active");
          e.currentTarget.classList.add("active");
          const triggercategory = e.currentTarget.innerText;
          setState({ ...state,
            activeCategory: triggercategory
            });
      }
      const {loading, categories, activeCategory} = state;
      if(!loading){
    return (
        <div className="pb-4 mb-4">
            <ul className="categorynav">
            <li className="active" onClick={handleclick}>Alle</li>
           {categories.map( (category, index) => {
               return(<li onClick={handleclick} key={index}>{category}</li>)
           })} 
           </ul>
           <Test active={activeCategory}/>
        </div>
    )
      }
      return null
}
