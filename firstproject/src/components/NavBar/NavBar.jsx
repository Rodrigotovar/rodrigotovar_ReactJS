import CardWidget from "../CardWidget/CardWidget"

function NavBar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <form className="container-fluid justify-content-start">
                <button className="btn btn-outline-success me-2" type="button">Home</button>
                <button className="btn btn-sm btn-outline-secondary" type="button">Disco</button>
                <button className="btn btn-sm btn-outline-secondary" type="button">Ropa</button>
                <button className="btn btn-sm btn-outline-secondary" type="button">Soporte</button>
            </form>
            <CardWidget />
        </nav>

    )
}

export default NavBar