import { useGetArtistQuery } from "../api/apiSlice"
import randomColor from "../utils/randomColor"

export const Artists = () => {
    const { data: artists, isLoading } = useGetArtistQuery()

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <div>
            <h2>Artists</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-black text-2xl">
                {artists?.map(artist => (
                    <div
                        className="p-2 aspect-square flex justify-center items-center"
                        key={artist.id}
                        style={{ backgroundColor: randomColor() }}>
                        <strong>{artist.name}</strong>
                    </div>
                ))}
            </div>
        </div>
    )
}