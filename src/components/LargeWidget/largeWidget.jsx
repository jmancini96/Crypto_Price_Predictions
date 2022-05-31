import "./LargeWidget.css"

export default function largeWidget() {
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
        
        </table>
    </div>
  )
}