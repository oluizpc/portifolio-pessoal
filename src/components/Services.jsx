function Services () {
    return (
        <section id="servicos" className="py-20 pl-16 pr-6">
            <div className="max-w-7xl mx-auto">

                <div className="mb-12">
                    <span className="font-mono text-sm text-green-500">03 - serviços</span>
                    <h2 className="text-5xl font-bold mt-2">Como posso ajudar?</h2>
                </div>

                <div className="grid grid-cols-4 gap-px bg-gray-800 border border-gray-800 rounded-2xl overflow-hidden">
                    
                    <div className="flex flex-col gap-4 p-8" style={{backgroundColor: '#0a0a0b'}}>
                        <span className="font-mono text-sm text-green-500">01</span>
                        <h3 className="text-lg font-bold">Suporte Técnico</h3>
                        <p className="text-gray-400 text-sm">Atendimento N1, N2 e N3: triagem, diagnóstico e resolução de incidentes com agilidade.</p>
                    </div>

                    <div className="flex flex-col gap-4 p-8" style={{backgroundColor: '#0a0a0b'}}>
                        <span className="font-mono text-sm text-green-500">02</span>
                        <h3 className="text-lg font-bold">Desenvolvimento Backend</h3>
                        <p className="text-gray-400 text-sm">Construção de APIs, regras de negócio e integrações com Java e Python.</p>
                    </div>

                    <div className="flex flex-col gap-4 p-8" style={{backgroundColor: '#0a0a0b'}}>
                        <span className="font-mono text-sm text-green-500">03</span>
                        <h3 className="text-lg font-bold">Banco de Dados</h3>
                        <p className="text-gray-400 text-sm">Modelagem, consultas e otimização em PostgreSQL e MySQL.</p>
                    </div>

                    <div className="flex flex-col gap-4 p-8" style={{backgroundColor: '#0a0a0b'}}>
                        <span className="font-mono text-sm text-green-500">04</span>
                        <h3 className="text-lg font-bold">Automação & Scripts</h3>
                        <p className="text-gray-400 text-sm">Rotinas em Python para eliminar tarefas repetitivas e reduzir chamados.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services