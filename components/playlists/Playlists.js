// parent component for PlaylistInfo and Table, contains state for playlists

import Table from "./Table";
import PlaylistInfo from "./PlaylistInfo";
import { useState } from "react";

//TODO: don't needt to pass ALL playlist data to Playlist Info, or to the table
export default function Playlists({ playlists }) {
  const [currentPlaylist, setCurrentPlaylist] = useState(0);

  return (
    <div>
      <PlaylistInfo
        playlists={playlists}
        currentPlaylist={currentPlaylist}
        setCurrentPlaylist={setCurrentPlaylist}
      />
      <Table playlist={playlists[currentPlaylist]} />
    </div>
  );
}
