export default function Selecao() {
    return (
        <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-blue-500 text-white p-4 rounded-lg" style={{ backgroundColor: "#0092DD" }}>
                <p className="text-center font-extrabold text-2xl mb-4">O veículo selecionado <br></br> está correto?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md cursor-pointer hover:bg-gray-100">
    <div className="flex items-center">
        
        <div>
            <p className="text-black font-extrabold">CAVALO MECÂNICO</p>
            <p className="text-xs text-gray-700">Eixo Simples</p>
        </div>
        <div className="ml-auto">
            <img
                src="/caminhoes/c1.png"
                alt="Caminhão 1"
                className="h-auto max-h-16" 
            />
        </div>
    </div>
</div>
                    
                    
<div className="bg-white p-4 rounded-md cursor-pointer hover:bg-gray-100">
    <div className="flex items-center">
        <div>
            <p className="text-black font-extrabold">CAVALO MECÂNICO T.</p>
            <p className="text-xs text-gray-700">Dois eixos</p>
        </div>
        <div className="ml-auto">
            <img
                src="/caminhoes/c2.png"
                alt="Caminhão 2"
                className="h-auto max-h-16"
            />
        </div>
    </div>
</div>

<div className="bg-white p-4 rounded-md cursor-pointer hover:bg-gray-100">
    <div className="flex items-center">
        <div>
            <p className="text-black font-extrabold">CARRETA 2 EIXOS</p>
            <p className="text-xs text-gray-700">Dois eixos e semi-reboque triplo</p>
        </div>
        <div className="ml-auto">
            <img
                src="/caminhoes/c3.png"
                alt="Caminhão 3"
                className="h-auto max-h-16"
            />
        </div>
    </div>
</div>

<div className="p-4 rounded-md cursor-pointer hover:bg-gray-100 border border-black border-solid border-2">
                        <div className="flex items-center">
                            <div>
                                <p className="text-white font-extrabold">CARRETA 3 EIXOS</p>
                                <p className="text-xs text-gray-700">Três eixos</p>
                            </div>
                            <div className="ml-auto">
                                <img src="/caminhoes/c4.png" alt="Caminhão 4" className="h-auto max-h-16" />
                            </div>
                        </div>
                    </div>

<div className="bg-white p-4 rounded-md cursor-pointer hover:bg-gray-100">
    <div className="flex items-center">
        <div>
            <p className="text-black font-extrabold">CARRETA C. T.</p>
            <p className="text-xs text-gray-700">Três eixos</p>
        </div>
        <div className="ml-auto">
            <img
                src="/caminhoes/c5.png"
                alt="Caminhão 5"
                className="h-auto max-h-16"
            />
        </div>
    </div>
</div>

<div className="bg-white p-4 rounded-md cursor-pointer hover:bg-gray-100">
    <div className="flex items-center">
        <div>
            <p className="text-black font-extrabold">BITREM</p>
            <p className="text-xs text-gray-700">Sete eixos</p>
        </div>
        <div className="ml-auto">
            <img
                src="/caminhoes/c6.png"
                alt="Caminhão 6"
                className="h-auto max-h-16"
            />
        </div>
    </div>
</div>

<div className="bg-white p-4 rounded-md cursor-pointer hover:bg-gray-100">
    <div className="flex items-center">
        <div>
            <p className="text-black font-extrabold">RODOTREM</p>
            <p className="text-xs text-gray-700">Nove eixos</p>
        </div>
        <div className="ml-auto">
            <img
                src="/caminhoes/c7.png"
                alt="Caminhão 7"
                className="h-auto max-h-16"
            />
        </div>
    </div>
</div>

</div>
                <div className="flex justify-center items-center mt-4">
                    <button className="bg-black text-white text-black font-bold px-6 py-2 rounded w-auto">Enviar</button>
                </div>
            </div>
        </div>
    )
}
