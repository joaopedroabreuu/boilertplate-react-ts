import React from "react";
import { Address } from "../../../store/ducks/addresses/types";

interface OwnProps {
    address: Address
}

export default function AddressItem({address}: OwnProps) {
    return <>
        <p>{address.bairro}</p>
        <p>{address.cidade}</p>
        <p>{address.estado}</p>
    </>;
}