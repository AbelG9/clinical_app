export async function login(form) {
    const url = 'http://localhost:8081/codigo/tecsup/v1/users/login'
  
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
    const url = 'http://localhost:8081/codigo/tecsup/v1/users/signUp'
  
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