export const useAnalytics = () => {
  const trackPageView = (path: string) => {
    console.log(`[Analytics] Page View: ${path}`);
  };

  const trackEvent = (name: string, data?: any) => {
    console.log(`[Analytics] Event: ${name}`, data);
  };

  return { trackPageView, trackEvent };
};
