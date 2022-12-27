const baseUrl = 'https://' + process.env.REACT_APP_API_HOST
const options = {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
    }
}

export async function detectLanguage(text) {
    options.body = JSON.stringify({ text: text })
    const response = await fetch(baseUrl + '/language_detect', options)
    if (!response.ok)
        throw new Error(response)
    return (await response.json()).language_detection.language
}

export async function translate(text, from, to) {
    options.body = JSON.stringify({ text: text, source: from, target: to })
    const response = await fetch(baseUrl + '/translate', options)
    if (!response.ok)
        throw new Error(response)
    return (await response.json()).translations.translation
}
