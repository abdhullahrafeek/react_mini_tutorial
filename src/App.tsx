import ListGroup from "./components/ListGroup";

function App(){

  let items = ["Hatton", "Kandy", "Colombo", "Maskeliya", "Kaduwela"];

  return <div><ListGroup items={items} heading="Cities"/></div>;
}

export default App;