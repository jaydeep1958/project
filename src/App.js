import React, {Component} from 'react';
import Table from './Table';
import Form from './Forms';

class App extends Component {
    state = {
        data: []
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
        const { data } = this.state;

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>;
        });

        return <ul>{result}</ul>;
    }

    render1() {

       


        return (
            <div className="App">
                <Table characterData={this.state.characters} 
                    removeCharacter={this.removeCharacter} 
                />
                 <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;