var authenticationSuccess = function () {
    console.log('Successful authentication');
};

var authenticationFailure = function() {
    console.log('Failed authentication');
};

var Aut = React.createClass({
    render:function () {
        return (
            window.Trello.authorize({
                type: 'popup',
                name: 'Getting Started n',
                scope: {
                    read: 'true',
                    write: 'true' },
                expiration: 'never',
                success: authenticationSuccess,
                error: authenticationFailure
            })
        );
    }
});

ReactDOM.render(
    <Aut />,
    document.getElementById('authen')
);