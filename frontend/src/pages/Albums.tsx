import { Link } from "react-router-dom"
import { useGetAlbumsQuery } from "../api/apiSlice"
import { ColoredSquareTile } from "../components/ColoredSquareTile"


export const Albums = () => {

    const { data: albums, isLoading } = useGetAlbumsQuery()

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <div>
            <h2>Album</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-black text-2xl">
                {albums?.map(album => {
                    return (
                        <Link to={`/albums/${album.id}`} key={album.id}>
                            <ColoredSquareTile id={album.id}>
                                <div>
                                    <strong>{album.title}</strong>
                                    <div>
                                        {album.artists?.map(artist => (
                                            <span className="pr-1" key={artist.id}>{artist.name}</span>
                                        ))}
                                    </div>
                                </div>
                            </ColoredSquareTile>
                        </Link>

                    )
                })}
            </div>
        </div>
    )
}

