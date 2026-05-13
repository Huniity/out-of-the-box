

import { useEffect, useState } from "react";

export default function PageCount() {
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadTotalPages() {
      try {
        const response = await fetch("/api/page/");

        if (!response.ok) {
          throw new Error("Failed to fetch pages");
        }

        const data = await response.json();

        setTotalPages(data.count);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }

    loadTotalPages();
  }, []);

  if (error) return <span>0</span>;

  if (totalPages === null) return <span>...</span>;

  return <span>{totalPages}</span>;
}