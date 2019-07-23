import 'date-fns';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core/styles';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = {
    grid: {
        width: '60%',
    },
};

class TimeDate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(),
        }

    }

    handleDateChange(date) {
        this.setState={
            selectedDate: date
        }
    }

    render() {
        const classes = this.props.classes;
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container className={classes.grid} justify="space-around">
                    <KeyboardDatePicker
                        margin="normal"
                        id="mui-pickers-date"
                        label="Date picker"
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="mui-pickers-time"
                        label="Time picker"
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        );

    }

}

export default withStyles (useStyles) (TimeDate);