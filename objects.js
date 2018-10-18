var playlist = {
  artist: "song"
};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
    return playlist
}
var playlist = {
  artist: "Slowdive", "Phil Ochs", "My Bloody Valentine"

}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist
}
