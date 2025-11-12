import React, { useRef, useEffect } from 'react'

const SectionNav = ({ sections, activeSection, setActiveSection }) => {
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector(`[data-section="${activeSection}"]`)
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }
    }
  }, [activeSection])

  return (
    <nav className="bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-700 sticky top-16 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={scrollContainerRef}
          className="flex items-center h-12 space-x-6 overflow-x-auto text-sm scrollbar-thin"
        >
          {sections.map((section) => (
            <button
              key={section}
              data-section={section}
              onClick={() => setActiveSection(section)}
              className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium transition-colors ${
                activeSection === section
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:border-gray-300'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default SectionNav