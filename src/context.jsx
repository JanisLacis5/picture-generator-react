import {useContext, useState, useEffect} from "react"
import {createContext} from "react"

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

const setPreferedMode = () => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches
    const storedTheme = localStorage.getItem("darkTheme") === "true"
    return storedTheme || preference
}

export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(setPreferedMode)
    const [search, setSearch] = useState("cat")
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
        localStorage.setItem("darkTheme", !isDarkTheme)
    }
    useEffect(() => {
        document.body.classList.toggle("dark-theme", isDarkTheme)
    }, [isDarkTheme])
    return (
        <GlobalContext.Provider
            value={{
                isDarkTheme,
                toggleTheme,
                search,
                setSearch,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
