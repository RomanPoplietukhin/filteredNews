import { Component } from "react";
import { NewsItem } from './NewsItem';

export class NewsList extends Component {
  render() {
    return (
      <div className="new__list">
        {this.props.newList.map((el) => (
          <div key={el.id}>
            <NewsItem element={el} />
          </div>
        ))}
      </div>
    );
  }  
}

