import React from 'react';
import { ChuckNorrisQuote } from '../chuck-norris';
import { Dog } from '../dog';
export function Quote({subject}) {
    let component = null;

    switch (subject) {
        case 'chuck':
            component = <ChuckNorrisQuote />
            break;
        case 'dog':
            component = <Dog />
            break;
        default:
            break;
    }

    return component;
}