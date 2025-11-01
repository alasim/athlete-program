import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProgressDemo from "@/components/ui/progress-demo";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";


export const Announcements = () => {

    return <Card className="p-0 pb-4 bg-white/30 gap-4">
        <div className="flex-row items-center bg-white/30 justify-between h-[78px] px-4 flex judbtify-between">
            <CardTitle>Announcements preview</CardTitle>
            <Button >View More</Button>
        </div>
        <CardContent className="space-y-3 px-4">
            {/* post 1 */}
            <Card className="overflow-hidden bg-white gap-4">
                <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted overflow-hidden" >
                            <Image src={`/images/user-1.png`} alt="avatar" width={40} height={40} />
                        </div>
                        <div>
                            <div className="text-base mb-1"><span className="font-bold">Sam Guy</span> <span className="text-[#536471]">@samguy</span></div>
                            <div className="text-[10px] text-black/60">8h ago</div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-3 p-0">
                    <div className="space-y-1">
                        <div className="text-xl text-[#0F1419] font-medium">Live video session</div>
                        <div className="text-sm text-[#0F1419]"><span className="text-primary">COACH GORDAN</span> & <span className="text-primary">COACH MCCULLUM</span> Live video session </div>
                    </div>
                    <div className="relative h-[220px] w-full rounded-md overflow-hidden bg-muted">
                        <Image src={`/images/video-thub.png`} alt="announcement" fill className="object-cover origin-top object-top" />
                        <div className="w-12 h-12 backdrop-blur-md absolute top-1/2 left-1/2 bg-black/30 -translate-x-1/2 -translate-y-1/2 rounded-full glass-card flex items-center justify-center">
                            <Image src={'/icons/play.svg'} width={20} height={20} alt="" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="justify-between p-0 py-1">
                    <div className="flex gap-1.5 ">
                        <Button className="red-button gap-2 py-2 px-4 rounded-xl border-none text-[10px]"><Image src={'/icons/play-circle.svg'} width={20} height={20} alt="" /> Join LIVE</Button>
                        <Button variant={'secondary'} className="bg-primary/15 gap-2 text-primary py-2 px-4 rounded-xl border-none text-[10px]"><Image src={'/icons/rsvp.svg'} width={20} height={20} alt="" /> RSVP to Practice</Button>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex gap-1">
                            <Image src={'/icons/heart.svg'} width={20} height={20} alt="" />
                            <div className="text-sm text-muted-foreground">20 Likes</div>
                        </div>
                        <div className="flex gap-1">
                            <Image src={'/icons/message.svg'} width={20} height={20} alt="" />
                            <div className="text-sm text-muted-foreground">34 Replies</div>
                        </div>
                    </div>
                </CardFooter>
            </Card>

            {/* post 2 */}
            <Card className="overflow-hidden bg-white gap-4">
                <CardHeader className="pb-2">
                    <div className="flex items-center">
                        <div className="flex items-center gap-3">

                            <div className="w-10 h-10 rounded-full bg-muted overflow-hidden" >
                                <Image src={`/images/user-2.png`} alt="avatar" width={40} height={40} />
                            </div>
                            <div>
                                <div className="text-base mb-1"><span className="font-bold">Sam Guy</span> <span className="text-[#536471]">@samguy</span></div>
                                <div className="text-[10px] text-black/60">8h ago</div>
                            </div>

                        </div>
                        <div className="ml-auto flex gap-2">
                            <div className={cn("p-1 relative w-6 h-6 rounded-full flex items-center justify-center")}>
                                <Image src={'/icons/share.svg'} width={20} height={20} alt="" />
                            </div>
                            <div className={cn("p-1 relative w-6 h-6 rounded-full flex items-center justify-center")}>
                                <Image src={'/icons/more.svg'} className="w-full h-full" width={20} height={20} alt="" />
                            </div>

                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-3 p-0">
                    <div className="space-y-1">
                        <div className="text-xl text-[#0F1419] font-medium">Live video session</div>
                        <div className="text-sm text-black/70">Join us for our Friday morning casual bike ride around central park! We will meet you all @6AM EST near Great Lawn Softball Field 7!</div>
                    </div>
                    <div>
                        <div className="relative h-[220px] w-full rounded-md overflow-hidden bg-muted">

                            <Image src={`/images/map.png`} alt="announcement" fill className="object-cover origin-top object-top" />

                        </div>
                        <div className="text-sm text-[#0F1419] pt-3.5">In NYC you should come and watch it out!</div>
                    </div>
                </CardContent>
                <div className="justify-between p-0 py-4 flex border-t">
                    <div className="flex gap-1.5 ">
                        <Button className="gap-2 py-2 px-4 rounded-xl border-none text-[10px]"><Image src={'/icons/calendar-back.svg'} width={20} height={20} alt="" /> Count me in!</Button>
                        <Button variant={'secondary'} className="bg-primary/15 gap-2 text-primary py-2 px-4 rounded-xl border-none text-[10px]"><Image src={'/icons/location.svg'} width={20} height={20} alt="" /> View Location</Button>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex gap-1">
                            <Image src={'/icons/heart.svg'} width={20} height={20} alt="" />
                            <div className="text-sm text-muted-foreground">20 Likes</div>
                        </div>
                        <div className="flex gap-1">
                            <Image src={'/icons/message.svg'} width={20} height={20} alt="" />
                            <div className="text-sm text-muted-foreground">34 Replies</div>
                        </div>
                    </div>
                </ div>
            </Card>
        </CardContent >
    </Card >
}


{/* <Card className="overflow-hidden bg-white gap-4">
                <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted overflow-hidden" >
                            <Image src={`/images/user-2.png`} alt="avatar" width={40} height={40} />
                        </div>
                        <div>
                            <div className="text-base mb-1"><span className="font-bold">Sam Guy</span> <span className="text-[#536471]">@samguy</span></div>
                            <div className="text-[10px] text-black/60">8h ago</div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-3 p-0">
                    <div className="space-y-1">
                        <div className="text-xl text-[#0F1419] font-medium">Casual Ride!</div>
                        <div className="text-sm text-black/70">Join us for our Friday morning casual bike ride around central park! We will meet you all @6AM ESTnear Great Lawn Softball Field 7!</div>
                    </div>
                        <div>
                            <div className="relative h-[220px] w-full rounded-md overflow-hidden bg-muted">
                                <Image src={`/images/map.png`} alt="announcement" fill className="object-cover origin-top object-top" />
                            </div>
                            <div className="text-sm text-[#0F1419] py-3.5">In NYC you should come and watch it out!</div>
                        </div>        
                </CardContent>

                <CardFooter className="justify-between p-0 py-1 border-t">
                    <div className="flex gap-1.5 ">
                        <Button className="red-button gap-2 py-2 px-4 rounded-xl border-none text-[10px]"><Image src={'/icons/play-circle.svg'} width={20} height={20} alt="" /> Join LIVE</Button>
                        <Button variant={'secondary'} className="bg-primary/15 gap-2 text-primary py-2 px-4 rounded-xl border-none text-[10px]"><Image src={'/icons/rsvp.svg'} width={20} height={20} alt="" /> RSVP to Practice</Button>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex gap-1">
                            <Image src={'/icons/heart.svg'} width={20} height={20} alt="" />
                            <div className="text-sm text-muted-foreground">20 Likes</div>
                        </div>
                        <div className="flex gap-1">
                            <Image src={'/icons/message.svg'} width={20} height={20} alt="" />
                            <div className="text-sm text-muted-foreground">34 Replies</div>
                        </div>
                    </div>
                </CardFooter>
            </Card> */} 