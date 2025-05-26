
export default function Home() {
  const featuredGames = [
    {
      name: "Codenames",
      players: "2-8 players",
      time: "15 min",
      image: "/games/codenames.jpg",
      author: "Vlaada Chvátil",
      redirectLink: "/games/codenames",
      category: "Word Game",
      difficulty: "Easy",
      description:
        "A clever team-based word game where spies give one-word clues to identify their team&apos;s agents.",
    },
    {
      name: "Jackbox Party Pack",
      players: "3-8 players",
      time: "15-30 min",
      image: "/games/jackbox.jpg",
      author: "Jackbox Games",
      redirectLink: "/games/jackbox-party-pack",
      category: "Party Game",
      difficulty: "Easy",
      description:
        "A collection of hilarious party games that everyone can play using their phones as controllers.",
    },
    {
      name: "Among Us",
      players: "4-15 players",
      time: "15-45 min",
      image: "/games/among-us.jpg",
      author: "InnerSloth",
      redirectLink: "/games/among-us",
      category: "Social Deduction",
      difficulty: "Medium",
      description:
        "Work together to complete tasks while trying to identify the impostor among your crew.",
    },
    {
      name: "Wavelength",
      players: "2-12 players",
      time: "45 min",
      image: "/games/wavelength.jpg",
      author: "Wolfgang Warsch",
      redirectLink: "/games/wavelength",
      category: "Party Game",
      difficulty: "Medium",
      description:
        "A telepathic party game where teams try to read minds using a spectrum of concepts.",
    },
    {
      name: "One Night Ultimate Werewolf",
      players: "3-10 players",
      time: "10 min",
      image: "/games/werewolf.jpg",
      author: "Ted Alspach",
      redirectLink: "/games/one-night-werewolf",
      category: "Social Deduction",
      difficulty: "Medium",
      description:
        "A fast-paced game where villagers must identify the werewolves before dawn breaks.",
    },
    {
      name: "Telestrations",
      players: "4-8 players",
      time: "30 min",
      image: "/games/telestrations.jpg",
      author: "USAopoly",
      redirectLink: "/games/telestrations",
      category: "Drawing Game",
      difficulty: "Easy",
      description:
        "The hilarious game of sketching and guessing that combines telephone with Pictionary.",
    },
    {
      name: "Secret Hitler",
      players: "5-10 players",
      time: "30-45 min",
      image: "/games/secret-hitler.jpg",
      author: "Mike Boxleiter",
      redirectLink: "/games/secret-hitler",
      category: "Social Deduction",
      difficulty: "Hard",
      description:
        "A dramatic game of political intrigue and deduction in 1930s Germany.",
    },
    {
      name: "Coup",
      players: "2-6 players",
      time: "15 min",
      image: "/games/coup.jpg",
      author: "Rikki Tahta",
      redirectLink: "/games/coup",
      category: "Bluffing",
      difficulty: "Medium",
      description:
        "A game of manipulation and mayhem where you must bluff your way to power.",
    },
    {
      name: "Just One",
      players: "3-8 players",
      time: "20 min",
      image: "/games/just-one.jpg",
      author: "Ludovic Roudy",
      redirectLink: "/games/just-one",
      category: "Word Game",
      difficulty: "Easy",
      description:
        "A cooperative word game where players give one-word clues to help guess the mystery word.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Header */}
      <header className="p-6 sm:p-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              🎮
            </div>
            <h1 className="text-2xl font-bold text-white">Game Night</h1>
          </div>
          <nav className="hidden sm:flex gap-6">
            <a
              href="#games"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Games
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Your Ultimate
            <span className="text-blue-400"> Game Night</span>
            <br />
            Companion
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover, organize, and enjoy the perfect games for your next
            gathering. From party games to strategy classics, we&apos;ve got you
            covered.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <button className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-400 transition-colors">
              Browse Games
            </button>
            <button className="border-2 border-gray-600 text-gray-300 font-semibold px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white transition-colors">
              Create Game Night
            </button>
          </div>
        </div>

        {/* Featured Games */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Featured Games
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:bg-gray-700/50 transition-all transform hover:scale-105"
              >
                <div className="w-full h-48 bg-gray-900 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden border border-gray-700">
                  <span className="text-4xl">🎲</span>
                  <div className="absolute top-2 right-2 bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                    {game.category}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {game.name}
                </h4>
                <p className="text-gray-500 text-sm mb-1">by {game.author}</p>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-400 text-sm">{game.players}</p>
                  <p className="text-gray-400 text-sm">{game.time}</p>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      game.difficulty === "Easy"
                        ? "bg-green-800 text-green-300"
                        : game.difficulty === "Medium"
                        ? "bg-amber-800 text-amber-300"
                        : "bg-red-800 text-red-300"
                    }`}
                  >
                    {game.difficulty}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {game.description}
                </p>
                <a
                  href={game.redirectLink}
                  className="block w-full bg-gray-700 text-gray-300 py-2 rounded-lg hover:bg-gray-600 hover:text-white transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Games Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">10K+</div>
              <div className="text-gray-300">Game Nights Hosted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50K+</div>
              <div className="text-gray-300">Happy Players</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-sm">
                🎮
              </div>
              <span className="text-white font-semibold">Game Night</span>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                Support
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500">
            <p>
              &copy; 2025 Game Night. Making every gathering memorable.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
