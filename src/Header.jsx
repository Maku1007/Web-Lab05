import React from "react";

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    toolbar: {
      minHeight: 110,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      alignSelf: 'center',
    },
    icon: {
      alignSelf: 'center',
    },
    
}));

const Header = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <Typography className={classes.title} variant="h5" noWrap>Name & Title</Typography>
              <AcUnitRoundedIcon className={classes.icon} />
            </Toolbar>
        </AppBar>
      </div>
    );
};

export default Header;