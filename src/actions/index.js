/* The reason why we choose to give name "index.js" for this file is 
because while importing in other file we will only have to wright 
directory name (../action) and it will automatically take index.js (root) 
file. */

//Action creator
//this us  named export which allow us to export many different functions (action creators) from single file
export const selectSong = (song) => {
  //Return an action
  return {
    //type is mendatory but payload is not necessary
    type: 'SONG_SELECTED',
    payload: song
  };
};
