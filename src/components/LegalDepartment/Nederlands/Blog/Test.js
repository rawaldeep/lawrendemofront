import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Clientimage from "../Home/Clientimage";
const appUrl = "https://lawra.be/wp-json/wp/v2/";

export default function Test(props) {
  const {active} = props
  const [state, setState] = useState({
    loading: true,
    posts: []
  })
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(`${appUrl}blog`);
  let response = await res.json();
  let filter = (post) =>{
    if(post.acf.language === "Nederlands"){
      return post;
    }
    return
  }
  let filtered = await response.filter(filter);
  setState({ ...state,
  loading: false,
  posts: filtered,
  });
    };
    fetchData();
  }, []);

  const {loading, posts} = state;
  if(!loading){
    if(posts.length){
    return (
      <div className="container bloglay">
        <div className="row row-eq-height">
       {posts.map((post)=>{
         
         let date = (post.date).substr(0, post.date.lastIndexOf("T")).split(/\-|\s/)
        let months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
        let month_index =  parseInt(date[1],10) - 1;
        let BlogMonth = (`${months[month_index]}`);
        let BlogDay =( `${date[0]}`);
        BlogDay = parseInt(BlogDay, 10);
        BlogDay = ''+BlogDay;
        if(post.acf.blog_category === active || active === 'All'){
         return (
          <div className="col-md-4 col-sm-1 blogoverview " key={post.id}>
        <div className="item-box-blog">
          <div className="item-box-blog-image">
            {/*Date*/}
            <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">{BlogMonth},</span> <span className="day">{BlogDay}</span> </div>
            {/*Image*/}
            <figure> 
            <Clientimage imageId={post.featured_media} />
               </figure>
          </div>
          <div className="item-box-blog-body">
            {/*Heading*/}
            <div className="item-box-blog-heading">
            <Link to={`/legaldepartment/blog/nl/${post.id}`}>
                <h5 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </Link>
            </div>
            {/*Data*/}
            <div className="item-box-blog-data" style={{padding: 'px 15px'}}>
              <p>-{post.acf.blog_author}</p>
            </div>
            {/*Text*/}
            <div className="item-box-blog-text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <div className="mt">  <Link to={`/legaldepartment/blog/nl/${post.id}`} className="btn read">Read more...</Link> </div>
            {/*Read More Button*/}
          </div>
        </div>
      </div>
          )}
          return
       })}
       </div>
       </div>
    )
      }
  }
  return null
}
