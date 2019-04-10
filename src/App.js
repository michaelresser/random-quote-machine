import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faQuoteLeft)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        { quote: 'Be water, my friend', author: 'Bruce Lee' },
        { quote: 'Do, or Do Not. There is no Try.', author: 'Master Yoda' },
        { quote: 'Excellence. therefore, is a habit.', author: 'Aristotle (attr.)' },
      ],
      currentQuote: {},
    }
    this.getNewQuote = this.getNewQuote.bind(this);
    this.getInitialQuote = this.getInitialQuote.bind(this);
  }

  getInitialQuote = () => {
    this.setState = ({
      currentQuote: this.state.quotes[0]
    })
    console.table(this.state.currentQuote);
  }

  componentDidMount() {
    this.getInitialQuote();
  }

  getNewQuote = () => {
    const random = Math.floor(Math.random * this.state.quotes.length);
    console.table(this.state.quotes[random]);
    this.setState = ({
      currentQuote: this.state.quotes[random]

    })
    console.table(this.state.currentQuote);

  }



  render() {
    return (
      <body id='wrapper'>
        <div id='quote-box'>
          <div id='quote-text'>
            <FontAwesomeIcon icon='quote-left' className='fa-3x' id='quote-icon' />
            <span id='text' className='text'>Quote will go here{this.state.currentQuote.quote}</span>
          </div>
          <div id='author' className='text'>
            <div> - </div>
            <div>Author{this.state.currentQuote.author}</div>
          </div>
          <div id='buttons'>
            <button id='tweet'></button>
            <button id='new-quote' onClick={this.getNewQuote()}>Get New Quote</button>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
