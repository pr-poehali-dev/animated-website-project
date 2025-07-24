import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

import AnimatedCursor from '@/components/AnimatedCursor';
import PortfolioModal from '@/components/PortfolioModal';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "3D Моделирование",
      description: "Создаем детальные 3D модели мебели в программе Базис Мебельщик",
      icon: "Box",
      features: ["Реалистичная визуализация", "Точные размеры", "Материалы и текстуры"]
    },
    {
      title: "Чертежи и Деталировка",
      description: "Профессиональные технические чертежи для производства",
      icon: "FileText",
      features: ["Рабочие чертежи", "Спецификации", "Карты раскроя"]
    },
    {
      title: "Консультации",
      description: "Помощь в выборе материалов и оптимизации конструкций",
      icon: "Users",
      features: ["Выбор фурнитуры", "Оптимизация затрат", "Технические решения"]
    }
  ];

  const portfolio = [
    {
      title: "Кухонный гарнитур",
      category: "Кухни",
      material: "ЛДСП Egger",
      image: "/img/42488c26-4b30-4f4d-8a78-1e65ae42cae9.jpg",
      description: "Современный кухонный гарнитур с удобной планировкой и качественной фурнитурой. Проект выполнен в программе Базис Мебельщик с детальной проработкой всех элементов.",
      details: {
        dimensions: "3200×600×2100 мм",
        materials: ["ЛДСП Egger 18мм", "Фасады МДФ", "Столешница искусственный камень", "Фурнитура Blum"],
        features: ["Система плавного закрывания", "Встроенная подсветка", "Скрытые петли", "Выдвижные ящики полного выдвижения"],
        time: "3 рабочих дня"
      },
      gallery: ["https://cdn.poehali.dev/files/c58123c8-a916-4da5-96d7-94d35b124d06.jpg", "https://cdn.poehali.dev/files/2e44214b-32d0-45be-8a82-e992c0f7f72f.jpg", "/img/ac939bb2-44fc-40cd-8eff-370e5d0a58e5.jpg"]
    },
    {
      title: "Шкаф-купе",
      category: "Спальни",
      material: "МДФ + зеркало",
      image: "/img/9ca43309-41e1-4162-900b-7d1ba9b2f2bb.jpg",
      description: "Просторный шкаф-купе с зеркальными фасадами и продуманной системой хранения. Оптимальное использование пространства спальни.",
      details: {
        dimensions: "2400×600×2400 мм",
        materials: ["Корпус ЛДСП 18мм", "Фасады зеркало + МДФ", "Направляющие Arcitech", "Штанги хромированные"],
        features: ["Зеркальные двери", "Внутренние ящики", "Полки разной высоты", "Штанги для одежды"],
        time: "2 рабочих дня"
      },
      gallery: ["/img/9ca43309-41e1-4162-900b-7d1ba9b2f2bb.jpg", "/img/42488c26-4b30-4f4d-8a78-1e65ae42cae9.jpg", "/img/ac939bb2-44fc-40cd-8eff-370e5d0a58e5.jpg"]
    },
    {
      title: "Офисная мебель",
      category: "Офис",
      material: "ЛДСП + кромка ПВХ",
      image: "/img/ac939bb2-44fc-40cd-8eff-370e5d0a58e5.jpg",
      description: "Функциональная офисная мебель с эргономичным дизайном. Все элементы спроектированы для максимального удобства работы.",
      details: {
        dimensions: "1800×800×750 мм",
        materials: ["ЛДСП 18мм", "Кромка ПВХ 2мм", "Металлические опоры", "Фурнитура Hafele"],
        features: ["Кабель-менеджмент", "Выдвижная клавиатурная полка", "Тумба с замком", "Антистатическое покрытие"],
        time: "1 рабочий день"
      },
      gallery: ["/img/ac939bb2-44fc-40cd-8eff-370e5d0a58e5.jpg", "/img/42488c26-4b30-4f4d-8a78-1e65ae42cae9.jpg", "/img/9ca43309-41e1-4162-900b-7d1ba9b2f2bb.jpg"]
    }
  ];

  const process = [
    { step: 1, title: "Консультация", description: "Обсуждаем ваши требования и пожелания" },
    { step: 2, title: "Замеры", description: "Точные измерения помещения" },
    { step: 3, title: "Проектирование", description: "Создание 3D модели в Базис Мебельщик" },
    { step: 4, title: "Согласование", description: "Утверждение проекта с клиентом" },
    { step: 5, title: "Документация", description: "Подготовка чертежей и спецификаций" }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Владелец мебельной фабрики",
      text: "Отличные чертежи, все детали проработаны до мелочей. Производство прошло без проблем.",
      rating: 5,
      avatar: "/img/31ea7a7c-532b-4f60-866b-da1c9266e4c2.jpg"
    },
    {
      name: "Михаил Сидоров",
      role: "Дизайнер интерьеров",
      text: "Быстро и качественно выполнили 3D модели для презентации клиенту. Рекомендую!",
      rating: 5,
      avatar: "/img/afedf2ff-72a7-41ed-80be-f9cb0bcf3a38.jpg"
    },
    {
      name: "Елена Козлова",
      role: "Частный заказчик",
      text: "Помогли спроектировать кухню мечты. Все пожелания учтены, результат превзошел ожидания.",
      rating: 5,
      avatar: "/img/508b1c38-8659-44f7-8843-29560e7bc930.jpg"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setShowPortfolioModal(true);
  };

  return (
    <div className="min-h-screen relative" style={{ cursor: 'none', backgroundColor: '#002d52' }}>
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f6d55c' opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      <AnimatedCursor />
      
      {/* Модальное окно с телефоном */}
      {showPhoneModal && (
        <div className="fixed inset-0 bg-bmp-navy/95 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 lg:p-16 max-w-2xl w-full text-center relative shadow-2xl">
            <button
              onClick={() => setShowPhoneModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <Icon name="X" size={24} />
            </button>
            <div className="mb-8">
              <Icon name="Phone" size={80} className="text-bmp-gold mx-auto mb-6" />
              <h2 className="text-3xl lg:text-5xl font-bold text-bmp-navy mb-4">Связь с нами</h2>
              <p className="text-lg text-gray-600 mb-8">Позвоните для обсуждения вашего проекта</p>
            </div>
            <div className="bg-bmp-blue-50 rounded-xl p-8 mb-8">
              <a href="tel:+79097005444" className="text-4xl lg:text-6xl font-bold text-bmp-navy hover:text-bmp-gold transition-colors">
                +7 909 700 54 44
              </a>
            </div>
            <Button 
              onClick={() => setShowPhoneModal(false)}
              className="bg-bmp-gold hover:bg-bmp-yellow-600 text-bmp-navy px-8 py-3 text-lg font-bold"
            >
              Закрыть
            </Button>
          </div>
        </div>
      )}
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-bmp-gold/30 z-50 transition-all duration-500 shadow-2xl hover:bg-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Icon name="Hammer" className="text-bmp-gold animate-pulse" size={40} />
              <div className="flex flex-col">
                <span className="font-bold text-2xl lg:text-3xl text-white leading-tight transition-all duration-300 hover:text-bmp-gold">Бюро Мебельных</span>
                <span className="font-bold text-2xl lg:text-3xl text-bmp-gold leading-tight -mt-1 animate-pulse">Проектов</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-bmp-gold transition-all duration-300 font-medium hover:scale-105 transform">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-bmp-gold transition-all duration-300 font-medium hover:scale-105 transform">Портфолио</button>
              <button onClick={() => scrollToSection('process')} className="text-white hover:text-bmp-gold transition-all duration-300 font-medium hover:scale-105 transform">Процесс</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-bmp-gold transition-all duration-300 font-medium hover:scale-105 transform">Отзывы</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-bmp-gold transition-all duration-300 font-medium hover:scale-105 transform">Контакты</button>
            </div>

            <div className="flex items-center space-x-4">
              <Button onClick={() => setShowPhoneModal(true)} className="hidden sm:flex bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-lg">
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать проект
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className="text-white hover:text-bmp-gold transition-colors duration-300" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white/10 backdrop-blur-md border-t border-bmp-gold/30 py-4 animate-slide-in-left">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('services')} className="text-left px-4 py-2 text-white hover:text-bmp-gold transition-all duration-300 hover:scale-105 transform">Услуги</button>
                <button onClick={() => scrollToSection('portfolio')} className="text-left px-4 py-2 text-white hover:text-bmp-gold transition-all duration-300 hover:scale-105 transform">Портфолио</button>
                <button onClick={() => scrollToSection('process')} className="text-left px-4 py-2 text-white hover:text-bmp-gold transition-all duration-300 hover:scale-105 transform">Процесс</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left px-4 py-2 text-white hover:text-bmp-gold transition-all duration-300 hover:scale-105 transform">Отзывы</button>
                <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-2 text-white hover:text-bmp-gold transition-all duration-300 hover:scale-105 transform">Контакты</button>
                <div className="px-4">
                  <Button onClick={() => setShowPhoneModal(true)} className="w-full bg-bmp-gold hover:bg-bmp-yellow-600 text-bmp-navy font-bold">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Заказать проект
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Крупный логотип */}
            <div className="mb-12">
              <img 
                src="https://cdn.poehali.dev/files/4d8e7fed-4ef2-4405-b813-8b620196e9b8.png" 
                alt="БМП - Бюро Мебельных Проектов" 
                className="w-72 h-72 lg:w-96 lg:h-96 mx-auto object-contain animate-[pulse_5s_ease-in-out_infinite] hover:scale-125 transition-transform duration-500"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl animate-fade-in">
              Профессиональное
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bmp-gold to-yellow-300 block animate-pulse">
                проектирование мебели
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed px-4 drop-shadow-lg font-medium backdrop-blur-sm bg-white/10 rounded-lg p-4 transition-all duration-500 hover:bg-white/20">
              Создаем детальные 3D модели и чертежи мебели из плитных материалов в программе Базис Мебельщик. 
              От идеи до готовой документации для производства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" onClick={() => setShowPhoneModal(true)} className="bg-bmp-gold hover:bg-yellow-500 text-bmp-navy px-8 py-3 text-lg hover:scale-110 transition-all duration-500 font-bold shadow-2xl animate-bounce">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')} className="border-bmp-gold text-white hover:bg-bmp-gold/20 px-8 py-3 text-lg hover:scale-105 transition-all duration-500 bg-white/10 backdrop-blur-sm shadow-2xl font-medium hover:text-bmp-gold">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть примеры
              </Button>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-20 px-4">
            {[
              { icon: "Zap", title: "Быстро", desc: "От 1 дня" },
              { icon: "Award", title: "Качественно", desc: "10+ лет опыта" },
              { icon: "Shield", title: "Надежно", desc: "Гарантия результата" }
            ].map((item, index) => (
              <Card key={index} className={`bg-white/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'animate-fade-in' : ''}`} style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-bmp-gold to-bmp-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-bmp-navy" size={28} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-bmp-navy mb-2">{item.title}</h3>
                  <p className="text-bmp-blue-700">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-bmp-navy mb-4">Наши услуги</h2>
            <p className="text-lg lg:text-xl text-bmp-gold max-w-2xl mx-auto">
              Полный цикл проектирования мебели от эскиза до готовых чертежей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${activeService === index ? 'ring-2 ring-bmp-gold shadow-2xl' : 'hover:shadow-xl'}`}
                onClick={() => setActiveService(index)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-bmp-gold to-bmp-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon as any} className="text-bmp-navy" size={28} />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl text-bmp-navy">{service.title}</CardTitle>
                  <CardDescription className="text-bmp-blue-700">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-bmp-blue-700">
                        <Icon name="Check" className="text-green-500 mr-2 flex-shrink-0" size={16} />
                        <span className="text-sm lg:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Портфолио проектов</h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
              Примеры наших работ в программе Базис Мебельщик
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolio.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-bmp-gold/90 hover:bg-bmp-gold text-bmp-navy font-bold">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-bmp-gold text-bmp-navy">
                    {project.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg lg:text-xl text-bmp-navy">{project.title}</CardTitle>
                  <CardDescription className="text-bmp-blue-700">
                    Материал: {project.material}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-bmp-blue-50 to-bmp-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-bmp-navy mb-4">Процесс работы</h2>
            <p className="text-lg lg:text-xl text-bmp-blue-700 max-w-2xl mx-auto">
              Пошаговый подход к созданию идеального проекта
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-bmp-gold to-bmp-yellow-600 hidden lg:block"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {process.map((step, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 w-full ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-bmp-gold to-bmp-yellow-600 rounded-full flex items-center justify-center text-bmp-navy font-bold text-lg mr-4 flex-shrink-0">
                            {step.step}
                          </div>
                          <h3 className="text-lg lg:text-xl font-bold text-bmp-navy">{step.title}</h3>
                        </div>
                        <p className="text-bmp-blue-700">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden lg:block w-6 h-6 bg-bmp-gold rounded-full border-4 border-white shadow-lg relative z-10 flex-shrink-0"></div>
                  <div className="hidden lg:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Отзывы клиентов</h2>
            <p className="text-lg lg:text-xl text-white max-w-2xl mx-auto">
              Что говорят о нашей работе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold text-bmp-navy">{testimonial.name}</p>
                      <p className="text-sm text-bmp-blue-700">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-bmp-blue-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bmp-navy to-bmp-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Начнем работу над проектом?</h2>
            <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center text-slate-300">
                  <Icon name="Phone" className="mr-4 text-bmp-gold flex-shrink-0" size={24} />
                  <span>+7 909 700 54 44</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Icon name="Mail" className="mr-4 text-bmp-gold flex-shrink-0" size={24} />
                  <span>BMP-Bazis@yandex.ru</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Icon name="MapPin" className="mr-4 text-bmp-gold flex-shrink-0" size={24} />
                  <span>г. Екатеринбург</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Icon name="Clock" className="mr-4 text-bmp-gold flex-shrink-0" size={24} />
                  <span>Ежедневно с 9:00 - 23:00</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bmp-navy text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Hammer" className="text-bmp-gold" size={24} />
                <span className="font-bold text-white">Бюро Мебельных Проектов</span>
              </div>
              <p className="text-sm">Профессиональное проектирование мебели в программе Базис Мебельщик</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li>3D Моделирование</li>
                <li>Чертежи и Деталировка</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Материалы</h4>
              <ul className="space-y-2 text-sm">
                <li>ЛДСП</li>
                <li>МДФ</li>
                <li>Фанера</li>
                <li>Массив дерева</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li>+7 909 700 54 44</li>
                <li>BMP-Bazis@yandex.ru</li>
                <li>г. Екатеринбург</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-bmp-blue-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Бюро Мебельных Проектов. Все права защищены.</p>
          </div>
        </div>
      </footer>
      
      <PortfolioModal 
        project={selectedProject}
        isOpen={showPortfolioModal}
        onClose={() => setShowPortfolioModal(false)}
      />
    </div>
  );
};

export default Index;