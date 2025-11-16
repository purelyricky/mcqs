import React from 'react'

const Sidebar = ({ isOpen, onClose, sections, activeSection, onSectionChange }) => {
  // Group sections by category
  const groupedSections = {
    'Core Sections': [],
    'Sample & Mock Tests': [],
    'Chapters': [],
    'Code MCQs': []
  }

  // Sort sections into groups
  Object.keys(sections).forEach(section => {
    if (section.startsWith('Section')) {
      groupedSections['Core Sections'].push(section)
    } else if (section.startsWith('Chapter')) {
      groupedSections['Chapters'].push(section)
    } else if (section.includes('Codes MCQs')) {
      groupedSections['Code MCQs'].push(section)
    } else {
      groupedSections['Sample & Mock Tests'].push(section)
    }
  })

  // Sort sections naturally
  groupedSections['Core Sections'].sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || '0')
    const numB = parseInt(b.match(/\d+/)?.[0] || '0')
    return numA - numB
  })

  groupedSections['Chapters'].sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || '0')
    const numB = parseInt(b.match(/\d+/)?.[0] || '0')
    return numA - numB
  })

  let globalIndex = 0

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-background-light dark:bg-background-dark border-r border-gray-200 dark:border-gray-700 z-30 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: 'fit-content', minWidth: '280px', maxWidth: '400px' }}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Topics</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close sidebar"
          >
            <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">close</span>
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="overflow-y-auto h-[calc(100vh-73px)] scrollbar-thin">
          <div className="px-4 py-6 space-y-6">
            {Object.entries(groupedSections).map(([groupName, groupSections]) => {
              if (groupSections.length === 0) return null

              return (
                <div key={groupName}>
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-2">
                    {groupName}
                  </h3>
                  <div className="space-y-1">
                    {groupSections.map(section => {
                      globalIndex++
                      const isActive = activeSection === section

                      return (
                        <button
                          key={section}
                          onClick={() => {
                            onSectionChange(section)
                            onClose()
                          }}
                          className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors flex items-start gap-3 ${
                            isActive
                              ? 'bg-primary bg-opacity-10 text-primary border-l-4 border-primary'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border-l-4 border-transparent'
                          }`}
                        >
                          <span className={`flex-shrink-0 text-xs font-medium mt-0.5 ${
                            isActive ? 'text-primary' : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {globalIndex.toString().padStart(2, '0')}
                          </span>
                          <span className="text-sm font-medium break-words">{section}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
