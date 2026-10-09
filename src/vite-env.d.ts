/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IS_DEMO_MODE?: string;
  readonly VITE_API_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
