import { Outlet } from "react-router-dom";

export default function ProjectLayout() {
    return(
        <div>
            <h1>Author</h1>
            <h3>Danilo</h3>
            <Outlet/>
            <h6>Copyright {new Date(Date.now()).getFullYear()}</h6>

        </div>
    )
}