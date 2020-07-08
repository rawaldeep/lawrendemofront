import React, {useState, useEffect} from 'react';
import Clientimage from '../Home/Clientimage';
import Footer from './Footer';
import BlogNav from '../Navigation/BlogNav';
const appUrl = "https://lawra.be/wp-json/wp/v2/";
export default function Single(props) {
  const [state, setState] = useState({
    loading: true,
    posts: []
  })

  useEffect(() => {
    const { usecaseId } = props.match.params
    const fetchData = async () => {
      let res = await fetch(`${appUrl}usecases/${usecaseId}`);
  let response = await res.json();
  setState({
  loading: false,
  posts: response
  });
    };
    fetchData();
  }, []);

  const {loading, posts} = state;
  if(!loading){
    return (
        <>
        <BlogNav/>
        <div className="container-fluid usecases">
        <div className="container">
        <h1 className="display-4 text-center p-4" dangerouslySetInnerHTML= {{__html: posts.title.rendered}}/>
        <div className="row">
          <div className="col-md-6">
          <div className="innerPageImage">
          <Clientimage imageId={posts.featured_media}/>
          </div>
          </div>
          <div className="col-md-6">
            <span className="lead" dangerouslySetInnerHTML= {{__html: posts.content.rendered}}/>
          </div>
        </div>
        
        </div>
        </div>
        <Footer/>
        
        </>
    )
  }
  return null
}
