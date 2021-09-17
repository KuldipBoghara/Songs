import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ currentsong }) => {
  if (!currentsong) {
    return <div>Select a Song</div>;
  }

  return (
    <div>
      <h3>Details for: </h3>
      <p>
        title: {currentsong.title}
        <br />
        Duration: {currentsong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentsong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
