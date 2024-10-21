<<<<<<< HEAD
import { Button } from "@/app/_components/ui/button"
=======
import PhoneItem from "@/app/_components/phone-item"
import ServiceItem from "@/app/_components/service-item"
import SidebarSheet from "@/app/_components/sidebar-sheet"
import { Button } from "@/app/_components/ui/button"
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
>>>>>>> 42b72b1
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
<<<<<<< HEAD
=======
import { notFound } from "next/navigation"
>>>>>>> 42b72b1

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    //JOIN entre a tabela barbearia e serviços
    include: {
      services: true,
    },
  })
<<<<<<< HEAD
=======

  if (!barbershop) {
    return notFound()
  }

>>>>>>> 42b72b1
  return (
    <div>
      {/* Image */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          alt={barbershop?.name}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

<<<<<<< HEAD
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
=======
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="secondary"
              className="absolute right-4 top-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
>>>>>>> 42b72b1
      </div>

      {/*Top Head  */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
<<<<<<< HEAD
        <div className="mb-2 flex items-center gap-1">
=======
        <div className="mb-2 flex items-center gap-2">
>>>>>>> 42b72b1
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

<<<<<<< HEAD
        <div className="mb-2 flex items-center gap-1">
=======
        <div className="mb-2 flex items-center gap-2">
>>>>>>> 42b72b1
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,0 (434 avaliações)</p>
        </div>
      </div>

      {/* About Us */}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>
<<<<<<< HEAD
=======

      {/* Services */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              barbershop={barbershop}
            />
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
>>>>>>> 42b72b1
    </div>
  )
}

export default BarbershopPage
