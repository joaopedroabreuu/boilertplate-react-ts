import React from "react";
import { Blank } from "../../store/ducks/blank/types";

interface OwnProps {
    data: Blank
}

const BlankTemplate = ({data}: OwnProps) => {
    return <>
        <p>{data.bairro}</p>
        <p>{data.cidade}</p>
        <p>{data.estado}</p>
    </>;
};

export default BlankTemplate;