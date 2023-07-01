import {useQuery} from "@tanstack/react-query"
import {useGlobalContext} from "./context"
import customAuth from "./customAuth"

const Gallery = () => {
    const {search} = useGlobalContext()
    const gallery = useQuery({
        queryKey: ["Gallery", search],
        queryFn: async () => {
            const res = await customAuth.get(`${search}`)
            return res.data
        },
    })
    if (gallery?.isLoading) {
        return (
            <section className="image-container">
                <h4>Loading...</h4>
            </section>
        )
    }
    if (gallery.isError || !gallery.data.results) {
        return (
            <section className="image-container">
                <h4>There was an error...</h4>
            </section>
        )
    }

    return (
        <div>
            <h2 className="title subtitle">
                {gallery.data.results.length} results found
            </h2>
            <section className="image-container">
                {gallery?.data?.results?.map((picture) => {
                    const {id, urls} = picture
                    return <img className="img" key={id} src={urls.regular} />
                })}
            </section>
        </div>
    )
}
export default Gallery
