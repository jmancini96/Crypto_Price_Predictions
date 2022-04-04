import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {
  const data = [
    {
      name: 'January',
      "Price": 4000,

    },
    {
      name: 'Feburary',
      "Price": 3000,

    },
    {
      name: 'March',
      "Price": 2000,

    },
    {
      name: 'April',
      "Price": 2780,

    },
    {
      name: 'May',
      "Price": 1890,

    },
    {
      name: 'June',
      "Price": 2390,

    },
    {
      name: 'July',
      "Price": 3490,

    },
    {
      name: 'August',
      "Price": 4000,

    },
    {
      name: 'September',
      "Price": 3000,

    },
    {
      name: 'October',
      "Price": 2000,

    },
    {
      name: 'November',
      "Price": 2780,

    },
    {
      name: 'December',
      "Price": 100,

    },

  ];
  return (
    <div className="chart">
        <h3 className="chartTitle">Price Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"/>
            <YAxis/> 
            <Tooltip></Tooltip>
            <Line type="monotone" dataKey="Price" stroke="#5550bd"/>
          </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
