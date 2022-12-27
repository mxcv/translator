const key = 'translations'

export function getTranslations() {
    const translations = JSON.parse(localStorage.getItem(key))
    return translations ? translations : []
}

export function saveTranslation(translation) {
    const translations = getTranslations()
    translations.unshift(translation)
    localStorage.setItem(key, JSON.stringify(translations))
}

export function clearTranslations() {
    localStorage.removeItem(key)
}
