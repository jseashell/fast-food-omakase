import React from "react";

interface ICreation {
    id: string,
    name: string,
    image: string,
    user: string
}

export default class Creation extends React.Component<{}, ICreation> {
    constructor(props: any) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            image: props.image,
            user: props.image
        }
    }

    render() {
        return (
            <div className="creation">
                <div>{this.state.id}</div>
                <div>{this.state.name}</div>
                <div>{this.state.image}</div>
                <div>{this.state.user}</div>
            </div>
        );
    };
}