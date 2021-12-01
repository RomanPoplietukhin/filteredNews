import { Component } from "react";
import PropTypes from 'prop-types'

 export class NewsFilters extends Component {
      render() {
         let { hasPhoto, hasLink, isSpecial } = this.props.state;
         let { changePhotoState, changeLinkState, changeSpecialState } = this.props
         return (
            <div className="filters">
               <button className='filters__buttons' onClick={() => changePhotoState()}>
                    { hasPhoto ? 'with photo' : 'without photo' }
               </button>
               <button className='filters__buttons' onClick={() => changeLinkState()}>
                    { hasLink ? 'with link' : 'without link' }
               </button>
               <button className='filters__buttons' onClick={() =>  changeSpecialState()}>
                    { isSpecial ? 'SpecialNews' : 'not special news' }
               </button>
            </div>
        )
    }
}

NewsFilters.propTypes = {
     changePhotoState: PropTypes.func,
     changeLinkState: PropTypes.func,
     changeSpecialState: PropTypes.func
}