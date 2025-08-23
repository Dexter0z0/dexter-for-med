import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Clock, Award, Shuffle, Target } from 'lucide-react';
import { systemsData } from '../data/systemsData';

interface Question {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  system: string;
  category: string;
}

interface PracticeConfig {
  mode: string;
  systems: string[];
  timeLimit: number;
  questionCount: number;
}

const PracticeQuiz: React.FC = () => {
  const navigate = useNavigate();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [config, setConfig] = useState<PracticeConfig | null>(null);

  // Load practice configuration and generate questions
  useEffect(() => {
    const storedConfig = sessionStorage.getItem('practiceConfig');
    if (!storedConfig) {
      navigate('/practice-tests');
      return;
    }

    const practiceConfig: PracticeConfig = JSON.parse(storedConfig);
    setConfig(practiceConfig);

    // Generate questions based on configuration
    const generatedQuestions = generateQuestions(practiceConfig);
    setQuestions(generatedQuestions);
    setUserAnswers(new Array(generatedQuestions.length).fill(null));

    // Set up timer for timed practice
    if (practiceConfig.mode === 'timed') {
      setTimeRemaining(practiceConfig.timeLimit * 60); // Convert minutes to seconds
    }
  }, [navigate]);

  // Timer effects
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
      
      if (timeRemaining !== null) {
        setTimeRemaining(prev => {
          if (prev === null || prev <= 1) {
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const generateQuestions = (config: PracticeConfig): Question[] => {
    let allQuestions: Question[] = [];

    if (config.mode === 'mixed') {
      // Get questions from all systems
      Object.entries(systemsData).forEach(([systemId, system]) => {
        Object.entries(system.modules).forEach(([categoryId, module]) => {
          module.questions.forEach((q, index) => {
            allQuestions.push({
              id: `${systemId}-${categoryId}-${index}`,
              question: q.question,
              options: q.options,
              correct: q.correct,
              explanation: q.explanation,
              system: system.name,
              category: categoryId
            });
          });
        });
      });
    } else if (config.mode === 'systems') {
      // Get questions from selected systems only
      config.systems.forEach(systemId => {
        const system = systemsData[systemId];
        if (system) {
          Object.entries(system.modules).forEach(([categoryId, module]) => {
            module.questions.forEach((q, index) => {
              allQuestions.push({
                id: `${systemId}-${categoryId}-${index}`,
                question: q.question,
                options: q.options,
                correct: q.correct,
                explanation: q.explanation,
                system: system.name,
                category: categoryId
              });
            });
          });
        }
      });
    } else if (config.mode === 'timed') {
      // Get questions from all systems for timed practice
      Object.entries(systemsData).forEach(([systemId, system]) => {
        Object.entries(system.modules).forEach(([categoryId, module]) => {
          module.questions.forEach((q, index) => {
            allQuestions.push({
              id: `${systemId}-${categoryId}-${index}`,
              question: q.question,
              options: q.options,
              correct: q.correct,
              explanation: q.explanation,
              system: system.name,
              category: categoryId
            });
          });
        });
      });
    }

    // Shuffle and limit questions
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, config.questionCount);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (answered) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setAnswered(true);
    setShowExplanation(true);
    
    // Update user answers
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(newAnswers);
    
    // Update score if correct
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedAnswer(userAnswers[currentQuestion - 1]);
      setShowExplanation(userAnswers[currentQuestion - 1] !== null);
      setAnswered(userAnswers[currentQuestion - 1] !== null);
    }
  };

  const restartPractice = () => {
    const generatedQuestions = generateQuestions(config!);
    setQuestions(generatedQuestions);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswered(false);
    setTimeElapsed(0);
    setIsFinished(false);
    setUserAnswers(new Array(generatedQuestions.length).fill(null));
    
    if (config?.mode === 'timed') {
      setTimeRemaining(config.timeLimit * 60);
    }
  };

  if (!config || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Loading Practice Test...
          </h1>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
  const scorePercentage = Math.round((score / questions.length) * 100);

  if (isFinished) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className="mb-8">
              <Award className="h-16 w-16 mx-auto text-yellow-500 mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Practice Test Completed!
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {config.mode === 'mixed' && 'Mixed Questions Practice'}
                {config.mode === 'systems' && `System-Based Practice (${config.systems.length} systems)`}
                {config.mode === 'timed' && `Timed Practice (${config.timeLimit} minutes)`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {score}/{questions.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Correct Answers
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {scorePercentage}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Score
                </div>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {formatTime(timeElapsed)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Time Taken
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={restartPractice}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Retake Practice Test
              </button>
              <button
                onClick={() => navigate('/practice-tests')}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                New Practice Test
              </button>
              <button
                onClick={() => navigate('/systems')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Explore Systems
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-6 p-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate('/practice-tests')}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Practice Tests</span>
            </button>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{formatTime(timeElapsed)}</span>
              </div>
              {timeRemaining !== null && (
                <div className="flex items-center space-x-1 text-red-600">
                  <Clock className="h-4 w-4" />
                  <span>Remaining: {formatTime(timeRemaining)}</span>
                </div>
              )}
              <span>Score: {scorePercentage}%</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center space-x-2">
            {config.mode === 'mixed' && <><Shuffle className="h-6 w-6" /><span>Mixed Questions Practice</span></>}
            {config.mode === 'systems' && <><Target className="h-6 w-6" /><span>System-Based Practice</span></>}
            {config.mode === 'timed' && <><Clock className="h-6 w-6" /><span>Timed Practice</span></>}
          </h1>
          
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{currentQ.system} - {currentQ.category}</span>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-4">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 leading-relaxed">
            {currentQ.question}
          </h2>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => {
              let buttonClass = "w-full p-4 text-left border-2 rounded-lg transition-all duration-200 flex items-center space-x-3";
              
              if (answered) {
                if (index === currentQ.correct) {
                  buttonClass += " border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300";
                } else if (index === selectedAnswer && selectedAnswer !== currentQ.correct) {
                  buttonClass += " border-red-500 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300";
                } else {
                  buttonClass += " border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300";
                }
              } else {
                if (selectedAnswer === index) {
                  buttonClass += " border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300";
                } else {
                  buttonClass += " border-gray-200 dark:border-gray-600 hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={buttonClass}
                  disabled={answered}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium">
                        {String.fromCharCode(65 + index)}
                      </span>
                    </div>
                    <span className="text-left">{option}</span>
                  </div>
                  
                  {answered && (
                    <div className="ml-auto">
                      {index === currentQ.correct && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                      {index === selectedAnswer && selectedAnswer !== currentQ.correct && (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded-lg">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Explanation:
              </h3>
              <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevQuestion}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          {!answered ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              <span>{currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeQuiz;