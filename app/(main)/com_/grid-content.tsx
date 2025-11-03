import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProgressDemo from "@/components/ui/progress-demo";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
const items = [
    {
        title: "Review Approach Feedback",
        image: "/images/image-1.png",
        complete: 70,
        due: "Due Today"
    },
    {
        title: "Review Ghost Rush Technique feedback",
        image: "/images/image-2.png",
        complete: 0,
        due: "Due Tomorrow"
    },
    {
        title: "Film Breakdown: Elite Pass Rush",
        image: "/images/image-3.png",
        complete: 70,
        due: "Due Today"
    },
]
const dates = [
    { day: "Sun", date: "3/11" },
    { day: "Mon", date: "3/12" },
    { day: "Tue", date: "3/13" },
    { day: "Wed", date: "3/14" },
    { day: "Thu", date: "3/15", dot: "blue" },
    { day: "Fri", date: "3/16", dot: "yellow" },
    { day: "Sat", date: "3/17" },
]
export default function GridContentDashboard() {
    return <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left: Continue + Today */}
        <div className="xl:col-span-2 flex flex-col gap-6">
            <Card className="bg-white/30">
                <div className="justify-between flex items-center">
                    <CardTitle>Continue Where You Left off</CardTitle>
                    <Button >View More</Button>
                </div>
                <Carousel opts={{
                    align: "start",
                    dragFree: true,
                }}>
                    <CarouselContent className="">
                        {items.map((item, i) => (
                            <CarouselItem key={i} className="basis-auto">
                                <Card className="overflow-hidden w-[264px] gap-5 h-[250px] rounded-[21px] bg-white/40 hover:bg-white hover-shadow transition-all duration-300">
                                    <div className="relative h-28 w-full rounded-[12px] overflow-hidden">

                                        <Image src={item.image} alt="thumb" fill className="object-cover" />
                                        <div className="absolute top-1/2 w-[30px] h-[30px] flex items-center justify-center bg-white/5 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer glass-card rounded-full">
                                            <Image src="/icons/play-icon.svg" alt="play" width={21.5} height={21.5} className="" />
                                        </div>
                                    </div>
                                    <CardHeader className="h-[74px]">
                                        <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                                        <Progress value={item.complete} className="w-full h-[7px]" />
                                        <CardDescription className="flex justify-between">
                                            <div className="flex items-center gap-1">
                                                <div className="w-3 h-3 blue-box-gradient-top-border rounded" /> 70% Complete</div>
                                            <div className="flex items-center gap-1">
                                                <Image src={'/icons/calendar-muted.svg'} width={16} height={16} alt="" /> Due Today</div>

                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <Card className="gap-4">
                    <div className="justify-between flex items-center">
                        <CardTitle>Todays tasks</CardTitle>
                        <Button >View Entire Schedule</Button>
                    </div>

                    <div className="flex gap-2">
                        {dates.map((d) => (
                            <div key={d.date} className="flex relative w-24 h-20 bg-white/40 rounded-2xl flex-col items-center gap-2 p-3 cursor-pointer hover:bg-white hover-shadow">
                                {d.dot && <div className={cn(`absolute top-3 right-3 w-1.5 h-1.5 rounded-full`, d.dot == "blue" ? "blue-box-gradient-top-border-shadow" : "yellow-box-gradient-top-border-shadow")} />}
                                <div className="text-lg">{d.day}</div>
                                <div className="text-xs">{d.date}</div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-3">
                        {/* item 1 */}
                        <div className="grid grid-cols-5 rounded-xl p-3 hover:bg-white/40">
                            <div className="col-span-3">
                                <div className="flex gap-2 items-center mb-1">
                                    <div className="font-medium text-sm">Linebacker Drills</div>
                                    <Badge variant={'secondary'} className="bg-black/10 px-3 py-1.5 text-[8px]">Video submission required</Badge>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 blue-box-gradient-top-border rounded" ></div>
                                    <span className="text-xs">Hawaii Trench Warriors</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center gap-1">
                                    <Image src={'/icons/calendar-muted.svg'} width={14} height={14} alt="" /> <span className="text-black/80 text-xs">Due Today</span></div>
                            </div>
                            <div className="flex items-center justify-end">
                                <Button className="px-2.5 h-7"><Image className="p-[3px]" src={"/icons/upload.svg"} width={16} height={16} alt="" /> Upload</Button>
                            </div>

                        </div>

                        {/* Item 2 */}
                        <div className="grid grid-cols-5 rounded-xl p-3 hover:bg-white/40">
                            <div className="col-span-3">
                                <div className="flex gap-2 items-center mb-1">
                                    <div className="font-medium text-sm">University of Oregon Virtual Camp</div>
                                    <Badge variant={'secondary'} className="bg-white/65 text-[#FF5151] px-3 py-1.5 text-[8px]"><div className="w-1.5 h-1.5 rounded-[1.5px] bg-[#FF5151]" /> Live</Badge>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 yellow-box-gradient-top-border-shadow shadow-none rounded" ></div>
                                    <span className="text-xs">Hawaii Trench Warriors</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center gap-1">
                                    <Image src={'/icons/clock.svg'} width={14} height={14} alt="" /> <span className="text-black/80 text-xs">5:30 pm</span></div>
                            </div>
                            <div className="flex items-center justify-end">
                                <Button className="px-2.5 h-7  gap-1"><Image className="p-[3px]" src={"/icons/bell-fill.svg"} width={16} height={16} alt="" /> Upload</Button>
                            </div>

                        </div>

                        {/* item 3 */}
                        <div className="grid grid-cols-5 rounded-xl p-3 hover:bg-white/40">
                            <div className="col-span-3">
                                <div className="flex gap-2 items-center mb-1">
                                    <div className="font-medium text-sm">QB Fundamentals</div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 blue-box-gradient-top-border rounded" ></div>
                                    <span className="text-xs">Hawaii Trench Warriors</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center gap-1">
                                    <Image src={'/icons/check-green.svg'} width={14} height={14} alt="" /> <span className="text-[#18952D] text-xs">Complete</span></div>
                            </div>
                            <div className="flex items-center justify-end">
                                <Button disabled variant={'secondary'} className="px-2.5 h-7  gap-1 gray-button text-white"> Done</Button>
                            </div>

                        </div>

                        {/* item 4 */}
                        <div className="grid grid-cols-5 rounded-xl p-3 hover:bg-white/40">
                            <div className="col-span-3">
                                <div className="flex gap-2 items-center mb-1">
                                    <div className="font-medium text-sm">Practice Reading Offense Quiz</div>

                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 blue-box-gradient-top-border rounded" ></div>
                                    <span className="text-xs">Hawaii Trench Warriors</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center gap-1">
                                    <Image src={'/icons/calendar-muted.svg'} width={14} height={14} alt="" /> <span className="text-black/80 text-xs">3 days left</span></div>
                            </div>
                            <div className="flex items-center justify-end">
                                <Button className="px-2.5 h-7 gap-1"><Image className="p-[3px]" src={"/icons/play.svg"} width={16} height={16} alt="" /> Start</Button>
                            </div>

                        </div>
                    </div>
                </Card>
            </Card>


        </div>

        {/* Right: Recent Activity + Coach Feedback */}
        <div className="flex flex-col gap-6">
            <Card className="gap-4">
                <div className="justify-between flex items-center">
                    <CardTitle className="flex gap-1">Recent Activity <Image width={37} height={13} alt="" src={'/icons/live-icon-text.svg'} /></CardTitle>
                    <div className="flex gap-3">
                        <div className="w-10 h-10 bg-white/65 rounded-full flex items-center justify-center">
                            <Image width={20} height={20} alt="" src={'/icons/filter.svg'} />
                        </div>
                        <Button >View More</Button>
                    </div>
                </div>

                <div className="space-y-3">
                    {/* item 1 */}
                    <div className="flex rounded-xl p-3 gap-3 hover:bg-white/40">
                        <div className="w-10 h-10 shrink-0 bg-white/65 rounded-full flex items-center justify-center">
                            <Image width={24} height={24} alt="" src={'/icons/famicons_logo-vue.svg'} />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <div className="flex w-full justify-between">
                                <div className="font-medium text-sm">Coach Bronson added a task</div>
                                <span className="text-[10px] text-[#2C4AFF]">1min ago</span>
                            </div>
                            <span className="text-xs text-black/70">Check the itinerary for optimization suggestions.</span>
                        </div>
                    </div>

                    {/* item 2 */}
                    <div className="flex rounded-xl p-3 gap-3 hover:bg-white/40">
                        <div className="w-10 h-10 shrink-0 bg-white/65 rounded-full flex items-center justify-center">
                            <Image width={24} height={24} alt="" src={'/icons/famicons_logo-vue-muted.svg'} />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <div className="flex w-full justify-between">
                                <div className="font-medium text-sm">Coach Johnny  gave feedback on your submission</div>
                                <span className="text-[10px] text-[#2C4AFF]">1min ago</span>
                            </div>
                            <Button className="w-fit" >View Feedback</Button>
                        </div>
                    </div>

                    {/* item 3 */}
                    <div className="flex rounded-xl p-3 gap-3 hover:bg-white/40">
                        <div className="w-10 h-10 shrink-0 bg-white/65 rounded-full flex items-center justify-center">
                            <Image width={24} height={24} alt="" src={'/icons/famicons_logo-vue.svg'} />
                        </div>
                        <div className="w-full">
                            <div className="flex w-full justify-between">
                                <div className="font-medium text-sm">Coach Sarah replied to your comment</div>
                                <span className="text-[10px] text-[#2C4AFF]">1min ago</span>
                            </div>
                            <span className="text-xs text-black/70">Check the itinerary for optimization suggestions.</span>
                        </div>
                    </div>


                </div>
            </Card>

            <Card className="gap-4">
                <div className="justify-between flex items-center">
                    <CardTitle className="flex gap-1">Coach Feedback</CardTitle>
                    <Button >View More</Button>
                </div>
                <CardContent className="space-y-3 px-0">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-[21px] p-4 bg-white/40">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-muted overflow-hidden" >
                                        <Image src={`/images/user-${i}.png`} alt="avatar" width={40} height={40} />
                                    </div>
                                    <div>
                                        <div className="font-medium text-sm">Coach Sarah</div>
                                        <div className="text-xs text-black/70">{i + 1}h ago</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Image src={'/icons/star.svg'} alt="rating" width={16} height={16} />
                                    <Image src={'/icons/star.svg'} alt="rating" width={16} height={16} />
                                    <Image src={'/icons/star.svg'} alt="rating" width={16} height={16} />
                                    <Image src={'/icons/star.svg'} alt="rating" width={16} height={16} />
                                    <Image src={'/icons/star-half.svg'} alt="rating" width={16} height={16} />
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-black/70">
                                Great progress on your strength training! 💪 Stay consistent and keep challenging yourself. You’re getting stronger every day — keep pushing! 🚀
                            </p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    </section>
}

