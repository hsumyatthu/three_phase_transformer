<<<<<<< HEAD
/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  createStyles,
  Theme,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import routes from '../constants/routes.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: 'gold',
      fontWeight: 'bold',
      marginTop: '50px',
    },
    name: {
      fontWeight: 'bold',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      marginTop: '50%',
    },
    button: {
      background: 'linear-gradient(45deg, #fc0560 30%, #05fc79 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      fontWeight: 'bold',
      padding: '0 30px',
    },
  })
);

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
theme = responsiveFontSizes(theme);

export default function Home(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root} data-tid="container">
      <Grid
        container
        spacing={4}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h2" className={classes.title}>
              Welcome Three Phase Transformer
            </Typography>
          </ThemeProvider>
        </Grid>

        {/* <h2>Welcome Three Phase Transformer</h2> */}
        <Grid item xs={12}>
          <Link to={routes.PORTLIST}>
            <Button className={classes.button}>Let Start</Button>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ThemeProvider theme={theme}>
              <Typography variant="h5" className={classes.name}>
                Developed By Min Khant Kyaw and Lai Ye Mon
              </Typography>
            </ThemeProvider>
          </Paper>
        </Grid>
      </Grid>
=======
import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <Link to={routes.COUNTER}>to Counter</Link>
>>>>>>> e799828... Update dependency @types/react to ^16.9.44
    </div>
  );
}
