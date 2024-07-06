//This file handles all the API calls to the backend server

const handleSubmit = async (e, formData, statusChanger, urlSetter) => {
  try {
    console.log(formData)
    e.preventDefault()
    const response = await fetch(process.env.REACT_APP_API_URL + '/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    if (response.ok) {
      console.log('Request successful')
      statusChanger('Successfully Generated Your Resume')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      urlSetter(url)
    } else {
      statusChanger('Oops!! Something went wrong. Please try again later.')
      console.error('Request failed with status', response.status)
    }
  } catch (err) {
    console.log(err)
  }
}
export { handleSubmit }
