import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';
// import axios from 'axios';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT



export default class Search extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     userInput: '',
  //   }
  // }

  // handleSearchPosts(e) {
  //   this.setState({
  //     userInput: e.target.value,
  //   })
  // }
  
  // searchPosts(e){
  //   e && e.preventDefault()

  //   axios.get(`https://practiceapi.devmountain.com/api/posts/filter?text=${this.state.userInput}`).then(res => {
  //     console.log(res.data)
  //   })
  // }

  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed" onChange={this.handleSearchPosts}/>

          <SearchIcon id="Search__icon" onClick={this.searchPosts}/>
        </div>
        
      </section>
    )
  }
}