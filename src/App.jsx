import './App.css'
import Cabecalho from './components/cabecalho.jsx'
import CardCurso from './components/CardCurso.jsx'
import Destaque from './components/Destaque.jsx'

const cursos = [
  {
    nome: 'Desenvolvimento de Sistemas',
    duracao: '1200 horas',
    modalidade: 'Presencial',
    nivel: 'Técnico',
  },
  {
    nome: 'Redes de Computadores',
    duracao: '1000 horas',
    modalidade: 'Presencial',
    nivel: 'Técnico',
  },
  {
    nome: 'Manutenção de Computadores',
    duracao: '160 horas',
    modalidade: 'Presencial',
    nivel: 'Qualificação profissional',
  },
  {
    nome: 'Programação Web',
    duracao: '240 horas',
    modalidade: 'EAD',
    nivel: 'Aperfeiçoamento',
  },
  {
    nome: 'Banco de Dados',
    duracao: '200 horas',
    modalidade: 'EAD',
    nivel: 'Aperfeiçoamento',
  },
  {
    nome: 'Desenvolvimento Mobile',
    duracao: '240 horas',
    modalidade: 'EAD',
    nivel: 'Aperfeiçoamento',
  },
]

function App() {
  return (
    <main className="catalogo">
      <Cabecalho />
      <section className="secao-destaques" aria-label="Destaques da formação">
        <Destaque
          titulo="Aprenda fazendo"
          texto="Desenvolva projetos durante sua formação."
        />
        <Destaque
          titulo="Prepare-se para o mercado"
          texto="Adquira conhecimentos valorizados na área de tecnologia."
        />
        <Destaque
          titulo="Construa seu futuro"
          texto="Encontre uma formação alinhada aos seus objetivos profissionais."
        />
      </section>
      <section className="lista-cursos" aria-labelledby="titulo-cursos">
        <h2 id="titulo-cursos">Cursos disponíveis</h2>
        <div className="grade-cursos">
          {cursos.map((curso) => (
            <CardCurso key={curso.nome} {...curso} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
