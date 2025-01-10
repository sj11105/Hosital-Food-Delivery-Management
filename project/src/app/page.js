import { PatientManagement } from "../components/patient";
import { DietChartManagement } from "../components/dietchart";
import { PantryStaffManagement } from "../components/pantrystaff";
import { MealTracking } from "../components/mealtracker";
import { AlertsAnalytics } from "../components/alert";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <PatientManagement />
        <DietChartManagement />
        <PantryStaffManagement />
        <MealTracking />
      </div>
      <AlertsAnalytics />
    </div>
  );
}
