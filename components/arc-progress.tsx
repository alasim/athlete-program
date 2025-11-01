"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ArcProgressProps {
    percentage?: number
    onPercentageChange?: (percentage: number) => void
    size?: number
    strokeWidth?: number
    primaryColor?: string
    secondaryColor?: string
    mutedColor?: string
}

export function ArcProgress({
    percentage = 65,
    onPercentageChange,
    size = 80,
    strokeWidth = 8,
    primaryColor = "#3b82f6",
    mutedColor = "red",
}: ArcProgressProps) {
    const [value, setValue] = useState(percentage)
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius

    const maxVisualProgress = 80
    const visualProgress = Math.min(value, maxVisualProgress)
    const offset = circumference - (visualProgress / 100) * circumference
    console.log("🚀 ~ ArcProgress ~ visualProgress:", visualProgress)
    console.log("🚀 ~ ArcProgress ~ offset:", offset)

    // Calculate arc path for the background circle
    const arcPath = `
    M ${(size) / 2} ${strokeWidth / 2}
    A ${radius} ${radius} 0 1 1 ${size / 2} ${size - strokeWidth / 2}
  `

    const handleChange = (newValue: number) => {
        setValue(newValue)
        onPercentageChange?.(newValue)
    }

    return (
        <div className="flex flex-col items-center justify-center gap-8 ">
            <div className="relative" style={{ width: size, height: size }}>
                {/* <div className="absolute border inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image src="/icons/Ellipse 16.svg" alt="consistency icon" width={size + 100} height={size + 100} />
                </div> */}

                <svg width={size} height={size} className="absolute inset-0 rotate-215">
                    {/* <path
                        d={arcPath}
                        fill="none"
                        stroke={mutedColor}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        opacity="0.4"
                    />

                    <path
                        d={arcPath}
                        fill="none"
                        stroke={secondaryColor}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - (maxVisualProgress / 100) * circumference}
                        opacity="0.1"
                    /> */}

                    {/* Progress arc (guide) */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={'#CCEEFF'}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={57.80530482605218}
                        className="transition-all duration-500 ease-out"
                        style={{
                            transform: "rotate(-90deg)",
                            transformOrigin: `${size / 2}px ${size / 2}px`,
                        }}
                    />
                    {/* Progress arc (dark blue) */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={primaryColor}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="transition-all duration-500 ease-out"
                        style={{
                            transform: "rotate(-90deg)",
                            transformOrigin: `${size / 2}px ${size / 2}px`,
                        }}
                    />

                    {/* Dotted circle inside */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius - strokeWidth}
                        fill="none"
                        stroke="#7AD3FF"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        opacity="0.5"
                    />
                </svg>


                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute bottom-2.5 bg-white h-3 w-10"></div>
                    <span className="font-poppins text-xl font-bold text-foreground">{value}%</span>
                </div>
            </div>
        </div>
    )
}
