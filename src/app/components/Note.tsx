'use client'

import { useState } from "react";
import { Card, CardContent } from "./ui/card";

type NoteProps = {
  note: {
    id: number,
    note: string
  }
}

export function Note({ note }: NoteProps) {

  const [isEditCard, setIsEditCard] = useState(false)

  let component = (<></>)

  if (isEditCard) {
    component = (
      <textarea className="bg-transparent outline-none w-full h-full resize-none">

      </textarea>
    )
  } else {
    component = (
      <Card className="bg-neutral-700/90 pl-5" onClick={() => setIsEditCard(true)}>
        <CardContent className="flex flex-col p-2">
          <p className="font-semibold">{note.note}</p>
          <span className=" text-xs">{note.note}</span>
        </CardContent>
      </Card>
    )
  }

  return (
    <div>
      {component}
    </div>
  )
}