import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from "react-bootstrap/FormControl";

import netflixCategories from './netflix-categories'

const NETFLIX_URL = 'https://www.netflix.com/browse/genre/';

const CustomMenu = React.forwardRef(
    ({children, style, className, 'aria-labelledby': labeledBy}, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={e => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        child =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: netflixCategories.NETFLIX_CATEGORIES
        }
    }

    render() {
        const {categories} = this.state;
        return (
            <div className="container">
                <Jumbotron>
                    <h1 className="display-4">Netflix Categories</h1>
                    <p>I got a bunch of Categories from Netflix, and have made them freely available as a menu.</p>
                    <p>It also keeps favourites that you have used previously</p>
                </Jumbotron>
                <Dropdown>
                    <Dropdown.Toggle>
                        Netflix Categories
                    </Dropdown.Toggle>
                    <Dropdown.Menu  as={CustomMenu}>
                        {categories.map((c) => (
                            <Dropdown.Item key={c.id} href={NETFLIX_URL + c.id} target="_blank">
                                {c.category}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}
export default App;
