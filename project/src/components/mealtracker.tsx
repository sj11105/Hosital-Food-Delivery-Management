"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/utils/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/utils/components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/utils/components/ui/button";

export function MealTracking() {
  const [meals, setmeal] = useState([]);

  const fetchmeal = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/meal/ftch");
      console.log(response.data);
      setmeal(response.data.fetchedmeal);
    } catch (error) {
      setmeal([]);
    }
  };

  useEffect(() => {
    fetchmeal();
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Meal Tracker</CardTitle>
        <Link href="/createmeal">
          <Button size="sm">Add Meal</Button>
        </Link>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Delivery Status</TableHead>
              <TableHead>Assigned Partner</TableHead>
              <TableHead>Delivery Partner</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(meals) && meals.length > 0 ? (
              meals.map((meal, index) => (
                <TableRow key={index}>
                  <TableCell>{meal.mealType || "N/A"}</TableCell>
                  <TableCell>{meal.preparationStatus || "N/A"}</TableCell>
                  <TableCell>{meal.deliveryStatus || "N/A"}</TableCell>
                  <TableCell>{meal.assignedTo?.name || "N/A"}</TableCell>
                  <TableCell>{meal.deliveryPersonnel?.name || "N/A"}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3}>No meals found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
