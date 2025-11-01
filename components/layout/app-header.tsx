import Image from "next/image"
import { Card } from "../ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "../ui/separator"

export const AppHeader = () => {
  return <div className="py-3">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
      <div className="order-2 w-full lg:order-1 lg:w-auto">
        <div className="text-base font-semibold">Welcome Back, Mark</div>
        <Breadcrumb>
          <BreadcrumbList className="gap-3">
            <BreadcrumbItem>
              <BreadcrumbLink className="text-sm" href="/">Overview</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator children={"/"} />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-base">Athlete Program Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Right cluster: search + icons + avatar */}
      <div className="flex items-center gap-4 order-1 lg:order-2 w-full lg:w-auto justify-between">
        <div className="flex items-center w-full lg:w-[280px] gap-2 h-10 rounded-full px-4 min-w-[280px] glass-card bg-white/30">
          <Image src="/icons/search.svg" width={18} height={18} alt="search" />
          <input className="bg-transparent outline-none text-sm w-full placeholder:text-black/60" placeholder="Search" />
        </div>

        <div className="w-px h-6 border-r border-black/10" />

        <div className="flex gap-[15px] items-center">
          <button className="relative w-10 h-10 grid place-items-center rounded-full glass-card bg-white/30">
            <Image src="/icons/message-notification-02.svg" alt="messages" width={20} height={20} />
          </button>
          <button className="relative w-10 h-10 grid place-items-center rounded-full glass-card bg-white/30 ">

            <Image src="/icons/bell.svg" alt="notifications" width={20} height={20} />
            <div className="w-2.5 h-2.5 flex absolute top-2 right-2 items-center justify-center rounded-full bg-[#F03] border-[0.4px] border-[#E21212] text-[6px] text-white">4</div>
          </button>
          <div className="w-10 h-10 rounded-full bg-muted overflow-hidden" >
            <Image src="/icons/avater-image.png" alt="avatar" width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  </div>

}