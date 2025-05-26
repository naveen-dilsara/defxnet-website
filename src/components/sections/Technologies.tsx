import React from 'react'
import {
  CodeIcon,
  BrainIcon,
  BarChartIcon,
  MonitorIcon,
  DatabaseIcon,
} from 'lucide-react'

interface TechItem {
  name: string;
  imgSrc?: string;
  fallbackClass?: string;
  customIcon?: string;
}

interface Category {
  title: string;
  icon: React.ElementType;
  items: TechItem[];
}

export function Technologies() {
  const categories: Category[] = [
    {
      title: 'DL Frameworks',
      icon: BrainIcon,
      items: [
        { 
          name: 'TensorFlow',
          imgSrc: '/images/tech/tensorflow.png',
          fallbackClass: 'devicon-tensorflow-original colored'
        }
      ],
    },
    {
      title: 'Model Architectures',
      icon: BrainIcon,
      items: [
        { 
          name: 'ResNet50',
          customIcon: '🧠',
        },
        { 
          name: 'DenseNet121',
          customIcon: '🔄',
        },
        { 
          name: 'VGG19',
          customIcon: '🎯',
        },
        { 
          name: 'Inception V3',
          customIcon: '🌐',
        },
      ],
    },
    {
      title: 'Programming Lang.',
      icon: CodeIcon,
      items: [
        { 
          name: 'Python',
          imgSrc: '/images/tech/python.png',
          fallbackClass: 'devicon-python-plain colored'
        }
      ],
    },
    {
      title: 'Data Management Tools',
      icon: DatabaseIcon,
      items: [
        { 
          name: 'Pandas',
          imgSrc: '/images/tech/pandas.png',
          fallbackClass: 'devicon-pandas-original colored'
        },
        { 
          name: 'NumPy',
          imgSrc: '/images/tech/numpy.png',
          fallbackClass: 'devicon-numpy-original colored'
        }
      ],
    },
    {
      title: 'Visualization Tools',
      icon: BarChartIcon,
      items: [
        { 
          name: 'Matplotlib',
          imgSrc: '/images/tech/matplotlib.png',
          fallbackClass: 'devicon-python-plain colored'
        }
      ],
    },
    {
      title: 'Evaluation Metrics',
      icon: BarChartIcon,
      items: [
        { 
          name: 'Scikit-learn',
          imgSrc: '/images/tech/sklearn.png',
          fallbackClass: 'devicon-python-plain colored'
        }
      ],
    },
    {
      title: 'IDE & Compute Resources',
      icon: MonitorIcon,
      items: [
        { 
          name: 'Google Colab',
          imgSrc: '/images/tech/colab.png',
          fallbackClass: 'devicon-google-plain colored'
        }
      ],
    },
  ]

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tools and Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-900 p-3 rounded-lg">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 ml-4">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    {item.imgSrc ? (
                      <img
                        src={item.imgSrc}
                        alt={item.name}
                        className="w-12 h-12 object-contain mr-4"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          const fallbackIcon = document.createElement('i');
                          fallbackIcon.className = `${item.fallbackClass} text-3xl`;
                          target.parentNode?.replaceChild(fallbackIcon, target);
                        }}
                      />
                    ) : (
                      <span className="text-3xl mr-4">{item.customIcon}</span>
                    )}
                    <span className="text-gray-800 font-medium">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 