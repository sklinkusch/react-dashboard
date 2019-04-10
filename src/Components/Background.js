import React, { Component } from "react";

export default class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image:
        "https://images.unsplash.com/photo-1459909633680-206dc5c67abb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9"
    };
  }
  componentDidMount() {
    const url = "https://source.unsplash.com/random/800x600?space";
    const request = async () => {
      const response = await fetch(url);
      const object = await response;
      console.log(object.url);
    };
    request();
  }
  render() {
    return <div className="background" />;
  }
}
