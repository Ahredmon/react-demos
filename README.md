# React JS - intro materials
### sections
* [app demos](#demos)
* [terms](#terms)
* [code samples](#code-snippets)
* [setup apps](#setup)

---
# demos
- greeting mundi
- fizz buzz
- todo list
- consume API

---
# terms
- JSX
- Virtual DOM
- React.createClass
- render (method)
- React.render
- state
- getInitialState
- setState
- props
- propTypes
- getDefaultProps
- Component LifeCycle
- componentWillMount
- componentDidMount
- componentWillReceiveProps
- componentWillUnmount
- Events
- onClick
- onSubmit
- onChange

---
# code-snippets

### basic - render a component
```javascript
ReactDOM.render(
    // React built-in component
    // React.DOM.*(null or attributes-object, content or component)
    React.DOM.h1(null, "this content is in <h1>tag</h1>")
    // DOM location to render at, i.e. inject as child into DOM tree
    ,document.getElementById("app")
)
```

### basic - config a built-in DOM components
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
    // optional - set default values for non-required properties
    ,getDefaultProps: function() {
        return {val: "testing property defaults"};
    }
});
```

### basic - render a custom component
```javascript
ReactDOM.render(
    // custom React component
    React.createElement(myCustomComponent, {
        val: "a value"
        ,data: "some data"
    })
    // DOM location to render at
    ,document.getElementById("app")
)
```
### basic - render a custom component using a factory
```javascript
var myComponentFactory = React.createFactory(myCustomComponent);
ReactDOM.render(
    // create custom React component using factory.  *optional parameters
    React.myComponentFactory(*props, *children)
    // DOM location to render at
    ,document.getElementById("app")
)
```
### basic - event listener
```javascript
var InputTextComponent = React.createClass({
    // define field data types
    propTypes: {data: React.PropTypes.string}
    // set initial field values
    ,getInitialState: function() {
        return {data: 'init'};
    }
    // set event listener function
    ,onDataChange: function(event) {
        // update values of fields
        this.setState({
            data: event.target.value
        });
    }
    // executed when element is rendered, must be defined
    ,render: function() {
        return React.DOM.div(
            null
            ,React.DOM.input({
                type: 'text'
                ,value: this.state.data
                ,onChange: this.onDataChange // event listener
            })
            ,React.DOM.h3(null, this.state.data)
        )
    }
})
```

---
# setup

### install package + gulpfile on Node JS
#### from Node command prompt + project directory
run package.json + install dependencies
```
npm install
```
turn on Gulp automation
```
npm start
```

---
# coda