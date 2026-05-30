import { memo } from 'react'
import type { ReactNode } from 'react'
import { CalendarDays, Clock, MapPin, Timer } from 'lucide-react'

interface EventCardProps {
  title: string
  imageSrc: string
  day: number
  month: string
  time: string
  location: string
  duration?: string
  isActive: boolean
  onToggle: () => void
  expandedContent: ReactNode
  footerLinks?: ReactNode
}

const EventCard = memo(({ title, imageSrc, day, month, time, location, duration, isActive, onToggle, expandedContent, footerLinks }: EventCardProps) => (
  <div
    onClick={onToggle}
    className="group relative flex flex-col rounded-sm border border-white/10 bg-black hover:border-[#c8ff00]/30 transition-colors duration-300 overflow-hidden cursor-pointer"
  >
    {/* Image */}
    <div className="relative overflow-hidden aspect-video shrink-0">
      <img
        src={imageSrc}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover brightness-50 transition duration-500 group-hover:brightness-[0.3] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute top-3 left-3">
        <div className="bg-[#c8ff00] text-black px-2 py-1 text-center inline-block">
          <span className="block text-base font-black leading-none">{day}</span>
          <span className="block text-[8px] font-black uppercase tracking-widest">{month}</span>
        </div>
      </div>
    </div>

    {/* Card face */}
    <div className="p-4 flex flex-col gap-2 flex-1">
      <h3 className="font-black text-sm uppercase leading-tight tracking-wide text-white">{title}</h3>
      <div className="flex items-center gap-3 text-[10px] text-white/30 mt-auto pt-2 border-t border-white/10">
        <span className="flex items-center gap-1 shrink-0"><CalendarDays size={10} className="text-[#c8ff00]" /> {day} {month}</span>
        <span className="flex items-center gap-1 shrink-0"><Clock size={10} className="text-[#c8ff00]" /> {time}</span>
        {duration && <span className="flex items-center gap-1 shrink-0"><Timer size={10} className="text-[#c8ff00]" /> {duration}</span>}
        <span className="flex items-center gap-1 truncate"><MapPin size={10} className="text-[#c8ff00] shrink-0" /> <span className="truncate">{location}</span></span>
      </div>
    </div>

    {/* Hover info panel */}
    <div className={`absolute inset-0 flex flex-col bg-black/96 border border-[#c8ff00]/20 p-5 transition-transform duration-300 ease-out ${isActive ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}>
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-black text-sm uppercase leading-tight tracking-tight text-white">{title}</h3>
        <span className="text-[#c8ff00] text-lg leading-none shrink-0">✦</span>
      </div>
      {expandedContent}
      <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2">
        <div className="flex items-center gap-3 text-[10px] text-white/35">
          <span className="flex items-center gap-1 shrink-0"><CalendarDays size={10} className="text-[#c8ff00]" /> {day} {month}</span>
          <span className="flex items-center gap-1 shrink-0"><Clock size={10} className="text-[#c8ff00]" /> {time}</span>
          <span className="flex items-center gap-1 truncate"><MapPin size={10} className="text-[#c8ff00] shrink-0" /> <span className="truncate">{location}</span></span>
        </div>
        {footerLinks && <div className="flex gap-2 mt-1">{footerLinks}</div>}
      </div>
    </div>
  </div>
))

EventCard.displayName = 'EventCard'

export default EventCard
