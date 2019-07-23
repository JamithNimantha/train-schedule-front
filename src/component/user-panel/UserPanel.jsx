import React, { Component } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TrainIcon from '@material-ui/icons/Train';
import StoreIcon from '@material-ui/icons/Store';
import { withStyles } from '@material-ui/core/styles';
import Style from './styles'

class UserPanel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false
        };
    }

    handleDrawerOpen = () => {
        this.setState({
            open: true
        });
    };

    handleDrawerClose = () => {
        this.setState({
            open: false
        });
    };



    render() {

        const classes = this.props.classes;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: this.state.open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            {this.props.title}
                  </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open,
                        }),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {['Search Train', 'Train Stations'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <TrainIcon /> : <StoreIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {this.props.children}
                </main>
            </div>
        )
    }


}


export default withStyles(Style)(UserPanel);
