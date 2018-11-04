//renders a form that for users giphy Search
//text input should be a controlled component that stores the value of input in state and renders dom accordingly

//should receive a callback prop from its parent
  // on submit it should invoke the callback with the value of the input
    //this will query the api
import React from 'react'
class GifSearch extends React.Component {

    state = {
      searchTerm: ""
    }


  handleSubmit = event => {
    event.preventDefault()
    this.props.setQuery(this.state.searchTerm)
    this.props.fetchGifs()
  }

  render(){
  return(
    <div>Hello search here</div>,
    <form onSubmit={this.handleSubmit}>
      <input type='text' value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})}></input>
      <button>Search</button>
    </form>
  )
}
}
export default GifSearch
