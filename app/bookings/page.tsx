import { getServerSession } from "next-auth"
import Header from "../_components/header"
import { authOptions } from "../_lib/auth"
import { notFound } from "next/navigation"
import { db } from "../_lib/prisma"
import BookingItem from "../_components/booking-item"

const Bookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    //TODO: mostrar popup de login
    return notFound()
  }

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const confirmedBookings = await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
      date: {
        gte: new Date(),
      },
    },
    include: {
      service: {
        include: { barbershop: true },
      },
    },
    orderBy: {
      date: "asc",
    },
  })

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const concludedBookings = await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
      date: {
        lt: new Date(),
      },
    },
    include: {
      service: {
        include: { barbershop: true },
      },
    },
    orderBy: {
      date: "asc",
    },
  })

  return (
    <>
      <Header />
      <div className="space-y-6 p-5">
        <div className="space-y-3">
          {confirmedBookings.length === 0 && concludedBookings.length === 0 && (
            <p className="text-gray-400">Você não tem agendamentos.</p>
          )}
          <h1 className="py-3 text-xl font-bold">Agendamentos</h1>
          {confirmedBookings.length > 0 && (
            <>
              <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
                Confirmados
              </h2>
              {confirmedBookings.map((booking) => (
                <BookingItem
                  key={booking.id}
                  booking={JSON.parse(JSON.stringify(booking))}
                />
              ))}
            </>
          )}

          {concludedBookings.length > 0 && (
            <>
              <div className="space-y-3">
                {" "}
                <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
                  Finalizados
                </h2>
                {concludedBookings.map((booking) => (
                  <BookingItem
                    key={booking.id}
                    booking={JSON.parse(JSON.stringify(booking))}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Bookings
