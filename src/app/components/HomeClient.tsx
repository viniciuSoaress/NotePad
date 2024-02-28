'use client'

import { ChangeEvent, useState } from "react"
import { SeachBar } from "./Seachbar"
import { Note } from "./Note"
import { ChevronLeftIcon, NotebookPenIcon } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"
import { Note as NoteType} from "../types"
import { getSearchNot } from "../lib/utils"


export function HomeClient() {

  
  
  const notess = [
    { id: '1', note: 'Hello, World!', date: new Date(2023-12-12) },
    { id: '2', note: ' World!',date: new Date() },
  ]
  
  const [search, setSearch] = useState('')
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState<NoteType[]>(notess)

  const searchNote = getSearchNot(notes, search)
  console.log(searchNote);
  


  function handleSeachNote(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  function handleUpdateNote(data : NoteType) { 
    setNotes(notes.map(n => {
      if (n.id === data.id){
        return data
      }else{
        return n
      }
    }))
  }

  function handleNewNote() {

    note !== '' ? setNotes((prev) => ([
      ...prev,
      { id: crypto.randomUUID(), note: note, date: new Date() }
    ])) : null
    setNote('')
  }

  return (
    <section className="w-full min-h-[94vh] relative">
      <SeachBar
        onSeachNote={handleSeachNote}
        seachNote={search}
      />

      <div className="w-full flex flex-col gap-1 mt-10">
        {searchNote.map((item) => (
          <Note key={item.id} note={item} onUpdate={handleUpdateNote} />
        ))}
      </div>

      <div className="w-full flex absolute justify-end  bottom-0">
        <span className="w-1/2">{notes.length} Notas</span>
        <Sheet>
          <SheetTrigger>
            <NotebookPenIcon />
          </SheetTrigger>

          <SheetContent className="w-full flex flex-col gap-5">
            <SheetHeader className="items-start">
              <SheetClose className="flex" onClick={handleNewNote}>
                <ChevronLeftIcon /> Notas
              </SheetClose>
            </SheetHeader>

            <textarea onChange={(e) => setNote(e.target.value)}
              className="bg-transparent outline-none w-full h-full resize-none" />

          </SheetContent>
        </Sheet>
      </div>
    </section>
  )
}