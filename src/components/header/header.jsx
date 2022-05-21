import React from 'react';
import classes from './header.module.css';
const header = () => {
    return(
        <header>
            <div className="container">
                <div>
                    <img className={classes.logo} src={logo} alt="logo" />
                </div>
                <div className="textRight">
                    <img src={reactlogo} alt="React" className={classes.reactlogo} />
                    <strong>
                        React
                    </strong>
                </div>
            </div>
        </header>
    )
}
export default header
