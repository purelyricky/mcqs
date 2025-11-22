import React, { useRef, useEffect } from 'react'

const QuestionNav = ({ totalQuestions, currentQuestionIndex, onQuestionSelect }) => {
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector(`[data-question="${currentQuestionIndex}"]`)
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }
    }
  }, [currentQuestionIndex])

  // Generate array of question numbers [0, 1, 2, ..., totalQuestions-1]
  const questionNumbers = Array.from({ length: totalQuestions }, (_, i) => i)

  return (
    <nav className="bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-700 sticky top-16 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollContainerRef}
          className="flex items-center h-12 space-x-3 overflow-x-auto text-sm scrollbar-thin"
        >
          {questionNumbers.map((questionIdx) => (
            <button
              key={questionIdx}
              data-question={questionIdx}
              onClick={() => onQuestionSelect(questionIdx)}
              className={`flex-shrink-0 w-10 h-10 rounded-full border-2 font-medium transition-colors ${
                currentQuestionIndex === questionIdx
                  ? 'border-primary bg-primary text-white'
                  : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:text-primary'
              }`}
            >
              {questionIdx + 1}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default QuestionNav