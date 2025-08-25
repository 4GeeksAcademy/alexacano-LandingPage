import React from "react"
const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Start Bootstrap</a>
                <form className="d-flex" role="search">
                    <a className="navbar-brand">Home</a>
                    <a className="navbar-brand">About</a>
                    <a className="navbar-brand">Services</a>
                    <a className="navbar-brand">Contact</a>
                </form>
            </div>
        </nav>

    )
}
export default Navbar