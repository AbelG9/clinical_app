const API_URL = 'http://localhost:8081/codigo/tecsup/v1/users'

export async function login(form) {
    const url = API_URL + '/login'
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }
  
    const response = await fetch(url, options)
  
    return await response.json()
}

export async function signUp(form) {
    const url = API_URL + '/signUp'
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }
  
    const response = await fetch(url, options)
  
    return await response.json()
}