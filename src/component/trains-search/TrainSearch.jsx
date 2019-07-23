import React, { Component } from 'react';
import UserPanel from '../user-panel/UserPanel'
import InputField from '../input-field/InputField'
import TimeDate from '../time-date/TimeDate'

class TrainSearch extends Component {

    render() {
        return (
            <UserPanel
            title="Search Trains"
            >
                <InputField
                title="Your Station"
                placeholder="Your Starting Station"
                />
                <InputField
                title="End Station"
                placeholder="Your End Station"
                />
                <TimeDate/>
            </UserPanel>
        );
    }

}

export default TrainSearch;