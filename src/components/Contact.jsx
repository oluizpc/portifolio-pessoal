import { useState } from 'react'

function Contact () {
    const [copiado, setCopiado] = useState(false)

    const copiarEmail = () => {
        navigator.clipboard.writeText('luizpc.contato@gmail.com')
        setCopiado(true)
        setTimeout(() => setCopiado(false), 1800)
    }

    return (
        <section id="contato" className="py-20 pl-16 pr-6">
            <div className="max-w-7xl mx-auto">

                <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-12">
                    <span className="font-mono text-sm text-green-500">05 - contato</span>
                    <h2 className="text-5xl font-bold">Vamos construir algo juntos?</h2>
                    <p className="text-gray-400 text-lg">Disponível para projetos freelance e oportunidades em backend.</p>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <button onClick={copiarEmail} className="flex items-center gap-4 border border-gray-700 rounded-xl px-6 py-4 hover:border-gray-500 transition-colors" style={{backgroundColor: '#0a0a0b'}}>
                        <span className="font-mono text-sm text-gray-300">luizpc.contato@gmail.com</span>
                        <span className="text-xs text-green-500 border border-green-500/30 px-2 py-1 rounded-full">
                            {copiado ? 'copiado!' : 'copiar'}
                        </span>
                    </button>

                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/oluizpc/" target="_blank" className="font-mono text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://github.com/oluizpc" target="_blank" className="font-mono text-sm text-gray-400 hover:text-white transition-colors">GitHub</a>
                        <a href="https://wa.me/5535991810204" target="_blank" className="font-mono text-sm text-gray-400 hover:text-white transition-colors">WhatsApp</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact