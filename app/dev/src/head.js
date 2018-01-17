var Nav = React.createClass({
    displayName: "Nav",

    render: function () {
        return React.createElement("a", { className: "nav-link active", href: this.props.linkUrl }, this.props.title);
    }
});

var Title = React.createClass({
    displayName: "Title",

    render: function () {
        return React.createElement("div", { className: "container" }, React.createElement("div", { className: "row" }, React.createElement("h1", null, " ", this.props.title, " ")));
    }
});