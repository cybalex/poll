import React from 'react';
import EN from '../translations/En';
import DE from '../translations/De';

export class Translations extends React.Component {
    static get localization() {
        return {
            en: EN.translations,
            de: DE.translations,
        };
    }
}
