import React from "react";
import './Backdrop.scss';

const Backdrop = (props) => {
        return <div className="backdrop" onClick={props.hideSideBar}></div>
}

export default Backdrop;