
import DashboardLayout from '../../components/DashboardLayout'
import './Dashboard.css'
import PortfolioSection from './components/PortfolioSection'


export default function Dashboard(){
   
    return (
        <div>
            <DashboardLayout title="Dashboard" children={<PortfolioSection/>}>
            </DashboardLayout>
          
        </div>

    )
}