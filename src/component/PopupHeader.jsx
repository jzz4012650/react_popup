import React from 'react';

class PopupHeader extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'PopupHeader';
    }
    render() {
        var closeBtn = null;

        if (this.props.closeBtn) {
            closeBtn = (
                <i className="react-popup-close" onClick={this.props.handleClose}>&#215;</i>
            );
        }

        return (
            <div className="react-popup-header">
                {closeBtn}
                <h3>{this.props.children}</h3>
            </div>
        );
    }
}

export default PopupHeader;
