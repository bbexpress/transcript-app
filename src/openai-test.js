
export const AIConnect = async (openai, query, temp) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: query }],
    model: "gpt-3.5-turbo",
    temperature: temp,

  });

  console.log('choices',completion.choices);
  return completion.choices[0].message.content;
}
