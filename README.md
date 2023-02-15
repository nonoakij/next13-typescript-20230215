## Build result

```zsh
❯ pnpm build

> next13-typescript-20230215@0.1.0 build /Users/s06649/playground/next/next13-typescript-20230215
> next build

info  - Linting and checking validity of types
info  - Using wasm build of next-swc
warn  - Attempted to load @next/swc-darwin-arm64, but an error occurred: dlopen(/Users/s06649/playground/next/next13-typescript-20230215/node_modules/.pnpm/@next+swc-darwin-arm64@13.1.6/node_modules/@next/swc-darwin-arm64/next-swc.darwin-arm64.node, 0x0001): tried: '/Users/s06649/playground/next/next13-typescript-20230215/node_modules/.pnpm/@next+swc-darwin-arm64@13.1.6/node_modules/@next/swc-darwin-arm64/next-swc.darwin-arm64.node' (not a mach-o file), '/System/Volumes/Preboot/Cryptexes/OS/Users/s06649/playground/next/next13-typescript-20230215/node_modules/.pnpm/@next+swc-darwin-arm64@13.1.6/node_modules/@next/swc-darwin-arm64/next-swc.darwin-arm64.node' (no such file), '/Users/s06649/playground/next/next13-typescript-20230215/node_modules/.pnpm/@next+swc-darwin-arm64@13.1.6/node_modules/@next/swc-darwin-arm64/next-swc.darwin-arm64.node' (not a mach-o file)
info  - Creating an optimized production build
info  - Compiled successfully
info  - Collecting page data
info  - Generating static pages (4/4)
info  - Finalizing page optimization

Route (pages)                              Size     First Load JS
┌ ○ /                                      722 B          75.9 kB
├   └ css/bff950a31bfd5d70.css             1.34 kB
├   /_app                                  0 B            73.1 kB
├ λ /[spaceId]                             485 B          75.6 kB
├ ○ /[spaceId]/name/[name]                 372 B          73.5 kB
├ ○ /404                                   181 B          73.3 kB
└ λ /api/hello                             0 B            73.1 kB
+ First Load JS shared by all              73.8 kB
  ├ chunks/framework-ac88a2a245aea9ab.js   45.2 kB
  ├ chunks/main-c760948dd93bcd41.js        26.8 kB
  ├ chunks/pages/_app-ab0f5a69822bc783.js  296 B
  ├ chunks/webpack-8fa1640cc84ba8fe.js     750 B
  └ css/876d048b5dab7c28.css               706 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
```
