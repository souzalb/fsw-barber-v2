//"use client" //torna essa página uma client componente, ou seja, o que tiver de js vai ser renderizado, coisa que por padrão a page.tsx (server component) não faz

import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

const Home = async () => {
  //chamar meu banco de dados
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      {/* header*/}
      <Header />
      <div className="p-5">
        {/* Text */}
        <h2 className="text-xl">
          Olá, <b>Miguel</b>
        </h2>
        <p>Segunda-feira, 14 de outubro</p>

        {/* Search */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Procurar" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* Fast Search */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            <Image src="/cabelo.svg" width={16} height={16} alt="Cabelo" />
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src="/barba.svg" width={16} height={16} alt="Barba" />
            Barba
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src="/acabamento.svg"
              width={16}
              height={16}
              alt="Acabamento"
            />
            Acabamento
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src="/sobrancelha.svg"
              width={16}
              height={16}
              alt="Sobrancelha"
            />
            Sobrancelha
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src="/massagem.svg" width={16} height={16} alt="Massagem" />
            Massagem
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src="/hidratacao.svg"
              width={16}
              height={16}
              alt="Hidratação"
            />
            Hidratação
          </Button>
        </div>

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.svg"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* Appointments */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* Left */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit rounded-xl">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            {/* Right */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Outubro</p>
              <p className="text-4xl">14</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        {/* Recommended */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* Popular */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2024 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
