import React from 'react';
import { Calendar, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';
import { Button } from './UI/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-28 overflow-hidden bg-clinic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8">
            
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-clinic-primary-light border border-clinic-primary-border text-clinic-primary text-xs sm:text-sm font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{clinicConfig.tagline}</span>
            </div>

            {/* H1 Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-clinic-text leading-[1.15] tracking-tight">
              Забота о здоровье вашей улыбки и комфорте на каждом этапе
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-clinic-text-muted leading-relaxed max-w-2xl font-normal">
              {clinicConfig.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a href="#booking" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                  <span>Записаться на приём</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </a>

              <a href="#services" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Посмотреть услуги
                </Button>
              </a>
            </div>

            {/* Clinic Info Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 w-full border-t border-clinic-border">
              <div className="flex items-center gap-3 p-3.5 rounded-[6px] bg-clinic-surface border border-clinic-border">
                <div className="w-9 h-9 rounded-[6px] bg-clinic-primary-light text-clinic-primary flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-clinic-text-subtle font-medium">Режим работы</span>
                  <span className="text-sm font-medium text-clinic-text">{clinicConfig.workingHours}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-[6px] bg-clinic-surface border border-clinic-border">
                <div className="w-9 h-9 rounded-[6px] bg-clinic-primary-light text-clinic-primary flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-clinic-text-subtle font-medium">Организация приёма</span>
                  <span className="text-sm font-medium text-clinic-text">По предварительной записи</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Quality Modern Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[6px] overflow-hidden border border-clinic-border shadow-subtle bg-clinic-surface">
              <img
                src={clinicConfig.heroImage.url}
                alt={clinicConfig.heroImage.alt}
                width={clinicConfig.heroImage.width}
                height={clinicConfig.heroImage.height}
                loading="eager"
                decoding="async"
                className="w-full h-[360px] sm:h-[450px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[6px]" />
            </div>

            {/* Context Floating Note */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-clinic-surface p-4 rounded-[6px] border border-clinic-border shadow-subtle-lg max-w-[260px] hidden sm:block">
              <div className="text-xs text-clinic-text-subtle font-medium mb-1">Оборудование и стандарт</div>
              <div className="text-xs font-medium text-clinic-text leading-snug">
                Современный кабинет и строгое соблюдение стерильности.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
