import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/utils/components/ui/card";
import { Button } from "@/utils/components/ui/button";

export function MealTracking() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Meal Tracking</CardTitle>
        <Button size="sm">View All</Button>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4">
          <div className="flex-1 bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Pending</h3>
            {/* Add meal items here */}
          </div>
          <div className="flex-1 bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">In Progress</h3>
            {/* Add meal items here */}
          </div>
          <div className="flex-1 bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Completed</h3>
            {/* Add meal items here */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
