import { Link } from "react-router-dom"
import { useGetArtistsQuery } from "../api/apiSlice"
import randomColor from "../utils/randomColor"

export const Artists = () => {
    const { data: artists, isLoading } = useGetArtistsQuery()

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <div>
            <h2>Artists</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-black text-2xl">
                {artists?.map(artist => (
                    <Link to={`/artists/${artist.id}`} key={artist.id}>
                        <div
                            className="p-2 aspect-square flex justify-center items-center"

                            style={{ backgroundColor: randomColor() }}>
                            <strong>{artist.name}</strong>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}