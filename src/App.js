import React, {Component} from 'react';
import Table from './Table';
import Form from './Forms';
import Form1 from './Form1';


function ListItem(props) {
    return <li>{props.value}</li>;
  }

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number,index) =>
      <li key={index} >{number}</li>
    );
    return (
        <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
                    value={number} />
  
        )}
      </ul>
    );
  }

class App extends Component {
    state = {
        data: [],
        characters: []
    };

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }


    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    render() {
        return (<div>
  


       <Form1></Form1>
        </div>)
    }

    render1() {
        const { data } = this.state;

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>;
        });

        const res =  <ul>{result}</ul>;

        const numbers = [1, 2, 3, 4, 5];


        return (<div>
        {res}
        <Table characterData={this.state.characters} 
                    removeCharacter={this.removeCharacter} 
                />
        <Form handleSubmit={this.handleSubmit} />
        <NumberList numbers={numbers} />
       <Form1></Form1>
        </div>)
    }

}

export default App;