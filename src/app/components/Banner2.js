export default function Button() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="w-400 h-64 bg-blue-500 rounded-lg relative shadow-xl" style={{ backgroundColor: "#0092DD" }}>
                <p className="text-white text-center font-extrabold text-3xl absolute inset-0 flex items-center justify-center">
                    Tire uma foto<br />da Traseira do veículo
                </p>
                <img src="../../../imgs/lateral.png" alt="Imagem do veículo" className="absolute bottom-4 left-4" />
                <button className="absolute bottom-4 right-4 bg-black text-white text-lg px-4 py-2 rounded shadow-md">OK</button>
            </div>
        </div>
    
    )
}