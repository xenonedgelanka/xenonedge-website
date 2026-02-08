import * as React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                src?: string;
                trigger?: string;
                colors?: string;
                delay?: string;
                state?: string;
                target?: string;
                width?: string | number;
                height?: string | number;
                style?: React.CSSProperties;
            };
        }
    }
}
