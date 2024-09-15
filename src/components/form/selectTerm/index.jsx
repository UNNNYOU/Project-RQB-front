"use client";

import { Settings } from "@/config";
import { useFetchData } from "@/lib";

export default function SelectTerm() {
  const data = useFetchData(`${Settings.API_URL}/terms`);

  if (!data) return;

  return (
    <select name="term" form="profileForm" className="w-24 rounded border px-2 py-1">
      <option value="" selected hidden>入学期</option>
      {data.map((term) => (
        <option key={term.id} value={term}>
          {term}
        </option>
      ))}
    </select>
  )

}