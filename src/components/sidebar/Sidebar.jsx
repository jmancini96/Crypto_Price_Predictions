import "./sidebar.css"
import ViewListIcon from '@mui/icons-material/ViewList';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <ViewListIcon className="sidebarIcon"/>
                Home
              </li>
              <li className="sidebarListItem">
                <AnalyticsIcon className="sidebarIcon"/>
                Analytics
              </li>
              <li className="sidebarListItem">
                <WaterfallChartIcon className="sidebarIcon"/>
                Trades
              </li>
              <li className="sidebarListItem">
                <AccountBalanceWalletIcon className="sidebarIcon"/>
                Wallets
              </li>
              <li className="sidebarListItem">
                <AccessibilityNewIcon className="sidebarIcon"/>
                Gooses
              </li>
              <li className="sidebarListItem">
                <SettingsIcon className="sidebarIcon"/>
                Settings
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Other menu test</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <ViewListIcon className="sidebarIcon"/>
                Home
              </li>
              <li className="sidebarListItem">
                <AnalyticsIcon className="sidebarIcon"/>
                Analytics
              </li>
              <li className="sidebarListItem">
                <WaterfallChartIcon className="sidebarIcon"/>
                Trades
              </li>
              <li className="sidebarListItem">
                <AccountBalanceWalletIcon className="sidebarIcon"/>
                Wallets
              </li>
              <li className="sidebarListItem">
                <AccessibilityNewIcon className="sidebarIcon"/>
                Gooses
              </li>
              <li className="sidebarListItem">
                <SettingsIcon className="sidebarIcon"/>
                Settings
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
