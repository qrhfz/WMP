import Album from "./album"
import Artist from "./artist"

export default interface Song {
    id: string,
    title: string
    file: string
    album?: Album
    artists?: Array<Artist>
}


