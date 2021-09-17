import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//the state is all the data from redux store (both the reducers)
//WE CAN GIVE IT ANY NAME
const mapStateToProps = (state) => {
  //this songs will pass as prop to second  function call in connect (to SongList)
  return { songs: state.songs };
};

//this syntex returns a function inside of the function (1st set returns the function and 2nd set invocks the returned function)
export default connect(mapStateToProps, { selectSong })(SongList); //selectSong : selectSong is same as writing {selectSong}
