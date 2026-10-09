import React from 'react';
import { Stethoscope, Phone, MapPin, Clock } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';

interface FooterProps {
  onOpenPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-clinic-surface border-t border-clinic-border pt-12 pb-8 text-clinic-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-clinic-border">
          
          {/* Col 1: Clinic Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-[6px] bg-clinic-primary-light flex items-center justify-center text-clinic-primary border border-clinic-primary-border">
                <Stethoscope className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-semibold text-lg text-clinic-text">
                {clinicConfig.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-clinic-text-muted leading-relaxed max-w-sm">
              {clinicConfig.description}
            </p>

            <div className="text-xs text-clinic-text-subtle pt-1">
              Лицензия на осуществление медицинской деятельности № Л041-01137-77/00368291 (Демонстрационная запись).
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-clinic-text">
              Навигация
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#services" className="text-clinic-text-muted hover:text-clinic-primary transition-colors focus-ring rounded-[4px]">
                  Услуги и цены
                </a>
              </li>
              <li>
                <a href="#about" className="text-clinic-text-muted hover:text-clinic-primary transition-colors focus-ring rounded-[4px]">
                  О клинике
                </a>
              </li>
              <li>
                <a href="#process" className="text-clinic-text-muted hover:text-clinic-primary transition-colors focus-ring rounded-[4px]">
                  Порядок приёма
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-clinic-text-muted hover:text-clinic-primary transition-colors focus-ring rounded-[4px]">
                  Отзывы пациентов
                </a>
              </li>
              <li>
                <a href="#booking" className="text-clinic-text-muted hover:text-clinic-primary transition-colors focus-ring rounded-[4px]">
                  Запись на приём
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-clinic-text-muted hover:text-clinic-primary transition-colors focus-ring rounded-[4px]">
                  Контакты и карта
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-clinic-text">
              Контакты
            </span>
            <div className="space-y-2.5 text-xs sm:text-sm text-clinic-text-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-clinic-primary shrink-0 mt-0.5" />
                <span>{clinicConfig.address || clinicConfig.addressFallbackText}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-clinic-primary shrink-0" />
                <a href={`tel:${clinicConfig.phoneRaw}`} className="hover:text-clinic-primary font-medium focus-ring rounded-[4px]">
                  {clinicConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-clinic-primary shrink-0" />
                <span>{clinicConfig.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-clinic-text-subtle">
          <div>
            © {currentYear} {clinicConfig.name}. Все права защищены.
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="hover:text-clinic-primary transition-colors underline focus-ring rounded-[4px]"
            >
              Политика конфиденциальности
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
