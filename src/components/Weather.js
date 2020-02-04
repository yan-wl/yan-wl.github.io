import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, Typography, CardContent } from '@material-ui/core';
import { WbSunny, WbCloudy, BeachAccess } from '@material-ui/icons';

const weatherData = [
  {
    day: 'Mon',
    status: 'cloudy',
    temperature: 25
  },
  {
    day: 'Tue',
    status: 'cloudy',
    temperature: 26
  },
  {
    day: 'Wed',
    status: 'rainy',
    temperature: 20
  },
  {
    day: 'Thu',
    status: 'sunny',
    temperature: 30
  },
  {
    day: 'Fri',
    status: 'sunny',
    temperature: 29
  }
]

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

function getIcon(status) {
  switch(status) {
    case 'cloudy':
      return <WbCloudy />;
    case 'sunny':
      return <WbSunny />;
    case 'rainy':
      return <BeachAccess />;
  }
}

export default function Weather() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          {weatherData.map(value => (
            <Grid key={value} item>
              <Card variant="outlined">
                <CardContent>
                  <Typography display="block" align="center" variant="body2">
                    {value.day}
                  </Typography>
                  {getIcon(value.status)}
                  <Typography display="block" align="center" variant="overline">
                    {value.temperature} degrees celsius
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}