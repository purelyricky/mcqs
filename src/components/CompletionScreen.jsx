import { useEffect, useState } from 'react'

function CompletionScreen({ score, totalQuestions, onRestart, darkMode }) {
  const [showContent, setShowContent] = useState(false)
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setShowContent(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Determine performance level and corresponding content
  const getPerformanceData = () => {
    if (percentage === 100) {
      return {
        title: 'Perfect Score!',
        subtitle: 'Outstanding! You nailed every question!',
        emoji: '🏆',
        color: 'text-yellow-500',
        bgGradient: 'from-yellow-400 to-orange-500',
        message: 'You have mastered this section completely!',
        animation: 'celebration'
      }
    } else if (percentage >= 80) {
      return {
        title: 'Excellent Work!',
        subtitle: 'You did great on this section!',
        emoji: '🎉',
        color: 'text-green-500',
        bgGradient: 'from-green-400 to-emerald-500',
        message: 'Your understanding of the material is impressive!',
        animation: 'celebration'
      }
    } else if (percentage >= 60) {
      return {
        title: 'Good Job!',
        subtitle: 'You passed this section!',
        emoji: '👍',
        color: 'text-blue-500',
        bgGradient: 'from-blue-400 to-cyan-500',
        message: 'Keep practicing to improve your score!',
        animation: 'success'
      }
    } else if (percentage >= 40) {
      return {
        title: 'Keep Learning!',
        subtitle: 'You are making progress!',
        emoji: '📚',
        color: 'text-orange-500',
        bgGradient: 'from-orange-400 to-amber-500',
        message: 'Review the material and try again!',
        animation: 'encourage'
      }
    } else {
      return {
        title: 'Don\'t Give Up!',
        subtitle: 'Every expert was once a beginner',
        emoji: '💪',
        color: 'text-purple-500',
        bgGradient: 'from-purple-400 to-pink-500',
        message: 'Take time to review and come back stronger!',
        animation: 'encourage'
      }
    }
  }

  const performanceData = getPerformanceData()

  // Generate confetti particles for celebration animation
  const confettiColors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-light to-gray-100 dark:from-background-dark dark:to-gray-900">
        {/* Floating circles animation */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slower"></div>
      </div>

      {/* Confetti Animation for high scores */}
      {percentage >= 60 && showContent && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content Card */}
      <div
        className={`relative z-10 max-w-2xl w-full transform transition-all duration-700 ${
          showContent ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          {/* Animated Emoji */}
          <div className="text-center mb-6">
            <div className={`inline-block text-8xl animate-bounce-slow ${showContent ? 'animate-scale-in' : ''}`}>
              {performanceData.emoji}
            </div>
          </div>

          {/* Title */}
          <h1
            className={`text-4xl md:text-5xl font-bold text-center mb-3 ${performanceData.color} animate-slide-up`}
          >
            {performanceData.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-8 animate-slide-up-delay-1">
            {performanceData.subtitle}
          </p>

          {/* Score Display */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 mb-8 animate-slide-up-delay-2">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-black mb-4">
                <span className={`bg-gradient-to-r ${performanceData.bgGradient} bg-clip-text text-transparent`}>
                  {Math.round(percentage)}%
                </span>
              </div>
              <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {score} out of {totalQuestions} correct
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mt-4 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${performanceData.bgGradient} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: showContent ? `${percentage}%` : '0%' }}
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8 animate-slide-up-delay-3">
            {performanceData.message}
          </p>

          {/* Action Buttons */}
          <div className="space-y-4 animate-slide-up-delay-4">
            {/* Restart Button */}
            <button
              onClick={onRestart}
              className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined text-2xl">refresh</span>
              Try Again
            </button>

            {/* GitHub Star Reminder */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border-2 border-yellow-200 dark:border-yellow-700">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-3xl text-yellow-500 animate-pulse">
                  grade
                </span>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                    Enjoying HLP2 Savour?
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Help us reach more students by starring this project on GitHub!
                  </p>
                  <a
                    href="https://github.com/purelyricky/mcqs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm"
                  >
                    <span className="material-symbols-outlined text-base">star</span>
                    Star on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Motivational Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 italic">
              {percentage >= 80
                ? '"Success is the sum of small efforts repeated day in and day out."'
                : '"The only way to learn programming is by writing programs." - Dennis Ritchie'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompletionScreen
