export const config = {
  runtime: 'edge',
};

const quotes = [
  "If trees could scream, would we be so cavalier about cutting them down? We might, if they screamed all the time, for no good reason.",
  "If you ever drop your keys into a river of molten lava, let them go, because, man, they're gone.",
  "To me, clowns aren't funny. In fact, they're kind of scary. I've wondered where this started and I think it goes back to the time I went to the circus, and a clown killed my dad.",
  "If you ever fall off the Sears Tower, just go real limp, because maybe you'll look like a dummy and people will try to catch you because, hey, free dummy.",
  "If you ever reach total enlightenment while drinking beer, I bet it makes beer shoot out your nose."
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function handler(req) {
  const quote = getRandomQuote();

  return new Response(
    JSON.stringify({
      frames: [
        {
          image: `${req.nextUrl.origin}/cover.jpg`,
          text: quote,
          buttons: [
            { label: "New Deep Thought", action: "post", target: req.nextUrl.origin }
          ]
        }
      ]
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
