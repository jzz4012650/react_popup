import React from 'react';

function passPropsToChildren(children, props) {
    return React.Children.map(children, function(child) {
        return React.cloneElement(child, props);
    })
}

export default passPropsToChildren;