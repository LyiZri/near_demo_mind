declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module 'big.js';
declare module 'near-api-js';
declare module 'jsmind';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
