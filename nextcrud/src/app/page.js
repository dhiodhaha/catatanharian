import { NoteCard } from "@/components/NoteCard";
import { NoteInput } from "@/components/NoteInput";

async function getNotes() {
  const res = await fetch(
    "https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='user@dhafin.com')",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { items } = await getNotes();

  return (
    <>
      <div className="flex flex-col w-full mb-20 ">
        <div className="p-3 space-y-3 ">
          <div className="space-y-3 w-full">
            {items.map(({ id, content }) => {
              return <NoteCard key={id} id={id} content={content} />;
            })}
          </div>
        </div>
        <NoteInput />
      </div>
    </>
  );
}
