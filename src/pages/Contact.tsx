import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Heart, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Have questions, suggestions, or feedback? I'd love to hear from you. 
              As a medical student myself, I understand the challenges of medical education.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - About & Contact Info */}
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                      <Heart className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      About Dexter for Med
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Hi! I'm Abdallah, a second-year medical student at Al-Farabi Kazakh National University. 
                    I created this platform because I understand the challenges of medical education firsthand. 
                    My goal is to help fellow medical students excel in their studies through high-quality MCQs 
                    with detailed explanations.
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    This platform is constantly evolving based on student feedback and needs. 
                    Your suggestions and questions help make it better for everyone in our medical community.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Email</p>
                        <p className="text-gray-600 dark:text-gray-400">dexter.for.med@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                        <Phone className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                        <p className="text-gray-600 dark:text-gray-400">+7 (747) 564-8920</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                        <MapPin className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Location</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          Al-Farabi Kazakh National University<br />
                          Almaty, Kazakhstan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-6">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                    Response Time
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    I typically respond to messages within 24-48 hours. 
                    As a student, I may take longer during exam periods, but I will get back to you!
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Send a Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="question-feedback">Question Feedback</option>
                      <option value="new-feature">Feature Request</option>
                      <option value="bug-report">Bug Report</option>
                      <option value="content-suggestion">Content Suggestion</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                      placeholder="Please provide as much detail as possible. If reporting a bug or suggesting content, include specific examples."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Can I suggest new questions or topics?",
                  answer: "Absolutely! I welcome suggestions for new questions, topics, or entire systems. Please use the contact form above with your ideas."
                },
                {
                  question: "Is this platform completely free?",
                  answer: "Yes, Dexter for Med is completely free. It's created by a student, for students, with no hidden costs or premium features."
                },
                {
                  question: "How often is content updated?",
                  answer: "I regularly add new questions and improve existing content based on feedback and my own learning progress as a medical student."
                },
                {
                  question: "Can I contribute questions or explanations?",
                  answer: "Yes! If you're a medical student or healthcare professional and would like to contribute, please reach out via the contact form."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
