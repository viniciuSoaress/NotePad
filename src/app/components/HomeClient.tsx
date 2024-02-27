'use client'

import { ChangeEvent, useState } from "react"
import { SeachBar } from "./Seachbar"
import { Note } from "./Note"
import { NotebookPenIcon } from "lucide-react"


export function HomeClient() {

  const notess = [
    { id: 1, note: 'Hello, World!' },
    { id: 2, note: ' World!' },
    { id: 3, note: 'Hello' },
    { id: 3, note: 'Hello' },
  ]

  const [seachNote, setSeachNote] = useState('')
  const [notes, setNotes] = useState(notess)

  function handleSeachNote(e: ChangeEvent<HTMLInputElement>) {
    setSeachNote(e.target.value)
  }

  return (
    <section className="w-full min-h-[94vh] relative">
      <SeachBar
        onSeachNote={handleSeachNote}
        seachNote={seachNote}
      />

      <div className="w-full flex flex-col gap-1 mt-10">
        {notes.map((item) => (
          <Note key={item.id} note={item} />
        ))}
      </div>

      <div className="w-full flex absolute justify-end  bottom-0">
        <span className="w-1/2">{notes.length} Notas</span>
        <button>
          <NotebookPenIcon />
        </button>
      </div>
    </section>
  )
}