import claudeIcon from "../assets/claude.png"
import NavMenu from "./NavMenu"
export default function Header() {
    return (
        <header>
            <img src={claudeIcon} alt="Chef Claude"/>
            <h1>Chef Claude</h1>
            <NavMenu />
        </header>
    )
}