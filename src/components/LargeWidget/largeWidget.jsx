import "./LargeWidget.css"

export default function largeWidget() {
  const Button = ({type}) =>{
    return <button className={"largeWidgetButton" + type}>({type})</button>
  }
  return (
    <div className="largeWidget">
        <h3 className="largeWidgetTitle">Latest transactions</h3>
        <table className="largeWidgetTable">
          <tr className="largeWidgetTr">
            <th className="largeWidgetTh">User</th>
            <th className="largeWidgetTh">Date</th>
            <th className="largeWidgetTh">Amount</th>
            <th className="largeWidgetTh">Status</th>
          </tr>
          <tr className="largeWidgetTr">
            <td className="largeWidgetUser">
                <img src="https://resizing.flixster.com/h-wGU0r_Jfty_3ZnhQ7ijXXXxWs=/300x300/v2/https://flxt.tmsimg.com/assets/p13044286_e_v7_ab.jpg" alt="" className="largeWidgetImg" />
                <span className="largeWidgetName">Cousin Bro</span>
            </td>
            <td className="largeWidgetDate">4 april 2022</td>
            <td className="largeWidgetAmount">500 dolla</td>
            <td className="largeWidgetStatus"><Button type="Approved"/></td>
          </tr>
          <tr className="largeWidgetTr">
            <td className="largeWidgetUser">
                <img src="https://resizing.flixster.com/h-wGU0r_Jfty_3ZnhQ7ijXXXxWs=/300x300/v2/https://flxt.tmsimg.com/assets/p13044286_e_v7_ab.jpg" alt="" className="largeWidgetImg" />
                <span className="largeWidgetName">Cousin Bro</span>
            </td>
            <td className="largeWidgetDate">4 april 2022</td>
            <td className="largeWidgetAmount">500 dolla</td>
            <td className="largeWidgetStatus"><Button type="Declined"/></td>
          </tr>
          <tr className="largeWidgetTr">
            <td className="largeWidgetUser">
                <img src="https://resizing.flixster.com/h-wGU0r_Jfty_3ZnhQ7ijXXXxWs=/300x300/v2/https://flxt.tmsimg.com/assets/p13044286_e_v7_ab.jpg" alt="" className="largeWidgetImg" />
                <span className="largeWidgetName">Cousin Bro</span>
            </td>
            <td className="largeWidgetDate">4 april 2022</td>
            <td className="largeWidgetAmount">500 dolla</td>
            <td className="largeWidgetStatus"><Button type="Pending"/></td>
          </tr>
          <tr className="largeWidgetTr">
            <td className="largeWidgetUser">
                <img src="https://resizing.flixster.com/h-wGU0r_Jfty_3ZnhQ7ijXXXxWs=/300x300/v2/https://flxt.tmsimg.com/assets/p13044286_e_v7_ab.jpg" alt="" className="largeWidgetImg" />
                <span className="largeWidgetName">Cousin Bro</span>
            </td>
            <td className="largeWidgetDate">4 april 2022</td>
            <td className="largeWidgetAmount">500 dolla</td>
            <td className="largeWidgetStatus"><Button type="Approved"/></td>
          </tr>
        </table>
    </div>
  )
}