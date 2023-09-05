export default function Banner2() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="w-400 h-64 bg-blue-500 rounded-lg relative shadow-xl" style={{ backgroundColor: "#0092DD" }}>
                <div className="flex flex-col h-full justify-center items-center">
                    <p className="text-white text-center font-extrabold text-3xl">
                        Tire uma foto<br />da Traseira do veículo
                    </p>
                    <img src="traseira.png" alt="Imagem do veículo" className="mt-4" />
                </div>
                <button className="absolute bottom-4 right-4 bg-black text-white text-lg px-4 py-2 rounded shadow-md">OK</button>
            </div>
        </div>
    
    )
}