```jsx
export default function Home() {
  return (
    <main className="bg-[#f5f1e8] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop"
            alt="Amazônia"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
        </div>

        {/* NAVBAR */}
        <header className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

            <div>
              <h1 className="text-3xl font-black tracking-wide">
                IBCL
              </h1>

              <p className="text-green-300 text-sm tracking-[0.3em] uppercase">
                Amazônia
              </p>
            </div>

            <nav className="hidden md:flex gap-10 text-sm uppercase tracking-wider">
              <a href="#" className="hover:text-green-300 transition">
                Início
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

              <a href="#" className="hover:text-green-300 transition">
                Contato
              </a>
            </nav>

            <button className="bg-green-700 hover:bg-green-600 transition px-6 py-3 rounded-xl font-semibold shadow-2xl">
              Apoie
            </button>
          </div>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex-1 flex items-center">

          <div className="max-w-7xl mx-auto px-6 py-20">

            <div className="max-w-3xl">

              <div className="uppercase tracking-[0.3em] text-green-300 mb-6 font-semibold">
                Patrimônio Linguístico • Amazônia • Culturas Indígenas
              </div>

              <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8">
                Preservar línguas é preservar futuros.
              </h2>

              <p className="text-xl text-gray-200 leading-relaxed mb-10">
                O Instituto Brasileiro de Conservação Linguística na Amazônia atua na documentação,
                preservação e fortalecimento de línguas indígenas e conhecimentos culturais
                ameaçados de desaparecimento.
              </p>

              <div className="flex flex-wrap gap-5">

                <button className="bg-green-700 hover:bg-green-600 transition px-8 py-4 rounded-2xl font-bold shadow-2xl">
                  Conheça Nosso Trabalho
                </button>

                <button className="border border-white/50 hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl font-semibold backdrop-blur-sm">
                  Apoie Esta Causa
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* FEATURE CARDS */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pb-12 -mt-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="text-4xl mb-5">📚</div>

              <h3 className="text-2xl font-bold mb-4">
                Documentação
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Registro e preservação de línguas ameaçadas.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="text-4xl mb-5">🧑🏽‍🏫</div>

              <h3 className="text-2xl font-bold mb-4">
                Formação
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Capacitação de pesquisadores e agentes comunitários.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="text-4xl mb-5">🌎</div>

              <h3 className="text-2xl font-bold mb-4">
                Pesquisa
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Produção de conhecimento científico colaborativo.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="text-4xl mb-5">🌿</div>

              <h3 className="text-2xl font-bold mb-4">
                Valorização
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Fortalecimento cultural e transmissão intergeracional.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* SOBRE */}
      <section className="py-28 text-gray-900">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <div className="uppercase tracking-[0.3em] text-green-800 font-semibold mb-5">
              Sobre o IBCL Amazônia
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              Ciência, território e memória cultural.
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Trabalhamos em parceria com comunidades indígenas,
              pesquisadores e instituições culturais para fortalecer
              a transmissão linguística entre gerações.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Desenvolvemos iniciativas de documentação linguística,
              arquivos audiovisuais, tecnologias digitais e metodologias
              interculturais voltadas à preservação de patrimônios
              culturais e conhecimentos ancestrais.
            </p>

          </div>

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop"
              alt="Floresta Amazônica"
              className="rounded-[2rem] shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a1f] to-[#14532d]"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <div className="uppercase tracking-[0.3em] text-green-300 mb-5 font-semibold">
            Apoie a preservação cultural
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
            Cada língua preservada mantém viva uma visão única do mundo.
          </h2>

          <p className="text-xl text-green-50 leading-relaxed mb-12">
            Preservar línguas indígenas é preservar conhecimentos
            sobre biodiversidade, território, espiritualidade
            e formas ancestrais de existir.
          </p>

          <div className="flex justify-center flex-wrap gap-6">

            <button className="bg-white text-green-900 px-8 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition">
              Fazer Doação
            </button>

            <button className="border border-white/30 px-8 py-4 rounded-2xl hover:bg-white hover:text-green-900 transition">
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
              IBCL Amazônia
            </h3>

            <p className="max-w-md leading-relaxed">
              Instituto Brasileiro de Conservação Linguística na Amazônia.
            </p>

          </div>

          <div className="text-sm text-gray-500">
            © 2026 IBCL Amazônia • Preservando línguas e memórias culturais.
          </div>

        </div>

      </footer>

    </main>
  )
}
```
