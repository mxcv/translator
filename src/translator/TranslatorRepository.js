const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
    }
}

export async function detectLanguage(text) {
    options.body = `{"text":"${text}"}`
    const response = await fetch(`https://${process.env.REACT_APP_API_HOST}/language_detect`, options)
    if (!response.ok)
        throw new Error(response)
    return (await response.json()).language_detection.language
}

export async function translate(text, from, to) {
    options.body = `{"text":"${text}","source":"${from}","target":"${to}"}`
    const response = await fetch(`https://${process.env.REACT_APP_API_HOST}/translate`, options)
    if (!response.ok)
        throw new Error(response)
    return (await response.json()).translations.translation
}
