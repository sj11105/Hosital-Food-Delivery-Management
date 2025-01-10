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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/utils/components/ui/select";

// Mock data for delivery tasks
const mockDeliveries = [
  {
    id: 1,
    mealBoxId: "MB001",
    patientName: "John Doe",
    roomNumber: "101",
    assignedTo: "Alice",
    status: "Pending",
  },
  {
    id: 2,
    mealBoxId: "MB002",
    patientName: "Jane Smith",
    roomNumber: "202",
    assignedTo: "Bob",
    status: "In Transit",
  },
  {
    id: 3,
    mealBoxId: "MB003",
    patientName: "Alice Johnson",
    roomNumber: "303",
    assignedTo: "Charlie",
    status: "Delivered",
  },
];

export function DeliveryManagement() {
  const [deliveries, setDeliveries] = useState(mockDeliveries);

  const updateDeliveryStatus = (deliveryId: number, newStatus: string) => {
    setDeliveries(
      deliveries.map((delivery) =>
        delivery.id === deliveryId
          ? { ...delivery, status: newStatus }
          : delivery
      )
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Meal Box ID</TableHead>
              <TableHead>Patient Name</TableHead>
              <TableHead>Room Number</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deliveries.map((delivery) => (
              <TableRow key={delivery.id}>
                <TableCell>{delivery.mealBoxId}</TableCell>
                <TableCell>{delivery.patientName}</TableCell>
                <TableCell>{delivery.roomNumber}</TableCell>
                <TableCell>{delivery.assignedTo}</TableCell>
                <TableCell>{delivery.status}</TableCell>
                <TableCell>
                  <Select
                    onValueChange={(value) =>
                      updateDeliveryStatus(delivery.id, value)
                    }
                    defaultValue={delivery.status}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Update Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="In Transit">In Transit</SelectItem>
                      <SelectItem value="Delivered">Delivered</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
