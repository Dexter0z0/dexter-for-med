import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Microscope, Settings as Lungs, Atom as Stomach, LucideKey as Kidney, Bone, Droplets, Dna, Shield, Pill, Baby, Eye } from 'lucide-react';

const Systems: React.FC = () => {
  const systems = [
    {
      id: 'cardiovascular',
      name: 'Cardiovascular System',
      icon: <Heart className="h-12 w-12" />,
      description: 'Heart anatomy, physiology, pathology, and cardiovascular diseases',
      color: 'from-red-500 to-red-600',
      categories: ['anatomy', 'physiology', 'pathology']
    },
    {
      id: 'cns',
      name: 'Central Nervous System',
      icon: <Brain className="h-12 w-12" />,
      description: 'Neuroanatomy, neurophysiology, and neurological disorders',
      color: 'from-purple-500 to-purple-600',
      categories: ['anatomy', 'physiology', 'pathology']
    },
    {
      id: 'endocrine',
      name: 'Endocrine System',
      icon: <Microscope className="h-12 w-12" />,
      description: 'Hormones, glands, and endocrine regulation mechanisms',
      color: 'from-green-500 to-green-600',
      categories: ['anatomy', 'physiology', 'pathology']
    },
    {
      id: 'respiratory',
      name: 'Respiratory System',
      icon: <Lungs className="h-12 w-12" />,
      description: 'Pulmonary anatomy, gas exchange, and respiratory diseases',
      color: 'from-blue-500 to-blue-600',
      categories: ['anatomy', 'physiology', 'pathology']
    },
    {
      id: 'gastrointestinal',
      name: 'Gastrointestinal System',
      icon: <Stomach className="h-12 w-12" />,
      description: 'Digestive system anatomy, physiology, and GI disorders',
      color: 'from-orange-500 to-orange-600',
      categories: ['anatomy', 'physiology', 'pathology']
    },
    {
      id: 'renal',
      name: 'Renal System',
      icon: <Kidney className="h-12 w-12" />,
      description: 'Kidney structure, function, and renal pathology',
      color: 'from-yellow-500 to-yellow-600',
      categories: ['anatomy', 'physiology', 'pathology']
    },
    {
      id: 'reproductive',
      name: 'Reproductive System',
      icon: <Baby className="h-12 w-12" />,
      description: 'Male and female reproductive anatomy, physiology, and pathology',
      color: 'from-pink-500 to-pink-600',
      categories: ['anatomy', 'physiology', 'pathology']
    },
    {
      id: 'musculoskeletal',
      name: 'Musculoskeletal System',
      icon: <Bone className="h-12 w-12" />,
      description: 'Bones, muscles, joints, and musculoskeletal disorders',
      color: 'from-gray-500 to-gray-600',
      categories: ['anatomy', 'physiology', 'pathology']
    },
    {
      id: 'hematology',
      name: 'Hematology',
      icon: <Droplets className="h-12 w-12" />,
      description: 'Blood cells, hemostasis, and hematological disorders',
      color: 'from-red-600 to-red-700',
      categories: ['general']
    },
    {
      id: 'microbiology',
      name: 'Microbiology',
      icon: <Eye className="h-12 w-12" />,
      description: 'Bacteria, viruses, fungi, and infectious diseases',
      color: 'from-indigo-500 to-indigo-600',
      categories: ['general']
    },
    {
      id: 'immunology',
      name: 'Immunology',
      icon: <Shield className="h-12 w-12" />,
      description: 'Immune system function and immunological disorders',
      color: 'from-teal-500 to-teal-600',
      categories: ['general']
    },
    {
      id: 'pharmacology',
      name: 'Pharmacology',
      icon: <Pill className="h-12 w-12" />,
      description: 'Drug mechanisms, pharmacokinetics, and therapeutics',
      color: 'from-cyan-500 to-cyan-600',
      categories: ['general']
    },
    {
      id: 'embryology',
      name: 'Embryology',
      icon: <Dna className="h-12 w-12" />,
      description: 'Embryonic development and developmental disorders',
      color: 'from-violet-500 to-violet-600',
      categories: ['general']
    },
    {
      id: 'histology',
      name: 'Histology',
      icon: <Microscope className="h-12 w-12" />,
      description: 'Tissue structure and microscopic anatomy',
      color: 'from-emerald-500 to-emerald-600',
      categories: ['general']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Medical Systems
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Explore comprehensive MCQs across all major medical systems. 
              Each system is organized by anatomy, physiology, and pathology for structured learning.
            </p>
          </div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {systems.map((system) => (
              <Link
                key={system.id}
                to={`/systems/${system.id}`}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* System Icon Header */}
                <div className={`bg-gradient-to-r ${system.color} p-6 text-white`}>
                  <div className="flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {system.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center">
                    {system.name}
                  </h3>
                </div>

                {/* System Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {system.description}
                  </p>
                  
                  {/* Categories */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Categories:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {system.categories.map((category) => (
                        <span
                          key={category}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium capitalize"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Question Count */}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        Questions Available
                      </span>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {system.categories.includes('general') ? '10+' : '30+'}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Systems;