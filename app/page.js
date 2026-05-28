export default function Home() {
  return (
    <main className="bg-[#f5f1e8] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col text-white">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=2000&auto=format&fit=crop"
            alt="Amazonia"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

        </div>

        {/* NAVBAR */}
        <header className="relative z-20">

          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

            <div>

              <h1 className="text-3xl md:text-4xl font-black tracking-wide">
                IBCL
              </h1>

              <p className="uppercase tracking-[0.4em] text-green-300 text-xs mt-1">
                Amazonia
              </p>

            </div>

            <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wider">

              <a href="#" className="hover:text-green-300 transition">
                Inicio
              </a>

              <a href="#" className="hover:text-green-300 transition">
                Sobre
              </a>

              <a href="#" className="hover:text-green-300 transition">
                Projetos
              </a>

              <a href="#" className="hover:text-green-300 transition">
                Pesquisa
              </a>

            </nav>

            <button className="bg-green-700 hover:bg-green-600 transition px-6 py-3 rounded-2xl font-semibold shadow-2xl">
              Apoie
            </button>

          </div>

        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex-1 flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="max-w-4xl">

              <div className="uppercase tracking-[0.4em] text-green-300 text-sm mb-6 font-semibold">
                Patrimonio Linguistico • Amazonia • Culturas Indigenas
              </div>

              <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8">
                Preservar linguas e preservar futuros.
              </h2>

              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mb-12">
                O Instituto Brasileiro de Conservacao Linguistica na Amazonia
                atua na preservacao de linguas indigenas, memorias culturais
                e conhecimentos ancestrais ameacados de desaparecimento.
              </p>

              <div className="flex flex-wrap gap-5">

                <button className="bg-green-700 hover:bg-green-600 transition px-8 py-4 rounded-2xl font-bold shadow-2xl">
                  Conheca Nosso Trabalho
                </button>

                <button className="border border-white/40 hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl backdrop-blur-sm">
                  Apoie Esta Causa
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* FEATURE CARDS */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pb-14">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 shadow-2xl">

              <div className="text-5xl mb-6">
                📚
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Documentacao
              </h3>

              <p className="text-gray-200 leading-relaxed">
                Registro e preservacao de linguas ameaçadas.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 shadow-2xl">

              <div className="text-5xl mb-6">
                🌿
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Revitalizacao
              </h3>

              <p className="text-gray-200 leading-relaxed">
                Fortalecimento cultural e transmissao linguistica.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 shadow-2xl">

              <div className="text-5xl mb-6">
                🛰️
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Tecnologia
              </h3>

              <p className="text-gray-200 leading-relaxed">
                Plataformas digitais e inteligencia artificial cultural.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 shadow-2xl">

              <div className="text-5xl mb-6">
                🤝
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Pesquisa
              </h3>

              <p className="text-gray-200 leading-relaxed">
                Iniciativas colaborativas com comunidades e pesquisadores.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SOBRE */}
      <section className="py-28 text-gray-900">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <div className="uppercase tracking-[0.4em] text-green-800 text-sm font-semibold mb-6">
              Sobre o IBCL Amazonia
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              Ciencia, territorio e memoria cultural.
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Trabalhamos em parceria com comunidades indigenas,
              pesquisadores e instituicoes culturais para fortalecer
              a transmissao linguistica entre geracoes.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Desenvolvemos iniciativas de documentacao linguistica,
              arquivos audiovisuais, tecnologias digitais e metodologias
              interculturais voltadas a preservacao de patrimonios culturais
              e conhecimentos ancestrais.
            </p>

          </div>

          <div className="relative">

            <div className="absolute -top-6 -left-6 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-60"></div>

            <img
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop"
              alt="Floresta Amazonica"
              className="relative rounded-[2rem] shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden text-white">

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a1f] to-[#14532d]"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <div className="uppercase tracking-[0.4em] text-green-300 text-sm mb-6 font-semibold">
            Apoie a preservacao cultural
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
            Cada lingua preservada mantem viva uma visao unica do mundo.
          </h2>

          <p className="text-xl text-green-50 leading-relaxed mb-12">
            Preservar linguas indigenas significa preservar conhecimentos
            sobre biodiversidade, territorio, espiritualidade e memoria ancestral.
          </p>

          <div className="flex justify-center flex-wrap gap-6">

            <button className="bg-white text-green-900 px-8 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition">
              Fazer Doacao
            </button>

            <button className="border border-white/30 px-8 py-4 rounded-2xl hover:bg-white hover:text-green-900 transition">
              Tornar-se Parceiro
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-14">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">

          <div>

            <h3 className="text-white text-3xl font-black mb-4">
              IBCL Amazonia
            </h3>

            <p className="max-w-md leading-relaxed">
              Instituto Brasileiro de Conservacao Linguistica na Amazonia.
            </p>

          </div>

          <div className="text-sm text-gray-500">
            © 2026 IBCL Amazonia • Preservando linguas e memorias culturais.
          </div>

        </div>

      </footer>

    </main>
  )
}
