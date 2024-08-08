export const sendMsgToAI = async (msg) => {
  const API_URL = "https://api.openai.com/v1/completions";
  const API_KEY = process.env.REACT_APP_GPT_KEY;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      prompt: msg,
      temperature: 0.2,
      max_tokens: 2048,
      n: 1,
      stop: null,
    }),
  };

  try {
    const response = await fetch(API_URL, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data?.choices[0]?.text;
  } catch (error) {
    console.error('Error:', error);
  }
};
