// TODO
var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList list={['Fried Chicken', 'Beer']} />
  </div>
);

var GroceryList = (props) => (
    <ul>
      {props.list.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemOff() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)}
      onMouseLeave={this.onListItemOff.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));