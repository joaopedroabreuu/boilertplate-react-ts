import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import { Repository } from "../../store/ducks/repositories/types";
import * as RepositoriesActions from "../../store/ducks/repositories/actions";
import { ApplicationState } from "../../store"
import RepositoryItem from "../RepositoryItem";

interface StateProps {
    repositories: Repository[],
}

interface DispatchProps {
    loadRequest(text: string): void
}

interface OwnProps {
    x?: string
}

type Props = StateProps & DispatchProps & OwnProps;


class RepositoryList extends Component<Props> {
    componentDidMount() {
        const { loadRequest } = this.props;
        // loadRequest('Rocketseat');
    }

    render() {
        const { repositories, loadRequest } = this.props;

        return <>
                <ul>
                    {repositories.map(repository => <RepositoryItem key={repository.id} repository={repository}/>)}
                </ul>
                <button onClick={ () => loadRequest('Rocketseat')}>Ir na API</button>
            </>;
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data
});

const mapDispatchToProps =  (dispatch: Dispatch) =>
    bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);