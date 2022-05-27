import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function Chart({title, data, dataKey, grid}) {
  
  return (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey={dataKey} stroke="#5550bd"/>
            <YAxis/> 
            <Tooltip></Tooltip>
            { grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="8 5" strokeWidth="4"/>}
            <Line type="monotone" dataKey="Price" stroke="#5550bd"/>
          </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
