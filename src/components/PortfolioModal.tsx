import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface PortfolioProject {
  title: string;
  category: string;
  material: string;
  image: string;
  description: string;
  details: {
    dimensions: string;
    materials: string[];
    features: string[];
    time: string;
  };
  gallery: string[];
}

interface PortfolioModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-bmp-navy/95 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-bmp-navy">{project.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <Icon name="X" size={24} />
          </button>
        </div>
        
        <div className="p-6">
          {/* Основное изображение */}
          <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden mb-6">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Информация о проекте */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-bmp-gold text-bmp-navy">{project.category}</Badge>
                <span className="text-bmp-blue-700 font-medium">{project.material}</span>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg text-bmp-navy flex items-center">
                    <Icon name="Info" size={20} className="mr-2" />
                    Характеристики
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Ruler" size={16} className="mr-2 text-bmp-gold" />
                    <span className="text-sm text-gray-600 mr-2">Размеры:</span>
                    <span className="font-medium">{project.details.dimensions}</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-2 text-bmp-gold" />
                    <span className="text-sm text-gray-600 mr-2">Время выполнения:</span>
                    <span className="font-medium">{project.details.time}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Материалы и особенности */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-bmp-navy flex items-center">
                    <Icon name="Package" size={20} className="mr-2" />
                    Материалы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.details.materials.map((material, index) => (
                      <li key={index} className="flex items-center">
                        <Icon name="Check" className="text-green-500 mr-2 flex-shrink-0" size={16} />
                        <span className="text-sm">{material}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-bmp-navy flex items-center">
                    <Icon name="Star" size={20} className="mr-2" />
                    Особенности
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.details.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Icon name="Sparkles" className="text-bmp-gold mr-2 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Галерея дополнительных изображений */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-bmp-navy mb-4 flex items-center">
              <Icon name="Images" size={24} className="mr-2" />
              Дополнительные виды
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${project.title} - вид ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
            <Button 
              onClick={onClose}
              className="bg-bmp-gold hover:bg-bmp-yellow-600 text-bmp-navy font-bold"
            >
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Назад к портфолио
            </Button>
            <Button 
              variant="outline"
              className="border-bmp-gold text-bmp-navy hover:bg-bmp-blue-50"
            >
              <Icon name="Download" size={16} className="mr-2" />
              Скачать чертежи
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;