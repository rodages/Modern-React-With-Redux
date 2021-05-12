import React, {useState} from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
    {
        title:'What is React?',
        content: 'React is front end Javascript framework'
    },
    {
        title:'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating a reusable components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    },
]



const App = () =>{
    const [selected, setSelected] = useState(options[0])
    return(
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}/>
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
        
    )
};



export default App;