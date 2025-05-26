# 🎮 Game Night - Party Games & Good Vibes

> *Made by friends, for friends. Built with vibe coding and lots of caffeine.*

A collection of party games and interactive experiences perfect for get-togethers, game nights, and when you want to have fun with your crew. No fancy frameworks, no over-engineering – just pure fun coded with good vibes.

## 🌟 What's This All About?

Game Hub is our homegrown collection of party games that actually work when you need them to. Built during late-night coding sessions, weekend hackathons, and "hey, wouldn't it be cool if..." moments between friends.

**Philosophy**: Keep it simple, keep it fun, keep it working.

## 🎯 Games & Features

### Current Games
- **Trivia Night** - Custom question sets, team scoring, dramatic reveals
- **Word Association** - Fast-paced word games that get weird quickly  
- **Drawing Relay** - Pass the drawing, chaos ensues
- **Would You Rather** - The classic with a digital twist
- **Name That Tune** - Audio challenges (BYOM - Bring Your Own Music)
- **Story Builder** - Collaborative storytelling that goes off the rails

### Party Features
- **Room Codes** - Easy joining with simple 4-letter codes
- **Mobile Friendly** - Everyone plays on their phone
- **No Accounts** - Just pick a nickname and dive in
- **Flexible Players** - Works with 3-20+ people
- **Customizable** - Add your own questions, prompts, and content

## 🚀 Quick Start

### For Party Hosts
1. Clone this repo: `git clone [repo-url]`
2. Run `npm install` (or `yarn install` if you're fancy)
3. Start it up: `npm start`
4. Share the room code with your friends
5. Let the chaos begin!

### For Players
1. Get the room code from your host
2. Go to the game URL on your phone
3. Enter the code and pick a name
4. Play games, make memories, laugh at terrible answers

## 🛠 Tech Stack (The Vibe Coding Way)

- **Frontend**: Vanilla JS, HTML5, CSS3 (because sometimes simple is better)
- **Backend**: Node.js + Express (reliable and straightforward)
- **Real-time**: Socket.io (for that instant party connection)
- **Styling**: CSS Grid, Flexbox, and whatever looked good at 2 AM
- **Database**: JSON files (we told you it was vibe coding)

*No build process. No compilation steps. Just code that works.*

## 🎨 Adding Your Own Games

Want to add a game? Here's the vibe:

1. Create a new folder in `/games/your-game-name`
2. Add your HTML, CSS, and JS files
3. Update the game registry in `games.json`
4. Test it with friends (most important step!)

Example game structure:
```
games/
  your-awesome-game/
    index.html
    style.css
    game.js
    config.json
```

Check out existing games for inspiration. Copy liberally, improve gradually.

## 🤝 Contributing (The Friend Way)

This is a friends project, so contributing should feel like hanging out:

- **Found a bug?** Tell us in Issues (or fix it if you're feeling it)
- **Have an idea?** Share it! Weird ideas welcome
- **Want to add a game?** Go for it! Weird games extra welcome
- **Code style?** If it works and isn't completely unreadable, it's good

### The Vibe Coding Guidelines
- Comments are for future you (and your confused friends)
- Function names should make sense at 2 AM
- If it works, it works
- Mobile-first because everyone's on their phone anyway
- Make it fun first, optimize later

## 🎉 Perfect For

- Game nights with friends
- Family gatherings
- Office parties (if your office is cool)
- Ice breakers
- "We're bored, what should we do?" moments
- Testing how well your friend group knows each other

## 🔧 Setup & Configuration

### Environment Variables
Create a `.env` file:
```
PORT=3000
ROOM_CODE_LENGTH=4
MAX_PLAYERS_PER_ROOM=20
SESSION_TIMEOUT=3600000
```

### Customization
- Add custom trivia questions in `data/trivia.json`
- Modify game settings in individual game config files
- Change themes and colors in `public/css/themes.css`

## 📱 Mobile Experience

Designed mobile-first because that's how people actually play:
- Touch-friendly buttons
- Readable text sizes
- Portrait and landscape support
- Works on everything from ancient iPhones to new Android flagships

## 🐛 Known Issues & Quirks

- Sometimes the room codes get weird words (working on a better word list)
- Drawing feature works better on tablets than phones
- Audio games need manual music loading (copyright reasons)
- The trivia database has some inside jokes (sorry/not sorry)

## 🚧 Coming Eventually (Maybe)

- More games (always)
- Better mobile drawing experience
- Tournament brackets
- Photo/video integration
- Sound effects (if we figure out audio licensing)
- Maybe a proper database (but probably not)

## 📄 License

MIT License - Use it, modify it, make it your own. Just keep the fun alive.

## 🙏 Credits

Built with love by:
- [Your names here]
- And powered by late-night coding sessions
- Fueled by [your favorite snacks/drinks]

Special thanks to everyone who tested our weird games and gave feedback.

## 🤔 FAQ

**Q: Why "vibe coding"?**
A: Because sometimes the best code comes from just vibing with an idea and seeing where it goes.

**Q: Is this production ready?**
A: It's "friends party ready" which is all we were aiming for.

**Q: Can I use this for my own parties?**
A: That's literally why we made it! Go wild.

**Q: The code looks weird in some places...**
A: Yeah, that's the vibe coding showing. If it's really bad, feel free to fix it.

---

*Made with ❤️ and questionable coding decisions*

**Have fun, make memories, and may your game nights be legendary!** 🎉