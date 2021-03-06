import React, { Component } from 'react';
import Statistic from '../../components/statistic';
import Icon from '../../components/icon';

class StatisticDev extends Component {
    render() {
        return (
            <div className="dev-section">
                <h1 className="dev-title"> Statistic </h1>

                <Statistic title="Statistics" value={5114241} />

                <br />

                <Statistic title="Deployment time" value={5114241.214241} />

                <br />

                <Statistic
                    title="Settings"
                    value={114241}
                    prefix={<Icon type="info" />}/>

                <br />

                <Statistic
                    title="Settings"
                    value={114241}
                    suffix={<Icon type="info" />}/>

                <br />

                <Statistic.Countdown
                    title="Countdown"
                    value={Date.now() + 60 * 60 * 2 * 1000 + 1000 * 30}/>

                <br />

                <Statistic.Countdown
                    title="Countdown"
                    value={Date.now() + 1000 * 3}/>
            </div>
        );
    }
}

export default StatisticDev;
