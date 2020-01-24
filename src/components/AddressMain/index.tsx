import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import { Address } from "../../store/ducks/addresses/types";
import * as AddressesActions from "../../store/ducks/addresses/actions";
import { ApplicationState } from "../../store"
import AddressItem from "./AddressTemplate";

interface StateProps {
    address: Address,
}

interface DispatchProps {
    loadRequest(cep: number): void
}

interface OwnProps {

}

type Props = StateProps & DispatchProps & OwnProps;


class AddressMain extends Component<Props> {
    componentDidMount() {
    }

    render() {
        const { address, loadRequest } = this.props;

        return <>
                <AddressItem address={address} />
                <button onClick={ () => loadRequest(61940620)}>Ir na API</button>
            </>;
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    address: state.addresses.data
});

const mapDispatchToProps =  (dispatch: Dispatch) =>
    bindActionCreators(AddressesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddressMain);