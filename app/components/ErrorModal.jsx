var React = require('react');

var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Error'
        };
    },
    // Property type checking.
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },

    // Called after whatever is processed in the render function.
    componentDidMount: function () {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        var {title, message} = this.props;

        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModal;
