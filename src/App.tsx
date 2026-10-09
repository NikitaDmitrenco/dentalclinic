import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
import { Reviews } from './components/Reviews';
import { BookingForm } from './components/BookingForm';
import { ContactsMap } from './components/ContactsMap';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

export function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('consultation');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState<boolean>(false);

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-clinic-bg text-clinic-text font-sans antialiased">
      {/* Header with Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Services onSelectService={handleSelectService} />
        <About />
        <Process />
        <Reviews />
        <BookingForm
          selectedServiceId={selectedServiceId}
          onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
        />
        <ContactsMap />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />

      {/* Privacy Policy Modal Dialog */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}

export default App;
