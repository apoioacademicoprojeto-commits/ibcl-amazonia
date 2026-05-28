export default function Home() {
  return (
    <main className="bg-[#f5f1e8] text-white">

      {/* HERO */}
      <section className="relative min-h-screen">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop"
            alt="Amazonia"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Navbar */}
        <header className="relative z-20">

          <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

            <div>
              <h1 className="text-3xl font-black">
                IBCL
              </h1>

              <p className="text-green-300 uppercase tracking-[0.3em] text-sm">
                Amazonia
              </p>
            </div>

            <button className="bg-green-700 hover:bg-green-600 px-6 py-3 rounded-xl font-bold transition">
              Apoie
            </button>

          </div>

        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center min-h-screen">

          <div className="max-w-7xl mx-auto px-6">

            <div className="max-w-3xl">

              <p className="uppercase tracking-[0.3em] text-green-300 mb-6 font-semibold">
                Patrimonio Linguistico • Amazonia • Culturas Indigenas
              </p>

              <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
                Preservar linguas e preservar futuros.
              </h2>

              <p className="text-xl text-gray-200 leading-relaxed mb-10">
                O Instituto Brasileiro de Conservacao Linguistica na Amazonia
                atua na documentacao, preservacao e fortalecimento de linguas
                e conhecimentos culturais ameacados.
              </p>

              <div className="flex flex-wrap gap-5">

                <button className="bg-green-700 hover:bg-green-600 px-8 py-4 rounded-2xl font-bold transition">
                  Conheca Nosso Trabalho
                </button>

                <button className="border border-white/50 hover:bg-white hover:text-black px-8 py-4 rounded-2xl transition">
                  Apoie Esta Causa
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SOBRE */}
      <section className="py-28 text-gray-900">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-green-800 mb-5 font-semibold">
              Sobre o IBCL Amazonia
            </p>

            <h2 className="text-5xl font-black leading-tight mb-8">
              Ciencia, territorio e memoria cultural.
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Trabalhamos em parceria com comunidades indigenas,
              pesquisadores e instituicoes culturais.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Desenvolvemos iniciativas de documentacao linguistica,
              arquivos audiovisuais e tecnologias digitais para
              preservacao cultural.
            </p>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop"
              alt="Floresta"
              className="rounded-[2rem] shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0b2a1f] to-[#14532d] py-28">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-green-300 mb-5 font-semibold">
            Apoie a preservacao cultural
          </p>

          <h2 className="text-5xl font-black leading-tight mb-10">
            Cada lingua preservada mantem viva uma visao unica do mundo.
          </h2>

          <p className="text-xl text-green-50 leading-relaxed mb-12">
            Preservar linguas indigenas e preservar conhecimentos,
            memoria e biodiversidade cultural.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">

            <button className="bg-white text-green-900 px-8 py-4 rounded-2xl font-bold">
              Fazer Doacao
            </button>

            <button className="border border-white/30 px-8 py-4 rounded-2xl">
              Tornar-se Parceiro
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black py-14 text-gray-400">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">

          <div>

            <h3 className="text-white text-3xl font-black mb-4">
              IBCL Amazonia
            </h3>

            <p>
              Instituto Brasileiro de Conservacao Linguistica na Amazonia.
            </p>

          </div>

          <div className="text-sm text-gray-500">
            © 2026 IBCL Amazonia
          </div>

        </div>

      </footer>

    </main>
  )
}
