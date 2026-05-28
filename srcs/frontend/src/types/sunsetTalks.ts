

export type SessionType = 'PALESTRA' | 'WORKSHOP' | 'CONCERTOS' | 'PROJEÇÕES'

export type Session = {
  id: number
  day: number
  time: string
  location: string
  type: SessionType
  title: string
  speaker_name: string
  moderator?: string
  speaker_activity: string
  description: string
  image?: string | null
  category?: string | null
  category_other?: string | null
  speaker_info_link?: string | null
  social_link?: string | null
  registration_link?: string | null
}