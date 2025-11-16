import React from 'react'

const Header = ({ darkMode, setDarkMode, onMenuClick }) => {
  return (
    <header className="bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">menu</span>
            </button>
            <div className="flex-shrink-0">
              <svg className="h-8 w-auto text-primary" fill="currentColor" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M31.25 10H8.75C6.95507 10 5.5 11.4551 5.5 13.25V26.75C5.5 28.5449 6.95507 30 8.75 30H31.25C33.0449 30 34.5 28.5449 34.5 26.75V13.25C34.5 11.4551 33.0449 10 31.25 10ZM8.75 8C5.85025 8 3.5 10.3503 3.5 13.25V26.75C3.5 29.6497 5.85025 32 8.75 32H31.25C34.1497 32 36.5 29.6497 36.5 26.75V13.25C36.5 10.3503 34.1497 8 31.25 8H8.75Z" fillRule="evenodd"></path>
                <path d="M14.5322 17.5132L17.918 25H15.698L12.3122 17.5132H14.5322Z"></path>
                <path d="M22.7118 17.5132L26.0975 25H23.8775L20.4918 17.5132H22.7118Z"></path>
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">HLP2 Savour 🎃</h1>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/purelyricky/mcqs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Star this project on GitHub"
              title="Star this project on GitHub"
            >
              <span className="material-symbols-outlined text-base text-yellow-500">grade</span>
              <span className="hidden sm:inline">Star on GitHub</span>
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined">
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header