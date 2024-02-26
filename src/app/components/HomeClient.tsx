'use client'

import { ChangeEvent, useState } from "react"
import { SeachBar } from "./Seachbar"


export function HomeClient() {

  const [seachNote, setSeachNote] = useState('')

  function handleSeachNote(e: ChangeEvent<HTMLInputElement>) {
    setSeachNote(e.target.value)
  }

  return (
    <section className="w-full h-full">
      <SeachBar
        onSeachNote={handleSeachNote}
        seachNote={seachNote}
      />
      <p>
        {seachNote}
      </p>
    </section>
  )
}