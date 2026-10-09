import React from 'react';
import { Info } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';
import { Card } from './UI/Card';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-clinic-surface border-y border-clinic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-medium text-clinic-primary uppercase tracking-wider mb-2">
            Процесс приёма
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-clinic-text tracking-tight mb-4">
             Как проходит запись и приём
          </h2>
          <p className="text-clinic-text-subtle text-base">
            Простой и прозрачный порядок действий от первого обращения до визита к врачу.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {clinicConfig.processSteps.map((step) => (
            <Card
              key={step.stepNumber}
              className="relative flex flex-col items-start bg-clinic-bg/40 border-clinic-border"
            >
              {/* Step Number Circle */}
              <div className="w-10 h-10 rounded-[6px] bg-clinic-primary text-white font-semibold text-base flex items-center justify-center mb-5 shadow-subtle">
                0{step.stepNumber}
              </div>

              <h3 className="text-lg font-medium text-clinic-text mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-clinic-text-muted leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Informational Notice */}
        <div className="mt-10 max-w-3xl mx-auto p-4 rounded-[6px] bg-clinic-primary-light border border-clinic-primary-border flex items-start gap-3">
          <Info className="w-5 h-5 text-clinic-primary shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-clinic-text leading-relaxed">
            <strong className="font-medium">Важная информация:</strong> Заполнение формы на сайте является предварительной заявкой и не подтверждает автоматическую бронь. Администратор клиники обязательно перезвонит вам, чтобы согласовать точную дату и время визита.
          </p>
        </div>

      </div>
    </section>
  );
};
