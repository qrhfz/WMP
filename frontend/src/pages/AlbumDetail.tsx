import { Link, useParams } from "react-router-dom";
import { useGetAlbumDetailQuery } from "../api/apiSlice"
import { SongItem } from "../components/SongItem";
import { Artists } from "./Artists";

export function AlbumDetail() {
    let { id } = useParams();
    const { data: album, isLoading } = useGetAlbumDetailQuery(id!)

    return (
        <div>
            <h2 className="font-bold text-xl">{album?.title}</h2>
            <div>
                {album?.artists?.map((artist, index) => {
                    return (
                        <Link to={`/artists/${artist.id}`} key={artist.id}>
                            {artist.name}{(index !== (album?.artists?.length ?? 0) - 1) && ','}
                        </Link>
                    )
                })}
            </div>
            <div className="pt-4">
                {
                    album?.songs?.map(song => {
                        return <SongItem track={song} key={song.id}></SongItem>
                    })
                }
            </div>
        </div>
    )
}