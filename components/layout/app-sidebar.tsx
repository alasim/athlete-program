import Image from "next/image"
import { Card } from "../ui/card"
import { cn } from "@/lib/utils"
const sidebarItems = [
    {
        Group: "Main",
        children: [
            {
                icon: '/icons/home.svg',
                label: 'Home',
            },
            {
                icon: '/icons/edu.svg',
                label: 'Education',
            },
            {
                icon: '/icons/list.svg',
                label: 'List',
            },
            {
                icon: '/icons/chat.svg',
                label: 'Chat',
            },
            {
                icon: '/icons/bars.svg',
                label: 'Chat',
            },
            {
                icon: '/icons/users.svg',
                label: 'Chat',
            },
            {
                icon: '/icons/calendar.svg',
                label: 'Chat',
            },
        ]
    },
    {
        Group: "Trak",
        children: [
            {
                icon: '/icons/rise.svg',
                label: 'Home',
            },
            {
                icon: '/icons/money.svg',
                label: 'Education',
            },
            {
                icon: '/icons/rank.svg',
                label: 'List',
            },

        ]
    },
    {
        Group: "Setting",
        children: [
            {
                icon: '/icons/support.svg',
                label: 'Home',
            },
            {
                icon: '/icons/users.svg',
                label: 'Education',
            },
            {
                icon: '/icons/settings.svg',
                label: 'List',
            },

        ]
    },

]
export const AppSidebar = () => {
    return <div className="w-[72px] h-max min-h-screen">
        <div className="py-6 pb-8 mx-auto flex justify-center">
            <Image alt="logo" width={32} height={32} src={'/icons/logo.svg'} />
        </div>
        <div className="glass-card px-4 py-6">
            <div className="flex flex-col gap-4 items-center">
                {sidebarItems.map((item, i) => {

                    return <div key={item.Group} className="flex flex-col gap-4">
                        {item.children.map((child, j) => (
                            <div key={child.icon} className={cn("flex justify-center items-center w-10 h-10 cursor-pointer hover:bg-white/30 rounded-lg", child.icon == '/icons/home.svg' && "blue-gradient")}>
                                <Image alt={child.label} width={20} height={20} src={child.icon} />
                            </div>
                        ))}
                        {i < sidebarItems.length - 1 && <hr className="border-px inline-block border-black/10 w-full" />}
                        {/* {i < sidebarItems.length -1 && <hr className="my-4 w-full border-t border-white/20" />} */}
                    </div>
                })}
            </div>
        </div>
    </div>

}