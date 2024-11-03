import { AppData } from './schemas';

export interface NavState {
  brandName: string;
}

export interface BrandNameState {
  value: string;
  isLoading: boolean;
}

// Re-export AppData interface from schemas.ts
export { AppData };
