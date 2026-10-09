export interface ClinicService {
  id: string;
  title: string;
  description: string;
  price?: string;
  isPriceEstimated?: boolean;
  category: string;
  estimatedDuration?: string;
}

export interface Review {
  id: string;
  authorName: string;
  text: string;
  date: string;
  source: string;
  isDemo: boolean;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ClinicConfig {
  name: string;
  tagline: string;
  description: string;
  phoneDisplay: string;
  phoneRaw: string;
  email: string;
  address: string;
  addressFallbackText: string;
  workingHours: string;
  mapEmbedUrl: string;
  mapRouteUrl: string;
  mapCoordinates?: { lat: number; lng: number };
  isDemoMode: boolean;
  services: ClinicService[];
  reviews: Review[];
  processSteps: ProcessStep[];
  heroImage: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  aboutImage: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  aboutText: string[];
}

export interface BookingFormData {
  name: string;
  phone: string;
  serviceId: string;
  preferredDate: string;
  agreeToPrivacy: boolean;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  isDemoResponse?: boolean;
  bookingId?: string;
}
