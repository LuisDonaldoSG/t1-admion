import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ProvidersI } from '@interfaces/props';

export default function Providers({children}: ProvidersI) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
}