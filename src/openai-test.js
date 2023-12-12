
export const AIConnect = async (openai, query) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: query }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion);
  return completion;
}
