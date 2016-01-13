import React from 'react';

class PopupFooter extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'PopupFooter';
    }
    render() {
        return (
            <div className="react-popup-footer">
                {this.props.children}
            </div>
        );
    }
}

export default PopupFooter;
