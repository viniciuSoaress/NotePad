'use client'

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { ChevronLeftIcon } from "lucide-react";
import { Note } from "../types";

type NoteProps = {
  note:Note,
  onUpdate(data :Note): void
}

export function Note({ note, onUpdate }: NoteProps) {

  // const [isEditCard, setIsEditCard] = useState(false)

  let component = (<></>)


  component = (
    <Card className="bg-neutral-700/90 pl-5" >
      <CardContent className="flex flex-col items-start p-2">
        <p className="font-semibold">{note.note}</p>
        <span className=" text-xs">{note.note}</span>
      </CardContent>
    </Card>
  )


  return (
    <div>
      <Sheet>

        <SheetTrigger className="w-full">
          {component}
        </SheetTrigger>


        <SheetContent className="w-full">
          <SheetHeader className="items-start">
            <SheetClose className="flex"
            // onClick={handleNewNote}
            >
              <ChevronLeftIcon /> Notas
            </SheetClose>
          </SheetHeader>

          <textarea
            onChange={(e)=> onUpdate({
              ...note, note: e.target.value
            })}
            value={note.note}
            className="bg-transparent outline-none w-full h-full resize-none"
          />

        </SheetContent>
      </Sheet>
    </div>
  )
}