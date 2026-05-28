

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
  image: string
}