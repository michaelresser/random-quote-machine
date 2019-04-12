import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faQuoteLeft)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        { text: 'Be water, my friend.', author: 'Bruce Lee' },
        { text: 'Do, or Do Not. There is no Try.', author: 'Master Yoda' },
        { text: 'Be excellent to each other.', author: 'Bill & Ted' },
        { text: 'Give em an Inch, they\'ll take a mile.', author: 'anon' },
        { text: 'Today was a good Day.', author: 'Ice Cube' },
      ],
      currentQuote: { text: 'Push the button for a random quote', author: 'Mike Esser' },
    }
    this.getNewQuote = this.getNewQuote.bind(this);

  }

  getNewQuote = () => {
    const random = Math.floor(Math.random() * this.state.quotes.length);
    const newQuote = this.state.quotes[random];
    this.setState(
      { currentQuote: newQuote }
    );
  }


  render() {
    return (
      <div id='wrapper'>
        <div id='quote-box'>
          <div id='quote-text'>
            <FontAwesomeIcon icon='quote-left' className='fa-3x' id='quote-icon' />
            <span id='text' className='text'>{this.state.currentQuote.text}</span>
          </div>
          <div id='author' className='text'>
            <div> - </div>
            <div>{this.state.currentQuote.author}</div>
          </div>
          <div id='buttons'>
            <div id='tweet' className='button'>Icon</div>
            <button id='new-quote' className='button' onClick={this.getNewQuote}>Get New Quote</button>
          </div>
        </div>
        <div id='credits'>App by Esser</div>
      </div>
    );
  }
}

export default App;
