import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, SkipForward, RotateCcw, ArrowRight, CheckCircle, XCircle, Circle, Clock } from 'lucide-react';
import { systemsData } from '../data/systemsData';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizState {
  currentQuestion: number;
  answers: (number | null)[];
  showResults: boolean;
  timeSpent: number;
  startTime: number;
}

const Quiz: React.FC = () => {
  const { systemId, category } = useParams<{ systemId: string; category: string }>();
  const navigate = useNavigate();
  
  // Dynamic questions data from systemsData
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (systemId && category && systemsData[systemId]) {
      const system = systemsData[systemId];
      const moduleQuestions = system.modules[category]?.questions || [];
      
      const formattedQuestions: Question[] = moduleQuestions.map((q, index) => ({
        id: index + 1,
        question: q.question,
        options: q.options,
        correctAnswer: q.correct,
        explanation: q.explanation
      }));
      
      setQuestions(formattedQuestions);
    }
  }, [systemId, category]);

  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: new Array(questions.length).fill(null),
    showResults: false,
    timeSpent: 0,
    startTime: Date.now()
  });

  const [jumpToQuestion, setJumpToQuestion] = useState('');

  // Reset quiz state when questions change
  useEffect(() => {
    if (questions.length > 0) {
      setQuizState({
        currentQuestion: 0,
        answers: new Array(questions.length).fill(null),
        showResults: false,
        timeSpent: 0,
        startTime: Date.now()
      });
    }
  }, [questions]);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuizState(prev => ({
        ...prev,
        timeSpent: Math.floor((Date.now() - prev.startTime) / 1000)
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Show loading state while questions are being loaded
  if (!systemId || !category || !systemsData[systemId] || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Loading Quiz...</h1>
            <p className="text-gray-600">
              {!systemId || !category ? 'Invalid quiz parameters' : 
               !systemsData[systemId] ? 'System not found' :
               'Loading questions...'}
            </p>
            <button
              onClick={() => navigate('/systems')}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Systems
            </button>
          </div>
        </div>
      </div>
    );
  }

  const systemName = systemsData[systemId]?.name || systemId;

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestion] = answerIndex;
    setQuizState(prev => ({ ...prev, answers: newAnswers }));
  };

  const goToQuestion = (questionIndex: number) => {
    if (questionIndex >= 0 && questionIndex < questions.length) {
      setQuizState(prev => ({ ...prev, currentQuestion: questionIndex }));
    }
  };

  const handleJumpToQuestion = () => {
    const questionNum = parseInt(jumpToQuestion);
    if (questionNum >= 1 && questionNum <= questions.length) {
      goToQuestion(questionNum - 1);
      setJumpToQuestion('');
    }
  };

  const goToNextUnanswered = () => {
    const nextUnanswered = quizState.answers.findIndex((answer, index) => 
      answer === null && index > quizState.currentQuestion
    );
    if (nextUnanswered !== -1) {
      goToQuestion(nextUnanswered);
    } else {
      const firstUnanswered = quizState.answers.findIndex(answer => answer === null);
      if (firstUnanswered !== -1) {
        goToQuestion(firstUnanswered);
      }
    }
  };

  const goToFirstIncorrect = () => {
    const firstIncorrect = quizState.answers.findIndex((answer, index) => 
      answer !== null && answer !== questions[index].correctAnswer
    );
    if (firstIncorrect !== -1) {
      goToQuestion(firstIncorrect);
    }
  };

  const finishQuiz = () => {
    setQuizState(prev => ({ ...prev, showResults: true }));
  };

  const calculateScore = () => {
    const correct = quizState.answers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length;
    return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (quizState.showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Results</h1>
              <div className="text-6xl font-bold text-blue-600 mb-2">{score.percentage}%</div>
              <p className="text-xl text-gray-600">
                {score.correct} out of {score.total} questions correct
              </p>
              <p className="text-gray-500 mt-2">Time: {formatTime(quizState.timeSpent)}</p>
            </div>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back to Practice
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[quizState.currentQuestion];
  const selectedAnswer = quizState.answers[quizState.currentQuestion];
  const isAnswered = selectedAnswer !== null;
  const isCorrect = isAnswered && selectedAnswer === currentQ.correctAnswer;
  
  const answeredCount = quizState.answers.filter(a => a !== null).length;
  const correctCount = quizState.answers.filter((answer, index) => 
    answer === questions[index].correctAnswer
  ).length;
  const wrongCount = answeredCount - correctCount;
  const progressPercentage = (answeredCount / questions.length) * 100;

  const hasUnanswered = quizState.answers.some(answer => answer === null);
  const hasIncorrect = quizState.answers.some((answer, index) => 
    answer !== null && answer !== questions[index].correctAnswer
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Practice
          </button>
          <h1 className="text-3xl font-bold text-gray-800">
            {systemName} - {category.charAt(0).toUpperCase() + category.slice(1)} Quiz
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              {/* Progress Dashboard */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Progress</h3>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Completed</span>
                    <span>{Math.round(progressPercentage)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">{correctCount}</div>
                    <div className="text-xs text-green-700">Correct</div>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-red-600">{wrongCount}</div>
                    <div className="text-xs text-red-700">Wrong</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">{quizState.currentQuestion + 1}</div>
                    <div className="text-xs text-blue-700">Current</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-gray-600">{questions.length - answeredCount}</div>
                    <div className="text-xs text-gray-700">Remaining</div>
                  </div>
                </div>
              </div>

              {/* Jump to Question */}
              <div className="mb-6">
                <h4 className="text-md font-semibold text-gray-700 mb-3">Jump to Question</h4>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="1"
                    max={questions.length}
                    value={jumpToQuestion}
                    onChange={(e) => setJumpToQuestion(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleJumpToQuestion()}
                    placeholder={`1-${questions.length}`}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <button
                    onClick={handleJumpToQuestion}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all text-sm font-medium"
                  >
                    Go
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mb-6">
                <h4 className="text-md font-semibold text-gray-700 mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <button
                    onClick={goToNextUnanswered}
                    disabled={!hasUnanswered}
                    className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <SkipForward className="w-4 h-4" />
                    Next Unanswered
                  </button>
                  <button
                    onClick={goToFirstIncorrect}
                    disabled={!hasIncorrect}
                    className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Review Incorrect
                  </button>
                </div>
              </div>

              {/* Mini Question Map */}
              <div className="mb-6">
                <h4 className="text-md font-semibold text-gray-700 mb-3">Question Map</h4>
                <div className="grid grid-cols-10 gap-1">
                  {questions.map((_, index) => {
                    const answer = quizState.answers[index];
                    const isCurrent = index === quizState.currentQuestion;
                    const isAnswered = answer !== null;
                    const isCorrect = isAnswered && answer === questions[index].correctAnswer;
                    
                    let bgColor = 'bg-gray-300'; // Unanswered
                    if (isCurrent) bgColor = 'bg-blue-500 ring-2 ring-blue-300';
                    else if (isAnswered && isCorrect) bgColor = 'bg-green-500';
                    else if (isAnswered && !isCorrect) bgColor = 'bg-red-500';
                    
                    return (
                      <button
                        key={index}
                        onClick={() => goToQuestion(index)}
                        className={`w-6 h-6 rounded-full ${bgColor} hover:scale-125 transition-all duration-200 text-xs text-white font-medium`}
                        title={`Question ${index + 1} - ${
                          isCurrent ? 'Current' :
                          isAnswered ? (isCorrect ? 'Correct' : 'Incorrect') : 'Unanswered'
                        }`}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>
                
                {/* Legend */}
                <div className="mt-3 text-xs text-gray-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full ring-1 ring-blue-300"></div>
                    <span>Current</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Correct</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Incorrect</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span>Unanswered</span>
                  </div>
                </div>
              </div>

              {/* Timer */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono text-lg">{formatTime(quizState.timeSpent)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Question Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Question {quizState.currentQuestion + 1} of {questions.length}
                </h2>
                <button
                  onClick={finishQuiz}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Finish Quiz
                </button>
              </div>

              {/* Question */}
              <div className="mb-8">
                <p className="text-lg text-gray-800 leading-relaxed">
                  {currentQ.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrectOption = index === currentQ.correctAnswer;
                  
                  let optionClass = "w-full p-4 text-left border-2 rounded-lg transition-all ";
                  
                  if (isAnswered) {
                    if (isSelected && isCorrectOption) {
                      optionClass += "border-green-500 bg-green-50 text-green-800";
                    } else if (isSelected && !isCorrectOption) {
                      optionClass += "border-red-500 bg-red-50 text-red-800";
                    } else if (isCorrectOption) {
                      optionClass += "border-green-500 bg-green-50 text-green-800";
                    } else {
                      optionClass += "border-gray-200 bg-gray-50 text-gray-600";
                    }
                  } else {
                    if (isSelected) {
                      optionClass += "border-blue-500 bg-blue-50 text-blue-800";
                    } else {
                      optionClass += "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={optionClass}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          {isAnswered ? (
                            isSelected && isCorrectOption ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : isSelected && !isCorrectOption ? (
                              <XCircle className="w-5 h-5 text-red-600" />
                            ) : isCorrectOption ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <Circle className="w-5 h-5 text-gray-400" />
                            )
                          ) : (
                            <Circle className={`w-5 h-5 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} />
                          )}
                        </div>
                        <span className="font-medium">
                          {String.fromCharCode(65 + index)}. {option}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {isAnswered && (
                <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <h4 className={`font-semibold mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                        {isCorrect ? 'Correct!' : 'Incorrect'}
                      </h4>
                      <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        {currentQ.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => goToQuestion(quizState.currentQuestion - 1)}
                  disabled={quizState.currentQuestion === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                <span className="text-gray-600">
                  {quizState.currentQuestion + 1} / {questions.length}
                </span>

                <button
                  onClick={() => goToQuestion(quizState.currentQuestion + 1)}
                  disabled={quizState.currentQuestion === questions.length - 1}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
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
