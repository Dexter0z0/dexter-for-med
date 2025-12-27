import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, BookOpen, Clock } from 'lucide-react';
import { systemsData } from '../data/systemsData';

const SystemDetail: React.FC = () => {
  const { systemId } = useParams<{ systemId: string }>();
  
  if (!systemId || !systemsData[systemId]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            System Not Found
          </h1>
          <Link 
            to="/systems" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Return to Systems
          </Link>
        </div>
      </div>
    );
  }

  const system = systemsData[systemId];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${system.color} text-white py-20`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              to="/systems" 
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Systems</span>
            </Link>

            <div className="flex items-start space-x-6">
              <div className="bg-white/10 p-4 rounded-xl">
                <system.icon className="h-12 w-12" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {system.name}
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  {system.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              System Overview
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {system.overview}
            </p>

            {/* Key Topics */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                Key Topics Covered
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {system.keyTopics.map((topic, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Modules */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Practice Modules
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {system.categories.map((category) => {
                const questionCount = system.modules[category]?.questions?.length || 10;
                const estimatedTime = Math.round(questionCount * 2);
                
                return (
                  <div
                    key={category}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white capitalize mb-2">
                        {category === 'general' ? system.name.split(' ')[0] : category}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {category === 'anatomy' && 'Structural organization and anatomical relationships'}
                        {category === 'physiology' && 'Normal function and physiological processes'}
                        {category === 'pathology' && 'Disease processes and abnormal conditions'}
                        {category === 'general' && 'Comprehensive questions covering all aspects'}
                        {category === 'basic level' && 'Comprehensive questions covering all aspects'}
                        {category === 'usmle level' && 'Comprehensive questions covering all aspects'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          {questionCount} Questions
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          ~{estimatedTime} min
                        </span>
                      </div>
                    </div>

                    <Link
                      to={`/quiz/${systemId}/${category}`}
                      className={`w-full bg-gradient-to-r ${system.color} text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group`}
                    >
                      <Play className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      <span>Start Practice</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemDetail;