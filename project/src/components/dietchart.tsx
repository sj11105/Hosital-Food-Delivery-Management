"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/utils/components/ui/card";
import { Button } from "@/utils/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/utils/components/ui/tabs";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export function DietChartManagement() {
  const [diets, setDiet] = useState({
    morning: [],
    evening: [],
    night: [],
  });

  const fetchDiet = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/dietchart/get"
      );
      console.log(response.data);

      setDiet({
        morning: response.data.filter(
          (diet) => diet.morning.ingredients.length > 0
        ),
        evening: response.data.filter(
          (diet) => diet.evening.ingredients.length > 0
        ),
        night: response.data.filter(
          (diet) => diet.night.ingredients.length > 0
        ),
      });
    } catch (error) {
      console.error("Error fetching diet data", error);
    }
  };

  useEffect(() => {
    fetchDiet();
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Diet Chart Management
        </CardTitle>
        <Link href="/creatediet">
          <Button size="sm">Create Diet Chart</Button>
        </Link>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="morning">
          <TabsList>
            <TabsTrigger value="morning">Morning</TabsTrigger>
            <TabsTrigger value="evening">Evening</TabsTrigger>
            <TabsTrigger value="night">Night</TabsTrigger>
          </TabsList>

          {/* Morning Diets */}
          <TabsContent value="morning">
            {diets.morning.length > 0 ? (
              diets.morning.map((diet, index) => (
                <div key={index}>
                  <h3>{diet.morning.meal}</h3>
                  <ul>
                    {diet.morning.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>Instructions:</strong> {diet.morning.instructions}
                  </p>
                </div>
              ))
            ) : (
              <p>No morning meal plans available.</p>
            )}
          </TabsContent>

          {/* Evening Diets */}
          <TabsContent value="evening">
            {diets.evening.length > 0 ? (
              diets.evening.map((diet, index) => (
                <div key={index}>
                  <h3>{diet.evening.meal}</h3>
                  <ul>
                    {diet.evening.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>Instructions:</strong> {diet.evening.instructions}
                  </p>
                </div>
              ))
            ) : (
              <p>No evening meal plans available.</p>
            )}
          </TabsContent>

          {/* Night Diets */}
          <TabsContent value="night">
            {diets.night.length > 0 ? (
              diets.night.map((diet, index) => (
                <div key={index}>
                  <h3>{diet.night.meal}</h3>
                  <ul>
                    {diet.night.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>Instructions:</strong> {diet.night.instructions}
                  </p>
                </div>
              ))
            ) : (
              <p>No night meal plans available.</p>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
