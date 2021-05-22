import React from "react";

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      maxWidth: '100%',
      margin: `${theme.spacing(0)}px auto`,
      padding: theme.spacing(3),
    }
  }));

const message = `Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis proident minim.`;

const message1 = `Lorem ipsum dolor sit amet`;

const Details = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Paper className={classes.paper}>
            <Grid container spacing={2} >
                <Grid item xs >
                    <Typography variant="h5" component="h2">Details</Typography>
                </Grid> 
                <Grid item>
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
              </Grid>
            </Grid>
            <Grid  container wrap="nowrap" spacing={5}>
                <Grid item>
                    <Avatar>W</Avatar>
                </Grid>
                <Grid item xs>
                    <Typography variant="h7" component="h4">{message1}</Typography>
                    <Typography variant="p" component="p">{message}</Typography>
                </Grid>
            </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={5}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
                <Typography variant="h7" component="h4">{message1}</Typography>
                <Typography variant="p" component="p">{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={5}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
                <Typography variant="h7" component="h4">{message1}</Typography>
                <Typography variant="p" component="p">{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={5}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
                <Typography variant="h7" component="h4">{message1}</Typography>
                <Typography variant="p" component="p">{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
}

export default Details;