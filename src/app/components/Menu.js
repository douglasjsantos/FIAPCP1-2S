export default function Menu() {
    return (
        <nav className="flex items-center justify-between">
            <div className="text-white text-lg font-semibold text-start">AutoHelp</div>
            <div>
        <ul className="flex text-white justify-end gap-3 font-bold">
          <li>
            <a href="/">Solicitar guincho</a>
          </li>
          <li>
            <a href="/">Suporte ao cliente</a>
          </li>
          <li>
          <a href="/">Pagamentos</a>
          </li>
        </ul>
            </div>
            </nav>
            
    )
}