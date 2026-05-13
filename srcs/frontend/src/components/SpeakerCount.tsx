

import { useEffect, useState } from "react";

export default function SpeakerCount() {
  const [speakerCount, setSpeakerCount] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadSpeakerCount() {
      try {
        const response = await fetch("/api/speaker/");
        if (!response.ok) {
            throw new Error("Failed to fetch speaker count");
        }

        const data = await response.json();
        setSpeakerCount(data.count);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }

    loadSpeakerCount();
  }, []);

  if (error) return <span>0</span>;

  if (speakerCount === null) return <span>...</span>;

  return <span>{speakerCount}</span>;
}