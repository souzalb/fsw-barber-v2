//"use client" //torna essa página uma client componente, ou seja, o que tiver de js vai ser renderizado, coisa que por padrão a page.tsx (server component) não faz

import { Button } from "./_components/ui/button"

const Home = () => {
  return <Button>Teste</Button>
}

export default Home
