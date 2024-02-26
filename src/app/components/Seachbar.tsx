import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { ChangeEvent } from "react";


type SeachBarProps = {
  onSeachNote(e: ChangeEvent<HTMLInputElement>): void,
  seachNote: string
}

export function SeachBar({ onSeachNote, seachNote }: SeachBarProps) {

  return (
    <div className="w-full flex flex-col">
      <span className="text-2xl font-semibold">Notas</span>

      <div className="flex mt-3 items-center bg-neutral-700/90 pl-2 rounded-lg">
        <SearchIcon size={18} />
        <Input
          className="border-none bg-transparent outline-none"
          placeholder="Buscar"
          value={seachNote}
          onChange={(e) => onSeachNote(e)} />
      </div>
    </div>
  )
}