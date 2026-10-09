import { BookingFormData, BookingResponse } from '../types';
import { clinicConfig } from '../config/clinicConfig';

/**
 * Service integration layer for submitting appointment booking requests.
 * 
 * Instructions for production connection:
 * 1. Set `VITE_IS_DEMO_MODE=false` in `.env` or set `isDemoMode: false` in `src/config/clinicConfig.ts`.
 * 2. Specify your backend API URL in `VITE_API_ENDPOINT` or replace `DEFAULT_PRODUCTION_API_ENDPOINT`.
 * 3. Ensure your server handles CORS, rate limiting, and input sanitization securely.
 */

const DEFAULT_PRODUCTION_API_ENDPOINT = '/api/v1/appointments';

export async function submitBookingForm(data: BookingFormData): Promise<BookingResponse> {
  // Determine demo mode status from env variable or central config
  const isDemoMode = import.meta.env.VITE_IS_DEMO_MODE !== undefined
    ? import.meta.env.VITE_IS_DEMO_MODE === 'true'
    : clinicConfig.isDemoMode;

  const apiEndpoint = import.meta.env.VITE_API_ENDPOINT || DEFAULT_PRODUCTION_API_ENDPOINT;

  // If running in demonstration mode
  if (isDemoMode) {
    // Simulate minor network latency for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Return explicit demonstration mode notification
    return {
      success: true,
      isDemoResponse: true,
      message: 'Демонстрационный режим: заявка не отправлена на сервер. Данные формы успешно прошли валидацию.',
      bookingId: `DEMO-${Date.now().toString().slice(-6)}`,
    };
  }

  // Real API production request code path
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        serviceId: data.serviceId,
        preferredDate: data.preferredDate || null,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Ошибка сервера (${response.status})`);
    }

    const result = await response.json();
    return {
      success: true,
      isDemoResponse: false,
      message: result.message || 'Ваша заявка успешно отправлена! Администратор свяжется с вами в ближайшее время.',
      bookingId: result.bookingId,
    };
  } catch (error) {
    return {
      success: false,
      isDemoResponse: false,
      message: error instanceof Error ? error.message : 'Произошла сетевая ошибка при отправке заявки. Пожалуйста, попробуйте позже или позвоните нам.',
    };
  }
}
