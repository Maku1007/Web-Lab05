import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    image: {
      width: 180,
      height: 150,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    }
});

const Features = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Paper>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="./pic.png" />
              </ButtonBase>
            </Grid>
            <Grid item sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="h5" component="h2">Features</Typography>
                  <br/>
                  <Typography variant="body2" component="p">
                  Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse.
                  </Typography>
                </Grid>
                <CardActions>
                  <Button size="small" color="primary">Read Our Features</Button>
                </CardActions>
              </Grid>
              <Grid item>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </Grid>
              </Grid>
          </Grid>
        </Paper>
      </div>
    )
}

export default Features;