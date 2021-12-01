import "./App.css";
import React, { Component } from "react";
import { NewsList } from "./Components/NewsList";
import { NewsFilters } from "./Components/NewsFilters";
import news from './news.json'

export class NewsPage extends Component {
  state = {
    hasPhoto: false,
    hasLink: false,
    isSpecial: false,
  } 

  changePhotoState = () => {
    this.setState({
      hasPhoto: !this.state.hasPhoto
    })
  }

  
  changeLinkState = () => {
    this.setState({
      hasLink: !this.state.hasLink
    })
  }

  
  changeSpecialState = () => {
    this.setState({
      isSpecial: !this.state.isSpecial
    })
  }

  render() {
    const { hasPhoto, hasLink, isSpecial } = this.state;

    const filteredNews = news.filter(el => {
      if (hasPhoto && !el.photo) return false;
      if (hasLink && !el.link) return false;
      if (isSpecial && !el.isSpecial) return false;
      return true
    })  
    return (
      <div className="card__container">
        <NewsFilters 
          state={ this.state } 
          changePhotoState={ this.changePhotoState } 
          changeLinkState={ this.changeLinkState } 
          changeSpecialState={ this.changeSpecialState } />
        <NewsList newList={ filteredNews }/>
      </div>
    );
  }
}

