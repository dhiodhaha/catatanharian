"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const NoteInput = () => {
  const router = useRouter();
  const [note, setNote] = useState("");

  async function createNote() {
    const res = await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: note,
          user: "user@dhafin.com",
          additionalData: "",
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    router.refresh();
  }

  return (
    <div className="flex justify-between px-4 gap-2 w-full m-auto">
      <input
        className="border-b-2 w-full p-2 m-auto rounded-md  focus:border-indigo-500 focus:outline-none transition"
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        className="rounded-md border -mr-1 p-2 text-sm bg-indigo-600 hover:bg-indigo-800 text-white transition"
        onClick={createNote}
      >
        Submit
      </button>
    </div>
  );
};
