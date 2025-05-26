import React from 'react'
import {
  BookOpenIcon,
  ShieldIcon, // Make sure this is imported if used (it is)
  ServerIcon,
  BarChart3Icon,
  FileText,
} from 'lucide-react'

interface Reference {
  title: string;
  description: string;
  journal: string;
  pdfLink?: string;
  authors?: string;
}

export function ProjectScope() {
  const references: Reference[] = [
    {
      title: 'Improving the Transferability of Adversarial Examples with Arbitrary Style Transfer',
      description: 'Adversarial Transferability',
      journal: 'Research Paper',
      authors: 'Zhijin Ge, et al.',
      pdfLink: '/research-papers/arbitrary-style-transfer.pdf'
    },
    {
      title: 'Structure Invariant Transformation for better Adversarial Transferability',
      description: 'Structure Invariant Transformation',
      journal: 'Research Paper',
      authors: 'Xiaosen Wang, et al.',
      pdfLink: '/research-papers/structure-invariant-transformation.pdf'
    },
    {
      title: 'Boost Adversarial Transferability by Uniform Scale and Mix Mask Method',
      description: 'Uniform Scale Mix Mask',
      journal: 'Research Paper',
      authors: 'Tao Wang, et al.',
      pdfLink: '/research-papers/uniform-scale-mix-mask.pdf'
    },
    {
      title: 'Boosting Adversarial Transferability by Achieving Flat Local Maxima',
      description: 'Flat Local Maxima',
      journal: 'Research Paper',
      authors: 'Zhijin Ge, et al.',
      pdfLink: '/research-papers/flat-local-maxima.pdf'
    },
   
  ]
  const researchGaps = [
    {
      icon: ShieldIcon,
      title: 'Lack of Robust Defense',
      description:
        'Current chest X-ray AI systems lack comprehensive adversarial defense mechanisms',
    },
    {
      icon: BarChart3Icon,
      title: 'Limited Real-world Evaluation',
      description:
        'Insufficient evaluation of adversarial threats in clinical environments',
    },
    {
      icon: ServerIcon,
      title: 'Novel Attack Methods',
      description:
        'USMM and STM attacks are not well studied in healthcare applications',
    },
  ]

  const researchPapers: Reference[] = [
    {
      title: 'Improving the Transferability of Adversarial Examples with Arbitrary Style Transfer',
      description: 'Novel approach using style transfer techniques to enhance adversarial example transferability across different models.',
      journal: 'Research Paper',
      authors: 'Zhijin Ge, Fanhua Shang, Hongying Liu, Yuanyuan Liu, Lian Wan, Wei Feng, Xiaosen Wang',
      pdfLink: '/research-papers/arbitrary-style-transfer.pdf'
    },
    {
      title: 'Structure Invariant Transformation for better Adversarial Transferability',
      description: 'Innovative method focusing on maintaining structural invariance while improving adversarial transferability.',
      journal: 'Research Paper',
      authors: 'Xiaosen Wang, Zeliang Zhang, Jianping Zhang',
      pdfLink: '/research-papers/structure-invariant-transformation.pdf'
    },
    {
      title: 'Boost Adversarial Transferability by Uniform Scale and Mix Mask Method',
      description: 'Advanced technique combining uniform scaling and mix masking to enhance adversarial attack transferability.',
      journal: 'Research Paper',
      authors: 'Tao Wang, Zijian Ying, Qianmu Li, Zhichao Lian',
      pdfLink: '/research-papers/uniform-scale-mix-mask.pdf'
    },
    {
      title: 'Boosting Adversarial Transferability by Achieving Flat Local Maxima',
      description: 'Novel approach to improve adversarial transferability through optimization of flat local maxima.',
      journal: 'Research Paper',
      authors: 'Zhijin Ge, Hongying Liu, Xiaosen Wang, Fanhua Shang, Yuanyuan Liu',
      pdfLink: '/research-papers/flat-local-maxima.pdf'
    }
  ];

  return (
    <section id="scope" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Project Scope
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Grounded in Medical Imaging, Cyber Security, and Computing
            Infrastructure
          </p>
        </div>

        {/* Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Overview</h3>
          <div className="glass-effect rounded-lg p-8 shadow-soft">
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              The project is grounded in <strong>Medical Imaging</strong>,{' '}
              <strong>Cyber Security</strong>, and{' '}
              <strong>Computing Infrastructure</strong>, aiming to secure
              AI-driven diagnostic tools from adversarial threats using
              CNN-based classifiers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Medical imaging is vital for early disease detection, especially through chest X-rays, 
              which help diagnose conditions like pneumonia and tuberculosis. To improve speed and 
              accuracy, Convolutional Neural Networks (CNNs) are widely used to interpret these 
              images automatically.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mt-4">
              While CNNs perform well, they have a major flaw. They can be tricked by adversarial 
              attacks to images that cause the model to make wrong predictions. For example, a 
              pneumonia-affected X-ray could be altered to look normal to the AI model.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mt-4">
              This is a serious risk in healthcare, where misdiagnosis can affect patient safety. 
              So, it is important to understand these attacks and build stronger, more secure AI 
              systems for real-world medical use.
            </p>
          </div>
        </div>

        {/* Literature Survey */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Literature Survey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {references.map((ref, index) => (
              <div 
                key={index}
                className="glass-effect border border-gray-200/50 rounded-lg p-6 hover:shadow-lg transition-shadow shadow-soft h-full flex flex-col"
              >
                {ref.pdfLink ? (
                  <FileText className="h-8 w-8 text-blue-900 mb-4" />
                ) : (
                  <BookOpenIcon className="h-8 w-8 text-blue-900 mb-4" />
                )}
                <h4 className="font-semibold text-gray-900 mb-2 flex-grow">
                  {ref.title}
                </h4>
                {ref.authors && (
                  <p className="text-sm text-gray-600 mb-2">{ref.authors}</p>
                )}
                <p className="text-sm text-blue-900 font-medium">
                  {ref.journal}
                </p>
                {ref.pdfLink && (
                  <a
                    href={ref.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm text-blue-900 hover:text-blue-700 transition-colors"
                  >
                    View Paper →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Research Gap */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Research Gap
          </h3>
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-100 leading-relaxed text-justify mb-6 animate-fade-in">
                While deep learning models have shown high accuracy in medical image classification, 
                their vulnerability to adversarial attacks remains a critical concern. Existing research 
                often focuses on isolated attack types or uses general-purpose datasets. However, there 
                is a lack of comprehensive evaluation of how various adversarial attacks impact CNN-based 
                medical imaging systems, particularly in chest X-ray classification, where diagnostic 
                accuracy is vital.
              </p>
              <p className="text-gray-100 leading-relaxed text-justify animate-fade-in animation-delay-200">
                Moreover, current defense mechanisms such as adversarial training or High-Level Guided 
                Denoiser have not been systematically tested across diverse attack scenarios like Style 
                Transfer Manipulation (STM), Structure Invariant Attacks (SIA), Uniform Scale Mix Mask 
                (USMM) and Penalizing Gradient Norm (PGN). This creates a significant gap in understanding 
                the true robustness of CNN models when applied in clinical environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}