export type SongRaw = {
    song_title: string | null;
    artist_name: string | null;
    album_name: string | null;
    isFavorite: boolean | null;
    duration_seconds: number | null;
    rating: number | null; // Rating out of 5
    genre: string | null;
}