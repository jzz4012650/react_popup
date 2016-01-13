import React from 'react';

const TYPES = ['button', 'reset', 'submit'];

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Button';
    }
    render() {
        var classes = [
            "button",
            this.props.type
        ].join(' ');

        return (
            <button className={classes}>
                {this.props.children}
            </button>
        )
    }
}

Button.defaultPorps = {
    type: TYPES[0]
}

Button.propTypes = {
    type: React.PropTypes.oneOf(TYPES)
}

export default Button;
