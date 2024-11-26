// src/app/lib/supabaseGlobal.ts

import { GlobalData } from '../types/globalTypes';

export async function fetchGlobalData(): Promise<GlobalData[]> {
  const myHeaders = new Headers();
  myHeaders.append("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjd3R2dGRpbWlrZXZjZHRvc2RxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjM2Mjk3NCwiZXhwIjoyMDQ3OTM4OTc0fQ.KfQ4h1r25mr-MH8WQo7eKp0qrQRiQdMw1FD8kNVLJV8");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow" as RequestRedirect
  };

  try {
    const response = await fetch("https://qcwtvtdimikevcdtosdq.supabase.co/rest/v1/global?select=*,global_favicon(*),global_logo(*)", requestOptions);
    const result: GlobalData[] = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching global data:", error);
    throw error;
  }
}