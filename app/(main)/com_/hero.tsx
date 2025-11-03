import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProgressDemo from "@/components/ui/progress-demo";
import { Progress } from "@/components/ui/progress";

export default function HeroDashboard() {

    return <section className="relative w-full flex justify-between flex-col p-7 overflow-hidden bg-cover bg-no-repeat rounded-xl lg:h-[427px] h-[527px]"
        style={{
            backgroundImage: "url(/game-image.png)"
        }} >
        <div className="absolute inset-0 image-gradient "></div>
        <div className="">
            <h1 className="text-white text-3xl font-semibold tracking-tight">The QB Fundamentals</h1>
        </div>

        {/* Overlay stats row */}
        <div className="relative flex gap-3 items-end flex-wrap">

            {/* Total Athletes */}
            <div className="bg-white/90 p-4 h-[78px] px-5 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center">
                    <Image src="/icons/users.svg" alt="Total Athletes" width={20} height={20} />
                </div>
                <div>
                    <div className="text-black/70 font-medium leading-[22.5px] text-xs">Total Athletes</div>
                    <div className="flex items-end gap-2">
                        <div className="text-black text-xl font-semibold leading-[30px]">65</div>
                        <div className="flex gap-1 pb-1">
                            <span className="text-[#38AA4B] text-[11px]">+12</span> <Image width={14} height={14} src={'/icons/up-rise.svg'} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Projected Ranking */}
            <div className="bg-white/90 p-4 px-5 h-[78px] rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center">
                    <Image src="/icons/rank.svg" alt="Total Athletes" width={20} height={20} />
                </div>
                <div>
                    <div className="text-black/70 font-medium leading-[22.5px] text-xs">Projected Ranking</div>
                    <div className="text-black text-xl font-semibold leading-[30px]">#5</div>
                </div>
            </div>
            {/* Consistency Score */}
            <div className="bg-white/90 p-4 px-5 justify-between h-[78px] w-[263px] rounded-2xl flex items-center gap-4">
                <div>
                    <div className="text-black font-semibold leading-[22.5px] text-xs">Consistency Score</div>
                    <div className="text-black/70 text-[10px]">last 30 days</div>
                </div>
                <Image src="/progress-blue.svg" alt="Total Athletes" width={65} height={65} />
            </div>
            {/* Weekly Progress */}
            <div className="bg-white/90 w-[263px] justify-between h-[78px] p-4 px-5 rounded-2xl flex items-center gap-4">
                <div>
                    <div className="text-black font-semibold leading-[22.5px] text-xs">Weekly Progress</div>
                </div>
                <Image src="/progress-green.svg" alt="Total Athletes" width={65} height={65} />
            </div>
            {/* Active Streak */}
            <div className="bg-white/90 h-[180px] w-[317px] p-4 px-5 rounded-2xl relative">
                <div className="flex justify-between items-center">
                    <div className="text-black font-semibold leading-[22.5px] text-xs">Active Streak</div>
                    <div className="flex justify-between gap-1 items-center">
                        <Button className="orange-button border-none px-3 text-xs">Hot Streek</Button>
                        <Image src="/icons/fire-icon.png" alt="fire" width={40} height={40} />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="text-[28px] font-semibold text-black leading-[37.5px]">12 Days</div>
                    <div className="text-black/80 font-medium mt-0.5 text-[10px]">Next milestone: 15 days</div>
                </div>

                {/* Calender row */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                    {[{ w: "M", d: 19 }, { w: "T", d: 20 }, { w: "W", d: 21 }, { w: "T", d: 22 }, { w: "F", d: 23 }, { w: "S", d: 24 }, { w: "S", d: 25 }].map((day, i) => (
                        <div key={day.d} className="flex flex-col items-center">
                            <div className="text-black/70 text-[10px] font-medium">{day.w}</div>
                            {i <= 3 ? <Image src="/icons/filled-checked.svg" alt="fire" width={24} height={24} /> : <div className="h-6 w-6 rounded-full flex items-center justify-center text-black/70 text-[10px] font-medium">{day.d}</div>}
                        </div>
                    ))}

                </div>

            </div>

        </div>
    </section>
}