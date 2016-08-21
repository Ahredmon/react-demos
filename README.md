# React JS - demos
- greeting mundi
- fizzbuzz
- todo list
- consume API

---
# code snippets

### basic - rendering a component
```javascript
ReactDOM.render(
    // React built-in component
    // React.DOM.*(null or attributes-object, content or component)
    React.DOM.h1(null, "this content is in <h1>tag</h1>");
    ,
    // DOM location to render at, i.e. inject as child into DOM tree
    document.getElementById("app")
)
```

### basic - config built-in DOM components
```javascript
React.DOM.div(
    {
        // object of element attrbutes
        id: 'elemID'
        ,stlye: {
            color: "black"
            ,background: "lightgrey"
            ,fontFamily: "Verdana"
        }
    }
    , // children or "content"
    React.DOM.p(null, "i'm inside a <p>tag</p>")
);
```

### basics - defining a custom component
```javascript
var myCustomComponent = React.createClass({
    // render must be defined
    render: function() {
        return React.DOM.span(null, "value passed is " + this.props.val)
    }
    // optional - define property datatypes
    ,propTypes: {
        val: React.PropTypes.string
        ,data: React.PropTypes.string.isRequired
    }
    ,
    // optional - set default values for non-required properties
    getDefaultProps: function() {
        return {val: "testing property defaults"};
    }
});
```

### basic - rendering custom components
```javascript
ReactDOM.render(
    // custom React component
    React.createElement(myCustomComponent, {
        val: "a value"
        ,data: "some data"
    })
    ,
    // DOM location to render at
    document.getElementById("app")
)
```
### basic - rendering custom component using factory
```javascript
var myComponentFactory = React.createFactory(myCustomComponent);
ReactDOM.render(
    // create custom React component using factory
    React.myComponentFactory()
    ,
    // DOM location to render at
    document.getElementById("app")
)
```