# JavaScript Bundle Optimization Guide

## Problem Areas
Based on Lighthouse analysis:
- 461.7 KiB unused JavaScript (399.8 KiB savings potential)
- Three large component chunks (154.8, 154.1, 152.7 KiB)
- WebSocket causing bfcache miss
- Console logs in production

## Optimizations Applied

### 1. Webpack Bundle Analyzer ✓
- Install: `@next/bundle-analyzer`
- Usage: `npm run analyze` to visualize bundle
- Run: `ANALYZE=true npm run build`

### 2. Code Splitting ✓
- Vendor chunk separation
- Common chunk extraction
- Dynamic imports with loading states
- Progressive hydration

### 3. Component Lazy Loading ✓
- All heavy components use dynamic() imports
- Loading skeletons reduce layout shift
- Deferred non-critical components (Footer, ContactForm)

### 4. Image Optimization ✓
- Lazy loading for below-the-fold images
- Eager loading for above-the-fold
- WebP/AVIF format support

### 5. Production Settings ✓
- Console logs removed in production
- Source maps disabled
- Minification enabled
- CSS purging via Tailwind

## To Analyze Bundle

```bash
# View bundle analysis
npm run analyze

# This will open an interactive visualization showing:
- Chunk sizes
- Module breakdown
- Duplicate modules
- Unused code
```

## Further Optimizations

### Remove WebSocket Usage
If using WebSocket:
- Replace with polling/SSE for compatibility
- Or use conditional WebSocket (client-side only)

### Next Steps
1. Run `npm run analyze` to see actual bundle composition
2. Look for duplicate dependencies
3. Tree-shake unused exports
4. Consider compression (gzip/brotli)
5. Add service worker for caching
