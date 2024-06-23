import { GoogleApi } from '@google-cloud/google-api'

const apiKey = process.env.GEMINI_API_KEY

if (!apiKey) {
  throw new Error('Missing GEMINI_API_KEY environment variable')
}

// Initialize the Google API client
const google = new GoogleApi('google.com', {
  apiKey: apiKey
})

export async function generateGeminiResponse(prompt: string): Promise<string> {
  try {
    const response = await google.discover('generativelanguage', 'v1beta2')

    const res = await response.generativelanguage.generateText({
      model: 'models/gemini-pro', // Or another Gemini model
      prompt: {
        text: prompt
      }
    })

    // Example of accessing the response
    return res.data.candidates[0].output // Adjust based on the API's response structure
  } catch (error) {
    console.error('Error calling Gemini API:', error)
    throw error // Consider handling the error more gracefully in a production app
  }
} 