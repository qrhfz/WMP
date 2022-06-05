import Album from "./album"
import Artist from "./artist"

export default interface Song {
    id: string,
    title: string
    audioURL: string
    album?: Album
    artists?: Array<Artist>
}


