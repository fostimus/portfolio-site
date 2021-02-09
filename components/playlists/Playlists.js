// parent component for PlaylistInfo and Table, contains state for playlists

import Table from "./Table";
import PlaylistInfo from "./PlaylistInfo";
import { useState } from "react";

export default function Playlists({ playlists }) {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  return (
    <div>
      <PlaylistInfo />

      <Table />
    </div>
  );
}
