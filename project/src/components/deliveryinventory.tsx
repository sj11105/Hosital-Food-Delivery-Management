"use client";

import { useEffect, useState } from "react";
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
import Link from "next/link";
import axios from "axios";

export function DeliveryManagement() {
  const [deliveries, setDeliveries] = useState([]);

  // Fetch delivery data from API
  const fetchDelivery = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/delivery/fetch"
      );
      console.log(response.data);
      setDeliveries(response.data);
    } catch (error) {
      console.error("Error fetching delivery data:", error);
    }
  };

  useEffect(() => {
    fetchDelivery();
  }, []);

  // Update delivery status
  const updateDeliveryStatus = (deliveryId: number, newStatus: string) => {
    setDeliveries((prevDeliveries) =>
      prevDeliveries.map((delivery) =>
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
        <Link href="/createdelivery">
          <Button size="sm">Add Delivery</Button>
        </Link>
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
            {deliveries.map((delivery, index) => (
              <TableRow key={delivery.id || index}>
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
