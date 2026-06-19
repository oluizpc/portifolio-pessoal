function Experience () {
    return (
        <section id="experiencia" className="py-8 pl-16 pr-6 scroll-mt-24">
            <div className="max-w-7xl mx-auto flex items-start gap-20">

                <div className="flex flex-col gap-6 min-w-80"> {/* coluna esquerda */}
                    <div>
                        <span className="font-mono text-sm text-green-500">04 - experiência</span>
                    </div>

                    <div className="border-l border-gray-700 pl-6 flex flex-col gap-2 relative">
                        <span className="w-2 h-2 rounded-full bg-green-500 absolute -left-1 top-1"></span>
                        <span className="font-mono text-xs text-gray-500">2024 - PRESENTE</span>
                        <h3 className="text-xl font-bold">Analista de Suporte Técnico</h3>
                        <span className="text-green-500 text-sm font-mono">Up Business</span>
                        <ul className="flex flex-col gap-2 mt-2">
                            <li className="text-gray-400 text-sm">Atendimento e resolução de chamados nos níveis N1, N2 e N3.</li>
                            <li className="text-gray-400 text-sm">Diagnóstico de incidentes, análise de logs e consultas em banco de dados.</li>
                            <li className="text-gray-400 text-sm">Apoio a clientes e times internos com foco em resolver na raiz.</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-6 flex-1"> {/* coluna direita */}

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <span className="text-sm font-mono">Java</span>
                            <span className="text-sm font-mono text-gray-500">86%</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.06)'}}>
                            <div className="h-1.5 rounded-full bg-green-400" style={{width: '86%'}}></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <span className="text-sm font-mono">PostgreSQL</span>
                            <span className="text-sm font-mono text-gray-500">80%</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.06)'}}>
                            <div className="h-1.5 rounded-full bg-green-400" style={{width: '80%'}}></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <span className="text-sm font-mono">Python</span>
                            <span className="text-sm font-mono text-gray-500">72%</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.06)'}}>
                            <div className="h-1.5 rounded-full bg-green-400" style={{width: '72%'}}></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <span className="text-sm font-mono">MySQL</span>
                            <span className="text-sm font-mono text-gray-500">75%</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.06)'}}>
                            <div className="h-1.5 rounded-full bg-green-400" style={{width: '75%'}}></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <span className="text-sm font-mono">HTML/CSS</span>
                            <span className="text-sm font-mono text-gray-500">78%</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.06)'}}>
                            <div className="h-1.5 rounded-full bg-green-400" style={{width: '78%'}}></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <span className="text-sm font-mono">JavaScript</span>
                            <span className="text-sm font-mono text-gray-500">40%</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.06)'}}>
                            <div className="h-1.5 rounded-full bg-green-400" style={{width: '40%'}}></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience