export default function Home() {
  return (
    <main className="bg-[#f5f3ed] overflow-hidden text-white">

      {/* HERO */}
      <section className="relative min-h-screen">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2200&auto=format&fit=crop"
            alt="Amazonia"
            className="w-full h-full object-cover"
          />

          {/* cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20"></div>

          {/* green glow */}
          <div className="absolute inset-0 bg-green-900/20"></div>

        </div>

        {/* NAVBAR */}
        <header className="relative z-20 backdrop-blur-sm bg-black/20 border-b border-white/10">

          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

            {/* LOGO */}
            <div>

              <h1 className="text-4xl font-black tracking-wide">
                IBCL
              </h1>

              <p className="uppercase tracking-[0.45em] text-green-300 text-xs mt-1">
                Amazonia
              </p>

            </div>

            {/* MENU */}
            <nav className="hidden lg:flex items-center gap-10 uppercase text-sm tracking-wider">

              <a href="#" className="hover:text-green-300 transition">
                Inicio
              </a>

              <a href="#" className="hover:text-green-300 transition">
                Sobre
              </a>

              <a href="#" className="hover:text-green-300 transition">
                Atuacao
              </a>

              <a href="#" className="hover:text-green-300 transition">
                Linguas
              </a>

              <a href="#" className="hover:text-green-300 transition">
                Pesquisa
              </a>

              <a href="#" className="hover:text-green-300 transition">
                Contato
              </a>

            </nav>

            {/* BUTTON */}
            <button className="bg-green-700 hover:bg-green-600 transition px-6 py-3 rounded-2xl font-semibold shadow-2xl">
              Apoie
            </button>

          </div>

        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex items-center min-h-[85vh]">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="max-w-3xl">

              <div className="uppercase tracking-[0.4em] text-green-300 text-sm mb-7 font-semibold">
                A lingua e territorio.
              </div>

              <h2 className="text-6xl md:text-8xl font-black leading-[0.95] mb-8">
                Preservar linguas
                <br />
                e preservar futuros.
              </h2>

              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mb-12">
                O IBCL Amazonia atua na documentacao,
                promocao e valorizacao das linguas
                indigenas e comunidades tradicionais
                da Amazonia.
              </p>

              <div className="flex flex-wrap gap-5">

                <button className="bg-green-700 hover:bg-green-600 transition px-8 py-5 rounded-2xl font-bold shadow-2xl">
                  Conheca Nosso Trabalho
                </button>

                <button className="border border-white/40 hover:bg-white hover:text-black transition px-8 py-5 rounded-2xl backdrop-blur-sm">
                  Apoie Esta Causa
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* FEATURE CARDS */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pb-16">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* CARD */}
            <div className="bg-black/35 backdrop-blur-md border border-green-700/40 rounded-[2rem] p-8 shadow-2xl hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-full bg-green-900/60 flex items-center justify-center text-3xl mb-6">
                📚
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Documentacao
              </h3>

              <p className="text-gray-200 leading-relaxed">
                Registro e preservacao de linguas ameaçadas.
              </p>

            </div>

            {/* CARD */}
            <div className="bg-black/35 backdrop-blur-md border border-green-700/40 rounded-[2rem] p-8 shadow-2xl hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-full bg-green-900/60 flex items-center justify-center text-3xl mb-6">
                👥
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Formacao
              </h3>

              <p className="text-gray-200 leading-relaxed">
                Capacitacao de pesquisadores e agentes comunitarios.
              </p>

            </div>

            {/* CARD */}
            <div className="bg-black/35 backdrop-blur-md border border-green-700/40 rounded-[2rem] p-8 shadow-2xl hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-full bg-green-900/60 flex items-center justify-center text-3xl mb-6">
                🌎
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Pesquisa
              </h3>

              <p className="text-gray-200 leading-relaxed">
                Producao de conhecimento cientifico colaborativo.
              </p>

            </div>

            {/* CARD */}
            <div className="bg-black/35 backdrop-blur-md border border-green-700/40 rounded-[2rem] p-8 shadow-2xl hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-full bg-green-900/60 flex items-center justify-center text-3xl mb-6">
                🌿
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Valorizacao
              </h3>

              <p className="text-gray-200 leading-relaxed">
                Fortalecimento cultural e transmissao intergeracional.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SOBRE */}
      <section className="py-32 text-gray-900">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* TEXT */}
          <div>

            <div className="uppercase tracking-[0.4em] text-green-800 text-sm font-semibold mb-6">
              Sobre o IBCL Amazonia
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              Ciencia, territorio
              <br />
              e memoria cultural.
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Trabalhamos em parceria com comunidades indigenas,
              pesquisadores e instituicoes culturais para fortalecer
              a transmissao linguistica entre geracoes.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Desenvolvemos iniciativas de documentacao linguistica,
              arquivos audiovisuais, tecnologias digitais e metodologias
              interculturais voltadas a preservacao de patrimonios
              culturais e conhecimentos ancestrais.
            </p>

            <button className="bg-green-800 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold transition">
              Conheca Nossa Historia
            </button>

          </div>

          {/* IMAGES */}
          <div className="relative">

            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
              alt="Amazonia"
              className="rounded-[2rem] shadow-2xl"
            />

            {/* Floating Image */}
            <img
              src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=700&auto=format&fit=crop"
              alt="Indigena"
              className="absolute -bottom-10 -right-10 w-64 rounded-[1.5rem] border-4 border-white shadow-2xl hidden md:block"
            />

          </div>

        </div>

      </section>

      {/* IMPACT */}
      <section className="px-6 pb-20">

        <div className="max-w-7xl mx-auto bg-[#10281f] rounded-[2.5rem] overflow-hidden relative">

          <div className="absolute inset-0 opacity-20">

            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop"
              alt="Floresta"
              className="w-full h-full object-cover"
            />

          </div>

          <div className="relative grid md:grid-cols-4 gap-10 px-10 py-16 text-center">

            <div>
              <div className="text-5xl font-black text-green-300 mb-4">
                40+
              </div>

              <p className="text-gray-200">
                Linguas em documentacao
              </p>
            </div>

            <div>
              <div className="text-5xl font-black text-green-300 mb-4">
                120+
              </div>

              <p className="text-gray-200">
                Comunidades parceiras
              </p>
            </div>

            <div>
              <div className="text-5xl font-black text-green-300 mb-4">
                250+
              </div>

              <p className="text-gray-200">
                Pesquisadores colaboradores
              </p>
            </div>

            <div>
              <div className="text-5xl font-black text-green-300 mb-4">
                15
              </div>

              <p className="text-gray-200">
                Anos de atuacao na Amazonia
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative py-28 text-white overflow-hidden">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?q=80&w=2000&auto=format&fit=crop"
            alt="Amazonia"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70"></div>

        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <div className="uppercase tracking-[0.4em] text-green-300 text-sm mb-6 font-semibold">
            Apoie a preservacao cultural
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
            Cada lingua preservada
            <br />
            mantem viva uma visao unica do mundo.
          </h2>

          <p className="text-xl text-gray-200 leading-relaxed mb-12">
            Preservar linguas indigenas significa preservar conhecimentos,
            biodiversidade, espiritualidade e memorias ancestrais.
          </p>

          <div className="flex justify-center flex-wrap gap-6">

            <button className="bg-green-700 hover:bg-green-600 transition px-8 py-5 rounded-2xl font-bold shadow-2xl">
              Fazer Doacao
            </button>

            <button className="border border-white/40 hover:bg-white hover:text-black transition px-8 py-5 rounded-2xl">
              Tornar-se Parceiro
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black py-16 text-gray-400">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div>

            <h3 className="text-white text-4xl font-black mb-4">
              IBCL
            </h3>

            <p className="text-green-300 uppercase tracking-[0.35em] text-sm mb-6">
              Amazonia
            </p>

            <p className="leading-relaxed">
              Instituto Brasileiro de Conservacao Linguistica na Amazonia.
            </p>

          </div>

          <div>

            <h4 className="text-white font-bold mb-5">
              Navegacao
            </h4>

            <div className="space-y-3">

              <p>Inicio</p>
              <p>Sobre</p>
              <p>Pesquisa</p>
              <p>Projetos</p>

            </div>

          </div>

          <div>

            <h4 className="text-white font-bold mb-5">
              Newsletter
            </h4>

            <div className="flex">

              <input
                type="email"
                placeholder="Seu email"
                className="bg-white/10 border border-white/10 px-5 py-4 rounded-l-2xl w-full outline-none"
              />

              <button className="bg-green-700 px-6 rounded-r-2xl">
                →
              </button>

            </div>

          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-sm text-gray-500">
          © 2026 IBCL Amazonia. Todos os direitos reservados.
        </div>

      </footer>

    </main>
  )
}
