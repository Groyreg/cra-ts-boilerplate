// <reference types="node" />
// <reference types="react" />
// <reference types="react-dom" />

declare namespace NodeJS {
  type ProcessEnv = {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
  }
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.js' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import React from 'react';

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
