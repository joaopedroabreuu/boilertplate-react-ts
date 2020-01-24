import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import { Aula } from "../../store/ducks/aulas/types";
import * as AulasActions from "../../store/ducks/aulas/actions";
import { ApplicationState } from "../../store"
import AddressItem from "../AddressMain/AddressTemplate";

interface StateProps {
    aula: Aula,
}

interface DispatchProps {
    loadRequest(cep: number): void
}

interface OwnProps {
    frase?: string
}

type Props = StateProps & DispatchProps & OwnProps;


class AulaMain extends Component<Props> {
    componentDidMount() {
    }

    render() {
        const { aula, loadRequest, frase } = this.props;

        return <>
                <AddressItem address={aula} frase={frase} />
                <p>{frase} - COMPONENTE FILHO</p>
                <button onClick={ () => loadRequest(61944470)}>Ir na API</button>
            </>;
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    aula: state.aulas.data
});

const mapDispatchToProps =  (dispatch: Dispatch) =>
    bindActionCreators(AulasActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AulaMain);