import React from "react";
import "./Cat.css";

class Cat extends React.Component {
  constructor() {
    super();
    this.url = "https://api.thecatapi.com/v1/images/search";
    this.state = {
      img: "",
    };
  }

  componentDidMount() {
    this.fetchImg();
  }
  fetchImg = () => {
    fetch(this.url, {
      headers: {
        "x-api-key": "a1a3b061-902e-4030-b023-7196c53f195c",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.length > 0 && data[0].url) {
          this.setState({ img: data[0].url });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="cat">
        <img alt="cat" src={this.state.img} />
        <button className="btn btn-bright">MEOW!</button>
      </div>
    );
  }
}

export default Cat;
