import React from 'react';
import '../css/TypingGame.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import HighlightableText from './HighlightableText';
import ToggleButton from './ToggleButton';

const TEXT_LIST = [
  'The quick brown fox jumps over the lazy dog.',
  'When they first built the University of California at Irvine they just put the buildings in. '
  + 'They did not put any sidewalks, they just planted grass. Perl is just that kind of language. '
  + 'It is not designed from first principles. Perl is those sidewalks in the grass.',
  'The computer programmer is a creator of universes for which he alone is the lawgiver. '
  + 'No playwright, no stage director, no emperor, however powerful, has ever exercised such '
  + 'absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.',
  'Programs must be written for people to read, and only incidentally for machines to execute.',
  'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
  'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, '
  + 'and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.',
  'Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.',
  'Everyone knows that debugging is twice as hard as writing a program in the first place. '
  + 'So if you\'re as clever as you can be when you write it, how will you ever debug it?',
  'A computer is like a violin. You can imagine a novice trying first a phonograph and then a violin. '
  + 'The latter, he says, sounds terrible. That is the argument we have heard from our humanists and most of our computer scientists. '
  + 'Computer programs are good, they say, for particular purposes, but they aren\'t flexible. Neither is a violin, or a typewriter, until you learn how to use it.',
  'Talk is cheap. Show me the code.',
];

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getText() {
  return TEXT_LIST[getRandomInteger(0, TEXT_LIST.length - 1)];
}

function getNewText(oldText) {
  const newText = getText();
  if (newText !== oldText) {
    return newText;
  }
  return getNewText(oldText);
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
    const text = getText();
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
    const { normalText, isCapitalized } = this.state;
    let newText = getNewText(normalText);
    const newNormalText = newText;
    let newWords = newText.split(' ');
    const newEnd = newWords[0].length;
    if (isCapitalized) {
      newWords = newWords.map((word) => capitalize(word));
      newText = newWords.join(' ');
    }
    return {
      ...this.state,
      isPlaying: true,
      index: 0,
      input: '',
      start: 0,
      timerOn: false,
      timerStart: 0,
      timerEnd: 0,
      text: newText,
      words: newWords,
      end: newEnd,
      normalText: newNormalText,
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
