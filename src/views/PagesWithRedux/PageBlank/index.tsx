import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import { ApplicationState } from "../../../store";
import * as BlankActions from "../../../store/ducks/blank/actions";
import { CallbackType } from "../../../store/factories/types";
import { Blank } from "../../../store/ducks/blank/types";
import BlankTemplate from "../../../components/BlankTemplate";

interface StateProps {
    data: Blank
}

interface DispatchProps {
    doRequest(cep: number, callback?: CallbackType): void
}

type Props = StateProps & DispatchProps;

class PageBlank extends Component<Props> {

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

    render() {
        const { data, doRequest } = this.props;

        return <>
            <h1>Página em branco - com redux</h1>
            <BlankTemplate data={ data } />
            <button onClick={ () => doRequest(61940620, this.callbackResponse)}>Ir na API</button>
        </>;
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    data: state.blank.data
});

const mapDispatchToProps =  (dispatch: Dispatch) =>
    bindActionCreators(BlankActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PageBlank);