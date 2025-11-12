import { useState, useEffect } from 'react'
import Header from './components/Header'
import SectionNav from './components/SectionNav'
import MCQQuestion from './components/MCQQuestion'
import section1 from './data/section1'
import section2 from './data/section2'
// import section3 from './data/section3'
// import section4 from './data/section4'
// import section5 from './data/section5'
// import section6 from './data/section6'
// import section7 from './data/section7'
// import section8 from './data/section8'
// import section9 from './data/section9'
// import section10 from './data/section10'
// import section11 from './data/section11'
// import sampleQuestion from './data/sampleQuestion'

const sections = {
  'Section 1: Basics & Classes': section1,
  'Section 2: Control Flow': section2,
  // 'Section 3: Garbage Collection': section3,
  // 'Section 4: Keywords & Data Types': section4,
  // 'Section 5: Strings & Operators': section5,
  // 'Section 6: Inheritance & Polymorphism': section6,
  // 'Section 7: Threads': section7,
  // 'Section 8: Methods & Strings': section8,
  // 'Section 9: Collections': section9,
  // 'Section 10: File I/O': section10,
  // 'Section 11: Advanced Topics': section11,
  // 'Sample Questions': sampleQuestion,
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('Section 1: Basics & Classes')
  const [userAnswers, setUserAnswers] = useState({})

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleAnswerSelect = (questionId, selectedOptions) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: selectedOptions
    }))
  }

  const currentQuestions = sections[activeSection] || []

  return (
    <div className="min-h-screen font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <SectionNav 
        sections={Object.keys(sections)} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {activeSection}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {currentQuestions.length} Questions
            </p>
          </div>

          <div className="space-y-8">
            {currentQuestions.map((question, index) => (
              <MCQQuestion
                key={question.id}
                question={question}
                questionNumber={index + 1}
                userAnswer={userAnswers[question.id]}
                onAnswerSelect={handleAnswerSelect}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App