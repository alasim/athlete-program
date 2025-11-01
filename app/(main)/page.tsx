import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProgressDemo from "@/components/ui/progress-demo";
import { Progress } from "@/components/ui/progress";
import HeroDashboard from "./com_/hero";
import GridContentDashboard from "./com_/grid-content";
import { Announcements } from "./com_/announcements";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Hero banner */}
      <HeroDashboard />

      {/* Grid content */}
      <GridContentDashboard />

      {/* Bottom: Announcements + Leaderboard */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Announcements />

        <Card className="gap-4">
          <div className="justify-between flex items-center mb-2">
            <CardTitle className="flex gap-1">Leaderboard</CardTitle>
            <Button >View More</Button>
          </div>
          <CardContent className="space-y-5 px-0">
            <div className="w-full h-fit relative">
              <Image src={`/images/leaderboard-rank.svg`} className="w-full" alt="avatar" width={580} height={390} />
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="rounded-[21px] flex gap-5 h-[60px] max-h-[60px] items-center p-4 bg-white/40">
                  <div>#{i + 3}</div>
                  <div className="flex items-center gap-4">
                    <div className={cn(" rounded-full bg-muted overflow-hidden", i < 3 ? "w-11 h-11 scale-150" : "w-11 h-11")} >
                      <Image src={i < 3 ? `/images/rank-${i}.svg` : `/images/user-${i - 2}.png`} alt="avatar" width={i < 3 ? 50 : 45} height={i < 3 ? 50 : 45} />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Rank User {i}</div>
                      <div className="text-xs text-black/70">{i + 1003}</div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}


