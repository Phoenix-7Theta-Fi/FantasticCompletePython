import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { generateGeminiResponse } from '../../lib/gemini';
import { supabase } from '../../lib/supabase'; // Import Supabase client

const Diagnosis: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [userInput, setUserInput] = useState('');
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Add user input to conversation history
    setConversationHistory((prevHistory) => [...prevHistory, `User: ${userInput}`]);

    try {
      const response = await generateGeminiResponse(userInput);
      setConversationHistory((prevHistory) => [...prevHistory, `AI: ${response}`]);
      setUserInput(''); // Clear the input field

      // Save diagnosis data to Supabase
      if (session?.user?.id) {
        await supabase
          .from('diagnoses') // Replace with your actual table name
          .insert([
            {
              user_id: session.user.id, 
              input: userInput, 
              response: response, 
              // ... other relevant data you want to store
            },
          ]);
      } 
    } catch (error) {
      console.error('Error generating response:', error);
      // Handle error gracefully, e.g., display an error message to the user.
    }
  };

  if (!session) {
    router.push('/');
    return null;
  }

  return (
    <div>
      <h2>AI Diagnosis Chatbox</h2>
      <div>
        {/* Display conversation history */}
        {conversationHistory.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Describe your symptoms..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Diagnosis;