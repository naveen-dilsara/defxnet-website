import React from 'react'
import {
  BrainCircuit,
  Code2,
  BarChart3,
  MonitorDot,
  Database,
} from 'lucide-react'

interface TechItem {
  name: string;
  logo: string;
  description?: string;
}

interface Category {
  title: string;
  icon: React.ElementType;
  items: TechItem[];
}

export function Technologies() {
  const categories: Category[] = [
    {
      title: 'DL Frameworks & Models',
      icon: BrainCircuit,
      items: [
        { 
          name: 'TensorFlow',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
          description: 'Deep Learning Framework'
        },
        { 
          name: 'ResNet50',
          logo: 'https://neurohive.io/wp-content/uploads/2019/01/resnet-e1548261477164.png',
          description: 'Residual Neural Network'
        },
        { 
          name: 'DenseNet121',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdpFNYIZi7ot8PfIAmlM17z6_Yc5OcPyYUw&s',
          description: 'Dense Convolutional Network'
        },
        { 
          name: 'VGG16',
          logo: 'https://neurohive.io/wp-content/uploads/2018/11/vgg16.png',
          description: 'Very Deep CNN'
        },
        { 
          name: 'InceptionV3',
          logo: 'https://production-media.paperswithcode.com/methods/inceptionv3onc--oview_vjAbOfw.png',
          description: 'Very Deep CNN'
        }
      ],
    },
    {
      title: 'Core Technologies',
      icon: Code2,
      items: [
        { 
          name: 'Python',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
          description: 'Primary Programming Language'
        },
        { 
          name: 'NumPy',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg',
          description: 'Numerical Computing'
        },
        { 
          name: 'Pandas',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg',
          description: 'Data Analysis'
        },
        { 
          name: 'Next Js',
          logo: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png',
          description: 'Server-Side Rendering'
        }
      ],
    },
    {
      title: 'Analysis & Development',
      icon: BarChart3,
      items: [
        { 
          name: 'Matplotlib',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg',
          description: 'Visualization'
        },
        { 
          name: 'Scikit-learn',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
          description: 'Machine Learning'
        },
        { 
          name: 'Google Colab',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg',
          description: 'Development Platform'
        }
      ],
    }
  ]

  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tools and Technologies
          </h2>
          <p className="text-xl text-gray-600">
            Cutting-edge technologies powering our research
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/40 border border-white/60 rounded-xl p-6
                       shadow-[0_8px_16px_rgba(148,163,184,0.1)]
                       hover:shadow-[0_8px_24px_rgba(148,163,184,0.2)]
                       hover:bg-white/50
                       transition-all duration-300"
            >
              <div className="flex items-center mb-8">
                <div className="bg-blue-900 p-3 rounded-lg">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 ml-4">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-col items-center justify-between p-6 bg-white rounded-xl
                             hover:shadow-lg transition-all duration-300 
                             hover:-translate-y-1 group h-full"
                  >
                    <div className="flex-1 flex items-center justify-center w-full p-4">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="max-w-[120px] max-h-[120px] w-auto h-auto object-contain
                                 filter group-hover:brightness-110 transition-all
                                 drop-shadow-md"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-900 
                                   transition-colors">
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className="text-xs text-gray-500 group-hover:text-gray-700 
                                    transition-colors mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  )
} 