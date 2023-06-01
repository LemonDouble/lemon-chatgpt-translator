export const googleTranslate = async (param: { from: string, to: string, word: string }): Promise<string> => {
  const translateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${param.from}&tl=${param.to}&dt=t&dt=bd&dj=1&q=${encodeURIComponent(
    param.word,
  )}`;

  const response = await fetch(translateUrl);
  const responseJson = await response.json();

  return responseJson.sentences.map((item: any) => item.trans).join(' ');
};
