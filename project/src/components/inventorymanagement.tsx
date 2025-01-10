"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/utils/components/ui/card";
import { Button } from "@/utils/components/ui/button";
import { Input } from "@/utils/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/utils/components/ui/table";

// Mock data for inventory items
const mockInventory = [
  { id: 1, name: "Rice", stockLevel: 50, reorderStatus: "OK" },
  { id: 2, name: "Chicken", stockLevel: 10, reorderStatus: "Low" },
  { id: 3, name: "Vegetables", stockLevel: 30, reorderStatus: "OK" },
  { id: 4, name: "Milk", stockLevel: 5, reorderStatus: "Critical" },
];

export function InventoryManagement() {
  const [inventory, setInventory] = useState(mockInventory);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReorder = (itemId: number) => {
    // In a real application, this would trigger a reorder process
    console.log(`Reorder requested for item ${itemId}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            placeholder="Search ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ingredient Name</TableHead>
              <TableHead>Stock Level</TableHead>
              <TableHead>Reorder Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.stockLevel}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.reorderStatus === "OK"
                        ? "bg-green-100 text-green-800"
                        : item.reorderStatus === "Low"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.reorderStatus}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleReorder(item.id)}
                    disabled={item.reorderStatus === "OK"}
                  >
                    Reorder
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
