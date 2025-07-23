import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    setTimeout(() => {
      console.log('Данные формы:', formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Сброс формы через 3 секунды
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', description: '' });
      }, 3000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <Card className="bg-white/10 backdrop-blur-sm border-0">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Check" className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Заявка отправлена!</h3>
          <p className="text-slate-300 mb-4">
            Спасибо за обращение! Мы свяжемся с вами в ближайшее время.
          </p>
          <p className="text-sm text-slate-400">
            Следите за обновлениями в нашем{' '}
            <a 
              href="https://t.me/+QgiLIa1gFRY4Y2Iy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              Telegram-сообществе
            </a>
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-0">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Быстрая консультация</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Имя</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200"
              placeholder="Ваше имя" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Телефон</label>
            <input 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200"
              placeholder="+7 (xxx) xxx-xx-xx" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Описание проекта</label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 h-24 resize-none transition-all duration-200"
              placeholder="Расскажите о вашем проекте..."
            />
          </div>
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                Отправляем...
              </>
            ) : (
              <>
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;