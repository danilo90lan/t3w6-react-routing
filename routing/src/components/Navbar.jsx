import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"

export default function Navbar() {
    return (
        <nav>
            {/* NavLink got the isActive parameter passed to an arrow functionn to check 
            if the link is active in order to style it. It returns the active class to the link*/}
            <h1>example nav bar content</h1>
            <NavLink to={"/"} className={(linkActive) => {
                return linkActive.isActive ? "active":""
            }}> Home </NavLink>
            <NavLink to={"/about"} className={(linkActive) => {
                return linkActive.isActive ? "active":""
            }}
            > About </NavLink>
            <NavLink to={"/contact"} className={(linkActive) => {
                return linkActive.isActive ? "active":""
            }}
            > Contact </NavLink>
            <NavLink to={"/projects"} className={(linkActive) => {
                return linkActive.isActive ? "active":""
            }}
            end> Projects </NavLink>
            <NavLink to={"/projects/terminalApp"} className={(linkActive) => {
                return linkActive.isActive ? "active":""
            }}
            > TerminalApp </NavLink>


        </nav>
    )
}