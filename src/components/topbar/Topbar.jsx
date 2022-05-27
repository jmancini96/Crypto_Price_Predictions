import React from "react";
import "./topbar.css";
import  AppsIcon  from '@mui/icons-material/Apps';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Brulejpg from "../../assets/Brule.jpg"

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
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIcons">
                        <AttachMoneyIcon></AttachMoneyIcon>
                       
                    </div>
                    <div className="topbarIcons">
                        <SettingsApplicationsIcon></SettingsApplicationsIcon>
                        
                    </div>

                    <img src="https://pyxis.nymag.com/v1/imgs/29b/bae/50c47f603f465c28cc385853c6a36169c1-29-steve-brule-check-it-out.rsquare.w700.jpg" alt="" className="topPFP" />
                </div>

            </div>
            
        </div>
    )
}



