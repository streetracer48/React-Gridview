import React, { Component } from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import SingleView from './components/SingleView';
import {Switch, Route} from 'react-router'


class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      posts:[]

    }

    this.handledelete=this.handledelete.bind(this)
    this.handleView=this.handleView.bind(this)



  }


  handledelete(id)
  {
const updated = this.state.posts.filter(post => post.id !=id)
this.setState({
  posts:updated

})
//console.log(updated);


      }
      handleView(id)
{
const updated = this.state.posts.filter(post =>post.id ===id)
this.setState({
  posts:updated

})

}

componentDidMount()
{
  fetch('http://localhost:3000/post')
  .then((response) =>response.json())
.then(data =>
  {
this.setState({
  posts:data

})

  })


  .catch((err) =>
  {
    console.log(err)



  })

}
  render() {
    //console.log(this)
    return (
      <div className="App">
      <div className="HeaderWrap">
        <header className="App-header">
          <h1 className="App-title">Reactjs অ্যাপ্লিকেশান এ স্বাগতম</h1>
        </header>
        </div>
        <switch>
          <Route exact path="/" render={ () => (
          <div>

            <Portfolio {...this.state}
  handledelete = {this.handledelete}

  handleView = { this.handleView}
   />
          </div>)}/>

          <Route path ="/:postID" render ={ (props) =>
           (
<SingleView {...this.state} {...props}/>

          ) }/>


        </switch>



      </div>
    );
  }
}

const About = () => {

    return(
<div><h1>coming from About</h1></div>
    )

  }



export default App;
