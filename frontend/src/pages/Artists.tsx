import { Link } from "react-router-dom"
import { useGetArtistsQuery } from "../api/apiSlice"
import { ColoredSquareTile } from "../components/ColoredSquareTile"

export const Artists = () => {
    const { data: artists, isLoading } = useGetArtistsQuery()

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-black text-2xl">
                {artists?.map(artist => (
                    <Link to={`/artists/${artist.id}`} key={artist.id}>
                        <ColoredSquareTile id={artist.name}>
                            <strong>{artist.name}</strong>
                        </ColoredSquareTile>
                    </Link>
                ))}
            </div>
        </div>
    )
}