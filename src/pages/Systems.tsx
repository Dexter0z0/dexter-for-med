import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Microscope, Settings as Lungs, Atom as Stomach, LucideKey as Kidney, Bone, Droplets, Dna, Shield, Pill, Baby, Eye, FlaskConical } from 'lucide-react';
import { FaLungs } from "react-icons/fa6";
import { GiStomach, GiKidneys } from "react-icons/gi";
import { IoMaleFemaleSharp } from "react-icons/io5";
import { FaHeartbeat, FaBacterium } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
const Systems: React.FC = () => {
  const systems = [
    {
      id: 'cardiovascular',
      name: 'Cardiovascular System',
      icon: <FaHeartbeat className="h-12 w-12" />,
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
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="thyroid" className="h-12 w-12">
      <path fill="#dad7e5" d="M33.71,3.83c-3,6.66-3.71,7.63-3.71,10.34,0,1.3.15.78-.77,2.26-.72-.58-.46-.43-9.23-.43-1.73,0-.68,1.31-2-.8,0-3.84-.09-3.38-3.71-11.37A2,2,0,0,1,16.11,1h3.2a2,2,0,0,1,2,1.67L21.67,5a2.36,2.36,0,0,0,4.66,0l.39-2.36a2,2,0,0,1,2-1.67h3.2A2,2,0,0,1,33.71,3.83Z"></path>
      <path fill="#edebf2" d="M33.71,3.83C31.26,9.23,30,11.16,30,14H21a1,1,0,0,1-1-1,9.75,9.75,0,0,0-.9-4c-3-6.53-3.4-6.84-2.73-8h2.94c3.35,0,.94,5.1,4.07,5.92A2.37,2.37,0,0,0,26.33,5l.39-2.36a2,2,0,0,1,2-1.67h3.2A2,2,0,0,1,33.71,3.83Z"></path>
      <path fill="#dad7e5" d="M30,39a2,2,0,0,1-2,2H20a2,2,0,0,1-2-2C23,36.45,23.89,35.94,30,39Z"></path>
      <rect width="12" height="6" x="18" y="41" fill="#dad7e5" rx="2"></rect>
      <path fill="#edebf2" d="M30 43a2 2 0 0 1-2 2H20a2 2 0 0 1 0-4h8A2 2 0 0 1 30 43zM30 37a2 2 0 0 1-2 2H20a2 2 0 0 1 0-4h8A2 2 0 0 1 30 37z"></path>
      <path fill="#dad7e5" d="M29.23,16.43C28.07,18.29,27.41,20,25.34,20c-4.77,0-4.25.14-6.57-3.57A2,2,0,0,1,20,16C28.31,16,28.52,15.84,29.23,16.43Z"></path>
      <path fill="#edebf2" d="M29.05,16.31A3.09,3.09,0,0,1,26.34,18c-3.12,0-4.09.4-5.59-2C28.7,16,28.43,15.89,29.05,16.31Z"></path>
      <path fill="#db5669" d="M40.74,31.13C42.5,37.24,35.9,42,30.42,39.21,25.14,36.57,24.34,35.78,18,39c-6,3.21-12.46-1.92-10.74-7.87a7,7,0,0,1,0-10.26,7,7,0,0,1,5.8-8.77c3-.55,3.56.9,4.94,3.1,3.26,5.2,2.46,4.8,7.34,4.8a3,3,0,0,0,2-.73c.78-.7,3.4-5.38,4.06-6.19,2.65-3.31,11.36,1,9.38,7.79A7,7,0,0,1,40.74,31.13Z"></path>
      <path fill="#f26674" d="M40.74,31.13a7.18,7.18,0,0,1,0,3.95,7.31,7.31,0,0,1-1.6,1.56,7.54,7.54,0,0,1-7.68.57C26.14,34.57,25.34,33.78,19,37a7.58,7.58,0,0,1-8.47-.64,6.89,6.89,0,0,1-1.27-6.23,7,7,0,0,1,0-10.26c-1.06-3.67,1.41-7.31,3.13-7.63,1.66-.51,3.54-.36,4.49,1.17C20,18.47,20.5,20,22.66,20c3.25,0,3,.06,3.83-.23,2.2-.8,3.89-7,6.22-7.61,4.2-1.2,9.57,3.39,8,8.71A7,7,0,0,1,40.74,31.13Z"></path>
      <path fill="#c4455e" d="M20.65 27.67a1 1 0 0 1 1.51-1.32 2.92 2.92 0 0 0 3.68 0 1 1 0 0 1 1.51 1.31A4.87 4.87 0 0 1 20.65 27.67zM29.65 23.66a1 1 0 0 1 1.51-1.31 2.92 2.92 0 0 0 3.68 0 1 1 0 0 1 1.51 1.31A4.86 4.86 0 0 1 29.65 23.66zM29.65 32.66a1 1 0 0 1 1.51-1.31 2.92 2.92 0 0 0 3.68 0 1 1 0 0 1 1.51 1.31A4.86 4.86 0 0 1 29.65 32.66zM11.65 23.67a1 1 0 0 1 1.51-1.32 2.92 2.92 0 0 0 3.68 0 1 1 0 0 1 1.5 1.32A4.87 4.87 0 0 1 11.65 23.67zM11.65 32.67a1 1 0 0 1 1.51-1.32 2.92 2.92 0 0 0 3.68 0 1 1 0 0 1 1.5 1.32A4.87 4.87 0 0 1 11.65 32.67z"></path>
    </svg>,
      description: 'Hormones, glands, and endocrine regulation mechanisms',
      color: 'from-green-500 to-green-600',
      categories: ['anatomy', 'physiology', 'pathology']
    },
    {
      id: 'respiratory',
      name: 'Respiratory System',
      icon: <FaLungs className="h-12 w-12" />,
      description: 'Pulmonary anatomy, gas exchange, and respiratory diseases',
      color: 'from-blue-500 to-blue-600',
      categories: ['anatomy', 'physiology', 'pathology']
    },
    {
      id: 'gastrointestinal',
      name: 'Gastrointestinal System',
      icon: <GiStomach className="h-12 w-12" />,
      description: 'Digestive system anatomy, physiology, and GI disorders',
      color: 'from-orange-500 to-orange-600',
      categories: ['anatomy', 'physiology', 'pathology']
    },
    {
      id: 'renal',
      name: 'Renal System',
      icon: <GiKidneys className="h-12 w-12" />,
      description: 'Kidney structure, function, and renal pathology',
      color: 'from-yellow-500 to-yellow-600',
      categories: ['anatomy', 'physiology', 'pathology']
    },
    {
      id: 'reproductive',
      name: 'Reproductive System',
      icon: <IoMaleFemaleSharp className="h-12 w-12" />,
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
      icon: <FaBacterium className="h-12 w-12" />,
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
      icon: <Baby className="h-12 w-12" />,
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
    },
    {
      id: 'biochemistry',
      name: 'Biochemistry',
      icon: <FlaskConical className="h-12 w-12"/>,
      description: 'Interactions in the body, biochemical and metabolic processes',
      color: 'from-pink-500 to-pink-800',
      categories: ['Basic level', 'USMLE level']
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
                        {system.categories.includes('general') ? '100+' : '100+'}
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