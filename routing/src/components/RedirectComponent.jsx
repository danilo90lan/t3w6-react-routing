import React, { Component } from 'react';
import { Navigate } from "react-router-dom";

export default class Redirectbutton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shouldRedirect: false
        }
    }

    toggleRedirect = () => {
        return this.setState({ shouldRedirect: !this.state.shouldRedirect })
    }

    render() {
        return (
            <>
                <button onClick={
                    this.toggleRedirect}>
                    Home page
                </button>

                {this.state.shouldRedirect ? <Navigate to="/" /> : ""}

            </>

        )
    }
}