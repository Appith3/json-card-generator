export function formatRating(rating: number): string {
    const FilledStar = "★";
    const NoFilledStar = "☆";
  
    return FilledStar.repeat(rating) + NoFilledStar.repeat(5 - rating)
}