export const getAvatar = (user) => {
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar.startsWith('a_') ? 'gif' : 'webp'}?size=128`
}

export const getNickname = (user) => {
    return (user?.global_name || user.username)
}

export const getArtits = (str) => {
    if (!str) return [];
    return str.split('; ');
};

// Time formatting utilities
export const getSpotifyTime = (data, start) => {
    if (!data) return '0:00';

    const seconds = Math.trunc(((start ? Date.now() : data.end) - data.start) / 1000);
    const m = Math.trunc(seconds / 60);
    const s = Math.trunc(seconds % 60);

    return `${m}:${s > 9 ? s : `0${s}`}`;
};

// Activity type checking
export const isSpotifyActivity = (data) => {
    return data?.type === 'LISTENING' && data?.name === 'Spotify';
};