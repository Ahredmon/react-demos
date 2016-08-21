// custom component
var fbComponent = React.createClass({
    propTypes: {
        minNumber: React.PropTypes.number
        ,maxNumber: React.PropTypes.number
    }
    ,getDefaultProps: function() {
        return {
            minNumber: 1
            ,maxNumber: 15
        };
    }
    ,render: function() {
        var fblist = React.DOM.div({
            id: "fblist"
            ,style: {
                background: "lightgrey"
                ,color: "black"
            }
        }
        ,"fizzbuzz list goes here" + this.props.minNumber + " " + this.props.maxNumber);
        return fblist;
    }
});


// main starting point for app
ReactDOM.render(
    React.createElement(
        fbComponent
        ,{
            minNumber: 1
            ,maxNumber: 15
        }
    ),
    document.getElementById("app")
);