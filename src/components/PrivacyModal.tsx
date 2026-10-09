import React, { useEffect } from 'react';
import { X, ShieldAlert } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';
import { Button } from './UI/Button';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      {/* Backdrop click listener */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-clinic-surface border border-clinic-border rounded-[6px] shadow-subtle-lg flex flex-col z-10">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-clinic-border flex items-center justify-between">
          <h2 id="privacy-modal-title" className="text-lg font-semibold text-clinic-text">
            Политика конфиденциальности
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-clinic-text-subtle hover:text-clinic-text rounded-[6px] focus-ring"
            aria-label="Закрыть модальное окно"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-clinic-text-muted leading-relaxed">
          
          {/* Note Notice */}
          <div className="p-3.5 rounded-[6px] bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block mb-0.5">Обратите внимание:</strong>
              Настоящий текст является стандартным шаблоном политики конфиденциальности. Перед ведением реального приёма и запуском сайта в продакшен данный документ должен быть проверен и укомплектован реквизитами юриста клиники.
            </div>
          </div>

          <h3 className="font-semibold text-clinic-text text-sm sm:text-base pt-2">
            1. Общие положения
          </h3>
          <p>
            Настоящая политика конфиденциальности определяет порядок обработки и защиты персональной информации пользователей сайта клиники «{clinicConfig.name}».
          </p>

          <h3 className="font-semibold text-clinic-text text-sm sm:text-base pt-2">
            2. Собираемые данные
          </h3>
          <p>
            При отправке заявки на приём клиника может запрашивать следующие данные: имя пациента, контактный номер телефона, интересующую услугу и желаемую дату визита.
          </p>

          <h3 className="font-semibold text-clinic-text text-sm sm:text-base pt-2">
            3. Цели обработки персональных данных
          </h3>
          <p>
            Персональные данные используются исключительно для связи администратора клиники с пациентом с целью уточнения деталей записи на консультацию и согласования времени приёма.
          </p>

          <h3 className="font-semibold text-clinic-text text-sm sm:text-base pt-2">
            4. Защита информации
          </h3>
          <p>
            Клиника предпринимает все необходимые технические и организационные меры для защиты персональных данных пользователей от несанкционированного или случайного доступа. Данные не передаются третьим лицам.
          </p>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-clinic-border flex justify-end">
          <Button variant="primary" size="md" onClick={onClose}>
            Понятно
          </Button>
        </div>

      </div>
    </div>
  );
};
