// src/pages/testSupabase.tsx
'use client'

import { useEffect, useState } from 'react';
import { fetchGlobalData } from '../lib/supabaseGlobal';
import { GlobalData } from '../types/globalTypes';

const TestSupabase = () => {
  const [data, setData] = useState<GlobalData[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchGlobalData();
        setData(result);
      } catch (error) {
        setError(error as Error);
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Global Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TestSupabase;