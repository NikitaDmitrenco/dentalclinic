import React from 'react';
import { MessageSquareQuote, Tag } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';
import { Card } from './UI/Card';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-clinic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <span className="text-xs font-medium text-clinic-primary uppercase tracking-wider mb-2">
            Отзывы пациентов
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-clinic-text tracking-tight mb-4">
            Мнения наших пациентов о лечении
          </h2>
          <p className="text-clinic-text-subtle text-base">
            Ниже приведены примерочные карточки отзывов для ознакомления с форматом размещения.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clinicConfig.reviews.map((review) => (
            <Card
              key={review.id}
              className="flex flex-col justify-between h-full bg-clinic-surface border-clinic-border"
            >
              <div>
                {/* Demo Badge */}
                {review.isDemo && (
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[6px] bg-slate-100 border border-slate-200 text-clinic-text-subtle text-[11px] font-medium mb-4">
                    <Tag className="w-3 h-3" aria-hidden="true" />
                    <span>{review.source}</span>
                  </div>
                )}

                {/* Quote Icon */}
                <MessageSquareQuote className="w-7 h-7 text-clinic-primary/40 mb-3" aria-hidden="true" />

                {/* Review Text */}
                <p className="text-sm text-clinic-text leading-relaxed mb-6 font-normal">
                  «{review.text}»
                </p>
              </div>

              {/* Author Info Footer */}
              <div className="pt-4 border-t border-clinic-border flex items-center justify-between text-xs">
                <span className="font-semibold text-clinic-text">
                  {review.authorName}
                </span>
                <span className="text-clinic-text-subtle">
                  {review.date}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Notice Disclaimer */}
        <div className="mt-8 text-center">
          <span className="text-xs text-clinic-text-subtle">
            Примечание: карточки представлены исключительно для демонстрации структуры блока. Реальные отзывы с платформ будут подключены после интеграции.
          </span>
        </div>

      </div>
    </section>
  );
};
