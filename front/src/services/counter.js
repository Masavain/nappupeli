import axios from 'axios'
const baseUrl = '/api/counters/5c5aafed153cf16a0d76c6fc'

const getCounter = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}
const update = async (newObject) => {
    const response = await axios.put(baseUrl, newObject)
    return response.data
  }
const create = async (newObject) => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
}
export default { getCounter, create, update }