import { Component } from "react";
import { Categories } from "./Categories";
import PropTypes from "prop-types";

export class NewsItem extends Component {
  render() {
    const { element } = this.props;
    return (
      <>
        <h2 className="card__title">
          { element.title }
        </h2>
        <div className="card__content" dangerouslySetInnerHTML={{__html: element.content}}></div>
        { element.isSpecial && <p className="special__news"> Special!!! </p> }
        <p className="date-created">{ element.dateCreated }</p>
        <Categories categories={ element.categories }/>
        { element.link && <a href={ element.link } className="card__link">link</a> }       
        { element.photo && <img src={ element.photo } alt='' className="card__image"/> }    
        <p className="card__author">{ element.author }</p>   
      </>
    );
  }
}

NewsItem.propTypes = {
  element: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    dateCreated: PropTypes.string.isRequired,
    isSpecial: PropTypes.bool.isRequired,
    link: PropTypes.string,
    photo: PropTypes.string,
    author: PropTypes.string.isRequired,
  })
}
