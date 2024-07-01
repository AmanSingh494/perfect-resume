//Real time preview functionality using html2Canvas

import html2canvas from 'html2canvas'

// Function to capture an HTML element and convert it to A4 size image
function captureElementToA4Image(elementId) {
  const element = document.getElementById(elementId) // Get the element by ID

  if (element) {
    // Capture the element with html2canvas
    html2canvas(element, {
      // Set the desired width and height for A4 size at 96 DPI
      width: 794,
      height: 1123,
      scale: 1 // Adjust scale as needed to improve quality or fit content
    })
      .then((canvas) => {
        // Create an image from the canvas
        const image = canvas.toDataURL('image/png')

        // For demonstration: create an <img> element to display the captured image
        const imgElement = document.createElement('img')
        imgElement.src = image
        document.body.appendChild(imgElement)

        // Alternatively, you can download the image or send it to a server here
      })
      .catch((error) => {
        console.error('Error capturing element:', error)
      })
  } else {
    console.error('Element not found')
  }
}

// Example usage: capture an element with the ID 'content' to an A4 size image
captureElementToA4Image('content')
