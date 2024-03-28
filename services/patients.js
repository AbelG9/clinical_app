import axios from 'axios'
const API_URL = 'http://localhost:8081/codigo/tecsup/v1/persons'

export async function findAllPersons() {
    const url = API_URL
    const token = localStorage.getItem('auth-token')

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    const response = await axios.get(url, { headers })
    return response.data
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

export async function createPatient(form) {
  const url = API_URL
  const token = localStorage.getItem('auth-token')

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(form)
  }

  const response = await fetch(url, options)

  return await response.json()
}

export async function udpatePatient(form) {
  const url = API_URL + '/update/' + form.userId
  const token = localStorage.getItem('auth-token')

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  const response = await axios.post(url, form, { headers })
  return response.data
}

export async function deletePatient(id) {
  const url = API_URL + '/delete/' + id
  const token = localStorage.getItem('auth-token')

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await fetch(url, options)
  return await response.json()
}
