import React from 'react';
import { MapPin, Phone, Clock, Navigation, Mail } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';
import { Button } from './UI/Button';
import { Card } from './UI/Card';

export const ContactsMap: React.FC = () => {
  const hasAddress = Boolean(clinicConfig.address && clinicConfig.address.trim());

  return (
    <section id="contacts" className="py-16 md:py-24 bg-clinic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <span className="text-xs font-medium text-clinic-primary uppercase tracking-wider mb-2">
            Контакты
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-clinic-text tracking-tight mb-4">
            Как нас найти и связаться
          </h2>
          <p className="text-clinic-text-subtle text-base">
            Ждем вас на приём по предварительной записи. Выберите удобный способ связи.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address */}
            <Card className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[6px] bg-clinic-primary-light text-clinic-primary flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-medium text-clinic-text-subtle">Адрес клиники</span>
                <p className="text-base font-semibold text-clinic-text">
                  {hasAddress ? clinicConfig.address : clinicConfig.addressFallbackText}
                </p>
              </div>
            </Card>

            {/* Working Hours */}
            <Card className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[6px] bg-clinic-primary-light text-clinic-primary flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-medium text-clinic-text-subtle">Часы работы</span>
                <p className="text-base font-semibold text-clinic-text">
                  {clinicConfig.workingHours}
                </p>
              </div>
            </Card>

            {/* Phone */}
            <Card className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[6px] bg-clinic-primary-light text-clinic-primary flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-medium text-clinic-text-subtle">Телефон для записи</span>
                <p>
                  <a
                    href={`tel:${clinicConfig.phoneRaw}`}
                    className="text-base font-semibold text-clinic-text hover:text-clinic-primary transition-colors focus-ring rounded-[4px]"
                  >
                    {clinicConfig.phoneDisplay}
                  </a>
                </p>
              </div>
            </Card>

            {/* Email */}
            {clinicConfig.email && (
              <Card className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[6px] bg-clinic-primary-light text-clinic-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-medium text-clinic-text-subtle">Электронная почта</span>
                  <p>
                    <a
                      href={`mailto:${clinicConfig.email}`}
                      className="text-base font-medium text-clinic-text hover:text-clinic-primary transition-colors focus-ring rounded-[4px]"
                    >
                      {clinicConfig.email}
                    </a>
                  </p>
                </div>
              </Card>
            )}

            {/* Route Button */}
            {hasAddress && clinicConfig.mapRouteUrl && (
              <div className="pt-2">
                <a
                  href={clinicConfig.mapRouteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="secondary" size="lg" fullWidth className="gap-2">
                    <Navigation className="w-4 h-4 text-clinic-primary" aria-hidden="true" />
                    <span>Построить маршрут на карте</span>
                  </Button>
                </a>
              </div>
            )}

          </div>

          {/* Right Column: Interactive Embed Map */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[380px] sm:h-[450px] rounded-[6px] overflow-hidden border border-clinic-border bg-clinic-surface shadow-subtle">
              {hasAddress ? (
                <iframe
                  title={`Карта расположения стоматологической клиники по адресу ${clinicConfig.address}`}
                  src={clinicConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-100">
                  <MapPin className="w-10 h-10 text-clinic-text-subtle mb-3" />
                  <h3 className="text-base font-semibold text-clinic-text mb-1">
                    {clinicConfig.addressFallbackText}
                  </h3>
                  <p className="text-xs text-clinic-text-subtle max-w-sm">
                    Точные координаты и интерактивная карта будут отображены после указывания адреса в файле конфигурации.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
