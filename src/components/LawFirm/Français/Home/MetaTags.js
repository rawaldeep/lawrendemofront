import React from 'react';
import MetaTags from 'react-meta-tags';
import JsonLd from '../Faq/JSONLD';

export default class MetaComponent extends React.Component {
    render() {
        console.log(this.props);
      return (
          <div className="wrapper">
            <MetaTags>
             <title>{this.props.title}</title>
          <meta property="og:type" content="website" />
          <meta name="description" content={this.props.description} />
          <meta name="og:description" content={this.props.description} />
          <meta property="og:title" content={this.props.title} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:site_name" content={"content"}  
           />
          {
            this.props.jsonLd && 
              <JsonLd data={this.props.jsonLd} />
          }
            </MetaTags>
          </div>
        )
    }
  }


// const MetaComponent = (props) =>{
//     console.log(props)
//     return (
//         <div className="wrapper">
            
//         <MetaTags>
//           {/* <title>{props.title}</title>
//           <meta property="og:type" content="website" />
//           <meta name="description" content={props.description} />
//           <meta name="og:description" content={props.description} />
//           <meta property="og:title" content={props.title} />
//           <meta property="og:url" content={window.location.href} />
//           <meta property="og:site_name" content={"content"}  */}
//            />
//           {
//             this.props.jsonLd && 
//               <JsonLd data={props.jsonLd} />
//           }
//         </MetaTags>
//       </div>
//     )
// }

// export default MetaComponent;


