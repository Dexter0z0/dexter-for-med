import React from 'react';
import { ExternalLink, BookOpen, Video, FileText, Download, Globe } from 'lucide-react';

const Sources: React.FC = () => {
  const categories = [
    {
      title: 'Textbooks & References',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      resources: [
        {
          title: "Gray's Anatomy for Students",
          author: "Drake, Vogl, and Mitchell",
          description: "Comprehensive anatomical reference with clinical correlations",
          type: 'Book',
          url: 'https://t.me/Medical_PAN_Bot'
        },
        {
          title: "Guyton and Hall Textbook of Medical Physiology",
          author: "John E. Hall",
          description: "Authoritative physiology textbook with clinical applications",
          type: 'Book',
          url: 'https://t.me/Medical_PAN_Bot'
        },
        {
          title: "Robbins Basic Pathology",
          author: "Kumar, Abbas, and Aster",
          description: "Essential pathology textbook for medical students",
          type: 'Book',
          url: 'https://t.me/Medical_PAN_Bot'
        },
        {
          title: "First Aid for the USMLE Step 1",
          author: "Le, Bhushan, et al.",
          description: "High-yield review for medical licensing examinations",
          type: 'Review Book',
          url: 'https://t.me/Medical_MhM_Robot'
        }
      ]
    },
    {
      title: 'Online Learning Platforms',
      icon: <Video className="h-8 w-8" />,
      color: 'from-green-500 to-green-600',
      resources: [
        {
          title: "Kunhub",
          author: "Niels Hapke",
          description: "Interactive medical learning platform offering anatomy tutorials, histology slides, and clinical case studies.",
          type: 'Video Platform',
          url: 'https://www.kenhub.com/'
        },
        {
          title: "Osmosis",
          author: "Osmosis.org",
          description: "Medical education platform with videos and questions",
          type: 'Learning Platform',
          url: 'https://www.osmosis.org/'
        },
        {
          title: "Medicosis Perfectionalis",
          author: "an Egyptian physician",
          description: "A high-yield YouTube channel offering clear, engaging explanations across medicine, surgery, biochemistry, pathology, and more. Known for turning complex topics into digestible, memorable lessons.",
          type: 'YouTube channel',
          url: 'https://youtube.com/@medicosisperfectionalis?si=EpiekX2e7DSI_x2s'
        },
        {
          title: "Dirty Medicine",
          author: "Dirty Medicine",
          description: "A bold, high-impact YouTube channel focused on USMLE and medical school prep. Known for its brutally honest, high-yield breakdowns of pharmacology, biochemistry, and pathology — all delivered with humor and clarity.",
          type: 'YouTube channel',
          url: 'https://youtube.com/@dirtymedicine?si=84J7dnSOGdLu5cdV'
        }
      ]
    },
    {
      title: 'Research Databases',
      icon: <FileText className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-600',
      resources: [
        {
          title: "PubMed",
          author: "NCBI/NIH",
          description: "Premier database for biomedical literature",
          type: 'Database',
          url: 'https://pubmed.ncbi.nlm.nih.gov/'
        },
        {
          title: "Cochrane Library",
          author: "Cochrane",
          description: "High-quality systematic reviews and clinical trials",
          type: 'Database',
          url: 'https://www.cochranelibrary.com/'
        },
        {
          title: "UpToDate",
          author: "Wolters Kluwer",
          description: "Evidence-based clinical decision support resource",
          type: 'Clinical Database',
          url: 'https://www.uptodate.com/'
        },
        {
          title: "MedlinePlus",
          author: "NIH",
          description: "Reliable health information for patients and professionals",
          type: 'Health Database',
          url: 'https://medlineplus.gov/'
        }
      ]
    },
    {
      title: 'Free Resources',
      icon: <Download className="h-8 w-8" />,
      color: 'from-orange-500 to-orange-600',
      resources: [
        {
          title: "Ninja Nerd",
          author: "Zach Murphy",
          description: "One of the most comprehensive medical education channels on YouTube, Ninja Nerd offers detailed, visually rich lectures on anatomy, physiology, pathology, pharmacology, and more. Their whiteboard-style teaching and clinical depth make it a favorite among medical students worldwide.",
          type: 'YouTube channel',
          url: 'https://youtube.com/@ninjanerdofficial?si=rxakS3pI78trg73E'
        },
        {
          title: "Boards & Beyond",
          author: "Dr. Jason Ryan",
          description: "A trusted video-based learning platform designed to help medical students master foundational concepts for the USMLE and clinical rotations. With structured playlists and clear explanations, it’s ideal for reinforcing classroom material and building long-term understanding.",
          type: 'Telegram Channel',
          url: 'https://t.me/Boards_and_Beyond_videos_2023'
        },
        {
          title: "Kaplan Medical",
          author: "Stanley Kaplan",
          description: "A globally recognized leader in medical exam preparation, Kaplan offers comprehensive resources for USMLE, COMLEX, NCLEX, and MCAT. Their platform includes expert-led video lectures, realistic practice exams, Qbanks, and personalized study plans tailored to every stage of medical education.",
          type: 'Telegram Channel',
          url: 'https://t.me/kaplanvideos'
        },
        {
          title: "MedicalStudyZone",
          author: "Muhammad Mohsin",
          description: "A free, community-driven platform offering downloadable medical textbooks, video lectures, and exam prep materials for MBBS, FCPS, USMLE, and more.",
          type: 'Website',
          url: 'https://medicalstudyzone.com/'
        }
      ]
    }
  ];

  const studyTips = [
    {
      title: "Active Recall",
      description: "Practice retrieving information from memory rather than just re-reading"
    },
    {
      title: "Spaced Repetition",
      description: "Review material at increasing intervals to improve long-term retention"
    },
    {
      title: "Clinical Correlation",
      description: "Always connect basic science concepts to clinical applications"
    },
    {
      title: "Peer Discussion",
      description: "Form study groups to discuss and explain concepts to each other"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Learning Sources
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Curated collection of high-quality medical education resources to supplement your MCQ practice. 
              From textbooks to online platforms, find the best materials for medical learning.
            </p>
          </div>
        </div>
      </section>

      {/* Resources by Category */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-12">
                  <div className={`bg-gradient-to-r ${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <div
                      key={resourceIndex}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-grow">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            By {resource.author}
                          </p>
                        </div>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium">
                          {resource.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        {resource.description}
                      </p>
                      
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                      >
                        <Globe className="h-4 w-4" />
                        <span>Visit Resource</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Tips */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Study Tips for Medical Students
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Evidence-based strategies to maximize your learning efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studyTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-xl border border-blue-200 dark:border-blue-700"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Educational Disclaimer
              </h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-400 leading-relaxed">
                The resources listed here are provided for educational purposes only. 
                Always verify information with your institution's curriculum and consult with your instructors. 
                Some resources may require subscriptions or institutional access.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sources;