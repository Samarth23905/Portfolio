import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { Presentation, Download, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Presentations = () => {
  const { toast } = useToast();

  const presentations = [
    {
      title: 'Hybrid Backend Architectures: Best Practices',
      topic: 'Backend Development',
      date: 'December 2023',
      platform: 'Tech Conference India',
      description: 'Deep dive into combining Node.js and Python Flask for optimal performance, covering architecture patterns, data flow, and real-world use cases.',
      insights: [
        'When to choose hybrid vs monolithic backends',
        'Inter-service communication strategies',
        'Performance optimization techniques',
        'Deployment and scaling considerations'
      ]
    },
    {
      title: 'Building Real-Time Systems at Scale',
      topic: 'System Design',
      date: 'October 2023',
      platform: 'Developer Meetup',
      description: 'Comprehensive guide to implementing WebSocket-based real-time applications that handle thousands of concurrent connections efficiently.',
      insights: [
        'Socket.IO vs raw WebSockets',
        'Load balancing strategies',
        'State management in distributed systems',
        'Monitoring and debugging real-time apps'
      ]
    },
    {
      title: 'Role-Based Access Control: From Theory to Practice',
      topic: 'Security & Authentication',
      date: 'August 2023',
      platform: 'Security Webinar Series',
      description: 'Practical implementation of RBAC systems with focus on scalability, security best practices, and common pitfalls to avoid.',
      insights: [
        'RBAC vs ABAC comparison',
        'Database schema design for permissions',
        'JWT integration strategies',
        'Testing access control systems'
      ]
    },
    {
      title: 'Rapid Prototyping for Hackathons',
      topic: 'Development Strategy',
      date: 'June 2023',
      platform: 'Hackathon Workshop',
      description: 'Strategic approach to building MVPs under time constraints, covering tech stack selection, time management, and presentation skills.',
      insights: [
        'Quick tech stack evaluation',
        'Prioritizing features effectively',
        'Building judge-friendly demos',
        'Post-hackathon scalability planning'
      ]
    }
  ];

  const handleAction = () => {
    toast({
      title: "🚧 Feature Coming Soon",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Presentations | Samarth K Hosamani</title>
        <meta name="description" content="Technical presentations and talks on backend development, real-time systems, and software architecture best practices." />
      </Helmet>

      <div className="min-h-screen pt-24 pb-12">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Technical Presentations</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Clear technical communication and audience engagement through impactful presentations
            </p>
          </motion.div>

          <div className="space-y-8">
            {presentations.map((presentation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-8 border border-transparent hover:border-emerald-500/50 transition-all"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-3 mb-4">
                      <Presentation className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{presentation.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-3">
                          <span className="bg-emerald-500/20 text-emerald-500 px-3 py-1 rounded-full">
                            {presentation.topic}
                          </span>
                          <span>{presentation.date}</span>
                          <span>•</span>
                          <span>{presentation.platform}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {presentation.description}
                    </p>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Insights</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {presentation.insights.map((insight, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-emerald-500 mt-1">▸</span>
                            <span>{insight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-violet-500/20 rounded-lg flex items-center justify-center">
                      <Video className="w-12 h-12 text-gray-600" />
                    </div>
                    <Button
                      onClick={handleAction}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
                    >
                      <Video className="w-4 h-4 mr-2" />
                      Watch Recording
                    </Button>
                    <Button
                      onClick={handleAction}
                      variant="outline"
                      className="w-full border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Slides
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Presentations;