/** @jsx React.DOM */
goog.provide('App.ui.Todo');
goog.require('App.ui.todo.AddForm');
goog.require('App.ui.todo.List');
App.ui.Todo = React.createClass({
  /**
  * Property types
  */
  propTypes: {
    label: React.PropTypes.string,
    add_new_todo: React.PropTypes.func
  },
  /**
  * default values of the properties
  */
  getDefaultProps: function(){
    return {
      label: "",
      add_new_todo: function(){console.log('no action defined')}
    };
  },
  /**
  * render the element
  */
  render: function() {
    return(
      <div>
        <App.ui.todo.AddForm label={this.props.label} add_new_todo={this.props.add_new_todo}/>
        <App.ui.todo.List/>
      </div>
    );
  }
});