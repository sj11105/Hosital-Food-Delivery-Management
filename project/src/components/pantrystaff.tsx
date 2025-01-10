"use client";
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
import { Switch } from "@/utils/components/ui/switch";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { error } from "console";

export function PantryStaffManagement() {
  const [staffs, setstaff] = useState([]);

  const fetchstaff = async () => {
    try {
      const result = await axios.get("http://localhost:3000/api/staff/fetch");
      console.log(result.data);
      setstaff(result.data || []); // Ensure patients is always an array
    } catch (error) {
      setstaff([]);
    }
  };
  useEffect(() => {
    fetchstaff();
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Pantry Staff Management
        </CardTitle>
        <Link href="/staffcreate">
          {" "}
          <Button size="sm">Add Staff</Button>
        </Link>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead>Available</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(staffs) && staffs.length > 0 ? (
              staffs.map((staff, index) => (
                <TableRow key={index}>
                  <TableCell>{staff.name || "N/A"}</TableCell>
                  <TableCell>{staff.role}</TableCell>
                  <TableCell>{staff.contactInfo || "None"}</TableCell>
                  <TableCell>{staff.isAvailable}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3}>No staff found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
