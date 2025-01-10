"use client";
import React, { useEffect, useState } from "react";
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
import axios from "axios";
import Link from "next/link";

export function PatientManagement() {
  const [patients, setPatients] = useState([]);

  // Fetch patients from the database
  const fetchPatients = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/patients/fetch"
      );
      console.log(response.data); // Debug the response
      setPatients(response.data || []); // Ensure patients is always an array
    } catch (error) {
      console.error("Failed to fetch patients:", error);
      setPatients([]); // Set empty array on error
    }
  };

  // Fetch patients on component mount
  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Patient Management
        </CardTitle>
        <Link href="/create">
          <Button size="sm">Add Patient</Button>
        </Link>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Allergies</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(patients) && patients.length > 0 ? (
              patients.map((patient, index) => (
                <TableRow key={index}>
                  <TableCell>{patient.name || "N/A"}</TableCell>
                  <TableCell>{patient.roomInfo?.roomNumber || "N/A"}</TableCell>
                  <TableCell>{patient.Allergies || "None"}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3}>No patients found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
