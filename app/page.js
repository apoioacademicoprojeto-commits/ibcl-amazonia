export default function Home() {
  return (
    <main className="bg-[#f5f3ed] overflow-hidden text-white">

      {/* HERO */}
      <section className="relative min-h-screen">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="/images/hero-amazonia.png"
            alt="Amazônia"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2418]/55 via-[#123524]/30 to-transparent"></div>
          <div className="absolute inset-0 bg-emerald-900/10"></div>

        </div>

        {/* NAVBAR */}
        <header className="relative z-20 bg-[#0b2418] border-b border-emerald-900/40 shadow-xl">

          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

            <div>
              <h1 className="text-4xl font-black tracking-wide">IBCL</h1>

              <p className="uppercase tracking-[0.45em] text-green-200 text-xs mt-1">
                Amazônia
              </p>
            </div>

            <nav className="hidden lg:flex items-center gap-10 uppercase text-sm tracking-wider text-white/90">

              <a href="#" className="hover:text-green-200 transition">
                Início
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
                Amazônia • Línguas • Memória Cultural
              </div>

              <h2 className="text-6xl md:text-8xl font-black leading-[0.95] mb-8">
                Preservar línguas
                <br />
                e fortalecer culturas.
              </h2>

              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mb-12">
                O IBCL Amazônia atua na documentação,
                valorização e fortalecimento das línguas
                indígenas e conhecimentos ancestrais
                da floresta amazônica.
              </p>

              <div className="flex flex-wrap gap-5">

                <button className="bg-emerald-700 hover:bg-emerald-600 transition px-8 py-5 rounded-2xl font-bold shadow-2xl">
                  Conheça Nosso Trabalho
                </button>

                <button className="border border-white/30 bg-white/10 hover:bg-white hover:text-black transition px-8 py-5 rounded-2xl backdrop-blur-md">
                  Apoie Esta Causa
                </button>

              </div>

            </div>

          </div>

        </div>

       {/* FEATURE CARDS */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-white/0 via-white/5 to-white/0 pointer-events-none" />
<div className="relative z-20 max-w-7xl mx-auto px-6 pb-16">

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      {
        icon: (
          <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 0 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        ),
        title: "Documentação",
        text: "Registro e preservação de línguas ameaçadas."
      },

      {
        icon: (
          <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
        title: "Formação",
        text: "Capacitação de pesquisadores e agentes comunitários."
      },

      {
        icon: (
          <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
        title: "Pesquisa",
        text: "Conhecimento científico colaborativo na Amazônia."
      },

      {
        icon: (
          <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M11 20A7 7 0 0 1 4 13C4 7 12 3 12 3s8 4 8 10a7 7 0 0 1-7 7h-2z" />
          </svg>
        ),
        title: "Valorização",
        text: "Fortalecimento cultural e transmissão intergeracional."
      }
    ].map((item, index) => (

      <div
        key={index}
        className="bg-[#163524]/45 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl hover:-translate-y-2 transition duration-300"
      >

        <div className="w-20 h-20 rounded-full border border-white/30 bg-white/5 backdrop-blur-md flex items-center justify-center text-white mb-6">
          {item.icon}
        </div>

        <h3 className="text-2xl font-bold mb-4 text-white">
          {item.title}
        </h3>

        <p className="text-gray-100 leading-relaxed">
          {item.text}
        </p>

      </div>

    ))}

  </div>

</div>
      </section>

      {/* IMPACT */}
      <section className="px-6 pb-24 bg-[#f5f3ed]">

        <div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden relative">

          <div className="absolute inset-0">

            <img
              src="/images/pexels-ivo-brasil-335441-17502449.jpg"
              alt="Amazônia"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[#10281f]/70"></div>

          </div>

          <div className="relative grid md:grid-cols-4 gap-10 px-10 py-16 text-center">

            {[
              ["40+", "Línguas em documentação"],
              ["120+", "Comunidades parceiras"],
              ["250+", "Pesquisadores colaboradores"],
              ["15", "Anos de atuação na Amazônia"]
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

      {/* CTA + FUNDADORES */}
      <section className="relative py-28 overflow-hidden">

        <div className="absolute inset-0">

          <img
            src="/images/Manaus AM pexels-jeangc-28587130.jpg"
            alt="Amazônia"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#0b2418]/60"></div>

        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

          <div className="uppercase tracking-[0.4em] text-green-200 text-sm mb-6 font-semibold">
            Apoie a preservação cultural
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
            Cada língua preservada
            <br />
            mantém viva uma visão única do mundo.
          </h2>

          <p className="text-xl text-gray-100 leading-relaxed mb-12">
            Preservar línguas significa preservar biodiversidade,
            espiritualidade e memórias ancestrais da Amazônia.
          </p>

          {/* FUNDADORES */}
          <section id="fundadores" className="py-24 px-6 md:px-16 bg-[#0B2E26]">

            <div className="max-w-7xl mx-auto">

              <div className="mb-16 text-center">

                <p className="text-[#9ACD32] uppercase tracking-[0.2em] text-sm mb-4">
                  Fundadores
                </p>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Pessoas que constroem
                  <br />
                  pontes entre línguas,
                  territórios e futuro.
                </h2>

                <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                  O IBCL Amazônia reúne pesquisadores, educadores e agentes culturais
                  comprometidos com a preservação das línguas indígenas.
                </p>

              </div>

              <div className="grid md:grid-cols-2 gap-10">

                {/* FUNDADORA */}
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 text-center">

                  <div className="flex justify-center mb-8">
                    <img
                      src="/images/leticiafundadora-1.jpg"
                      alt="Fundadora"
                      className="w-44 h-44 rounded-full object-cover object-[center_20%] border-4 border-[#9ACD32]/30 shadow-2xl"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    Nome da Fundadora
                  </h3>

                  <p className="text-[#9ACD32] mb-6 uppercase tracking-[0.25em] text-xs">
                    Linguista • Pesquisadora • Educadora
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
                    Pesquisadora com experiência em documentação de línguas indígenas.
                  </p>

                </div>

                {/* FUNDADOR */}
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 text-center">

                  <div className="flex justify-center mb-8">
                    <img
                      src="/images/fundador-2.jpg"
                      alt="Fundador"
                      className="w-44 h-44 rounded-full object-cover object-[center_20%] border-4 border-[#9ACD32]/30 shadow-2xl"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    Nome do Fundador
                  </h3>

                  <p className="text-[#9ACD32] mb-6 uppercase tracking-[0.25em] text-xs">
                    Antropólogo • Pesquisador • Consultor
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
                    Atua no desenvolvimento de projetos culturais na Amazônia.
                  </p>

                </div>

              </div>

            </div>

          </section>

          <div className="flex justify-center flex-wrap gap-6 mt-12">

            <button className="bg-emerald-700 hover:bg-emerald-600 transition px-8 py-5 rounded-2xl font-bold shadow-2xl">
              Doação
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

            <h3 className="text-white text-4xl font-black mb-4">IBCL</h3>

            <p className="text-green-300 uppercase tracking-[0.35em] text-sm mb-6">
              Amazônia
            </p>

            <p>
              Instituto Brasileiro de Conservação Linguística na Amazônia.
            </p>

          </div>

          <div>

            <h4 className="text-white font-bold mb-5">Navegação</h4>

            <div className="space-y-3">
              <p>Início</p>
              <p>Sobre</p>
              <p>Pesquisa</p>
              <p>Projetos</p>
            </div>

          </div>

          <div>

            <h4 className="text-white font-bold mb-5">Newsletter</h4>

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
          © 2026 IBCL Amazônia. Todos os direitos reservados.
        </div>

      </footer>

    </main>
  )
}
