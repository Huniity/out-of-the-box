
import { useEffect, useState } from 'react'

const TARGET = new Date('2026-07-03T00:00:00')

function getTimeLeft() {
    const diff = TARGET.getTime() - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    }
}

function pad(n: number) {
    return String(n).padStart(2, '0')
}

export default function Countdown() {
    const [time, setTime] = useState(getTimeLeft)

    useEffect(() => {
        const id = setInterval(() => setTime(getTimeLeft()), 1000)
        return () => clearInterval(id)
    }, [])

    const units = [
        { label: 'DIAS', value: pad(time.days) },
        { label: 'HORAS', value: pad(time.hours) },
        { label: 'MIN', value: pad(time.minutes) },
        { label: 'SEG', value: pad(time.seconds) },
    ]

    return (
        <div className="flex gap-3">
            {units.map(({ label, value }) => (
                <div key={label} className="flex flex-col items-center">
                    <span className="text-2xl font-black leading-none" style={{ color: '#c8ff00' }}>
                        {value}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        {label}
                    </span>
                </div>
            ))}
        </div>
    )
}
