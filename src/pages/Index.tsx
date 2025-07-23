import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      image: "/img/42488c26-4b30-4f4d-8a78-1e65ae42cae9.jpg"
    },
    {
      title: "Шкаф-купе",
      category: "Спальни",
      material: "МДФ + зеркало",
      image: "/img/9ca43309-41e1-4162-900b-7d1ba9b2f2bb.jpg"
    },
    {
      title: "Офисная мебель",
      category: "Офис",
      material: "ЛДСП + кромка ПВХ",
      image: "/img/ac939bb2-44fc-40cd-8eff-370e5d0a58e5.jpg"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-amber-200 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Icon name="Hammer" className="text-amber-600" size={40} />
              <div className="flex flex-col">
                <span className="font-bold text-2xl lg:text-3xl text-slate-800 leading-tight">Бюро Мебельных</span>
                <span className="font-bold text-2xl lg:text-3xl text-amber-600 leading-tight -mt-1">Проектов</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-amber-600 transition-colors duration-200 font-medium">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-slate-600 hover:text-amber-600 transition-colors duration-200 font-medium">Портфолио</button>
              <button onClick={() => scrollToSection('process')} className="text-slate-600 hover:text-amber-600 transition-colors duration-200 font-medium">Процесс</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-600 hover:text-amber-600 transition-colors duration-200 font-medium">Отзывы</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-amber-600 transition-colors duration-200 font-medium">Контакты</button>
            </div>

            <div className="flex items-center space-x-4">
              <Button className="hidden sm:flex bg-amber-600 hover:bg-amber-700 text-white">
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать проект
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className="text-slate-600" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-amber-200 py-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('services')} className="text-left px-4 py-2 text-slate-600 hover:text-amber-600 transition-colors duration-200">Услуги</button>
                <button onClick={() => scrollToSection('portfolio')} className="text-left px-4 py-2 text-slate-600 hover:text-amber-600 transition-colors duration-200">Портфолио</button>
                <button onClick={() => scrollToSection('process')} className="text-left px-4 py-2 text-slate-600 hover:text-amber-600 transition-colors duration-200">Процесс</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left px-4 py-2 text-slate-600 hover:text-amber-600 transition-colors duration-200">Отзывы</button>
                <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-2 text-slate-600 hover:text-amber-600 transition-colors duration-200">Контакты</button>
                <div className="px-4">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
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
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Профессиональное
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 block">
                проектирование мебели
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed px-4">
              Создаем детальные 3D модели и чертежи мебели из плитных материалов в программе Базис Мебельщик. 
              От идеи до готовой документации для производства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-300">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-3 text-lg hover:scale-105 transition-all duration-300">
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
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Наши услуги</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
              Полный цикл проектирования мебели от эскиза до готовых чертежей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${activeService === index ? 'ring-2 ring-amber-400 shadow-2xl' : 'hover:shadow-xl'}`}
                onClick={() => setActiveService(index)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl text-slate-800">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Портфолио проектов</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
              Примеры наших работ в программе Базис Мебельщик
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-amber-600 text-white">
                    {project.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg lg:text-xl text-slate-800">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    Материал: {project.material}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Процесс работы</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
              Пошаговый подход к созданию идеального проекта
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 to-amber-600 hidden lg:block"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {process.map((step, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 w-full ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                            {step.step}
                          </div>
                          <h3 className="text-lg lg:text-xl font-bold text-slate-800">{step.title}</h3>
                        </div>
                        <p className="text-slate-600">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden lg:block w-6 h-6 bg-amber-500 rounded-full border-4 border-white shadow-lg relative z-10 flex-shrink-0"></div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Отзывы клиентов</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
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
                      <p className="font-semibold text-slate-800">{testimonial.name}</p>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-slate-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
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
                  <Icon name="Phone" className="mr-4 text-amber-400 flex-shrink-0" size={24} />
                  <span>+7 (xxx) xxx-xx-xx</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Icon name="Mail" className="mr-4 text-amber-400 flex-shrink-0" size={24} />
                  <span>info@furniture-bureau.ru</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Icon name="MapPin" className="mr-4 text-amber-400 flex-shrink-0" size={24} />
                  <span>г. Москва, ул. Примерная, д. 123</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Icon name="Clock" className="mr-4 text-amber-400 flex-shrink-0" size={24} />
                  <span>Пн-Пт: 9:00 - 18:00</span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Hammer" className="text-amber-400" size={24} />
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
                <li>+7 (xxx) xxx-xx-xx</li>
                <li>info@furniture-bureau.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Бюро Мебельных Проектов. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;