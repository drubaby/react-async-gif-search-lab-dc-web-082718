import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

const URL = "http://api.giphy.com/v1/gifs/search?q=";
let USER_QUERY = "dog";
const API_KEY = "&api_key=dc6zaTOxFJmzC&rating=g";

//does data fetching and then renders corresponding sub component
class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      firstThreeGifs: []
    };
  }

  //fetch data from giphy api
  //store first three gifs in state
  //(data.data[0].url)

  fetchGifs = () => {
    fetch(URL + USER_QUERY + API_KEY)
      .then(r => r.json())
      // .then(data => console.log(data))
      .then(data =>
        this.setState({
          firstThreeGifs: [
            data.data[0].embed_url,
            data.data[1].embed_url,
            data.data[2].embed_url
          ]
        })
      );
  }

  componentDidMount() {
    this.fetchGifs()
  }

  setQuery(props) {
    // TODO: pass form input value back up here
    console.log(props + " back in GifListContainer")
    USER_QUERY = props
    console.log(USER_QUERY)

  }

  //also render <GifSearch> that renders the form
  // pass down submit handler to as a prop

  //pass that data down to child <GifList>
  render() {
    return (
      <React.Fragment>
        <GifSearch setQuery={this.setQuery} fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.firstThreeGifs} />
      </React.Fragment>
    );
  }
}
export default GifListContainer
