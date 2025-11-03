import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProgressDemo from "@/components/ui/progress-demo";
import { Progress } from "@/components/ui/progress";
import HeroDashboard from "./com_/hero";
import GridContentDashboard from "./com_/grid-content";
import { Announcements } from "./com_/announcements";
import { Leaderboard } from "./com_/leaderboard";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Hero banner */}
      <HeroDashboard />

      {/* Grid content */}
      <GridContentDashboard />

      {/* Bottom: Announcements + Leaderboard */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Announcements />
        <Leaderboard />
      </div>
    </div>
  );
}


