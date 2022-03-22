import React from "react";
import "./topbar.css";
import   AppsIcon  from '@mui/icons-material/Apps';


export default function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Genie Goose</span>
                </div>
                <div className="topRight">
                    <div className="topbarIcons">
                        <AppsIcon></AppsIcon>
                    </div>
                </div>

            </div>
            
        </div>
    )
}



