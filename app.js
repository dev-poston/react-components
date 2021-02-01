var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList list={['Bread', 'Butter']} />
  </div>
)

var GroceryList = (props) => (
  <ul>
    {props.list.map((item) => (
      <GroceryListItem item={item} />
    ))}
  </ul>
)

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false,
      click: false
    }
  };

  onItemHover() {
    this.setState({
        done: !this.state.done
      })
  };

  onItemClick() {
    this.setState({
      click: !this.state.click
    })
  }

  render(){

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal',
      textDecoration: this.state.click ? 'line-through' : 'none'
    };

    return (
      <li style={style}
      onMouseEnter={this.onItemHover.bind(this)}
      onMouseLeave={this.onItemHover.bind(this)}
      onClick={this.onItemClick.bind(this)}
      >{this.props.item}</li>
    )
  };
}

ReactDOM.render(<App />, document.getElementById('app'));