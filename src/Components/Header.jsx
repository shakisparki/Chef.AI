import globeLogo from '../assets/globe.png'
function Header() {
    return (
        <header className="myheader">
            <img src={globeLogo} alt="Globe Logo" className="logo" />
            <h1>my travel journal.</h1>
        </header>
    );
}

export default Header;