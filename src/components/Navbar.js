import { useContext } from "react"
import { AppContext } from "../helpers/AppContext"

export const Navbar = () => {
    const { darkMap, setDarkMap, satteliteMap, setSatteliteMap, showForm, setShowForm } = useContext(AppContext)

    return (
        <header>
            <nav>
                <h1>sportsy.</h1>
                <button onClick={() => setDarkMap(!darkMap)}>Dark</button>
                <button onClick={() => setSatteliteMap(!satteliteMap)}>Sattelite</button>
                <button onClick={() => setShowForm(!showForm)}>Add New</button>
            </nav>
        </header>)
}
