import React from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { Blank } from "../../store/ducks/blank/types";
import { Link } from "react-router-dom";

const Header = () => {

    const data:Blank = useSelector((state: ApplicationState) => state.blank.data);

    return <>
        <h2>Header</h2>
        <p>{data?.bairro}</p>
        <p>{data?.cidade}</p>
        <p>{data?.estado}</p>

        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/register">Registro</Link>
            </li>
            <li>
                <Link to="/private">Private</Link>
            </li>
        </ul>
    </>;
};

export default Header;