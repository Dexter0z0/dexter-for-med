import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  Clock, 
  Award, 
  Users, 
  Target,
  Brain,
  Heart,
  Microscope
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Comprehensive MCQs",
      description: "14 medical systems with detailed explanations for every question"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Interactive Learning",
      description: "Immediate feedback with comprehensive explanations to enhance understanding"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Timed Practice",
      description: "Exam-style timed questions to prepare you for real assessments"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Progress Tracking",
      description: "Monitor your performance and identify areas for improvement"
    }
  ];

  const stats = [
    { number: "14", label: "Medical Systems" },
    { number: "1000+", label: "Practice Questions" },
    { number: "100%", label: "Free Access" },
    { number: "24/7", label: "Available" }
  ];

  const quickStart = [
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Cardiovascular System",
      description: "Heart anatomy, physiology, and pathology",
      path: "/systems/cardiovascular"
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Central Nervous System", 
      description: "Neuroanatomy and neurophysiology",
      path: "/systems/cns"
    },
    {
      icon: <Microscope className="h-12 w-12" />,
      title: "Endocrine System",
      description: "Hormones and metabolic regulation",
      path: "/systems/endocrine"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Master Medical Knowledge with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300">
                Interactive MCQs
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Created by Dexter, a medical student at Al-Farabi Kazakh National University. 
              Comprehensive question bank with detailed explanations to enhance your academic performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/systems"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center space-x-2"
              >
                <span>Start Learning</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/practice-tests"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Practice Tests</span>
                <Target className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-green-400 rounded-full"></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 bg-blue-400 rounded-full"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Dexter for Med?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Designed by a medical student, for medical students. Experience learning that truly understands your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Start
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Jump right into the most popular medical systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {quickStart.map((system, index) => (
              <Link
                key={index}
                to={system.path}
                className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl border border-blue-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {system.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {system.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {system.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Start Learning</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Excel in Your Medical Studies?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of medical students who are already improving their knowledge with our comprehensive MCQ platform.
          </p>
          <Link
            to="/systems"
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2"
          >
            <span>Explore All Systems</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;