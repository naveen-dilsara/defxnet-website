import React from 'react';
import { 
  Database, 
  Image as ImageIcon, 
  Shield, 
  BarChart2, 
  BrainCircuit,
  ArrowRight,
  Cpu,
  FileBarChart,
  ShieldCheck,
  Workflow,
  Microscope,
  Binary
} from 'lucide-react';
import { ImageMagnifier } from '../ImageMagnifier';

interface MethodologyStep {
  title: string;
  icon: React.ReactNode;
  description: string[];
}

export function Methodology() {
  const methodologySteps: MethodologyStep[] = [
    {
      title: "Dataset Selection and Preprocessing",
      icon: <Database className="w-8 h-8" />,
      description: [
        "Collected ~18,000 chest X-ray images divided into three classes: normal, pneumonia, pneumothorax",
        "Each class contains 6,000 images for balanced training",
        "Applied 5° rotation to all images to reduce orientation bias and enhance class fairness",
        "Resized and normalized images for input into CNN models"
      ]
    },
    {
      title: "Implementing Attacks",
      icon: <ImageIcon className="w-8 h-8" />,
      description: [
        "Generated adversarial examples using four attack types:",
        "• Style Transfer Manipulation (STM)",
        "• Uniform Scale Mix Mask (USMM)",
        "• Structure Invariant Attack (SIA)",
        "• Penalizing Gradient Norm (PGN)",
        "Applied each attack on the fine-tuned ResNet model to evaluate its vulnerability"
      ]
    },
    {
      title: "Applying Defenses",
      icon: <Shield className="w-8 h-8" />,
      description: [
        "Implemented various defense strategies:",
        "• Adversarial training with attacked and clean images",
        "• Image denoising (e.g., Gaussian blur, JPEG compression)",
        "• High-level denoisers like HGD or CycleGAN",
        "Re-trained models with defenses to improve robustness"
      ]
    },
    {
      title: "Fine-tuning CNN Model",
      icon: <BrainCircuit className="w-8 h-8" />,
      description: [
        "Fine-tuned models like ResNet50, DenseNet121, VGG16, and InceptionV3 for comparative analysis"
      ]
    },
    {
      title: "Evaluating Results with Metrics",
      icon: <BarChart2 className="w-8 h-8" />,
      description: [
        "Evaluated both clean and adversarial datasets using:",
        "• Accuracy",
        "• Precision",
        "• Recall",
        "• F1-score",
        "Visualized performance drop and improvements post-defense",
        "Compared effectiveness of each defense strategy"
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Methodology</h2>
          <p className="text-xl text-gray-600">Our comprehensive approach to medical AI security research</p>
        </div>

        {/* Methodology Steps in 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {methodologySteps.map((step, index) => (
            <div
              key={index}
              className={`backdrop-blur-lg bg-white/40 border border-white/60 rounded-xl p-6
                         shadow-[0_8px_16px_rgba(148,163,184,0.1)]
                         hover:shadow-[0_8px_24px_rgba(148,163,184,0.2)]
                         hover:bg-white/50
                         transition-all duration-300
                         flex flex-col
                         relative overflow-hidden
                         ${index === 0 ? 'md:row-span-4' : 'md:col-start-2'}`}
            >
              {/* Main Content */}
              <div className="flex items-start gap-4 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <div className="space-y-2">
                    {step.description.map((desc, i) => (
                      <p key={i} className="text-gray-600 text-sm">
                        {desc}
                      </p>
                    ))}
                  </div>
                  {/* Dataset Images - Only for Dataset Selection card */}
                  {step.title === "Dataset Selection and Preprocessing" && (
                    <div className="mt-4 space-y-4">
                      <div>
                        <ImageMagnifier
                          src="/images/1cca3673-2cf0-4dd9-8915-3a4c55b8afc0.jpg"
                          alt="Original Dataset Sample"
                          className="w-full rounded-lg shadow-md"
                          magnifierHeight={180}
                          magnifierWidth={180}
                          zoomLevel={2}
                        />
                        <p className="text-center text-sm text-gray-600 mt-2 font-medium">Original Dataset</p>
                      </div>
                      <div>
                        <ImageMagnifier
                          src="/images/aee1dfad-1dba-4c25-b2df-c61538f4406a.jpg"
                          alt="Preprocessed Dataset Sample"
                          className="w-full rounded-lg shadow-md"
                          magnifierHeight={180}
                          magnifierWidth={180}
                          zoomLevel={2}
                        />
                        <p className="text-center text-sm text-gray-600 mt-2 font-medium">Preprocessed Dataset</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute right-4 bottom-4 opacity-10 transform rotate-12">
                {index === 0 && <Binary className="w-20 h-20" />}
                {index === 1 && <Workflow className="w-20 h-20" />}
                {index === 2 && <ShieldCheck className="w-20 h-20" />}
                {index === 3 && <Cpu className="w-20 h-20" />}
                {index === 4 && <FileBarChart className="w-20 h-20" />}
              </div>

              {/* Connection Lines */}
              {index < methodologySteps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-8 h-8 text-blue-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ResNet Performance Analysis */}
        <div className="mt-16 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">ResNet Performance Analysis</h3>
          <div className="backdrop-blur-lg bg-white/40 border border-white/60 rounded-2xl p-8
                         shadow-[0_8px_16px_rgba(148,163,184,0.1)]
                         group cursor-pointer overflow-hidden">
            <img
              src="/images/resnet-performance.png"
              alt="ResNet Performance Analysis"
              className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Process Flow with numbered steps */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Process Flow</h3>
          <div className="grid grid-cols-1 gap-4 mb-8">
            {[
              { text: 'Dataset selection and preprocessing', icon: <Database className="w-5 h-5" /> },
              { text: 'Implementing attacks', icon: <Workflow className="w-5 h-5" /> },
              { text: 'Fine-tuning CNN model', icon: <Cpu className="w-5 h-5" /> },
              { text: 'Applying defenses', icon: <ShieldCheck className="w-5 h-5" /> },
              { text: 'Evaluating results with metrics', icon: <FileBarChart className="w-5 h-5" /> },
            ].map((step, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/40 border border-white/60 rounded-xl
                           shadow-[0_8px_16px_rgba(148,163,184,0.1)]
                           hover:shadow-[0_8px_24px_rgba(148,163,184,0.2)]
                           hover:bg-white/50
                           transition-all duration-300
                           flex items-center p-4"
              >
                <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex items-center gap-3">
                  {step.icon}
                  <p className="text-gray-800 font-medium">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Architecture Diagram */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">System Architecture</h3>
          <div className="backdrop-blur-lg bg-white/40 border border-white/60 rounded-2xl p-8
                         shadow-[0_8px_16px_rgba(148,163,184,0.1)]
                         group cursor-pointer overflow-hidden">
            <img
              src="/images/system-diagram.png"
              alt="DefXNet System Architecture"
              className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
} 