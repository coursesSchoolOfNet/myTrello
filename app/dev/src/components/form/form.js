var Form = React.createClass({
    displayName: "Form",

    render: function () {
        return React.createElement("div", { className: "container" }, React.createElement("div", { className: "row" }, React.createElement("form", null, React.createElement("div", { className: "form-group" }, React.createElement("label", null, this.props.title), React.createElement("input", { type: "text", className: "form-control", placeholder: this.props.title })))));
    }
});

ReactDOM.render(React.createElement(Form, { title: "Dashboard" }), document.getElementById('form'));

ReactDOM.render(React.createElement(Form, { title: "Member" }), document.getElementById('name'));