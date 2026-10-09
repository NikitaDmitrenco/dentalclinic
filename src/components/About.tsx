import React from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-clinic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clinic Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-[6px] overflow-hidden border border-clinic-border bg-clinic-surface shadow-subtle">
              <img
                src={clinicConfig.aboutImage.url}
                alt={clinicConfig.aboutImage.alt}
                width={clinicConfig.aboutImage.width}
                height={clinicConfig.aboutImage.height}
                loading="lazy"
                decoding="async"
                className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover"
              />
            </div>
          </div>

          {/* Right Column: Approach & Principles Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-xs font-medium text-clinic-primary uppercase tracking-wider mb-2 block">
                О нашей клинике
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-clinic-text tracking-tight mb-4">
                Принципы приема и забота о пациентах
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-base text-clinic-text-muted leading-relaxed">
              {clinicConfig.aboutText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Key Standards List */}
            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3 text-sm text-clinic-text">
                <CheckCircle2 className="w-5 h-5 text-clinic-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>Многоступенчатая стерилизация инструментов и дезинфекция помещений.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-clinic-text">
                <CheckCircle2 className="w-5 h-5 text-clinic-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>Подробная консультация с разъяснением всех этапных расходов до начала лечения.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-clinic-text">
                <CheckCircle2 className="w-5 h-5 text-clinic-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>Приём строго по времени без длительного ожидания в очереди.</span>
              </div>
            </div>

            {/* Demo Notice Marker */}
            {clinicConfig.isDemoMode && (
              <div className="mt-6 p-3.5 rounded-[6px] bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2.5">
                <ShieldAlert className="w-4 h-4 shrink-0 text-amber-700" aria-hidden="true" />
                <span>
                  Текстовое описание содержит нейтральную демонстрационную информацию. Перед запуском проекта данные подлежат согласованию с руководством клиники.
                </span>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
