import React from "react";
 
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    absolute: {
      position: 'absolute',
      top: theme.spacing(19),
      right: theme.spacing(3),
    },
}));

const Tabs = () => {
    const classes = useStyles();
   
    return (
      <div className={classes.root}>
        <TabContext >
          <AppBar position="static">
            <TabList  aria-label="simple tabs example">
              <Tab label="OVERVIEW" value="1"/>
              <Tab label="FEATURES" value="2"/>
              <Tab label="DETAILS" value="3"/>
              <Tab label="TECHNOLOGY" value="4"/>
              <Tab label="FAQ" value="5"/>
            </TabList>
          </AppBar>
        </TabContext>
        <Tooltip title="Add" aria-label="add">
          <Fab color="secondary" className={classes.absolute}>
              <AddIcon />
          </Fab>
        </Tooltip>
      </div>
    );
}
  
export default Tabs;