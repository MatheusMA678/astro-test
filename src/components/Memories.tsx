import { ArrowRight } from "lucide-react"

interface MemoriesProps {
  content: string
  date: string
}

export function Memories({ content, date }: MemoriesProps) {

  return (
    <div className="relative space-y-4">
      <div className="absolute right-full text-gray-100 flex items-center gap-2">
        <span className="text-sm">{date}</span>
        <div className="h-px w-5 bg-gray-100" />
      </div>

      <div className="w-full h-[280px] rounded-lg overflow-hidden">
        <img src="https://source.unsplash.com/random/?places" alt="random" />
      </div>

      <p className="text-lg text-gray-100">{content}</p>

      <a href="" className="flex items-center gap-2 text-sm text-gray-200">
        Ler mais
        <ArrowRight size={18} />
      </a>
    </div>
  )
}