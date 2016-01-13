import React from 'react';
import PopupHeader from './PopupHeader.jsx';
import PopupFooter from './PopupFooter.jsx';
import PopupBody from './PopupBody.jsx';
import passPropsToChildren from '../utils/passPropsToChildren.jsx';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Popup';
        this.state = {show: this.props.show};
    }
    handleClose() {
        if (this.props.onClose !== undefined &&
            typeof this.props.onClose === 'function') {
            this.props.onClose();
        }  
        this.setState({
            show: false
        });
    }
    render() {
        var styleWrapper = {
            display: this.state.show ? 'block' : 'none'
        }
        var stylePopup = {
            width: this.props.width
        }
        var propsToChildren = {
            handleClose: this.handleClose.bind(this)
        }

        return (
            <div className="react-popup-wrapper" style={styleWrapper}>
                {this.props.modal && <div className="react-popup-mask"></div>}
                <div className="react-popup-outter">
                    <div className="react-popup" style={stylePopup}>
                        {passPropsToChildren(this.props.children, propsToChildren)}
                    </div>
                </div>
            </div>
        );
    }
}

Popup.defaultProps = {
    show: false,
    width: 800,
    onClose: () => {}
}

Popup.propTypes = {
    show: React.PropTypes.bool,
    width: React.PropTypes.number,
    onClose: React.PropTypes.func
}

Popup.Header = PopupHeader;
Popup.Footer = PopupFooter;
Popup.Body = PopupBody;

export default Popup;
