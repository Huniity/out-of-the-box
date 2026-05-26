

export type Concert = {
  id: number;
  title: string;
  description: string;
  artist_name: string;
  lineup: string;
  image: string | null;
  start_datetime: string;
  end_datetime: string;
  location: string;
  is_active: boolean;
  created_at: string;
};
