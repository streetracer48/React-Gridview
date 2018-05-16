import React from 'react';
import { Link } from 'react-router-dom'
class Portfolio extends React.Component {


  render() {
const { posts, handledelete, handleView}= this.props;
    //console.log('this is props:',this.props.post)
    return (
      <div className="Listcontainer">
      {
        this.props.posts && this.props.posts.map( post =>
       (
<div className="Portfolio" key={post.id}>
      <div className="image-wrapper">
      <img width="450" height="250" src={post.image}alt="portfolio" />
    </div>
  <div className="content-area">
    <h2>{post.name}</h2>
    <p> {post.lorem}</p>
    <button  onClick ={ () => this.props.handledelete(post.id)}>Delete</button>
    <button onClick = { () => this.props.handleView(post.id)}>
    <Link to={`${post.id}`}>View</Link>
    </button>
  </div>
</div>
)
)
}
</div>
    )
  }
}

export default Portfolio;
