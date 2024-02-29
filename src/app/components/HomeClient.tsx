'use client'

import { SeachBar } from "./Seachbar"
import { Note } from "./Note"
import { ChevronLeftIcon, NotebookPenIcon } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"
import { getSearchNot } from "../lib/utils"
import { useNote } from "../hooks/useNote"


export function HomeClient() {

  const {handleNewNote, handleSeachNote, handleUpdateNote, notes, search, setNote} = useNote()
  

  const searchNote = getSearchNot(notes, search)


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