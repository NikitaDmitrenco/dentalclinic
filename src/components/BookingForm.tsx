import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';
import { BookingFormData, BookingResponse } from '../types';
import { submitBookingForm } from '../services/bookingApi';
import { Button } from './UI/Button';

interface BookingFormProps {
  selectedServiceId: string;
  onOpenPrivacyModal: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedServiceId,
  onOpenPrivacyModal,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    serviceId: 'consultation',
    preferredDate: '',
    agreeToPrivacy: false,
  });

  // Update selected service if parent changes it (e.g. user clicked "Записаться" on a service card)
  useEffect(() => {
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResponse, setSubmissionResponse] = useState<BookingResponse | null>(null);

  // Minimum allowed date for preferredDate is today (YYYY-MM-DD)
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, укажите ваше имя';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать не менее 2 символов';
    }

    // Validate Phone (flexible format: digits, spaces, +, -, (), at least 7 numbers)
    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, укажите контактный телефон';
    } else if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      newErrors.phone = 'Укажите корректный номер телефона (не менее 7 цифр)';
    }

    // Validate Preferred Date (cannot be in the past)
    if (formData.preferredDate && formData.preferredDate < todayStr) {
      newErrors.preferredDate = 'Нельзя выбрать прошедшую дату';
    }

    // Validate Privacy Agreement
    if (!formData.agreeToPrivacy) {
      newErrors.agreeToPrivacy = 'Необходимо согласие на обработку персональных данных';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error for this field on typing
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionResponse(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitBookingForm(formData);
      setSubmissionResponse(response);

      if (response.success) {
        // Clear form on success
        setFormData({
          name: '',
          phone: '',
          serviceId: 'consultation',
          preferredDate: '',
          agreeToPrivacy: false,
        });
        setErrors({});
      }
    } catch {
      setSubmissionResponse({
        success: false,
        message: 'Произошла непредвиденная ошибка. Пожалуйста, попробуйте еще раз.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-clinic-surface border-y border-clinic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-xs font-medium text-clinic-primary uppercase tracking-wider mb-2 block">
              Запись на приём
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-clinic-text tracking-tight mb-3">
              Оставить заявку на консультацию
            </h2>
            <p className="text-sm sm:text-base text-clinic-text-subtle">
              Заполните краткую форму, и мы свяжемся с вами для подбора удобного времени.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-clinic-bg p-6 sm:p-8 rounded-[6px] border border-clinic-border shadow-subtle">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Field 1: Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-clinic-text mb-2">
                  Ваше имя <span className="text-clinic-error">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full h-11 px-3.5 bg-clinic-surface text-clinic-text rounded-[6px] border text-sm transition-colors focus-ring ${
                    errors.name ? 'border-clinic-error bg-clinic-error-bg/30' : 'border-clinic-border hover:border-clinic-border-hover'
                  }`}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-clinic-error flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Field 2: Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-clinic-text mb-2">
                  Телефон <span className="text-clinic-error">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (999) 000-00-00"
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  className={`w-full h-11 px-3.5 bg-clinic-surface text-clinic-text rounded-[6px] border text-sm transition-colors focus-ring ${
                    errors.phone ? 'border-clinic-error bg-clinic-error-bg/30' : 'border-clinic-border hover:border-clinic-border-hover'
                  }`}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-xs text-clinic-error flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Field 3: Service Selection Dropdown */}
              <div>
                <label htmlFor="serviceId" className="block text-sm font-medium text-clinic-text mb-2">
                  Интересующая услуга
                </label>
                <select
                  id="serviceId"
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleChange}
                  className="w-full h-11 px-3.5 bg-clinic-surface text-clinic-text rounded-[6px] border border-clinic-border hover:border-clinic-border-hover text-sm focus-ring"
                >
                  <option value="consultation">Не знаю, нужна консультация</option>
                  {clinicConfig.services.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title} {srv.price ? `(${srv.price})` : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 4: Preferred Date (Optional) */}
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-clinic-text mb-2">
                  Предпочтительная дата визита <span className="text-clinic-text-subtle font-normal">(необязательно)</span>
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  min={todayStr}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  aria-invalid={!!errors.preferredDate}
                  aria-describedby={errors.preferredDate ? 'date-error' : undefined}
                  className={`w-full h-11 px-3.5 bg-clinic-surface text-clinic-text rounded-[6px] border text-sm transition-colors focus-ring ${
                    errors.preferredDate ? 'border-clinic-error bg-clinic-error-bg/30' : 'border-clinic-border hover:border-clinic-border-hover'
                  }`}
                />
                {errors.preferredDate && (
                  <p id="date-error" className="mt-1.5 text-xs text-clinic-error flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.preferredDate}</span>
                  </p>
                )}
              </div>

              {/* Field 5: Privacy Consent Checkbox */}
              <div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreeToPrivacy"
                    name="agreeToPrivacy"
                    checked={formData.agreeToPrivacy}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.agreeToPrivacy}
                    className="mt-1 w-4 h-4 text-clinic-primary rounded-[4px] border-clinic-border focus-ring cursor-pointer"
                  />
                  <label htmlFor="agreeToPrivacy" className="text-xs text-clinic-text-muted leading-relaxed cursor-pointer select-none">
                    Я соглашаюсь на обработку моих персональных данных в соответствии с{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacyModal}
                      className="text-clinic-primary underline hover:text-clinic-primary-hover font-medium focus-ring rounded-[4px]"
                    >
                      Политикой конфиденциальности
                    </button>
                    . <span className="text-clinic-error">*</span>
                  </label>
                </div>
                {errors.agreeToPrivacy && (
                  <p className="mt-1.5 text-xs text-clinic-error flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.agreeToPrivacy}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Отправка заявки...</span>
                    </span>
                  ) : (
                    'Оставить заявку'
                  )}
                </Button>
              </div>

              {/* Submission Result Notification Banner */}
              {submissionResponse && (
                <div
                  role="alert"
                  className={`p-4 rounded-[6px] text-xs sm:text-sm border flex items-start gap-3 ${
                    submissionResponse.success
                      ? 'bg-clinic-success-bg border-emerald-300 text-emerald-900'
                      : 'bg-clinic-error-bg border-red-300 text-red-900'
                  }`}
                >
                  {submissionResponse.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <p className="font-semibold">{submissionResponse.message}</p>
                    {submissionResponse.isDemoResponse && (
                      <p className="text-xs text-emerald-700">
                        * Данный сайт работает в демонстрационном режиме. В реальной версии заявка передается в CRM клиники.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Under-form explanatory note */}
              <div className="pt-2 text-center">
                <p className="text-xs text-clinic-text-subtle flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-clinic-primary shrink-0" />
                  <span>Администратор свяжется с вами, чтобы уточнить детали и согласовать время приёма.</span>
                </p>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
