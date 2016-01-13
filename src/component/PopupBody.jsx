import React from 'react';

class PopupBody extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'PopupBody';
    }
    render() {
        return (
            <div className="react-popup-body">{this.props.children}</div>
        );
    }
}

export default PopupBody;
