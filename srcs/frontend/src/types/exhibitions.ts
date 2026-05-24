
export type ExhibitionArea = 'DESIGN' | 'FOTO' | 'GAMES' | 'LABIA'

export type Exhibition = {
  id: number
  title: string
  area: ExhibitionArea
  synopsis: string
  artists: string
  image: string
  opening_hours: string
  start_date: string   // YYYY-MM-DD
  end_date: string     // YYYY-MM-DD
  location: string
  is_active: boolean
}
