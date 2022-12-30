export function getEntities(name) {
    const entities = JSON.parse(localStorage.getItem(name))
    return entities ? entities.array : []
}

export function saveEntity(name, entity) {
    let entities = JSON.parse(localStorage.getItem(name))
    if (!entities)
        entities = {
            lastId: 0,
            array: []
        }
    entity.id = ++entities.lastId
    entities.array.unshift(entity)
    localStorage.setItem(name, JSON.stringify(entities))
}

export function removeEntity(name, id) {
    const entities = JSON.parse(localStorage.getItem(name))
    entities.array = entities.array.filter(f => f.id !== id)
    localStorage.setItem(name, JSON.stringify(entities))
}

export function clearEntities(name) {
    localStorage.removeItem(name)
}
