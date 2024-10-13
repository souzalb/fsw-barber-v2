//"use client" //torna essa página uma client componente, ou seja, o que tiver de js vai ser renderizado, coisa que por padrão a page.tsx (server component) não faz

import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      {/* header*/}
      <Header />
      <div className="p-5">
        <h2 className="text-xl">
          Olá, <b>Miguel</b>
        </h2>
        <p>Segunda-feira, 14 de outubro</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Procurar" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.svg"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
