import React from 'react';
import './Main.css'

class Main extends React.Component {  
    constructor(props){
        super(props)
        this.state = {
            message: "",
            name: ""
        }
    }

    componentDidMount() {
        this.setState({
            message: 'Bigly'
        });
    }

    getQuote = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
                this.setState({
                    message: data.message
                });
            })
            .catch(error => console.log(error))
    }

    getQuoteRandom = () => this.getQuote('https://api.whatdoestrumpthink.com/api/v1/quotes/random');
    getQuotePersonal = () => this.getQuote(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${this.state.name}`);

    validatePersonalQuote = () => (!this.state.name.length ? alert('Please enter something in the "Name" field.') : this.getQuotePersonal());

    render(){
        return (
                <main className='component'>
                    <header>
                        <h2 className='header'>Quote generator</h2>
                        <h2 className='sub-header'>*Instructions: Click the button to get a random quote from Trump, or enter your name and generate a personal quote to hear what he thinks about you.</h2>
                    </header>
                    <div className='center'>
                        <button className='button' onClick={this.getQuoteRandom}>Random Quote</button>
                        <div className='form'>
                            <input className='input' onChange={(el) => { this.setState({ name: el.target.value }) }} placeholder='Name' type="text" required />
                            <button className='button button-2' onClick={this.validatePersonalQuote}>Personal Quote</button>
                        </div>
                        <h3 className='quote'>"{this.state.message}" - Donald J. Trump</h3>
                    </div>
                </main>
            );
        }
}
export default Main;