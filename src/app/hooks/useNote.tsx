'use client'

import { ChangeEvent, useState } from "react"
import { Note as NoteType } from "../types"


export function useNote(){

  const [search, setSearch] = useState('')
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState<NoteType[]>(() => {

    const noteStorage = JSON.parse(localStorage.getItem('notepad') ?? '')
    if(noteStorage){
      return noteStorage
    }
    return []
  })


  function handleSeachNote(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  function handleUpdateNote(data : NoteType) { 

    if(data.note === ''){
      return setNotes(notes.filter(n => n.id !== data.id))
    }
    setNotes(notes.map(n => {
      if (n.id === data.id){
        return data
      }else{
        return n
      }
    }))
    localStorage.setItem('notepad',JSON.stringify( notes))

  }

  function handleNewNote() {

    note !== '' ? setNotes((prev) => ([
      ...prev,
      { id: crypto.randomUUID(), note: note, date: new Date() }
    ])) : null
    localStorage.setItem('notepad',JSON.stringify( notes))
    setNote('')

  }

  return{
    search,
    note,
    notes,
    handleNewNote,
    handleSeachNote,
    handleUpdateNote,
    setNote
  }
}