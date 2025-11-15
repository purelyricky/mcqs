import { useState, useEffect } from 'react'
import Header from './components/Header'
import SectionNav from './components/SectionNav'
import MCQQuestion from './components/MCQQuestion'
import Progress from './components/Progress'
import section1 from './data/section1'
import section2 from './data/section2'
import section3 from './data/section3'
import section4 from './data/section4'
import section5 from './data/section5'
import section6 from './data/section6'
import section7 from './data/section7'
import section8 from './data/section8'
import section9 from './data/section9'
import section10 from './data/section10'
import section11 from './data/section11'
import sampleQuestions from './data/sampleQuestions'
import pl2Questions from './data/pl2Questions'


const sections = {
  'Section 1: Basics & Classes': section1,
  'Section 2: Control Flow': section2,
  'Section 3: Garbage Collection': section3,
  'Section 4: Keywords & Data Types': section4,
  'Section 5: Strings & Operators': section5,
  'Section 6: Inheritance & Polymorphism': section6,
  'Section 7: Threads': section7,
  'Section 8: Methods & Strings': section8,
  'Section 9: Collections': section9,
  'Section 10: File I/O': section10,
  'Section 11: Advanced Topics': section11,
  'Sample Questions': sampleQuestions,
  'PL2 Questions': pl2Questions,
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('Section 1: Basics & Classes')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState({})
  const [userAnswers, setUserAnswers] = useState({})
  const [submittedQuestions, setSubmittedQuestions] = useState(new Set())

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleSectionChange = (section) => {
    setActiveSection(section)
    // Initialize question index for this section if not exists
    if (currentQuestionIndex[section] === undefined) {
      setCurrentQuestionIndex(prev => ({ ...prev, [section]: 0 }))
    }
  }

  const handleAnswerSelect = (questionId, selectedOptions) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: selectedOptions
    }))
  }

  const handleSubmitAnswer = () => {
    const currentQuestion = currentQuestions[questionIdx]
    if (!currentQuestion) return

    setSubmittedQuestions(prev => new Set([...prev, currentQuestion.id]))
  }

  const handleNext = () => {
    if (questionIdx < currentQuestions.length - 1) {
      setCurrentQuestionIndex(prev => ({
        ...prev,
        [activeSection]: questionIdx + 1
      }))
    }
  }

  const handlePrevious = () => {
    if (questionIdx > 0) {
      setCurrentQuestionIndex(prev => ({
        ...prev,
        [activeSection]: questionIdx - 1
      }))
    }
  }

  const currentQuestions = sections[activeSection] || []
  const questionIdx = currentQuestionIndex[activeSection] || 0
  const currentQuestion = currentQuestions[questionIdx]
  const progress = currentQuestions.length > 0 ? ((questionIdx + 1) / currentQuestions.length) * 100 : 0

  // Calculate score for current section
  const answeredQuestionsInSection = currentQuestions.filter(q => submittedQuestions.has(q.id))
  const correctAnswersInSection = answeredQuestionsInSection.filter(q => {
    const userAnswer = userAnswers[q.id] || []
    const correctAnswer = q.correctAnswers
    return JSON.stringify(userAnswer.sort()) === JSON.stringify(correctAnswer.sort())
  })

  const isCurrentQuestionSubmitted = currentQuestion && submittedQuestions.has(currentQuestion.id)
  const currentAnswer = currentQuestion ? (userAnswers[currentQuestion.id] || []) : []

  return (
    <div className="min-h-screen font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <SectionNav
        sections={Object.keys(sections)}
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
      />

      {/* Progress Bar Section */}
      <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 sticky top-16 z-10">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Question {questionIdx + 1} of {currentQuestions.length}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} />
        </div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Score Display */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {activeSection}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {currentQuestions.length} Questions
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">
                {correctAnswersInSection.length}/{answeredQuestionsInSection.length}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Correct</div>
            </div>
          </div>

          {/* Current Question */}
          {currentQuestion && (
            <div className="space-y-6">
              <MCQQuestion
                question={currentQuestion}
                questionNumber={questionIdx + 1}
                userAnswer={currentAnswer}
                onAnswerSelect={handleAnswerSelect}
                isSubmitted={isCurrentQuestionSubmitted}
              />

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={handlePrevious}
                  disabled={questionIdx === 0}
                  className="px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>

                <div className="flex gap-3">
                  {!isCurrentQuestionSubmitted && (
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={currentAnswer.length === 0}
                      className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-xl">check_circle</span>
                      Submit Answer
                    </button>
                  )}

                  {isCurrentQuestionSubmitted && (
                    <button
                      onClick={handleNext}
                      className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      {questionIdx === currentQuestions.length - 1 ? 'Finish Section' : 'Next Question'}
                    </button>
                  )}
                </div>
              </div>

              {/* Hint for multiple answers */}
              {currentQuestion.correctAnswers.length > 1 && !isCurrentQuestionSubmitted && (
                <div className="text-sm text-center text-gray-600 dark:text-gray-400 pt-2">
                  💡 This question has multiple correct answers
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App