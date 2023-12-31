export default function Foto1() {
    return( 
        <div className="relative h-screen flex flex-col justify-center items-center">
            <img src="/caminhoes/caminhao-foto-lateral.png" alt="Foto lateral do caminhão" />
            <div className="absolute bottom-4 right-0 left-0 text-center">
                <button className="w-full bg-black text-white text-lg px-4 py-2 rounded shadow-md mb-4">Tirar outra foto</button>
                <button className="w-full bg-black text-white text-lg px-4 py-2 rounded shadow-md">A foto está boa</button>
            </div>
        </div>
    )
}