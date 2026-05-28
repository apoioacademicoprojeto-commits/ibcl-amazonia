export default function IBCLWebsite() {
  return (
    <div className="min-h-screen bg-[#f7f6f2] text-gray-900 overflow-hidden">
      <header className="relative bg-gradient-to-br from-[#0b3d2e] via-[#14532d] to-[#1f7a57] text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <div className="inline-block px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm bg-white/10 mb-8 text-sm tracking-wide uppercase">
            Patrimônio Linguístico • Amazônia • Culturas Indígenas
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 max-w-5xl mx-auto">
            Instituto Brasileiro de Conservação Linguística na Amazônia
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-green-50">
            Preservando línguas ameaçadas, fortalecendo culturas indígenas e conectando
            tecnologia, memória e diversidade linguística.
          </p>

          <div className="mt-12 flex justify-center gap-5 flex-wrap">
            <button className="bg-white text-green-900 px-8 py-4 rounded-2xl shadow-2xl font-semibold hover:scale-105 transition duration-300">
              Apoie Nossa Missão
            </button>

            <button className="border border-white/50 backdrop-blur-sm bg-white/10 px-8 py-4 rounded-2xl hover:bg-white hover:text-green-900 transition duration-300">
              Conheça os Projetos
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-green-800 font-semibold uppercase tracking-widest mb-4">
            Nossa Missão
          </div>

          <h2 className="text-5xl font-black mb-8 leading-tight">
            Preservar vozes, histórias e saberes ancestrais.
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            O Instituto Brasileiro de Conservação Linguística na Amazônia atua na
            documentação, preservação e revitalização de línguas indígenas e ameaçadas
            de extinção em diferentes territórios do Brasil.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Trabalhamos em parceria com comunidades indígenas, pesquisadores,
            educadores e instituições culturais para fortalecer a transmissão
            linguística entre gerações por meio de tecnologias digitais,
            arquivos audiovisuais e metodologias interculturais.
          </p>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
              <div className="text-4xl font-black text-green-800 mb-2">40+</div>
              <p className="text-gray-600">Comunidades e iniciativas parceiras</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
              <div className="text-4xl font-black text-green-800 mb-2">100%</div>
              <p className="text-gray-600">Foco em preservação cultural colaborativa</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-60"></div>

          <div className="relative bg-white rounded-[2rem] shadow-2xl p-10 border border-gray-100">
            <h3 className="text-3xl font-bold mb-8 text-green-900">
              Áreas de Atuação
            </h3>

            <div className="space-y-5 text-lg text-gray-700">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🌿</span>
                <p>Documentação linguística e etnográfica</p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📚</span>
                <p>Revitalização de línguas indígenas</p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🎙️</span>
                <p>Arquivos audiovisuais comunitários</p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🧑🏽‍🏫</span>
                <p>Formação de professores indígenas</p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">💻</span>
                <p>Tecnologias digitais e inteligência artificial</p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🤝</span>
                <p>Pesquisa colaborativa e intercultural</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-green-800 uppercase tracking-widest font-semibold mb-4">
              Projetos em Destaque
            </div>

            <h2 className="text-5xl font-black mb-6">
              Iniciativas para fortalecimento cultural
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              Projetos voltados à preservação de memórias, documentação linguística,
              formação comunitária e desenvolvimento de tecnologias culturais.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-b from-white to-green-50 rounded-[2rem] p-10 shadow-lg hover:shadow-2xl transition duration-300 border border-green-100">
              <div className="text-5xl mb-6">🎧</div>

              <h3 className="text-2xl font-bold mb-5 text-green-950">
                Arquivo de Vozes Amazônicas
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Criação de um acervo digital com narrativas orais, cantos,
                gravações e materiais culturais de línguas indígenas ameaçadas.
              </p>
            </div>

            <div className="group bg-gradient-to-b from-white to-green-50 rounded-[2rem] p-10 shadow-lg hover:shadow-2xl transition duration-300 border border-green-100">
              <div className="text-5xl mb-6">🏕️</div>

              <h3 className="text-2xl font-bold mb-5 text-green-950">
                Escolas de Imersão Linguística
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Desenvolvimento de metodologias comunitárias para fortalecer
                a transmissão de línguas entre crianças, jovens e anciãos.
              </p>
            </div>

            <div className="group bg-gradient-to-b from-white to-green-50 rounded-[2rem] p-10 shadow-lg hover:shadow-2xl transition duration-300 border border-green-100">
              <div className="text-5xl mb-6">🛰️</div>

              <h3 className="text-2xl font-bold mb-5 text-green-950">
                Tecnologia e Patrimônio Cultural
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Plataformas digitais, aplicativos e inteligência artificial
                para documentação e revitalização linguística.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b3d2e] to-[#14532d]"></div>

        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative max-w-5xl mx-auto text-center text-white">
          <h2 className="text-5xl font-black mb-10 leading-tight">
            Cada língua preservada mantém viva uma visão única do mundo.
          </h2>

          <p className="text-xl leading-relaxed text-green-50">
            Línguas indígenas carregam conhecimentos sobre biodiversidade,
            espiritualidade, território, memória e formas ancestrais de existir.
            Preservar uma língua é preservar também uma forma de compreender a humanidade.
          </p>
        </div>
      </section>

      <section className="bg-[#f0ede6] py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase tracking-widest text-green-800 font-semibold mb-4">
              Apoie a preservação cultural
            </div>

            <h2 className="text-5xl font-black mb-8 leading-tight">
              Junte-se à nossa missão.
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Contribua para iniciativas de fortalecimento linguístico,
              documentação audiovisual e desenvolvimento de tecnologias voltadas
              à preservação cultural na Amazônia.
            </p>

            <div className="flex gap-5 flex-wrap">
              <button className="bg-green-900 text-white px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
                Fazer Doação
              </button>

              <button className="border border-green-900 text-green-900 px-8 py-4 rounded-2xl hover:bg-green-900 hover:text-white transition duration-300">
                Tornar-se Parceiro
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-10 shadow-2xl border border-gray-100">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-green-900 mb-3">Contato</h3>
                <p className="text-gray-700">contato@ibclamazonia.org</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-900 mb-3">Localização</h3>
                <p className="text-gray-700">Brasília – DF, Brasil</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-900 mb-3">Parcerias</h3>
                <p className="text-gray-700">
                  Comunidades indígenas, universidades, pesquisadores e organizações culturais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 items-center">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">
              IBCL Amazônia
            </h3>

            <p>
              Instituto Brasileiro de Conservação Linguística na Amazônia.
            </p>
          </div>

          <div className="text-sm text-gray-500 text-center md:text-right">
            © 2026 IBCL Amazônia • Preservando línguas e memórias culturais.
          </div>
        </div>
      </footer>
    </div>
  )
}
