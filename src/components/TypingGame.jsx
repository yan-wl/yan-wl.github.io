import React from 'react';
import '../css/TypingGame.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import HighlightableText from './HighlightableText';
import ToggleButton from './ToggleButton';

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default class TypingGame extends React.Component {
  constructor() {
    super();
    this.state = {
      isPlaying: true,
      index: 0,
      text: '',
      words: [],
      input: '',
      start: 0,
      end: 0,
      timerOn: false,
      timerStart: 0,
      timerEnd: 0,
      isCapitalized: false,
      normalText: '',
    };
  }

  componentDidMount() {
    const text = 'The quick brown fox jumps over the lazy dog.';
    const words = text.split(' ');
    const end = words[0].length;
    this.setState({
      text,
      words,
      end,
      normalText: text,
    });
  }

  componentDidUpdate() {
    const { input } = this.state;
    if (input.trimLeft().includes(' ')) {
      this.checkCorrect();
    }
  }

  refreshedState() {
    const { words } = this.state;
    return {
      ...this.state,
      isPlaying: true,
      index: 0,
      input: '',
      start: 0,
      end: words[0].length,
      timerOn: false,
      timerStart: 0,
      timerEnd: 0,
    };
  }

  checkCorrect() {
    const {
      index, words, input, end,
    } = this.state;
    const isCorrect = input.trimRight() === words[index];
    if (isCorrect) {
      if (index === (words.length - 1)) {
        // Don't advance index, clear input and end timer
        this.setState({
          isPlaying: false,
          input: '',
          timerEnd: Date.now(),
        });
      } else {
        // Clear input and advance index
        this.setState({
          index: index + 1,
          input: '',
          start: end + 1,
          end: end + 1 + words[index + 1].length,
        });
      }
    }
  }

  render() {
    const {
      isPlaying, text, words, input, start, end, timerOn, timerStart, timerEnd, isCapitalized,
      normalText,
    } = this.state;

    return (
      <div className="game-box">
        <div className="reset-button-box">
          <ToggleButton
            leftText="Capitalize"
            rightText="Normal"
            onClick={() => {
              if (!isCapitalized) {
                const capitalizedWords = words.map((word) => capitalize(word));
                const capitalizedText = capitalizedWords.join(' ');
                this.setState({
                  isCapitalized: !isCapitalized,
                  words: capitalizedWords,
                  text: capitalizedText,
                });
              } else {
                this.setState({
                  isCapitalized: !isCapitalized,
                  text: normalText,
                  words: normalText.split(' '),
                });
              }
            }}
          />
          <button
            className="reset-button"
            type="button"
            onClick={() => this.setState(this.refreshedState())}
          >
            <FontAwesomeIcon
              icon={faRedo}
            />
          </button>
        </div>
        {isPlaying
          ? (
            <>
              <p className="text">
                <HighlightableText
                  start={start}
                  end={end}
                  color="red"
                >
                  {text}
                </HighlightableText>
              </p>
              <div className="input-box">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => {
                    if (!timerOn) {
                      this.setState({
                        timerOn: true,
                        timerStart: Date.now(),
                        input: event.target.value,
                      });
                    } else {
                      this.setState({
                        input: event.target.value,
                      });
                    }
                  }}
                />
              </div>
            </>
          )
          : (
            <>
              <p className="text">
                {text}
              </p>
              <div className="stats-text-box">
                <span>
                  Time taken:
                  {' '}
                  {(timerEnd - timerStart) / 1000}
                  {' seconds'}
                </span>
                <span>
                  Word count:
                  {' '}
                  {words.length}
                </span>
                <span>
                  Words per minute:
                  {' '}
                  {Math.floor((60 / ((timerEnd - timerStart) / 1000)) * words.length)}
                </span>
              </div>
            </>
          )}
      </div>
    );
  }
}
