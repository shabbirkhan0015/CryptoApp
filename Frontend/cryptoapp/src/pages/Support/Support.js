import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import './Support.css'

export default function Support(){
    return(
        <div>
            <DashboardLayout title={"Support"}>
                    <SupportCard/>
            </DashboardLayout>
        </div>
    )
}