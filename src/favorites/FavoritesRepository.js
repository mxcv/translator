import { getEntities, saveEntity, removeEntity, clearEntities } from '../translator/LocalStorageRepository'

const name = 'favorites'
export const getFavorites = () => getEntities(name)
export const saveFavorite = (favorite) => saveEntity(name, favorite)
export const removeFavorite = (id) => removeEntity(name, id)
export const clearFavorites = () => clearEntities(name)
