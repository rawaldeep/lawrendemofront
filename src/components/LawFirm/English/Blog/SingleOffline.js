import React, {useState, useEffect} from 'react'
import BlogNav from '../Navigation/BlogNav';
import Clientimage from '../Home/Clientimage';
import Footer from '../Footer/Footer';
const appUrl = "https://lawren.io/wp-json/wp/v2/";
export default function SingleOffline(props) {
  const [state, setState] = useState({
    loading: true,
    posts: []
  })

  useEffect(() => {
    // const { articleId } = props.match.params
    const fetchData = async () => {
      let res = await fetch(`${appUrl}posts/3510`);
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
        <div className="pb-3"><span>-lorium ipsum</span></div>
        <div className="pb-3"><Clientimage imageId={posts.featured_media}/></div>
        <div className="lead" dangerouslySetInnerHTML={{__html: posts.content.rendered}}></div>
        </div>
        <Footer/>
        
        </>
    )
  }
  return null
}
