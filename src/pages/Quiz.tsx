import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Clock, Award, Settings, SkipForward, SkipBack, Target } from 'lucide-react';
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
  
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(10);
  const [quizStarted, setQuizStarted] = useState(false);

  // Get all questions from data
  const loadAllQuestions = React.useCallback(() => {
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

  // Load questions on component mount
  useEffect(() => {
    const loadedQuestions = loadAllQuestions();
    setAllQuestions(loadedQuestions);
    
    if (loadedQuestions.length > 0 && !quizStarted) {
      setShowSettings(true);
    }
  }, [loadAllQuestions, quizStarted]);

  // Start quiz with selected number of questions
  const startQuiz = () => {
    const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffledQuestions.slice(0, Math.min(selectedQuestionCount, allQuestions.length));
    
    setQuestions(selectedQuestions);
    setUserAnswers(new Array(selectedQuestions.length).fill(null));
    setQuizStarted(true);
    setShowSettings(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswered(false);
    setTimeElapsed(0);
    setIsFinished(false);
  };

  // Timer
  useEffect(() => {
    if (!quizStarted) return;
    
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    // Update user answers immediately
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
    
    // Auto-submit and show explanation
    setAnswered(true);
    setShowExplanation(true);
    
    // Update score if correct
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }
  };

  const goToQuestion = (questionIndex: number) => {
    if (questionIndex < 0 || questionIndex >= questions.length) return;
    
    setCurrentQuestion(questionIndex);
    setSelectedAnswer(userAnswers[questionIndex]);
    setShowExplanation(userAnswers[questionIndex] !== null);
    setAnswered(userAnswers[questionIndex] !== null);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      goToQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      goToQuestion(currentQuestion - 1);
    }
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setShowSettings(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswered(false);
    setTimeElapsed(0);
    setIsFinished(false);
    setUserAnswers([]);
  };

  const finishQuiz = () => {
    setIsFinished(true);
  };

  const handleJumpToQuestion = () => {
    const questionNum = parseInt(jumpToQuestion);
    if (questionNum >= 1 && questionNum <= questions.length) {
      goToQuestion(questionNum - 1);
      setJumpToQuestion('');
    }
  };

  const goToNextUnanswered = () => {
    const nextUnanswered = userAnswers.findIndex((answer, index) => 
      index > currentQuestion && answer === null
    );
    if (nextUnanswered !== -1) {
      goToQuestion(nextUnanswered);
    } else {
      // Look from the beginning
      const firstUnanswered = userAnswers.findIndex(answer => answer === null);
      if (firstUnanswered !== -1) {
        goToQuestion(firstUnanswered);
      }
    }
  };

  const goToFirstIncorrect = () => {
    const firstIncorrect = userAnswers.findIndex((answer, index) => 
      answer !== null && answer !== questions[index].correct
    );
    if (firstIncorrect !== -1) {
      goToQuestion(firstIncorrect);
    }
  };

  if (!systemId || !category || allQuestions.length === 0) {
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

  // Settings Screen
  if (showSettings) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Settings className="h-12 w-12 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Quiz Settings
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {system.name} - {category.charAt(0).toUpperCase() + category.slice(1)}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Number of Questions (Available: {allQuestions.length})
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {[5, 10, 15, 20, 25, 30, 50, allQuestions.length].filter(count => count <= allQuestions.length).map((count) => (
                    <button
                      key={count}
                      onClick={() => setSelectedQuestionCount(count)}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                        selectedQuestionCount === count
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {count === allQuestions.length ? 'All' : count}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                  Quiz Features:
                </h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Navigate between questions freely</li>
                  <li>• Immediate feedback with explanations</li>
                  <li>• Track your progress and score</li>
                  <li>• Review all answers at the end</li>
                </ul>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => navigate(`/systems/${systemId}`)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Back to System
                </button>
                <button
                  onClick={startQuiz}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Start Quiz ({selectedQuestionCount} questions)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
  const scorePercentage = Math.round((score / questions.length) * 100);
  const answeredCount = userAnswers.filter(answer => answer !== null).length;

  // Results Screen
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

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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

              <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {answeredCount}/{questions.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Questions Answered
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
      <div className="container mx-auto px-4 max-w-6xl">
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
              <span>Answered: {answeredCount}/{questions.length}</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {system.name} - {category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
          
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-4">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <button
              onClick={finishQuiz}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Finish Quiz
            </button>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Question Navigation
              </h3>
              <div className="grid grid-cols-5 lg:grid-cols-4 gap-2 max-h-96 overflow-y-auto">
                {questions.map((_, index) => {
                  const isAnswered = userAnswers[index] !== null;
                  const isCurrent = index === currentQuestion;
                  const isCorrect = isAnswered && userAnswers[index] === questions[index].correct;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => goToQuestion(index)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                        isCurrent
                          ? 'bg-blue-600 text-white'
                          : isAnswered
                          ? isCorrect
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
              
              <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-3 h-3 bg-blue-600 rounded"></div>
                  <span>Current</span>
                </div>
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-3 h-3 bg-green-100 dark:bg-green-900/30 rounded"></div>
                  <span>Correct</span>
                </div>
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-3 h-3 bg-red-100 dark:bg-red-900/30 rounded"></div>
                  <span>Incorrect</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  <span>Unanswered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Question Area */}
          <div className="lg:col-span-3">
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

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => goToQuestion(0)}
                  disabled={currentQuestion === 0}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                >
                  <SkipBack className="h-4 w-4" />
                  <span>First</span>
                </button>
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentQuestion === 0}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleNextQuestion}
                  disabled={currentQuestion === questions.length - 1}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                >
                  <span>Next</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => goToQuestion(questions.length - 1)}
                  disabled={currentQuestion === questions.length - 1}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                >
                  <span>Last</span>
                  <SkipForward className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;