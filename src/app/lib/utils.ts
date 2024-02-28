import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Note } from "../types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function getSearchNot(note: Note[], query: string){
  query = query.toLocaleLowerCase()

  return note.filter(n => 
    n.note.toLocaleLowerCase().includes(query)
  )
}