import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dexter for Med</h3>
                <p className="text-sm text-gray-400">Medical MCQ Platform</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Created by Dexter, a second-year medical student at Al-Farabi Kazakh National University. 
              Providing high-quality medical MCQs with detailed explanations to help medical students excel.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b-2 border-green-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/systems', label: 'Medical Systems' },
                { path: '/practice-tests', label: 'Practice Tests' },
                { path: '/sources', label: 'Learning Sources' },
                { path: '/contact', label: 'Contact Us' }
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Medical Systems */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b-2 border-green-500 pb-2 inline-block">
              Medical Systems
            </h3>
            <ul className="space-y-2">
              {[
                'Cardiovascular System',
                'Central Nervous System',
                'Endocrine System',
                'Respiratory System',
                'Gastrointestinal System',
                'Renal System'
              ].map((system) => (
                <li key={system}>
                  <span className="text-gray-300 text-sm">
                    {system}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b-2 border-green-500 pb-2 inline-block">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-500" />
                <span className="text-gray-300 text-sm">dexter.for.med@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-500" />
                <span className="text-gray-300 text-sm">+7 (747) 564-8920</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Al-Farabi Kazakh National University<br />
                  Almaty, Kazakhstan
                </span>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="https://www.kaznu.kz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span className="text-sm">Visit University</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Dexter for Med. All rights reserved. | Designed for Medical Students by a Medical Student
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
