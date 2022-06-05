import Album from "./album";
import Song from "./song";

export default interface Artist {
    id: string,
    name: string,
    songs: Array<Song>,
    albums: Array<Album>,

}