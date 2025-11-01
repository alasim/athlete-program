"use client"

import React, { useState } from 'react'
import ProgressArc from './progress-arc'

export default function ProgressDemo() {
    const [green, setGreen] = useState(65)
    const [blue, setBlue] = useState(40)

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                    <ProgressArc progress={green} size={80} color="#12D85B" />
                    <div className="text-sm text-muted-foreground">Green — {green}%</div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <ProgressArc progress={blue} size={80} color="#1E88FF" />
                    <div className="text-sm text-muted-foreground">Blue — {blue}%</div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Green progress</label>
                    <input type="range" min={0} max={100} value={green} onChange={(e) => setGreen(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Blue progress</label>
                    <input type="range" min={0} max={100} value={blue} onChange={(e) => setBlue(Number(e.target.value))} className="w-full" />
                </div>
            </div>

            <div className="flex gap-2">
                <button className="btn" onClick={() => { setGreen((g) => Math.min(100, g + 10)); setBlue((b) => Math.min(100, b + 10)); }}>
                    +10%
                </button>
                <button className="btn" onClick={() => { setGreen((g) => Math.max(0, g - 10)); setBlue((b) => Math.max(0, b - 10)); }}>
                    -10%
                </button>
                <button className="btn" onClick={() => { setGreen(0); setBlue(0); }}>
                    Reset
                </button>
            </div>
        </div>
    )
}
