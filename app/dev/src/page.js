var Page = React.createClass({
    displayName: "Page",

    render: function () {
        return React.createElement("page", null, React.createElement(Title, { title: "Dashboard" }), React.createElement("div", { className: "container" }, React.createElement("div", { className: "row" }, React.createElement("ul", { className: "nav nav-tabs justify-content-center" }, React.createElement("li", { className: "nav-item" }, React.createElement(Nav, { title: "Pending", linkUrl: "index.html" })), React.createElement("li", { className: "nav-item" }, React.createElement(Nav, { title: "Doing", linkUrl: "index.html" })), React.createElement("li", { className: "nav-item" }, React.createElement(Nav, { title: "Deploy", linkUrl: "index.html" })), React.createElement("li", { className: "nav-item" }, React.createElement(Nav, { title: "Delivered", linkUrl: "index.html" })), React.createElement("li", { className: "nav-item" }, React.createElement(Nav, { title: "New Job", linkUrl: "index.html" }))))));
    }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));