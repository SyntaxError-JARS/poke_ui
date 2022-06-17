import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    return (
        <nav>
            <Link to="/">
                <Button variant="text">Home Page</Button>
            </Link>
            <span> </span>
            <Link to="/login">
                <Button>Login</Button>
            </Link>
            <span> </span>
            <Link to="/register">
                <Button>Sign up</Button>
            </Link>
            <span> </span>
            <Link to="/pokemon">
                <button>Pokemon</button>
            </Link>
        </nav>
    );
}
