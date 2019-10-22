import React from 'react';
import { ChuckNorrisQuote } from '../chuck-norris';
export function Quote({subject}) {
    let component = null;

    switch (subject) {
        case 'chuck':
            component = <ChuckNorrisQuote />
            break;
        default:
            break;
    }

    return component;
}