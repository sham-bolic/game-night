'use client';

import { useState, useEffect } from 'react';
import { Player } from '@/app/cameleon/schemas/playerSchema';
import { GameState } from '@/app/cameleon/schemas/gameStateSchema';


export default function CameleonPage() {
    const [gameId, setGameId] = useState<string>('');
    const [players, setPlayers] = useState<Player[]>([]);
    const [spectators, setSpectators] = useState<Player[]>([]);
    const [currentUser, setCurrentUser] = useState<Player | null>(null);
    const [username, setUsername] = useState('');
    const [showLobbyPrompt, setShowLobbyPrompt] = useState(true);
    const [showUsernamePrompt, setShowUsernamePrompt] = useState(false);
    const [error, setError] = useState('');
    const [newGameId, setNewGameId] = useState('');

    const generateGameId = (): string => {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    const generatePlayerId = (): string => {
        return Math.random().toString(36).substr(2, 9);
    };

    const saveGameState = (gameState: GameState) => {
        localStorage.setItem(`cameleon_game_${gameState.id}`, JSON.stringify(gameState));
    };

    const loadGameState = (id: string): GameState | null => {
        const saved = localStorage.getItem(`cameleon_game_${id}`);
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch {
                return null;
            }
        }
        return null;
    };

    const createNewGame = (id: string): GameState => {
        const newGame: GameState = {
            id,
            players: [],
            spectators: [],
            createdAt: Date.now()
        };
        saveGameState(newGame);
        return newGame;
    };

    useEffect(() => {
        // Check if there's a game ID in the URL hash
        const hash = window.location.hash;
        if (hash.startsWith('#')) {
            const urlGameId = hash.substring(1);
            const gameState = loadGameState(urlGameId);
            if (gameState) {
                setGameId(urlGameId);
                setPlayers(gameState.players);
                setSpectators(gameState.spectators);
                setShowLobbyPrompt(false);
                setShowUsernamePrompt(true);
            } else {
                // Game doesn't exist, show error and reset to lobby prompt
                setError('Game not found. Please create a new game or join an existing one.');
                window.location.hash = '';
            }
        }
    }, []);

    useEffect(() => {
        // Update localStorage whenever game state changes
        if (gameId && (players.length > 0 || spectators.length > 0)) {
            const gameState: GameState = {
                id: gameId,
                players,
                spectators,
                createdAt: Date.now()
            };
            saveGameState(gameState);
        }
    }, [gameId, players, spectators]);

    const handleCreateLobby = () => {
        const id = newGameId.trim() || generateGameId();
        
        // Check if game already exists
        if (loadGameState(id)) {
            setError('A game with this ID already exists. Please choose a different ID or join the existing game.');
            return;
        }
        
        createNewGame(id);
        setGameId(id);
        window.location.hash = id;
        setShowLobbyPrompt(false);
        setShowUsernamePrompt(true);
        setError('');
    };

    const handleJoinLobby = () => {
        const id = newGameId.trim();
        if (!id) {
            setError('Please enter a game ID');
            return;
        }
        
        const gameState = loadGameState(id);
        if (!gameState) {
            setError('Game not found. Please check the game ID or create a new game.');
            return;
        }
        
        setGameId(id);
        setPlayers(gameState.players);
        setSpectators(gameState.spectators);
        window.location.hash = id;
        setShowLobbyPrompt(false);
        setShowUsernamePrompt(true);
        setError('');
    };

    const isUsernameTaken = (username: string): boolean => {
        return [...players, ...spectators].some(
            user => user.username.toLowerCase() === username.toLowerCase()
        );
    };

    const getNextPosition = (): number => {
        return players.length + 1;
    };

    const handleUsernameSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username.trim()) {
            setError('Username cannot be empty');
            return;
        }
        if (isUsernameTaken(username.trim())) {
            setError('Username is already taken');
            return;
        }
        setError('');
        setShowUsernamePrompt(false);
    };

    const joinGame = () => {
        if (players.length >= 15) {
            setError('Game is full (maximum 15 players)');
            return;
        }
        
        const newPlayer: Player = {
            id: generatePlayerId(),
            username: username.trim(),
            position: getNextPosition(),
            isSpectator: false
        };
        
        setPlayers(prev => [...prev, newPlayer]);
        setCurrentUser(newPlayer);
    };

    const spectateGame = () => {
        const newSpectator: Player = {
            id: generatePlayerId(),
            username: username.trim(),
            position: 0,
            isSpectator: true
        };
        
        setSpectators(prev => [...prev, newSpectator]);
        setCurrentUser(newSpectator);
    };

    const copyGameLink = () => {
        const gameUrl = `${window.location.origin}${window.location.pathname}#${gameId}`;
        navigator.clipboard.writeText(gameUrl).then(() => {
            alert('Game link copied to clipboard!');
        });
    };

    if (showLobbyPrompt) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-6">Cameleon Game</h1>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="gameId" className="block text-sm font-medium text-gray-700 mb-2">
                                Game ID (optional - leave blank for random):
                            </label>
                            <input
                                type="text"
                                id="gameId"
                                value={newGameId}
                                onChange={(e) => setNewGameId(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter game ID"
                                maxLength={10}
                            />
                        </div>
                        <button
                            onClick={handleCreateLobby}
                            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            Create New Lobby
                        </button>
                        <button
                            onClick={handleJoinLobby}
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Join Existing Lobby
                        </button>
                    </div>
                    {error && (
                        <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
                    )}
                </div>
            </div>
        );
    }

    if (showUsernamePrompt) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-4">Join Game #{gameId}</h1>
                    <p className="text-center text-gray-600 mb-6">Players: {players.length}/15</p>
                    <form onSubmit={handleUsernameSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                Enter your username:
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your username"
                                maxLength={20}
                            />
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    if (!currentUser) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-4">Welcome, {username}!</h1>
                    <p className="text-center text-gray-600 mb-6">Game #{gameId}</p>
                    <div className="space-y-4">
                        <button
                            onClick={joinGame}
                            disabled={players.length >= 15}
                            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            Join Game ({players.length}/15 players)
                        </button>
                        <button
                            onClick={spectateGame}
                            className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Spectate Game
                        </button>
                        <button
                            onClick={copyGameLink}
                            className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            Copy Game Link
                        </button>
                    </div>
                    {error && (
                        <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-4">
                    <h1 className="text-3xl font-bold mb-2">Cameleon Game #{gameId}</h1>
                    <button
                        onClick={copyGameLink}
                        className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                    >
                        Share Game Link
                    </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Players ({players.length}/15)</h2>
                        <div className="space-y-2">
                            {players.map((player) => (
                                <div
                                    key={player.id}
                                    className={`p-3 rounded border ${
                                        player.id === currentUser.id ? 'bg-blue-100 border-blue-300' : 'bg-gray-50'
                                    }`}
                                >
                                    <span className="font-medium">Position {player.position}:</span> {player.username}
                                    {player.id === currentUser.id && (
                                        <span className="ml-2 text-blue-600 text-sm">(You)</span>
                                    )}
                                </div>
                            ))}
                            {players.length === 0 && (
                                <p className="text-gray-500 italic">No players joined yet</p>
                            )}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Spectators ({spectators.length})</h2>
                        <div className="space-y-2">
                            {spectators.map((spectator) => (
                                <div
                                    key={spectator.id}
                                    className={`p-3 rounded border ${
                                        spectator.id === currentUser.id ? 'bg-blue-100 border-blue-300' : 'bg-gray-50'
                                    }`}
                                >
                                    {spectator.username}
                                    {spectator.id === currentUser.id && (
                                        <span className="ml-2 text-blue-600 text-sm">(You)</span>
                                    )}
                                </div>
                            ))}
                            {spectators.length === 0 && (
                                <p className="text-gray-500 italic">No spectators</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <div className="bg-white p-4 rounded-lg shadow-md inline-block">
                        <p className="text-lg">
                            {currentUser.isSpectator
                                ? `You are spectating as ${currentUser.username}`
                                : `You are Player ${currentUser.position} (${currentUser.username})`}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                            {players.length >= 1
                                ? 'Ready to start! Waiting for game implementation...'
                                : 'Waiting for at least 1 player to join...'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}