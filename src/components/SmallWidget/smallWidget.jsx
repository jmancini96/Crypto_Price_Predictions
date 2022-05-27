import './SmallWidget.css'
import TvIcon  from '@mui/icons-material/Tv';

export default function SmallWidget() {
  return (
    <div className='widgetSmall'>
        <span className="widgetSmallTitle">Newly added coins</span>
        <ul className="widgetSmallList">
            <li className="widgetSmallListItem">
                <img src='https://cdn.britannica.com/75/177675-050-CA1EF60C/detail-Aristotle-School-of-Athens-Plato-Raphael.jpg?q=60'
                    alt=''
                    className='widgetSmallImg'
                ></img>
                <div className='widgetSmallUser'>
                    <span className="widgetSmallUserName">two philospohers </span>
                    <span className="widgetSmallUserDesc">talking </span>
                </div>
                <button className="widgetSmallButton">
                    <TvIcon className="widgetSmallIcon"></TvIcon>
                    display
                </button>       
            </li>
            <li className="widgetSmallListItem">
                <img src='https://cdn.britannica.com/75/177675-050-CA1EF60C/detail-Aristotle-School-of-Athens-Plato-Raphael.jpg?q=60'
                    alt=''
                    className='widgetSmallImg'
                ></img>
                <div className='widgetSmallUser'>
                    <span className="widgetSmallUserName">two philosophers </span>
                    <span className="widgetSmallUserDesc">talking </span>
                </div>
                <button className="widgetSmallButton">
                    <TvIcon className="widgetSmallIcon"></TvIcon>
                    display
                </button>       
            </li>
            <li className="widgetSmallListItem">
                <img src='https://cdn.britannica.com/75/177675-050-CA1EF60C/detail-Aristotle-School-of-Athens-Plato-Raphael.jpg?q=60'
                    alt=''
                    className='widgetSmallImg'
                
                ></img>
                <div className='widgetSmallUser'>
                    <span className="widgetSmallUserName">two philospohers </span>
                    <span className="widgetSmallUserDesc">talking </span>
                </div>
                <button className="widgetSmallButton">
                    <TvIcon className="widgetSmallIcon"></TvIcon>
                    display
                </button>       
            </li>
            <li className="widgetSmallListItem">
                <img src='https://cdn.britannica.com/75/177675-050-CA1EF60C/detail-Aristotle-School-of-Athens-Plato-Raphael.jpg?q=60'
                    alt=''
                    className='widgetSmallImg'
                ></img>
                <div className='widgetSmallUser'>
                    <span className="widgetSmallUserName">two philospohers </span>
                    <span className="widgetSmallUserDesc">talking </span>
                </div>
                <button className="widgetSmallButton">
                    <TvIcon className="widgetSmallIcon"></TvIcon>
                    display
                </button>       
            </li>
        </ul>
    </div>
  )
}

