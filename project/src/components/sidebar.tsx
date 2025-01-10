"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/lib/utils";
import { Button } from "@/utils/components/ui/button";
import { ScrollArea } from "@/utils/components/ui/scroll-area";
import { Clipboard, PieChart, Users, Utensils } from "lucide-react";

const sidebarItems = [
  { name: "Patient Management", href: "/", icon: Users },
  { name: "Diet Charts", href: "/diet-charts", icon: Clipboard },
  { name: "Pantry Management", href: "/pantry", icon: Utensils },
  { name: "Reports", href: "/reports", icon: PieChart },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block w-64 bg-gray-900 text-white">
      <div className="flex h-14 items-center border-b border-gray-800 px-4">
        <h2 className="text-lg font-semibold">Hospital Meals</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <nav className="space-y-1 p-2">
          {sidebarItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  pathname === item.href
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}
