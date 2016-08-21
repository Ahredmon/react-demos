ReactDOM.render(
    // (obj of attributes, child element or data, reference to parent element)
    React.createElement(
        React.createClass({
            render: function() {
                return React.DOM.h2({id:'myComponent',style:{color:'white',background:'black'}},'fubar',React.DOM.span(null,'...'))
            }
        })
    )
    ,document.getElementById('app')
);