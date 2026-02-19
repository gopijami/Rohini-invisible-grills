// Web Vitals monitoring (optional - requires 'npm install web-vitals')
// Uncomment after installing: npm install web-vitals

/*
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === 'production') {
    // Report to analytics service
    console.log(metric)
  }
}

export function initWebVitals() {
  getCLS(reportWebVitals)
  getFID(reportWebVitals)
  getFCP(reportWebVitals)
  getLCP(reportWebVitals)
  getTTFB(reportWebVitals)
}
*/

export function reportWebVitals(metric?: any) {
  // Placeholder for web vitals monitoring
  if (process.env.NODE_ENV === 'production' && metric) {
    // Add your analytics tracking here
    console.debug('Web Vital:', metric)
  }
}
