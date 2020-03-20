import React, { Component } from "react";

// Current application state data
interface StateProps {
    heading: string
}

// Usually received from the parent component
interface OwnProps {
    // Optional as they contain the "?"
    description?: string
}

class PageBlank extends Component<OwnProps, StateProps> {
    constructor(props: OwnProps) {
        super(props);

        this.state = {
            heading: 'Página em branco - sem redux'
        };
    }

    render() {
        const { heading } = this.state;
        const { description } = this.props;

        return <>
            <h1>{ heading }</h1>
            <p>{ description }</p>
        </>;
    }
}

export default PageBlank;