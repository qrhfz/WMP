import Artist from "./artist";
import Song from "./song";

export default interface Album {
    id: string,
    title: string,
    songs: Array<Song>,
    artists?: Array<Artist>
}
