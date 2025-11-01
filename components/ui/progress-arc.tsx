import { cn } from '@/lib/utils'
import React from 'react'

type ProgressArcProps = {
    progress: number // 0..100
    size?: number
    strokeWidth?: number
    color?: string
    className?: string
    startAtTop?: boolean
    ariaLabel?: string
}

export default function ProgressArc({
    progress,
    size = 65,
    strokeWidth = 5.01762,
    color = '#12D85B',
    className,
    startAtTop = true,
    ariaLabel = 'progress',
}: ProgressArcProps) {
    // clamp progress
    const p = Math.max(0, Math.min(100, Number(progress) || 0))

    // CSS variable for the SVG: --progress (0..100)
    const svgStyle = {
        ['--progress' as any]: p,
        // optionally rotate so 0 starts at 12 o'clock
        ...(startAtTop ? { transform: 'rotate(-90deg)', transformOrigin: '50% 50%' } : {}),
    } as React.CSSProperties

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 65 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={ariaLabel}
            className={cn(className, "rotate-90")}
            style={svgStyle}
        >
            <path
                opacity="0.2"
                d="M44.1185 53.4887C48.7057 50.8537 52.2381 45.7396 54.2069 40.8472C56.1757 35.9548 56.435 30.546 54.9432 25.4894C53.4513 20.4327 50.2948 16.0216 45.9804 12.9641C41.6661 9.90671 36.4443 8.38041 31.1534 8.63031C25.8625 8.88021 20.8094 10.8918 16.8056 14.3421C12.8018 17.7924 10.0795 22.4813 9.07579 27.6558C8.07208 32.8303 8.8452 38.1903 11.271 42.8751C13.6968 47.56 17.6346 51.2979 22.4521 53.4887"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />

            <g filter="url(#filter0_d_1_5715)">
                <path
                    d="M31.3585 8.63023C26.0676 8.88013 21.0146 10.8917 17.0108 14.342C13.007 17.7923 10.2846 22.4812 9.28094 27.6557C8.27723 32.8302 9.05036 38.1902 11.4762 42.8751C13.902 47.5599 17.8398 51.2978 22.6573 53.4886"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    pathLength={100}
                    style={{
                        strokeDasharray: 100,
                        strokeDashoffset: 'calc(100 - var(--progress))',
                        transition: 'stroke-dashoffset 0.6s ease',
                    }}
                />
            </g>

            <g filter="url(#filter1_d_1_5715)">
                <ellipse cx="31.5013" cy="8.49922" rx="0.501762" ry="0.499217" fill="white" />
            </g>

            <path
                d="M42.3049 49.1839C46.0332 47.0423 48.9401 43.7281 50.5681 39.763C52.1962 35.7978 52.453 31.4066 51.2981 27.2803C50.1433 23.1541 47.6423 19.5269 44.1888 16.9695C40.7353 14.4121 36.5252 13.0697 32.2209 13.1534C27.9167 13.2372 23.7625 14.7423 20.4121 17.4321C17.0617 20.1218 14.7052 23.8435 13.7134 28.0115C12.7216 32.1796 13.1507 36.5574 14.9333 40.4562C16.7159 44.3551 19.7507 47.5536 23.5604 49.5486"
                stroke="url(#paint0_linear_1_5715)"
                strokeWidth="0.6"
                strokeLinecap="round"
                strokeDasharray="0 0.14 2.01 0 0.14 2.01"
            />

            <defs>
                <filter id="filter0_d_1_5715" x="4.18889" y="4.69255" width="31.8337" height="54.1679" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="0.716803" />
                    <feGaussianBlur stdDeviation="1.0752" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.505882 0 0 0 0 0.831373 0 0 0 0 0.996078 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5715" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5715" result="shape" />
                </filter>
                <filter id="filter1_d_1_5715" x="30.8562" y="7.85664" width="1.29026" height="1.28516" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.0716803" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5715" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5715" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_1_5715" x1="44.5878" y1="21.2195" x2="26.5837" y2="32.7777" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#19A855" />
                    <stop offset="1" stopColor="#0B9545" />
                </linearGradient>
            </defs>
        </svg>
    )
}
