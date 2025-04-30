export async function GET() {
  try {
    const apiKey = process.env.X_RAPIDAPI_KEY!;
    const channelIdKey = process.env.CHANNEL_ID!;

    const url = `https://youtube-scraper-2023.p.rapidapi.com/channel_videos`;
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "youtube-scraper-2023.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        channelId: channelIdKey,
        nextToken: "",
        sortBy: "",
      }),
    };
    const res = await fetch(url, options);
    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ Error: err });
  }
}
