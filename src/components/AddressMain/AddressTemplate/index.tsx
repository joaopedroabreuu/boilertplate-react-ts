import React from "react";
import { Address } from "../../../store/ducks/addresses/types";

interface OwnProps {
    address: Address
    frase?: string
}

export default function AddressItem({address, frase}: OwnProps) {
    return <>
        <h2>{frase} - COMPONENTE NETO</h2>
        <p>{address.bairro}</p>
        <p>{address.cidade}</p>
        <p>{address.estado}</p>
    </>;
}