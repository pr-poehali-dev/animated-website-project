import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Logo from '@/components/Logo';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

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
      rating: 5
    },
    {
      name: "Михаил Сидоров",
      role: "Дизайнер интерьеров",
      text: "Быстро и качественно выполнили 3D модели для презентации клиенту. Рекомендую!",
      rating: 5
    },
    {
      name: "Елена Козлова",
      role: "Частный заказчик",
      text: "Помогли спроектировать кухню мечты. Все пожелания учтены, результат превзошел ожидания.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bmp-blue-50 via-white to-bmp-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-bmp-yellow-200 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-bmp-navy hover:text-bmp-gold transition-colors duration-200">Услуги</a>
              <a href="#portfolio" className="text-bmp-navy hover:text-bmp-gold transition-colors duration-200">Портфолио</a>
              <a href="#process" className="text-bmp-navy hover:text-bmp-gold transition-colors duration-200">Процесс</a>
              <a href="#testimonials" className="text-bmp-navy hover:text-bmp-gold transition-colors duration-200">Отзывы</a>
              <a href="#contact" className="text-bmp-navy hover:text-bmp-gold transition-colors duration-200">Контакты</a>
            </div>
            <Button className="bg-bmp-gold hover:bg-bmp-yellow-600 text-bmp-navy font-semibold">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать проект
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-bmp-navy mb-6 leading-tight">
              Профессиональное
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bmp-gold to-bmp-yellow-600 block">
                проектирование мебели
              </span>
            </h1>
            <p className="text-xl text-bmp-navy/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              Создаем детальные 3D модели и чертежи мебели из плитных материалов в программе Базис Мебельщик. 
              От идеи до готовой документации для производства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bmp-gold hover:bg-bmp-yellow-600 text-bmp-navy font-semibold px-8 py-3 text-lg hover:scale-105 transition-all duration-300">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="border-bmp-gold text-bmp-navy hover:bg-bmp-yellow-50 px-8 py-3 text-lg hover:scale-105 transition-all duration-300">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть примеры
              </Button>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: "Zap", title: "Быстро", desc: "От 1 дня" },
              { icon: "Award", title: "Качественно", desc: "10+ лет опыта" },
              { icon: "Shield", title: "Надежно", desc: "Гарантия результата" }
            ].map((item, index) => (
              <Card key={index} className={`bg-white/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'animate-fade-in' : ''}`} style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-bmp-gold to-bmp-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-bmp-navy" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-bmp-navy mb-2">{item.title}</h3>
                  <p className="text-bmp-navy/70">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bmp-navy mb-4">Наши услуги</h2>
            <p className="text-xl text-bmp-navy/70 max-w-2xl mx-auto">
              Полный цикл проектирования мебели от эскиза до готовых чертежей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${activeService === index ? 'ring-2 ring-bmp-gold shadow-2xl' : 'hover:shadow-xl'}`}
                onClick={() => setActiveService(index)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-bmp-gold to-bmp-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon as any} className="text-bmp-navy" size={32} />
                  </div>
                  <CardTitle className="text-2xl text-bmp-navy">{service.title}</CardTitle>
                  <CardDescription className="text-bmp-navy/70">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-bmp-navy/80">
                        <Icon name="Check" className="text-bmp-gold mr-2" size={16} />
                        {feature}
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
            <h2 className="text-4xl font-bold text-bmp-navy mb-4">Портфолио проектов</h2>
            <p className="text-xl text-bmp-navy/70 max-w-2xl mx-auto">
              Примеры наших работ в программе Базис Мебельщик
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-bmp-gold text-bmp-navy font-semibold">
                    {project.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-bmp-navy">{project.title}</CardTitle>
                  <CardDescription className="text-bmp-navy/70">
                    Материал: {project.material}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-bmp-yellow-50 to-bmp-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bmp-navy mb-4">Процесс работы</h2>
            <p className="text-xl text-bmp-navy/70 max-w-2xl mx-auto">
              Пошаговый подход к созданию идеального проекта
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-bmp-gold to-bmp-yellow-600 hidden md:block"></div>
            
            {process.map((step, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-bmp-gold to-bmp-yellow-600 rounded-full flex items-center justify-center text-bmp-navy font-bold text-lg mr-4">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-bold text-bmp-navy">{step.title}</h3>
                      </div>
                      <p className="text-bmp-navy/70">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block w-6 h-6 bg-bmp-gold rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bmp-navy mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-bmp-navy/70 max-w-2xl mx-auto">
              Что говорят о нашей работе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-bmp-navy/80 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-bmp-navy">{testimonial.name}</p>
                    <p className="text-sm text-bmp-navy/60">{testimonial.role}</p>
                  </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Начнем работу над проектом?</h2>
            <p className="text-xl text-bmp-gold/80 max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-bmp-gold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center text-bmp-gold/80">
                  <Icon name="Phone" className="mr-4 text-bmp-gold" size={24} />
                  <span>+7 (909) 700-54-44</span>
                </div>
                <div className="flex items-center text-bmp-gold/80">
                  <Icon name="Mail" className="mr-4 text-bmp-gold" size={24} />
                  <span>BMP-Bazis@yandex.ru</span>
                </div>
                <div className="flex items-center text-bmp-gold/80">
                  <Icon name="MapPin" className="mr-4 text-bmp-gold" size={24} />
                  <span>г. Екатеринбург</span>
                </div>
                <div className="flex items-center text-bmp-gold/80">
                  <Icon name="Clock" className="mr-4 text-bmp-gold" size={24} />
                  <span>Пн-Пт: 9:00 - 18:00</span>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-bmp-gold mb-6">Быстрая консультация</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-bmp-gold/90 mb-2">Имя</label>
                    <input className="w-full px-4 py-2 bg-white/20 border border-bmp-gold/30 rounded-lg text-bmp-gold placeholder-bmp-gold/60 focus:outline-none focus:ring-2 focus:ring-bmp-gold" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bmp-gold/90 mb-2">Телефон</label>
                    <input className="w-full px-4 py-2 bg-white/20 border border-bmp-gold/30 rounded-lg text-bmp-gold placeholder-bmp-gold/60 focus:outline-none focus:ring-2 focus:ring-bmp-gold" placeholder="+7 (xxx) xxx-xx-xx" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bmp-gold/90 mb-2">Описание проекта</label>
                    <textarea className="w-full px-4 py-2 bg-white/20 border border-bmp-gold/30 rounded-lg text-bmp-gold placeholder-bmp-gold/60 focus:outline-none focus:ring-2 focus:ring-bmp-gold h-24 resize-none" placeholder="Расскажите о вашем проекте..."></textarea>
                  </div>
                  <Button className="w-full bg-bmp-gold hover:bg-bmp-yellow-600 text-bmp-navy font-semibold py-3">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bmp-blue-900 text-bmp-gold/70 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo size="sm" className="mb-4" />
              <p className="text-sm">Профессиональное проектирование мебели в программе Базис Мебельщик</p>
            </div>
            <div>
              <h4 className="font-semibold text-bmp-gold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li>3D Моделирование</li>
                <li>Чертежи и Деталировка</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-bmp-gold mb-4">Материалы</h4>
              <ul className="space-y-2 text-sm">
                <li>ЛДСП</li>
                <li>МДФ</li>
                <li>Фанера</li>
                <li>Массив дерева</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-bmp-gold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li>+7 (xxx) xxx-xx-xx</li>
                <li>info@furniture-bureau.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-bmp-blue-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Бюро Мебельных Проектов. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;