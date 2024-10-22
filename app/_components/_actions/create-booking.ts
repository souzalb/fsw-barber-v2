"use server"

import { authOptions } from "@/app/_lib/auth"
import { db } from "@/app/_lib/prisma"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"

interface CreateBookingParams {
  serviceId: string
  date: Date
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const createBooking = async (params: CreateBookingParams) => {
  const user = await getServerSession(authOptions)
  if (!user) {
    throw new Error("Usuário não autenticado")
  }
  await db.booking.create({
    data: { ...params, userId: (user.user as any).id },
  })

  revalidatePath("/barbershops/[id]")
  revalidatePath("/bookings")
}
