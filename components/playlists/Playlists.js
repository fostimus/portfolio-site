// parent component for PlaylistInfo and Table, contains state for playlists

import Table from "./Table";
import PlaylistInfo from "./PlaylistInfo";

export default function Playlists() {
  return (
    <div>
      <PlaylistInfo />
      <Table />
    </div>
  );
}
