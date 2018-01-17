var Button = React.createClass({
    displayName: 'Button',

    getInitialState: function () {
        return {
            click: false
        };
    },

    toggleClick: function () {
        this.setState({
            click: !this.state.click
        });
    },

    render: function () {
        var btnClass = this.state.click ? 'btn btn-warning' : 'btn btn-success';
        var title = this.state.click ? this.props.textActive : this.props.title;

        return React.createElement('div', { className: 'container' }, React.createElement('div', { className: 'row' }, React.createElement('button', { onClick: this.toggleClick, className: btnClass }, title)));
    }
});

ReactDOM.render(React.createElement(Button, { title: 'Send', textActive: 'Loading...' }), document.getElementById('button'));