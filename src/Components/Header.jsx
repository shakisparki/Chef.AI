import claudeIcon from "../assets/claude.png"
import NavMenu from "./NavMenu"
export default function Header() {
    return (
        <header>
            <img src={claudeIcon} alt="Chef.AI"/>
            <h1>Chef.AI</h1>
            <NavMenu />
        </header>
    )
}