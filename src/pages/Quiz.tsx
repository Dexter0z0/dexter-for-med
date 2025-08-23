import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Clock, Award } from 'lucide-react';
import { systemsData } from '../data/systemsData';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const Quiz: React.FC = () => {
  const { systemId, category } = useParams<{ systemId: string; category: string }>();
  const navigate = useNavigate();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);

  // Get questions from data
  const questions: Question[] = React.useMemo(() => {
    if (!systemId || !category || !systemsData[systemId]) return [];
    
    const system = systemsData[systemId];
    const moduleQuestions = system.modules[category]?.questions || [];
    
    return moduleQuestions.map((q, index) => ({
      id: index,
      question: q.question,
      options: q.options,
      correct: q.correct,
      explanation: q.explanation
    }));
  }, [systemId, category]);

  // Initialize user answers array
  useEffect(() => {
    if (questions.length > 0) {
      setUserAnswers(new Array(questions.length).fill(null));
    }
  }, [questions]);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswered(false);
    setTimeElapsed(0);
    setIsFinished(false);
    setUserAnswers(new Array(questions.length).fill(null));
  };

  if (!systemId || !category || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Quiz Not Found
          </h1>
          <button 
            onClick={() => navigate('/systems')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Return to Systems
          </button>
        </div>
      </div>
    );
  }

  const system = systemsData[systemId];
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
                Quiz Completed!
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {system.name} - {category.charAt(0).toUpperCase() + category.slice(1)}
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
                onClick={restartQuiz}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Retake Quiz
              </button>
              <button
                onClick={() => navigate(`/systems/${systemId}`)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Back to System
              </button>
              <button
                onClick={() => navigate('/systems')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Explore Other Systems
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
              onClick={() => navigate(`/systems/${systemId}`)}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to {system.name}</span>
            </button>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{formatTime(timeElapsed)}</span>
              </div>
              <span>Score: {scorePercentage}%</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {system.name} - {category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
          
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
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

export default Quiz;