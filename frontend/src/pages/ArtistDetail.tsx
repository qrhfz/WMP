import { Link, useParams } from "react-router-dom";
import { useGetArtistDetailQuery } from "../api/apiSlice"
import { ColoredSquareTile } from "../components/ColoredSquareTile";
import { SongItem } from "../components/SongItem";


export function ArtistDetail() {
    let { id } = useParams();
    const { data: artist, isLoading } = useGetArtistDetailQuery(id!)

    return (
        <div>
            <h2 className="font-bold text-xl">{artist?.name}</h2>
            <div className="h-4"></div>
            <div className="pb-4">
                <h3>Albums</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 text-black text-2xl">
                    {artist?.albums?.map(album => {
                        return (
                            <Link to={`/albums/${album.id}`} key={album.id}>
                                <ColoredSquareTile id={album.id}>
                                    <strong>{album.title}</strong>
                                    <div>
                                        {album.artists?.map(artist => (
                                            <span className="pr-1" key={artist.id}>{artist.name}</span>
                                        ))}
                                    </div>
                                </ColoredSquareTile>
                            </Link>

                        )
                    })}
                </div>
            </div>
            <div>
                <h3>Songs</h3>
                <div>
                    {
                        artist?.songs?.map(song => {
                            return <SongItem track={song} key={song.id}></SongItem>
                        })
                    }
                </div>
            </div>

        </div>
    )
}