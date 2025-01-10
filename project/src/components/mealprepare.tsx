"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/utils/components/ui/card";
import { Button } from "@/utils/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/utils/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/utils/components/ui/dialog";

// Mock data for meal preparation tasks
const mockTasks = [
  {
    id: 1,
    patientName: "John Doe",
    mealType: "Breakfast",
    dietChart: "Low Sodium",
    status: "Pending",
  },
  {
    id: 2,
    patientName: "Jane Smith",
    mealType: "Lunch",
    dietChart: "Diabetic",
    status: "In Progress",
  },
  {
    id: 3,
    patientName: "Alice Johnson",
    mealType: "Dinner",
    dietChart: "Vegetarian",
    status: "Completed",
  },
];

export function MealPreparationTasks() {
  const [tasks, setTasks] = useState(mockTasks);

  const updateTaskStatus = (taskId: number, newStatus: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Meal Preparation Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient Name</TableHead>
              <TableHead>Meal Type</TableHead>
              <TableHead>Diet Chart</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.patientName}</TableCell>
                <TableCell>{task.mealType}</TableCell>
                <TableCell>{task.dietChart}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Task Details</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div>
                          <h3 className="font-semibold">
                            Patient: {task.patientName}
                          </h3>
                          <p>Meal Type: {task.mealType}</p>
                          <p>Diet Chart: {task.dietChart}</p>
                          <p>Status: {task.status}</p>
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button
                            onClick={() =>
                              updateTaskStatus(task.id, "In Progress")
                            }
                            disabled={task.status === "In Progress"}
                          >
                            Mark In Progress
                          </Button>
                          <Button
                            onClick={() =>
                              updateTaskStatus(task.id, "Completed")
                            }
                            disabled={task.status === "Completed"}
                          >
                            Mark Completed
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
