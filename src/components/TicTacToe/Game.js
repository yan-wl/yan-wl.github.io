import React from 'react';
import Board from './Board';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  game: {
    display: 'flex',
    flexDirection: 'row'
  },
  gameInfo: {
    marginLeft: '20px',
  }
}))

export default class Game extends React.Component {
  render() {
    const classes = useStyles();

    return (
      <div className={classes.game}>
        <div className="game-board">
          <Board />
        </div>
        <div className={classes.gameInfo}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}