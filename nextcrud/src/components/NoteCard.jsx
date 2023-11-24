"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const NoteCard = ({ id, content }) => {
  const router = useRouter();

  const [onEdit, setOnEdit] = useState(false);
  const [currentContent, setCurrentContent] = useState(content);

  async function handleDelete() {
    await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      { method: "DELETE" }
    );
    router.refresh();
  }

  async function handleUpdate() {
    const res = await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: currentContent }),
      }
    );
    const data = await res.json();
    setOnEdit(false);
    router.refresh();
  }

  return (
    <div className="noteCard flex items-center gap-2 rounded-lg p-8 border border-slate-200 hover:border-gray-300 hover:shadow-sm shadow-blue-500/20 font-medium bg-white transition">
      {onEdit ? (
        <textarea
          className="flex rounded-none outline-none w-full resize-none border-b-2 "
          rows="3"
          value={currentContent}
          onChange={(e) => setCurrentContent(e.target.value)}
        />
      ) : (
        <div className="flex flex-col w-full ">{currentContent}</div>
      )}
      {onEdit ? (
        <button
          className="text-white bg-indigo-600 transition p-2 text-xs  border rounded-full"
          onClick={handleUpdate}
        >
          Save
        </button>
      ) : (
        <button
          className=" hover:text-white hover:bg-indigo-600 transition p-2 text-xs text-slate-900 border rounded-full "
          onClick={() => setOnEdit(true)}
        >
          Edit
        </button>
      )}
      <button
        className=" hover:text-white hover:bg-indigo-950 transition p-2 text-xs text-slate-900 border rounded-full"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
