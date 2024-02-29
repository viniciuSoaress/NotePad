import { Card, CardContent } from "./ui/card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { ChevronLeftIcon } from "lucide-react";
import { Note } from "../types";
import { format } from 'date-fns'
import { ptBR } from "date-fns/locale";

type NoteProps = {
  note: Note,
  onUpdate(data: Note): void
}

export function Note({ note, onUpdate }: NoteProps) {

  let component: JSX.Element


  component = (
    <Card className="bg-neutral-700/90 pl-5" >
      <CardContent className="flex flex-col gap-2 items-start p-2 h-16 max-h-16 overflow-x-hidden text-ellipsis">
        <p className="font-semibold text-ellipsis">{note.note.slice(0, 66)}...</p>
        <span className=" text-xs">{format(note.date, 'd/mm/y EEEE', {
          locale: ptBR
        })}</span>
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
          <SheetHeader className="items-start mb-2">
            <SheetClose className="flex">
              <ChevronLeftIcon /> Notas
            </SheetClose>
          </SheetHeader>

          <textarea
            onChange={(e) => onUpdate({
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