import React, {PropTypes} from 'react';

export default React.createClass({
    propTypes: {
        onAddClick: PropTypes.func.isRequired
    },

    handleClick(event) {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    },

    render() {
        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={e => this.handleClick(e)}>
                    Add
                </button>
            </div>
        );
    }
});