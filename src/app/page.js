import Banner from "./components/Banner"
import Banner2 from "./components/Banner2"
import Banner3 from "./components/Banner3"
import Selecao from "./components/Selecao"
export default function Home() {
  return (
    <main>
      {/* <h1 className="text-black text-7xl font-bold">Olá, como vai? <br></br>Solicite seu guincho</h1>
      <br></br> */}
      
      {/* <br></br> */}
      <Banner />
      <br></br>
      <Banner2 />
      <br></br>
      <Banner3 />
      <Selecao/>
      
      {/* <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Selecionar imagem</button>
      <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Enviar</button>
      <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Prosseguir</button> */}

    </main>

    
  )
}


