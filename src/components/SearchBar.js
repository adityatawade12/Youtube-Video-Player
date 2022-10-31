import React, { Component } from 'react'

export default class SearchBar extends Component {
    state={text:""}

    changeHandler=(e)=>{
        this.setState({text:e.target.value})

    }

    handleSubmit=(e)=>{
        e.preventDefault();
        
        // console.log(this.state.text)
        this.props.onSubmit(this.state.text)
    }


  render() {
    return (
        <div className='search-bar ui segment' style={{background:'black'}}>
      
      <form className='ui form' onSubmit={(e)=>this.handleSubmit(e)}>
        <div className="inline fields">
        <div className="field fifteen wide">
            <input value={this.state.text} type='text' placeholder='Search...' onChange={this.changeHandler}  />
            
            </div>
            <div className="field">
            <button className="ui button" type="submit">Search</button>
            </div>
        </div>
            
      </form>
        </div>

    )
  }
}
