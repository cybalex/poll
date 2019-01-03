/**
 *
 * i18n setup
 *
 */

import i18n from 'i18n-js'
import { Localization } from 'expo-localization'
import translations from 'translations'

i18n.fallbacks = true
i18n.translations = translations
i18n.locale = Localization.locale
