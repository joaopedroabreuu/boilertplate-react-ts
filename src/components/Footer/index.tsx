import React from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { Blank } from "../../store/ducks/blank/types";

const Footer = () => {

    const data:Blank = useSelector((state: ApplicationState) => state.blank.data);

    return <>
        <h2>Footer</h2>
        <p>{data?.bairro}</p>
        <p>{data?.cidade}</p>
        <p>{data?.estado}</p>
    </>;
};

export default Footer;