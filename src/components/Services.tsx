import React from 'react';
import { ChevronRight } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';
import { Card } from './UI/Card';
import { Button } from './UI/Button';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const handleBookingClick = (serviceId: string) => {
    onSelectService(serviceId);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-clinic-surface border-y border-clinic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <span className="text-xs font-medium text-clinic-primary uppercase tracking-wider mb-2">
            Услуги клиники
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-clinic-text tracking-tight mb-4">
            Стоматологическая помощь для сохранения здоровья зубов
          </h2>
          <p className="text-clinic-text-subtle text-base">
            Оказываем спектр услуг от профилактического осмотра до сложного эстетического и хирургического восстановления.
          </p>
        </div>

        {/* Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicConfig.services.map((service) => (
            <Card
              key={service.id}
              hoverable
              className="flex flex-col justify-between h-full bg-clinic-bg/50 border-clinic-border"
            >
              <div>
                {/* Category & Duration Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block px-2.5 py-1 text-xs font-medium text-clinic-primary bg-clinic-primary-light rounded-[6px] border border-clinic-primary-border">
                    {service.category}
                  </span>
                  {service.estimatedDuration && (
                    <span className="text-xs text-clinic-text-subtle">
                      {service.estimatedDuration}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-medium text-clinic-text mb-2.5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-clinic-text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Card Footer: Price & CTA Action */}
              <div className="pt-4 border-t border-clinic-border/80 flex items-center justify-between gap-4">
                <div>
                  {service.price ? (
                    <div>
                      <div className="text-base font-semibold text-clinic-text">
                        {service.price}
                      </div>
                      {service.isPriceEstimated && (
                        <div className="text-[11px] text-clinic-text-subtle">
                          * Окончательная стоимость после осмотра
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-xs text-clinic-text-subtle">
                      Уточняйте у администратора
                    </div>
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBookingClick(service.id)}
                  className="group shrink-0"
                  aria-label={`Записаться на услугу: ${service.title}`}
                >
                  <span>Записаться</span>
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
