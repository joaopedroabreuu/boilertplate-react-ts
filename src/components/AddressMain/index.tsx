import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import { CallbackType } from "../../store/factories/types";
import { Address } from "../../store/ducks/addresses/types";
import * as AddressesActions from "../../store/ducks/addresses/actions";
import { ApplicationState } from "../../store"
import AddressItem from "./AddressTemplate";

interface StateProps {
    address: Address,
}

interface DispatchProps {
    doRequest(cep: number, callback?: CallbackType): void
}

interface OwnProps {
}

type Props = StateProps & DispatchProps & OwnProps;


class AddressMain extends Component<Props> {

    callbackResponse(status: string|number, data:any) {
        if(status === 'success' || status === 200) {
            console.log('Success API', data);
        }
        else if(status === 'error' || status !== 200) {
            console.log('Error API', data);
        }
        else {
            console.warn('Error internal');
        }
    }

    componentDidMount() {
    }

    render() {
        const { address, doRequest } = this.props;

        return <>
                <AddressItem address={address} />
                <button onClick={ () => doRequest(61940620, this.callbackResponse)}>Ir na API</button>
            </>;
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    address: state.addresses.data
});

const mapDispatchToProps =  (dispatch: Dispatch) =>
    bindActionCreators(AddressesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddressMain);