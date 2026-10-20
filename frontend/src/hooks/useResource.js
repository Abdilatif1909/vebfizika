import { useEffect, useMemo, useState } from "react";

import { api, normalizeList } from "../services/api.js";

export default function useResource(resource) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError("");

    api
      .list(resource)
      .then((payload) => {
        if (mounted) {
          setRows(normalizeList(payload));
        }
      })
      .catch((requestError) => {
        if (mounted) {
          setError(requestError.message);
          setRows([]);
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [resource]);

  return useMemo(() => ({ rows, loading, error }), [error, loading, rows]);
}
