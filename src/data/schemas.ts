export const initialStateSchema = {
  type: 'object',
  required: ['brandName', 'description', 'portfolioFeatures', 'appProcedures'],
  properties: {
    brandName: { type: 'string' },
    description: { type: 'string' },
    portfolioFeatures: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'title', 'description'],
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          description: { type: 'string' }
        }
      }
    },
    appProcedures: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'title', 'description'],
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          description: { type: 'string' }
        }
      }
    }
  }
};

export interface AppData {
  brandName: string;
  description: string;
  portfolioFeatures: Array<{ id: string; title: string; description: string }>;
  appProcedures: Array<{ id: string; title: string; description: string }>;
}
