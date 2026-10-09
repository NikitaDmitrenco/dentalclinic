import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Stethoscope } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';
import { Button } from './UI/Button';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Услуги', href: '#services' },
    { label: 'О клинике', href: '#about' },
    { label: 'Этапы', href: '#process' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-clinic-surface/95 backdrop-blur-sm border-b border-clinic-border transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Clinic Brand Logo & Title */}
        <a href="#" className="flex items-center gap-2.5 focus-ring rounded-[6px] p-1 -ml-1 text-clinic-text group">
          <div className="w-10 h-10 rounded-[6px] bg-clinic-primary-light flex items-center justify-center text-clinic-primary border border-clinic-primary-border group-hover:bg-clinic-primary group-hover:text-white transition-colors">
            <Stethoscope className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg leading-tight tracking-tight text-clinic-text">
              {clinicConfig.name}
            </span>
            <span className="text-xs text-clinic-text-subtle hidden sm:inline">
              Стоматология
            </span>
          </div>
        </a>

        {/* Desktop Anchor Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-clinic-text-muted hover:text-clinic-primary transition-colors focus-ring rounded-[6px] px-2 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Header Right Actions (Phone & CTA Button) */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${clinicConfig.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-medium text-clinic-text hover:text-clinic-primary transition-colors focus-ring rounded-[6px] px-2 py-1"
            aria-label={`Позвонить в клинику по номеру ${clinicConfig.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 text-clinic-primary" aria-hidden="true" />
            <span>{clinicConfig.phoneDisplay}</span>
          </a>

          <a href="#booking">
            <Button variant="primary" size="md">
              Записаться на приём
            </Button>
          </a>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={`tel:${clinicConfig.phoneRaw}`}
            className="p-2 text-clinic-text hover:text-clinic-primary sm:hidden focus-ring rounded-[6px]"
            aria-label="Позвонить"
          >
            <Phone className="w-5 h-5 text-clinic-primary" />
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-[6px] text-clinic-text hover:bg-clinic-surface-alt border border-clinic-border focus-ring"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-20 z-50 bg-clinic-bg/95 backdrop-blur-md border-t border-clinic-border lg:hidden flex flex-col justify-between p-6 overflow-y-auto"
        >
          <nav className="flex flex-col gap-4" aria-label="Мобильное меню">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-lg font-medium text-clinic-text hover:text-clinic-primary py-2.5 border-b border-clinic-border/60 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 mt-8 pt-4 border-t border-clinic-border">
            <a
              href={`tel:${clinicConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2.5 text-base font-semibold text-clinic-text py-3 rounded-[6px] bg-clinic-surface border border-clinic-border"
            >
              <Phone className="w-5 h-5 text-clinic-primary" />
              <span>{clinicConfig.phoneDisplay}</span>
            </a>

            <a href="#booking" onClick={handleNavClick} className="w-full">
              <Button variant="primary" size="lg" fullWidth>
                Записаться на приём
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
