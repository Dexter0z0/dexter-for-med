import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, Shuffle, Target, Play, Settings } from 'lucide-react';
import { systemsData } from '../data/systemsData';

const PracticeTests: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [selectedSystems, setSelectedSystems] = useState<string[]>([]);
  const [timeLimit, setTimeLimit] = useState(30);
  const [questionCount, setQuestionCount] = useState(20);

  const practiceTypes = [
    {
      id: 'mixed',
      title: 'Mixed Questions',
      description: 'Random questions from all medical systems',
      icon: <Shuffle className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-600',
      features: ['Random selection', 'All systems included', 'Comprehensive review']
    },
    {
      id: 'systems',
      title: 'System-Based',
      description: 'Choose specific medical systems to focus on',
      icon: <Target className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      features: ['Choose systems', 'Focused learning', 'Category selection']
    },
    {
      id: 'timed',
      title: 'Timed Practice',
      description: 'Exam-style timed questions with countdown',
      icon: <Clock className="h-8 w-8" />,
      color: 'from-red-500 to-red-600',
      features: ['Time pressure', 'Exam simulation', 'Performance tracking']
    }
  ];

  const availableSystems = [
    { id: 'cardiovascular', name: 'Cardiovascular System' },
    { id: 'cns', name: 'Central Nervous System' },
    { id: 'endocrine', name: 'Endocrine System' },
    { id: 'respiratory', name: 'Respiratory System' },
    { id: 'gastrointestinal', name: 'Gastrointestinal System' },
    { id: 'renal', name: 'Renal System' },
    { id: 'reproductive', name: 'Reproductive System' },
    { id: 'musculoskeletal', name: 'Musculoskeletal System' },
    { id: 'hematology', name: 'Hematology' },
    { id: 'microbiology', name: 'Microbiology' },
    { id: 'immunology', name: 'Immunology' },
    { id: 'pharmacology', name: 'Pharmacology' },
    { id: 'embryology', name: 'Embryology' },
    { id: 'histology', name: 'Histology' }
  ];

  const handleSystemToggle = (systemId: string) => {
    setSelectedSystems(prev => 
      prev.includes(systemId) 
        ? prev.filter(id => id !== systemId)
        : [...prev, systemId]
    );
  };

  const startPractice = () => {
    const practiceConfig = {
      mode: selectedMode,
      systems: selectedSystems,
      timeLimit,
      questionCount
    };
    
    // Store practice configuration in sessionStorage
    sessionStorage.setItem('practiceConfig', JSON.stringify(practiceConfig));
    
    // Navigate to practice quiz
    navigate('/practice-quiz');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Practice Tests
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Choose your preferred practice mode and customize your learning experience. 
              Test your knowledge with various question formats and time constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Mode Selection */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Choose Your Practice Mode
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {practiceTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setSelectedMode(type.id)}
                  className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                    selectedMode === type.id 
                      ? 'ring-4 ring-blue-500 shadow-xl' 
                      : 'shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`bg-gradient-to-r ${type.color} p-6 text-white`}>
                    <div className="flex items-center justify-center mb-4">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">
                      {type.title}
                    </h3>
                    <p className="text-center text-white/90 text-sm">
                      {type.description}
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6">
                    <ul className="space-y-2">
                      {type.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Configuration Panel */}
            {selectedMode && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Settings className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Customize Your Practice
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Question Count */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Number of Questions
                      </label>
                      <div className="flex space-x-4">
                        {[10, 20, 30, 50].map((count) => (
                          <button
                            key={count}
                            onClick={() => setQuestionCount(count)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                              questionCount === count
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                            }`}
                          >
                            {count}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Limit (for timed mode) */}
                    {selectedMode === 'timed' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                          Time Limit (minutes)
                        </label>
                        <div className="flex space-x-4">
                          {[15, 30, 45, 60].map((time) => (
                            <button
                              key={time}
                              onClick={() => setTimeLimit(time)}
                              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                timeLimit === time
                                  ? 'bg-red-600 text-white'
                                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                              }`}
                            >
                              {time}min
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column - System Selection */}
                  {selectedMode === 'systems' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Select Medical Systems
                      </label>
                      <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                        {availableSystems.map((system) => (
                          <label
                            key={system.id}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedSystems.includes(system.id)}
                              onChange={() => handleSystemToggle(system.id)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                              {system.name}
                            </span>
                          </label>
                        ))}
                      </div>
                      
                      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                        {selectedSystems.length} system(s) selected
                      </div>
                    </div>
                  )}
                </div>

                {/* Start Button */}
                <div className="mt-8 text-center">
                  <button
                    onClick={startPractice}
                    disabled={selectedMode === 'systems' && selectedSystems.length === 0}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Play className="h-5 w-5" />
                    <span>Start Practice Test</span>
                  </button>
                  
                  {selectedMode === 'systems' && selectedSystems.length === 0 && (
                    <p className="text-red-500 text-sm mt-2">
                      Please select at least one medical system
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Practice Test Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Personalized Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Customize your practice sessions based on your learning needs and time availability
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Exam Simulation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Practice under timed conditions to simulate real exam environments
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shuffle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Comprehensive Coverage
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access questions from all medical systems with detailed explanations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeTests;