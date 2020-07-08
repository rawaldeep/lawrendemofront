import React, {useState, useEffect} from 'react';
import BlogNav from '../Navigation/BlogNav';
import Footer from '../Footer/Footer';
import MetaComponent from '../Home/MetaTags';
const appUrl = "https://lawra.be/wp-json/wp/v2/";

export default function FAQ() {
  const [state, setState] = useState({
    loading: true,
    Faqs: []
  })
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(`${appUrl}faq`);
  let response = await res.json();
  // response.map(item => {
  //   state.categories.push(item.acf.blog_category);
  // });
  let filter = (post) =>{
    if(post.acf.language === "English"){
      return post;
    }
    return
  }
  let filtered = await response.filter(filter);
  setState({ ...state,
    loading: false,
    Faqs: filtered
    });
};
    fetchData();
  }, []);
  const {loading, Faqs} = state;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
       mainEntity: []
  };
  if(!loading){
    Faqs.map(faq=>{
      let jsonitem = {
        "@type": "Question",
        "name": `${faq.title.rendered}`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${faq.content.rendered}}`
        }}
      data.mainEntity.push(jsonitem)
    })
  return (
      <div className="FAQPAGE">
        <BlogNav/>
        <div className="container-fluid">
          <div className="container">
            <h1 className="text-center display-4 pb-4">Frequently Asked Questions</h1>
      {Faqs.map( (faq) => {
               return(
                <div key={faq.id} className="faq-drawer">
                <input className="faq-drawer__trigger" id={faq.id} type="checkbox" /><label className="faq-drawer__title" htmlFor={faq.id}>{faq.title.rendered}</label>
                <div className="faq-drawer__content-wrapper">
                  <div className="faq-drawer__content">
                    <span dangerouslySetInnerHTML={{__html: faq.content.rendered}}/>
                  </div>
                </div>
              </div>
               )
           })} 
 
      </div>
      </div>
      <MetaComponent jsonLd={data} title={"lawren.io"} description={"Faq page"} />
      <Footer/>
      </div>
    );
          }
          return null
  }