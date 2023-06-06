import { useContext } from "react"
import { AppContext } from "../helpers/AppContext"

export const Navbar = () => {
    const { darkMap, setDarkMap, satteliteMap, setSatteliteMap } = useContext(AppContext)

    return (
        <header>
            <nav>
                <h1>sportsy.</h1>
                <button onClick={() => setDarkMap(!darkMap)}>Dark</button>
                <button onClick={() => setSatteliteMap(!satteliteMap)}>Sattelite</button>
            </nav>
        </header>)
}
