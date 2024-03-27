const API_URL = 'http://localhost:8081/codigo/tecsup/v1/persons'

export async function findAllPersons() {
    const url = API_URL
    const token = localStorage.getItem('auth-token')

    const options = {
        method: 'GET', // Este es el método que usa el api fetch por defecto, podríamos quitarlo
        headers: {
          'Authorization': `Bearer ${token}`
        }
    }

    const response = await fetch(url, options)
  
    return await response.json()
}

export async function getReniecInfo(numero) {
    const url = API_URL + '/reniec/' + numero
    const token = localStorage.getItem('auth-token')

    const options = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
    }

    const response = await fetch(url, options)

    return await response.json()
}