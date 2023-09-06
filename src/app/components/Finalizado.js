export default function Finalizado() {
    return (
        <div className="w-300 bg-blue-500 rounded-lg relative shadow-xl" style={{ backgroundColor: "#0092DD" }}>
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-5xl text-black text-center font-extrabold mt-16">Tudo certo <br /> O seu guincho <br /> foi realizado</h1>
            
                <img src="/layouts/guincho-realizado.png" alt="Guincho Realizado" className="mt-4" />
                
                <p className="text-4xl text-black text-center font-bold mt-16">Sua avaliação</p>
               
                
                <img src="/layouts/avaliacoes.png"></img>
            </div>
        </div>
    )
}
