import {useGlobalContext} from "./context"

const SearchForm = () => {
    const {setSearch} = useGlobalContext()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!e.target.elements.search.value) return
        setSearch(e.target.elements.search.value)
    }
    return (
        <section>
            <h1 className="title">Unsplash Images</h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    className="form-input search-input"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="cat"
                />
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
        </section>
    )
}
export default SearchForm
