const DbMusic = [
  {
    id: 1,
    type: "music",
    music: [
      {
        id: 1,
        artist: "JB Mpiana",
        titleMusic: "48 Heure Gecoco",
        img: "https://cdns-images.dzcdn.net/images/cover/ba4b2b3d43f8d4598009cdffecc18cf0/500x500.jpg",
        link: "https://video.fontam.org/Jb_mpiana/48heuresGecoco.mp3",
      },
      {
        id: 2,
        artist: "JB Mpiana",
        titleMusic: "Recto verso",
        img: "https://i.scdn.co/image/ab67616d0000b2736845a2a75e0f313678316e55",
        link: "https://video.fontam.org/Jb_mpiana/48heuresGecoco.mp3",
      },
    ],
  },
  {
    id: 1,
    type: "albums",
    album: [
      {
        id: 1,
        artist: "JB Mpiana",
        titleAlbum: "Anti terro",
        date: "1998",
        img: "https://cdns-images.dzcdn.net/images/cover/ba4b2b3d43f8d4598009cdffecc18cf0/500x500.jpg",
        musics: [
          {
            id: 1,
            artist: "JB Mpiana",
            titleMusic: "Dis-moi amour",
            img: "https://cdns-images.dzcdn.net/images/cover/ba4b2b3d43f8d4598009cdffecc18cf0/500x500.jpg",
            link: "https://video.fontam.org/Jb_mpiana/48heuresGecoco.mp3",
          },
          {
            id: 1,
            artist: "JB Mpiana",
            titleMusic: "48 Heure Gecoco",
            img: "https://cdns-images.dzcdn.net/images/cover/ba4b2b3d43f8d4598009cdffecc18cf0/500x500.jpg",
            link: "https://video.fontam.org/Jb_mpiana/48heuresGecoco.mp3",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: "searchoptions",
    nameoption: [
      {
        id: 1,
        title: "Playlists",
      },
      {
        id: 2,
        title: "Artists",
      },
      {
        id: 3,
        title: "Songs",
      },
      {
        id: 4,
        title: "Albums",
      },
    ],
  },
  {
    id: 4,
    type: "profileoptions",
    profileoptions: [
      {
        id: 1,
        title: "Profile",
        iconname: "user-circle-o",
      },
      {
        id: 2,
        title: "Favorite",
        iconname: "heart-o",
      },
      {
        id: 3,
        title: "Downloads",
        iconname: "download",
      },
      {
        id: 4,
        title: "Settings",
        iconname: "gear",
      },
      {
        id: 5,
        title: "Privacy",
        iconname: "shield",
      },
      {
        id: 5,
        title: "About",
        iconname: "question-circle-o",
      },
    ],
  },
];

export default DbMusic;
