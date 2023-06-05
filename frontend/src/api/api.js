export const getData = async() => {
    const response = await fetch('http://localhost:3000/api/data')
    const data = await response.json()
    return data
}