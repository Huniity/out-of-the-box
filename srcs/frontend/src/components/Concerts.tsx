import { useEffect, useState } from "react";

import type { Concert, ToggleIsActiveButtonProps } from "../types/concerts";

export async function getConcerts(): Promise<Concert[]> {
  const response = await fetch("/api/concerts/");

  if (!response.ok) {
    throw new Error("Failed to fetch concerts");
  }

  return response.json();
}


const ToggleIsActiveButton = ({
  concertId,
  isActive,
  onToggle,
}: ToggleIsActiveButtonProps) => {
  const [loading, setLoading] = useState(false);

  const toggleIsActive = async () => {
    setLoading(true);

    try {
      const response = await fetch(`/api/concerts/${concertId}/toggle-active/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to toggle is_active");
      }

      const updatedConcert = await response.json();
      onToggle(updatedConcert);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={toggleIsActive} disabled={loading}>
      {loading ? "Loading..." : isActive ? "Deactivate" : "Activate"}
    </button>
  );
};

const Concerts = () => {
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadConcerts() {
      try {
        const data = await getConcerts();
        setConcerts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    loadConcerts();
  }, []);

  const handleToggleConcert = (updatedConcert: Concert) => {
    setConcerts((previousConcerts) =>
      previousConcerts.map((concert) =>
        concert.id === updatedConcert.id ? updatedConcert : concert
      )
    );
  };

  if (loading) {
    return <p>Loading concerts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Concerts</h1>

      {concerts.map((concert) => (
        <article key={concert.id}>
          <h2>{concert.title}</h2>
          <p>{concert.description}</p>
          <p>{concert.artist_name}</p>
          <p>{concert.lineup}</p>

          {concert.image && (
            <img src={concert.image} alt={concert.title} width="300" />
          )}

          <p>{concert.start_datetime}</p>
          <p>{concert.end_datetime}</p>
          <p>{concert.location}</p>
          <p>Is the event active: {concert.is_active ? "Yes" : "No"}</p>
          <p>{concert.created_at}</p>

          <ToggleIsActiveButton
            concertId={concert.id}
            isActive={concert.is_active}
            onToggle={handleToggleConcert}
          />
        </article>
      ))}
    </div>
  );
};

export default Concerts;