import { getEntities, saveEntity, clearEntities } from '../repositories/LocalStorageRepository'

const name = 'history'
export const getTranslations = () => getEntities(name)
export const saveTranslation = (translation) => saveEntity(name, translation)
export const clearTranslations = () => clearEntities(name)
