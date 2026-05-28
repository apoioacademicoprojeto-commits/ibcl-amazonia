export default function Home() {
  return (
    <main className="bg-[#f5f3ed] overflow-hidden text-white">

      {/* HERO */}
      <section className="relative min-h-screen">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          {/* AMAZONIA AEREA */}
          <img
            src="/images/hero-amazonia.png"
            alt="Amazonia"
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2418]/55 via-[#123524]/30 to-transparent"></div>

          {/* GLOW */}
          <div className="absolute inset-0 bg-emerald-900/10"></div>

        </div>

        {/* NAVBAR */}
        <header className="relative z-20 bg-[#0b2418] border-b border-emerald-900/40 shadow-xl">

          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

            {/* LOGO */}
            <div>

              <h1 className="text-4xl font-black tracking-wide">
                IBCL
              </h1>

              <p className="uppercase tracking-[0.45em] text-green-200 text-xs mt-1">
                Amazonia
              </p>

            </div>

            {/* MENU */}
            <nav className="hidden lg:flex items-center gap-10 uppercase text-sm tracking-wider text-white/90">

              <a href="#" className="hover:text-green-200 transition">
                Inicio
              </a>

              <a href="#" className="hover:text-green-200 transition">
                Sobre
              </a>

              <a href="#" className="hover:text-green-200 transition">
                Atuação
              </a>

              <a href="#" className="hover:text-green-200 transition">
                Línguas
              </a>

              <a href="#" className="hover:text-green-200 transition">
                Pesquisa
              </a>

              <a href="#" className="hover:text-green-200 transition">
                Contato
              </a>

            </nav>

            {/* BUTTON */}
            <button className="bg-emerald-700 hover:bg-emerald-600 transition px-6 py-3 rounded-2xl font-semibold shadow-2xl">
              Apoie
            </button>

          </div>

        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex items-center min-h-[85vh]">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="max-w-3xl">

              <div className="uppercase tracking-[0.4em] text-green-200 text-sm mb-7 font-semibold">
                Amazonia • Linguas • Memoria Cultural
              </div>

              <h2 className="text-6xl md:text-8xl font-black leading-[0.95] mb-8">
                Preservar línguas
                <br />
                e preservar futuros.
              </h2>

              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mb-12">
                O IBCL Amazônia atua na documentação,
                valorizacao e fortalecimento das linguas
                indigenas e conhecimentos ancestrais
                da floresta amazonica.
              </p>

              <div className="flex flex-wrap gap-5">

                <button className="bg-emerald-700 hover:bg-emerald-600 transition px-8 py-5 rounded-2xl font-bold shadow-2xl">
                  Conheca Nosso Trabalho
                </button>

                <button className="border border-white/30 bg-white/10 hover:bg-white hover:text-black transition px-8 py-5 rounded-2xl backdrop-blur-md">
                  Apoie Esta Causa
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* FEATURE CARDS */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pb-16">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              ["📚", "Documentacao", "Registro e preservacao de linguas ameacadas."],
              ["👥", "Formacao", "Capacitacao de pesquisadores e agentes comunitarios."],
              ["🌎", "Pesquisa", "Conhecimento cientifico colaborativo na Amazonia."],
              ["🌿", "Valorizacao", "Fortalecimento cultural e transmissao intergeracional."]
            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#163524]/45 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                <div className="w-16 h-16 rounded-full bg-emerald-900/50 flex items-center justify-center text-3xl mb-6">
                  {item[0]}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item[1]}
                </h3>

                <p className="text-gray-100 leading-relaxed">
                  {item[2]}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* SOBRE */}
      <section className="py-32 text-gray-900 bg-[#f5f3ed]">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* TEXTO */}
          <div>

            <div className="uppercase tracking-[0.4em] text-emerald-800 text-sm font-semibold mb-6">
              Sobre o IBCL Amazonia
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8 text-[#10281f]">
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
              arquivos audiovisuais e tecnologias digitais voltadas
              a preservacao dos patrimonios culturais amazonicos.
            </p>

            <button className="bg-emerald-800 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold transition">
              Conheca Nossa Historia
            </button>

          </div>

          {/* IMAGENS */}
          <div className="relative">

            {/* AMAZONIA RIO */}
            <img
              src="/images/amazonia-rio.png"
              alt="Rio Amazonico"
              className="rounded-[2rem] shadow-2xl"
            />

            {/* FLORESTA AMAZONICA */}
            <img
              src="/images/indigena-amazonia.jpg"
              alt="Floresta Amazonica"
              className="absolute -bottom-10 -right-10 w-64 rounded-[1.5rem] border-4 border-white shadow-2xl hidden md:block"
            />

          </div>

        </div>

      </section>

      {/* IMPACT */}
      <section className="px-6 pb-24 bg-[#f5f3ed]">

        <div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden relative">

          {/* BG */}
          <div className="absolute inset-0">

            <img
              src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=2000&auto=format&fit=crop"
              alt="Amazonia"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[#10281f]/70"></div>

          </div>

          {/* CONTENT */}
          <div className="relative grid md:grid-cols-4 gap-10 px-10 py-16 text-center">

            {[
              ["40+", "Linguas em documentacao"],
              ["120+", "Comunidades parceiras"],
              ["250+", "Pesquisadores colaboradores"],
              ["15", "Anos de atuacao na Amazonia"]
            ].map((item, index) => (

              <div key={index}>

                <div className="text-5xl font-black text-green-200 mb-4">
                  {item[0]}
                </div>

                <p className="text-gray-100">
                  {item[1]}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">

        {/* BG */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2200&auto=format&fit=crop"
            alt="Amazonia"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#0b2418]/60"></div>

        </div>

        {/* CONTENT */}
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

          <div className="uppercase tracking-[0.4em] text-green-200 text-sm mb-6 font-semibold">
            Apoie a preservacao cultural
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
            Cada lingua preservada
            <br />
            mantem viva uma visao unica do mundo.
          </h2>

          <p className="text-xl text-gray-100 leading-relaxed mb-12">
            Preservar linguas significa preservar biodiversidade,
            espiritualidade e memorias ancestrais da Amazonia.
          </p>

          <div className="flex justify-center flex-wrap gap-6">

            <button className="bg-emerald-700 hover:bg-emerald-600 transition px-8 py-5 rounded-2xl font-bold shadow-2xl">
              Fazer Doacao
            </button>

            <button className="border border-white/30 bg-white/10 hover:bg-white hover:text-black transition px-8 py-5 rounded-2xl backdrop-blur-md">
              Tornar-se Parceiro
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b2418] py-16 text-gray-300 border-t border-emerald-900/40">

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

              <button className="bg-emerald-700 px-6 rounded-r-2xl">
                →
              </button>

            </div>

          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-sm text-gray-400">
          © 2026 IBCL Amazonia. Todos os direitos reservados.
        </div>

      </footer>

    </main>
  )
}
