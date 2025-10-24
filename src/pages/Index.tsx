import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface TimelineEvent {
  year: number;
  category: 'childhood' | 'youth' | 'family' | 'career' | 'hobby' | 'achievement';
  title: string;
  description: string;
  icon: string;
}

const timelineData: TimelineEvent[] = [
  { year: 1975, category: 'childhood', title: 'Рождение', description: '07.11.1975 - Начало удивительного пути', icon: 'Baby' },
  { year: 1981, category: 'childhood', title: 'Первый класс', description: '01.09.1981 - Начало школьной жизни в МБОУ ООШ № 16 имени ветерана ВОВ П.И. Животовского', icon: 'School' },
  { year: 1990, category: 'youth', title: 'Юность', description: 'Ходили на речку Кубань, ловили сомов и сазанов, сачком ловили бабочек', icon: 'Sparkles' },
  { year: 1991, category: 'youth', title: 'Окончание школы', description: '25.05.1991 - Окончил 11 класс', icon: 'GraduationCap' },
  { year: 1991, category: 'family', title: 'Первая любовь', description: 'Приглянулась девочка Маша, с которой были знакомы с детства', icon: 'HeartHandshake' },
  { year: 1991, category: 'youth', title: 'СПТУ № 52', description: '01.09.1991-01.06.1995 - Прекрасные студенческие годы: ходили на дискотеки, пили газировку с автоматов, ездили на практики и участвовали в стройотрядах. Получил водительские права', icon: 'School' },
  { year: 1995, category: 'family', title: 'Свадьба', description: 'Создание семьи', icon: 'Heart' },
  { year: 1998, category: 'family', title: 'Рождение сына Андрюши', description: 'Новая роль - родитель', icon: 'Users' },
  { year: 2000, category: 'career', title: 'Карьерный рост', description: 'Важное продвижение по службе', icon: 'Briefcase' },
  { year: 2004, category: 'family', title: 'Рождение дочки Ириши', description: 'Семья стала ещё больше', icon: 'HeartHandshake' },
  { year: 2005, category: 'hobby', title: 'Новое хобби', description: 'Открытие страсти к творчеству', icon: 'Palette' },
  { year: 2010, category: 'achievement', title: 'Значимое достижение', description: 'Важная веха в жизни', icon: 'Award' },
  { year: 2015, category: 'family', title: 'Семейное событие', description: 'Рост семьи', icon: 'Home' },
  { year: 2020, category: 'career', title: 'Профессиональный успех', description: 'Признание заслуг', icon: 'Trophy' },
  { year: 2024, category: 'family', title: 'Свадьба сына', description: 'Семья растёт, новое поколение', icon: 'Rings' },
  { year: 2025, category: 'achievement', title: 'Юбилей - 50 лет!', description: 'Полувековой рубеж', icon: 'PartyPopper' },
];

const categories = {
  childhood: { label: 'Детство', color: 'bg-amber-100 text-amber-800' },
  youth: { label: 'Юность', color: 'bg-orange-100 text-orange-800' },
  family: { label: 'Семья', color: 'bg-rose-100 text-rose-800' },
  career: { label: 'Карьера', color: 'bg-purple-100 text-purple-800' },
  hobby: { label: 'Хобби', color: 'bg-teal-100 text-teal-800' },
  achievement: { label: 'Достижения', color: 'bg-yellow-100 text-yellow-800' },
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleEvents, setVisibleEvents] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleEvents(timelineData.map((_, index) => index));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredEvents = selectedCategory
    ? timelineData.filter((event) => event.category === selectedCategory)
    : timelineData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F0] via-[#FFF5E6] to-[#FFE4B5]">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A574' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative">
        <header className="text-center py-16 px-4 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="text-6xl mb-4">🎉</div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-4 tracking-tight">
            50 лет
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground italic">
            От детства до настоящего времени
          </p>
          <div className="mt-8 flex justify-center gap-2 text-4xl">
            <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>✨</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>🎂</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>🎈</span>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            <Badge
              className={`cursor-pointer transition-all text-sm px-4 py-2 ${
                !selectedCategory ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-muted'
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              Все события
            </Badge>
            {Object.entries(categories).map(([key, { label, color }]) => (
              <Badge
                key={key}
                className={`cursor-pointer transition-all text-sm px-4 py-2 ${
                  selectedCategory === key ? color : 'bg-card hover:bg-muted'
                }`}
                onClick={() => setSelectedCategory(key)}
              >
                {label}
              </Badge>
            ))}
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/30 h-full hidden md:block" />

            <div className="space-y-12">
              {filteredEvents.map((event, index) => {
                const isVisible = visibleEvents.includes(timelineData.indexOf(event));
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={`${event.year}-${event.title}`}
                    className={`relative ${isVisible ? (isEven ? 'animate-slide-in-left' : 'animate-slide-in-right') : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        <Card className="p-6 bg-card/90 backdrop-blur border-2 border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                          <div className="flex items-start gap-4 md:gap-0">
                            <div className={`flex-shrink-0 md:hidden`}>
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Icon name={event.icon} className="text-primary" size={24} />
                              </div>
                            </div>
                            <div className="flex-1">
                              <Badge className={`mb-3 ${categories[event.category].color}`}>
                                {categories[event.category].label}
                              </Badge>
                              <h3 className="text-2xl font-bold mb-2 text-foreground">
                                {event.title}
                              </h3>
                              <p className="text-muted-foreground mb-2">{event.description}</p>
                            </div>
                          </div>
                        </Card>
                      </div>

                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center font-bold shadow-lg border-4 border-background">
                          <span className="text-xs opacity-80">год</span>
                          <span className="text-xl">{event.year}</span>
                        </div>
                        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/10 -z-10" />
                      </div>

                      <div className={`hidden md:flex w-5/12 ${isEven ? 'justify-start' : 'justify-end'}`}>
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon name={event.icon} className="text-primary" size={32} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20 text-center">
            <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
              <Icon name="Cake" className="mx-auto mb-4 text-primary" size={48} />
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                С юбилеем!
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Пусть каждый новый день приносит радость, а впереди ждут только яркие события и счастливые моменты!
              </p>
              <div className="mt-6 flex justify-center gap-3 text-3xl">
                🎊 🎁 🌟 💝 🎉
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;