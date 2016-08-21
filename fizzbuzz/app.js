// custom list item component
var fbItem = React.createClass({
    render: function() {
        return React.DOM.li(null,this.props.data);
    }
    ,propTypes: {
        data: React.PropTypes.string
    }
    ,getDefaultProps: function() {
        return { data: '...oops...' };
    }
});
var fbItemFactory = React.createFactory(fbItem);

// custom list component
var fbMainComponent = React.createClass({
    propTypes: {
        inputValue: React.PropTypes.number
        ,minNumber: React.PropTypes.number
        ,maxNumber: React.PropTypes.number
    }
    ,getDefaultProps: function() {
        return {
            inputValue: 1
            ,minNumber: 1
            ,maxNumber: 15
        };
    }
    ,getInitialState: function() {
        return {inputValue: 7};
    }
    ,valueChange: function(e) {
        this.setState({
            inputValue: e.target.value
        });
    }
    ,render: function() {
        // factory not working 
        //var fbItemFactory = React.createFactory(fbItem);        
        // custom list item component
        var fbList = React.DOM.ul({
            id: "fbList"
            ,style: {
                background: "lightgrey"
                ,color: "black"
            }
        }
        ,React.createElement(fbItem,{data:"1"})
        ,React.createElement(fbItem,{data:"2"})
        ,React.createElement(fbItem,{data:"fizz"})
        ,React.createElement(fbItem,{data:"4"})
        ,React.createElement(fbItem,{data:"buzz"})
        ,React.createElement(fbItem,{data:"fizz"})
        ,React.createElement(fbItem,{data:""+this.state.inputValue})
        );
        var fbView = React.DOM.div(
            null
            ,React.DOM.input({
                type: 'number'
                ,value: this.state.inputValue
                ,onChange: this.valueChange
            })
            ,React.DOM.span(null, this.state.inputValue)
            ,fbList
        );
        return fbView;
    }
});

// main starting point for app
ReactDOM.render(
    React.createElement(
        fbMainComponent
        ,{
            minNumber: 1
            ,maxNumber: 15
        }
    ),
    document.getElementById("app")
);