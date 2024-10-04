"use client" //torna essa página uma client componente, ou seja, o que tiver de js vai ser renderizado, coisa que por padrão a page.tsx (server component) não faz

import { useState } from "react"

const Home = () => {
  const [] = useState()
  return <h1 className="mb-5 text-clip bg-red-400 text-green-500">TESTE</h1>
}

export default Home
