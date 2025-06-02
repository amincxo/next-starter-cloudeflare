export interface ResponsiveSources {
  mobile: string;
  desktop: string;
}
export interface BackgroundMediaProps {
  videoSources: ResponsiveSources;
  imageSources: ResponsiveSources;
  altText?: string;
  breakpoint?: number; // برای نقطه شکست ریسپانسیو
}