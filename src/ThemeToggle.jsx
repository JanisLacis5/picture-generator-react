import {useGlobalContext} from "./context"
import {FaMoon, FaSun} from "react-icons/fa"

const ThemeToggle = () => {
    const {isDarkTheme, toggleTheme} = useGlobalContext()
    return (
        <section className="toggle-container">
            <button className="dark-toggle" onClick={toggleTheme}>
                {isDarkTheme ? (
                    <FaSun className="toggle-icon" />
                ) : (
                    <FaMoon className="toggle-icon" />
                )}
            </button>
        </section>
    )
}
export default ThemeToggle
