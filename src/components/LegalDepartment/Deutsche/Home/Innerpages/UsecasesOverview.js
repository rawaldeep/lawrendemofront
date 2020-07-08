import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import BlogNav from '../../Navigation/BlogNav';
import Footer from '../../Footer/Footer';
import Clientimage from '../Clientimage';

const appUrl = "https://lawra.be/wp-json/wp/v2/";

export default function UsecasesOverview() {
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
    let useCaseLoop = state.usecases.map((usecase, index) => {
        
        return (
            <>
            <div className="row"  key={index}>
            <div className="col-md-12 col-sm-1 blogoverview ">
        <div className="item-box-blog d-flex">
          <div className="col-md-5 item-box-blog-image">
            {/*Date*/}
            {/* <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">{BlogMonth},</span> <span className="day">{BlogDay}</span> </div> */}
            {/*Image*/}
            <figure> 
            <Clientimage imageId={usecase.featured_media} />
               </figure>
          </div>
          <div className="col-md-6 item-box-blog-body">
            {/*Heading*/}
            <div className="item-box-blog-heading">
            <Link to={`/usecase/en/${usecase.id}`}>
                <h5 dangerouslySetInnerHTML={{ __html: usecase.title.rendered }} />
                </Link>
            </div>
            {/*Data*/}
            {/* <div className="item-box-blog-data" style={{padding: 'px 15px'}}>
              <p>-{post.acf.blog_author}</p>
            </div> */}
            {/*Text*/}
            <div className="item-box-blog-text" dangerouslySetInnerHTML={{ __html: usecase.acf.excerpt }} />
            <div className="mt">  <Link to={`/usecase/en/${usecase.id}`} className="btn read">Read more...</Link> 
            </div>
            {/*Read More Button*/}
          </div>
        </div>
      </div>
            </div>
         </>
        )
        
        });
    
        if (!state.loading) {
          if(state.usecases.length){
            return (
                <>
                <BlogNav/>
                
            <div className="container usecaseoverview">
            <h1 className="display-4 text-center">Usecases</h1>
               { useCaseLoop}
            </div>
            <Footer/> 
            </>
            )
        }else{
        return (
          <>
          <BlogNav/>
          <div className="container">
              <h3 className="display-1 text-center p-5 mt-4">Keine Anwendungsfälle</h3>
          </div>
           <Footer/>
           </>
        )
        }
        }
        return null
}
