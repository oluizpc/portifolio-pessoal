function Projects() {
    return (
        <section id="projetos" className="py-20 pl-16 pr-6">
            <div className="max-w-7xl mx-auto">
                
                <div className="mb-12">
                    <span className="font-mono text-sm text-green-500">02 - projetos</span>
                    <h2 className="text-5xl font-bold mt-2">Trabalhos selecionados</h2>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    
                    <div className="border border-gray-700 rounded-2xl overflow-hidden flex flex-col" style={{backgroundColor: '#0a0a0b'}}>
                        <div className="h-48 flex items-center justify-center" style={{backgroundColor: '#0a0a0b', backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,.03) 0 10px, transparent 10px 20px)'}}>
                            <span className="font-mono text-xs text-gray-600">// screenshot do projeto</span>
                        </div>
                        <div className="p-6 flex flex-col gap-3 flex-1">
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-xs text-green-500">PROJETO_01</span>
                                <span className="text-gray-500 text-sm">→</span>
                            </div>
                            <h3 className="text-lg font-bold">Barbearia Desktop - FullStack</h3>
                            <p className="text-gray-400 text-sm flex-1">Sistema completo de agendamento para barbearia com autenticação e painel admin.</p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full">Java</span>
                                <span className="border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full">PostgreSQL</span>
                                <span className="border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full">React</span>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-700 rounded-2xl overflow-hidden flex flex-col" style={{backgroundColor: '#0a0a0b'}}>
                        <div className="h-48 flex items-center justify-center" style={{backgroundColor: '#0a0a0b', backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,.03) 0 10px, transparent 10px 20px)'}}>
                            <span className="font-mono text-xs text-gray-600">// screenshot do projeto</span>
                        </div>
                        <div className="p-6 flex flex-col gap-3 flex-1">
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-xs text-green-500">PROJETO_02</span>
                                <span className="text-gray-500 text-sm">→</span>
                            </div>
                            <h3 className="text-lg font-bold">Nutricionista - Backend Java</h3>
                            <p className="text-gray-400 text-sm flex-1">API REST para gestão de pacientes, dietas e consultas de nutricionistas.</p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full">Java</span>
                                <span className="border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full">Spring Boot</span>
                                <span className="border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full">PostgreSQL</span>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-700 rounded-2xl overflow-hidden flex flex-col" style={{backgroundColor: '#0a0a0b'}}>
                        <div className="h-48 flex items-center justify-center" style={{backgroundColor: '#0a0a0b', backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,.03) 0 10px, transparent 10px 20px)'}}>
                            <span className="font-mono text-xs text-gray-600">// screenshot do projeto</span>
                        </div>
                        <div className="p-6 flex flex-col gap-3 flex-1">
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-xs text-green-500">PROJETO_03</span>
                                <span className="text-gray-500 text-sm">→</span>
                            </div>
                            <h3 className="text-lg font-bold">Script Red Dead Redemption 2 - Lua</h3>
                            <p className="text-gray-400 text-sm flex-1">Script customizado para modificação de comportamentos e eventos no jogo.</p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full">Lua</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects