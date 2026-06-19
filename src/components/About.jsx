function About () {
    return (
        <section id="sobre" className="py-8 pl-16 pr-6 scroll-mt-24">
            <div className="max-w-7xl mx-auto flex items-start gap-12"> {/* duas colunas */}
                <div className="flex flex-col gap-4"> {/* coluna esquerda */}
                    <span className="font-mono text-sm text-green-500">01 - sobre</span>
                    <h1 className="text-5xl font-bold max-w-64">Quem está por trás do código</h1>
                </div>

                <div className="flex flex-col gap-4 flex-1"> {/* coluna direita */}
                    <p className="text-lg">Há 2 anos atuo na área de tecnologia, hoje como Analista de Suporte Técnico na Up Business, cobrindo os níveis N1, N2 e N3 quando necessário</p>
                    <p className="text-gray-400 text-lg">Gosto de entender o problema na raiz: investigar logs, consultar bancos de dados, automatizar tarefas repetitivas e escrever 
                        código que resolve de verdade. Estou sempre estudando para evoluir do suporte ao desenvolvimento backend.</p>

                    <div className="flex border border-gray-700 rounded-2xl"> {/* container das stats */}
                        <div className="flex-1 p-6 border-r border-gray-700">
                            <p className="text-4xl font-bold">2+</p>
                            <p className="text-gray-400 text-sm mt-1">anos na área</p>
                        </div>
                        <div className="flex-1 p-6 border-r border-gray-700">
                            <p className="text-4xl font-bold">N1—N3</p>
                            <p className="text-gray-400 text-sm mt-1">níveis de suporte</p>
                        </div>
                        <div className="flex-1 p-6">
                            <p className="text-4xl font-bold">7</p>
                            <p className="text-gray-400 text-sm mt-1">tecnologias</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About