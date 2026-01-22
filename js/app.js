fetch("https://tikcolordrama-backend.onrender.com/api/dramas")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });

const dramaData = [
  {
    id: 1,
    title: "Love After Marriage",
    image: "https://via.placeholder.com/300x400",
    episodes: [
      {
        ep: 1,
        video: "https://www.terabox.com/sharing/link?surl=XXXX"
      },
      {
        ep: 2,
        video: "https://www.terabox.com/sharing/link?surl=YYYY"
      }
    ]
  },
  {
    id: 2,
    title: "Broken Promise",
    image: "https://via.placeholder.com/300x400",
    episodes: [
      {
        ep: 1,
        video: "https://www.terabox.com/sharing/link?surl=ZZZZ"
      }
    ]
  }
];

// HOMEPAGE
const dramaList = document.getElementById("dramaList");

if (dramaList) {
  dramaData.forEach(drama => {
    const card = document.createElement("div");
    card.className = "drama-card";
    card.innerHTML = `
      <img src="${drama.image}">
      <h3>${drama.title}</h3>
    `;
    card.onclick = () => {
      window.location.href = `watch.html?id=${drama.id}`;
    };
    dramaList.appendChild(card);
  });
}

// WATCH PAGE
const params = new URLSearchParams(window.location.search);
const dramaId = params.get("id");

if (dramaId) {
  const drama = dramaData.find(d => d.id == dramaId);
  document.getElementById("dramaTitle").innerText = drama.title;

  const player = document.getElementById("videoPlayer");
  const episodesDiv = document.getElementById("episodes");

  drama.episodes.forEach(ep => {
    const btn = document.createElement("button");
    btn.innerText = "Episode " + ep.ep;
    btn.onclick = () => {
      player.src = ep.video;
    };
    episodesDiv.appendChild(btn);
  });

  player.src = drama.episodes[0].video;
}

