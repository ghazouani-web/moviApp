import StarRatingComponent from 'react-star-rating-component';
import React, { Component } from 'react'

export class Rating extends Component {

    state = {
        rating: 1,
      };

      onStarClick=(nextValue, prevValue, name)=> {
        this.setState({rating: nextValue});
        this.props.rating(nextValue);
      }

    render() {
        return (
            <div>
             <StarRatingComponent  value={this.state.rating} starCount={5}  onStarClick={this.onStarClick}
  />

            </div>
        )
    }
}

export default Rating

