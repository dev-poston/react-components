// TODO
var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList list={['Fried Chicken', 'Beer']}/>
  </div>
);

var GroceryList = (props) => (
    <ul>
    {props.list.map(item =>
      <GroceryListItem stuff={item}/>
    )}
    </ul>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.stuff}</li>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"));