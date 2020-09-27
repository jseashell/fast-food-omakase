import React from "react";

export default class Creation extends React.Component {
    render() {
        return (
            <div className="creation">
                <div>{this.props.id}</div>
                <div>{this.props.name}</div>
                <div>{this.props.image}</div>
                <div>{this.props.user}</div>
            </div>
        );
    };
}