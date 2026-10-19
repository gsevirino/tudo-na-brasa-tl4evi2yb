/* 404 Page - Displays when a user attempts to access a non-existent route - translate to the language of the user */
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex items-center justify-center bg-carvao-950 px-4 text-white">
      <div className="text-center max-w-md p-8 rounded-2xl bg-carvao-900 border border-white/10 shadow-2xl">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brasa-500/20 border border-brasa-500/40 flex items-center justify-center text-brasa-400">
          <span className="text-2xl">🔥</span>
        </div>
        <h1 className="text-5xl font-extrabold mb-2 text-white">404</h1>
        <h2 className="text-xl font-bold mb-3 text-amber-400">Página não encontrada</h2>
        <p className="text-sm text-gray-400 mb-6">
          Parece que essa brasa apagou ou a página não existe. Volte para o nosso cardápio e
          saboreie o melhor churrasco de Belo Horizonte!
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brasa-500 hover:bg-brasa-600 text-white font-semibold text-sm transition-all shadow-lg glow-brasa"
        >
          Voltar para o Início
        </a>
      </div>
    </div>
  )
}

export default NotFound
