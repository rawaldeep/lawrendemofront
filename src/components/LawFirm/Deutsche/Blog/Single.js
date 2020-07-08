import React, {useState, useEffect} from 'react'
import BlogNav from '../Navigation/BlogNav';
import Clientimage from '../Home/Clientimage';
import Footer from '../Footer/Footer';
import SingleOffline from './SingleOffline';
const appUrl = "https://lawra.be/wp-json/wp/v2/";
export default function Single(props) {
  const [state, setState] = useState({
    loading: true,
    posts: []
  })

  useEffect(() => {
    const { articleId } = props.match.params
    const fetchData = async () => {
      let res = await fetch(`${appUrl}blog/${articleId}`);
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
        <div className="container pb-4">
        <div className="mt-5 display-4" dangerouslySetInnerHTML= {{__html: posts.title.rendered}}></div>
        <div className="pb-3"><span>-{posts.acf.blog_author}</span></div>
        <div className="pb-3"><Clientimage imageId={posts.featured_media}/></div>
        <div className="wpcontent" dangerouslySetInnerHTML={{__html: posts.content.rendered}}></div>
        </div>
        <Footer/>
        
        </>
    )
  }
  return <SingleOffline/>
}
