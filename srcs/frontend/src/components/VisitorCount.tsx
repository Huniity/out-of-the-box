

import { useEffect, useState } from "react";

export default function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadVisitorCount() {
      try {
        const response = await fetch("/api/page/views/");
        if (!response.ok) {
            throw new Error("Failed to fetch visitor count");
        }

        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }

    loadVisitorCount();
  }, []);

  if (error) return <span>0</span>;

  if (visitorCount === null) return <span>...</span>;

  return <span>{visitorCount}</span>;
}