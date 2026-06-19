function NavBar() {
  return (
    <header className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <a href="#" className="flex items-center gap-2">
          <span className="border border-gray-600 px-2 py-1 text-sm font-bold">LP</span>
          <span className="font-mono text-sm text-gray-400">luiz.dev</span>
        </a>

        <div className="flex items-center gap-6"> {/* links + botão juntos */}
          <ul className="flex gap-6 list-none text-gray-400 text-sm">
            <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
            <li><a href="#projetos" className="hover:text-white transition-colors">Projetos</a></li>
            <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
            <li><a href="#experiencia" className="hover:text-white transition-colors">Experiência</a></li>
          </ul>

          <a href="#contato" className="bg-white text-gray-950 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
            Contato
          </a>
        </div>

      </nav>
    </header>
  )
}

export default NavBar