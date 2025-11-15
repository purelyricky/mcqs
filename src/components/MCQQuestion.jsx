import React, { useState, useEffect } from 'react'

const MCQQuestion = ({ question, questionNumber, userAnswer, onAnswerSelect, isSubmitted }) => {
  const [selectedOptions, setSelectedOptions] = useState(userAnswer || [])

  useEffect(() => {
    setSelectedOptions(userAnswer || [])
  }, [userAnswer])

  const handleOptionClick = (option) => {
    if (isSubmitted) return // Disable selection after submission

    let newSelected

    if (question.correctAnswers.length > 1) {
      // Multiple answers allowed
      if (selectedOptions.includes(option)) {
        newSelected = selectedOptions.filter(o => o !== option)
      } else {
        newSelected = [...selectedOptions, option]
      }
    } else {
      // Single answer only
      newSelected = [option]
    }

    setSelectedOptions(newSelected)
    onAnswerSelect(question.id, newSelected)
  }

  const isCorrectAnswer = (option) => {
    return question.correctAnswers.includes(option)
  }

  const isSelectedCorrect = (option) => {
    return selectedOptions.includes(option) && isCorrectAnswer(option)
  }

  const isSelectedWrong = (option) => {
    return selectedOptions.includes(option) && !isCorrectAnswer(option)
  }

  const getOptionClassName = (option) => {
    const baseClass = "flex items-start p-3 rounded-md transition-colors"
    const cursorClass = isSubmitted ? "cursor-default" : "cursor-pointer"
    const isSelected = selectedOptions.includes(option)

    // Before submission - only show subtle selection highlight, NO color hints
    if (!isSubmitted) {
      if (isSelected) {
        return `${baseClass} ${cursorClass} bg-primary/10 border-2 border-primary`
      }
      return `${baseClass} ${cursorClass} border-2 border-gray-200 dark:border-gray-700 hover:border-primary/50`
    }

    // After submission - show color-coded feedback
    if (isSelectedCorrect(option)) {
      return `${baseClass} ${cursorClass} bg-green-100 dark:bg-green-900/50 border-2 border-green-500`
    }

    if (isSelectedWrong(option)) {
      return `${baseClass} ${cursorClass} bg-red-100 dark:bg-red-900/50 border-2 border-red-500`
    }

    if (isCorrectAnswer(option)) {
      return `${baseClass} ${cursorClass} bg-yellow-100 dark:bg-yellow-900/20 border-2 border-yellow-500`
    }

    return `${baseClass} ${cursorClass} border-2 border-gray-200 dark:border-gray-700`
  }

  const getOptionIndicatorClassName = (option) => {
    const baseClass = "flex items-center justify-center min-w-6 w-6 h-6 rounded-full font-medium text-sm mr-4 mt-0.5"
    const isSelected = selectedOptions.includes(option)

    // Before submission - only show neutral selection state
    if (!isSubmitted) {
      if (isSelected) {
        return `${baseClass} bg-primary border-2 border-primary text-white`
      }
      return `${baseClass} border-2 border-gray-400 dark:border-gray-500 text-gray-600 dark:text-gray-400`
    }

    // After submission - show color-coded feedback with icons
    if (isSelectedCorrect(option)) {
      return `${baseClass} bg-green-500 text-white border-2 border-green-500`
    }

    if (isSelectedWrong(option)) {
      return `${baseClass} bg-red-500 text-white border-2 border-red-500`
    }

    if (isCorrectAnswer(option)) {
      return `${baseClass} bg-yellow-500 text-white border-2 border-yellow-500`
    }

    if (isSelected) {
      return `${baseClass} border-2 border-primary bg-primary text-white`
    }

    return `${baseClass} border-2 border-gray-400 dark:border-gray-500 text-gray-600 dark:text-gray-400`
  }

  const renderQuestionText = (text) => {
    // Check if text contains code blocks
    if (text.includes('\n') && (text.includes('{') || text.includes('class') || text.includes('public'))) {
      const parts = text.split(/```|`/)
      return parts.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <pre key={index} className="my-3">
              <code>{part}</code>
            </pre>
          )
        }
        return <span key={index}>{part}</span>
      })
    }
    
    // Inline code
    if (text.includes('`')) {
      const parts = text.split('`')
      return parts.map((part, index) => 
        index % 2 === 1 ? <code key={index}>{part}</code> : part
      )
    }
    
    return text
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6">
      <p className="font-bold text-gray-900 dark:text-white mb-4">
        Question {questionNumber}
        {question.correctAnswers.length > 1 && (
          <span className="ml-2 text-sm font-normal text-gray-600 dark:text-gray-400">
            (Select {question.correctAnswers.length} answers)
          </span>
        )}
      </p>

      <div className="text-gray-800 dark:text-gray-200 mb-4">
        {renderQuestionText(question.question)}
      </div>

      {/* Code Block if present */}
      {question.code && (
        <div className="mb-6">
          <pre className="text-sm">
            <code>{question.code}</code>
          </pre>
        </div>
      )}

      <div className="space-y-3">
        {question.options.map((option) => (
          <div
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            className={getOptionClassName(option.id)}
          >
            <div className={getOptionIndicatorClassName(option.id)}>
              {/* Show icons for feedback after submission */}
              {isSubmitted && isSelectedCorrect(option.id) && (
                <span className="material-symbols-outlined text-xs">check_circle</span>
              )}
              {isSubmitted && isSelectedWrong(option.id) && (
                <span className="material-symbols-outlined text-xs">cancel</span>
              )}
              {isSubmitted && isCorrectAnswer(option.id) && !selectedOptions.includes(option.id) && (
                <span className="text-xs font-bold">!</span>
              )}
              {/* Show option letter before submission or if no special status */}
              {(!isSubmitted || (!isCorrectAnswer(option.id) && !selectedOptions.includes(option.id))) && option.id}
            </div>
            <span className="text-gray-800 dark:text-gray-200 flex-1">
              {renderQuestionText(option.text)}
            </span>
          </div>
        ))}
      </div>

      {isSubmitted && (
        <div className="mt-4 p-3 rounded-md bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <span className="font-semibold">Correct Answer{question.correctAnswers.length > 1 ? 's' : ''}: </span>
            {question.correctAnswers.join(', ')}
          </p>
        </div>
      )}
    </div>
  )
}

export default MCQQuestion