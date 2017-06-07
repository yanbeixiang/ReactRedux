import React, { PropTypes } from 'react';

export default React.createClass({
    propTypes: {
        onClick: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    },

    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none',
                    cursor: this.props.completed ? 'default' : 'pointer'
                }}>
                {this.props.text}
            </li>
        )
    }
});