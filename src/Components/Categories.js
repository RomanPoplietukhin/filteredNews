import { Component } from "react";

 export class Categories extends Component {
    render() {
        return (
            <div className="catgories__container">
                <ul className="categories__container--list">
                    { this.props.categories.map(el => (
                        <li className="list__item" key={ el.id }>
                            { el.name }
                        </li>
                    )) }
                </ul>
            </div>
        )
    }
}
