import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function TicTacToe() {
  const classes = useStyles();
  let elevation = 1;

  return (
    <div className={classes.root}>
      <Paper square elevation={elevation}/>
    </div>
  );
}