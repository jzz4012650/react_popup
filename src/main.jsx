require('./main.less');

import React from 'react';
import ReactDom from 'react-dom';
import Popup from './component/popup.jsx';
import Button from './component/Button.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }

    onClose(e) {
        console.log('close');
    }

    render() {
        return (
            <Popup show modal width={600} onClose={this.onClose}>
                <Popup.Header closeBtn>test title</Popup.Header>
                <Popup.Body>
                    <p>Hello, world!</p>
                </Popup.Body>
                <Popup.Footer>
                    <Button type="submit">确认</Button>
                    <Button>取消</Button>
                </Popup.Footer>
            </Popup>
        );
    }
}

ReactDom.render(<App/>, document.querySelector('#container'));
