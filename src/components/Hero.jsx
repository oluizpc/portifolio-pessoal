function Hero () {
    return (
        <section className="pt-42 py-20 pl-19 pr-6">
            <div className="max-w-7xl mx-auto flex items-center gap-12">

                <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2 border border-gray-600 rounded-full px-3 py-1 text-sm w-fit">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        disponível para projetos
                    </span>
                    <span className="font-mono text-sm text-green-500">// analista de suporte - backend</span>
                    <h1 className="text-5xl font-bold">Luiz Paullo Caetano</h1>
                    <p className="text-gray-400 text-lg max-w-lg">Analista de suporte técnico N1, N2 e N3 construindo soluções backend com Java, Python e banco de dados relacionais. Foco em resolver problemas da raiz.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-white text-gray-950 px-6 py-3 rounded-lg font-medium">Ver Projetos</button>
                        <button className="border border-gray-600 text-white px-6 py-3 rounded-lg font-medium">Entrar em contato</button>
                    </div>
                </div>

                <div className="g-gray-900 border border-gray-700 rounded-2xl p-6 font-mono text-sm w-120 ml-auto mr-12" >
                    <div className="flex gap-2 items-center border-b border-gray-700 pb-3 mb-4">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        <span className="text-gray-400 ml-2">~/luiz — zsh</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-green-400">$ whoami</p>
                        <p className="text-gray-300">luiz-paullo-caetano</p>
                        <p className="text-green-400">$ cat stack.txt</p>
                        <p className="text-gray-300">java · python · postgresql · linux · mysql</p>
                        <p className="text-gray-300"> html · css · javascript · react </p>
                        <p className="text-green-400">$ support --level</p>
                        <p className="text-gray-300">N1 · N2 · N3 · <span className="text-green-400">online</span></p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero