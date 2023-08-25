import Button from "./components/Button"
import Title from "./components/Title"
import Links from "./components/Links"
export default function Home() {
  return (
    <main>
      
      <Title/>
      <Links/>
      <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Selecionar imagem</button>
      <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Enviar</button>
      <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Prosseguir</button>

    </main>

    
  )
}


