import React, { useState } from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  const [rating, setRating] = useState(movie.rating);
  const [review, setReview] = useState('');

  // Preloaded comments per movie
  const [reviewsList, setReviewsList] = useState([
  ...(movie.id === 1 ? [
    { name: "Alice", rating: 5, text: "Absolutely thrilling! Can't stop watching." },
    { name: "Bob", rating: 4, text: "Loved the suspense and characters." }
  ] : []),

  ...(movie.id === 2 ? [
    { name: "Charlie", rating: 5, text: "Mind-bending and visually stunning." },
    { name: "Dana", rating: 4, text: "Complex but amazing storyline!" }
  ] : []),

  ...(movie.id === 3 ? [
    { name: "Ethan", rating: 4, text: "A masterpiece in storytelling and acting." },
    { name: "Fiona", rating: 5, text: "Really makes you think about history." }
  ] : []),

  ...(movie.id === 4 ? [
    { name: "George", rating: 5, text: "Dark, clever, and full of surprises." },
    { name: "Hannah", rating: 4, text: "Every scene is perfectly crafted." }
  ] : []),

  ...(movie.id === 5 ? [
    { name: "Ian", rating: 5, text: "Powerful drama with intense emotions." },
    { name: "Julia", rating: 4, text: "The revenge storyline is epic!" }
  ] : []),

  ...(movie.id === 6 ? [] : []), // money_heist.jpg => no reviews

  ...(movie.id === 7 ? [
    { name: "Mike", rating: 5, text: "Heartwarming and funny. Loved the characters!" },
    { name: "Nora", rating: 4, text: "Beautiful story about confidence and love." }
  ] : []),

  ...(movie.id === 8 ? [
    { name: "Olivia", rating: 5, text: "Thrilling games and survival drama!" },
    { name: "Peter", rating: 4, text: "Exciting and intense from start to finish!" }
  ] : []), // alice_in_borderland.jpg

  ...(movie.id === 9 ? [
    { name: "Olivia", rating: 4, text: "Cute romantic film with lovely songs." },
    { name: "Peter", rating: 4, text: "Paris backdrop was stunning!" }
  ] : []),

  ...(movie.id === 10 ? [
    { name: "Quentin", rating: 5, text: "Mass movie! Thalaivar swag unmatched!" },
    { name: "Rachel", rating: 4, text: "Classic dialogues and family emotions." }
  ] : []),

  ...(movie.id === 11 ? [
    { name: "Sam", rating: 5, text: "Masterpiece. Mind-blowing visuals and emotions." },
    { name: "Tina", rating: 4, text: "Science + Emotion = Perfection." }
  ] : []),

  ...(movie.id === 12 ? [
    { name: "Uma", rating: 5, text: "Joker scenes gave me chills!" },
    { name: "Victor", rating: 4, text: "Best superhero movie ever made." }
  ] : []),

  ...(movie.id === 13 ? [] : []), // black_panther.jpg => no reviews

  ...(movie.id === 14 ? [
    { name: "Yara", rating: 5, text: "Stunning world-building and visuals!" },
    { name: "Zach", rating: 4, text: "Immersive experience like no other." }
  ] : []),

  ...(movie.id === 15 ? [
    { name: "Aaron", rating: 5, text: "Ultimate superhero crossover. Amazing!" },
    { name: "Bella", rating: 4, text: "Emotional and action-packed finale." }
  ] : []),

  ...(movie.id === 16 ? [
    { name: "Chris", rating: 5, text: "Inspirational and heartwarming story." },
    { name: "Diana", rating: 4, text: "Acting and wrestling scenes are superb!" }
  ] : []),

  ...(movie.id === 17 ? [
    { name: "Ethan", rating: 5, text: "Unstoppable energy and emotion!" },
    { name: "Fiona", rating: 4, text: "Epic friendship and music." }
  ] : []),

  ...(movie.id === 18 ? [
    { name: "Liam", rating: 5, text: "Heartbreaking and beautifully romantic." },
    { name: "Mia", rating: 4, text: "Timeless classic with incredible performances." }
  ] : []), // titanic.jpg

  ...(movie.id === 19 ? [
    { name: "George", rating: 5, text: "Beautiful animation and heartfelt story." },
    { name: "Hannah", rating: 4, text: "Loved the visuals and music!" }
  ] : []),

  ...(movie.id === 20 ? [] : []) // spiderman_nwh.jpg => no reviews
]);


  const handleClick = (star) => setRating(star);

  const handleSubmit = () => {
    if (review.trim() === '') return;
    const newReview = { rating, text: review, name: "You" };
    setReviewsList([...reviewsList, newReview]);
    setReview('');
  };

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p><strong>{movie.year}</strong> | Director: {movie.director}</p>
      <p>Hero: {movie.hero} | Heroine: {movie.heroine}</p>
      <p>{movie.shortStory}</p>

      <div className="stars">
        {[1,2,3,4,5].map(star => (
          <span
            key={star}
            className={star <= rating ? "filled" : "empty"}
            onClick={() => handleClick(star)}
          >★</span>
        ))}
      </div>

      <textarea
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit Review</button>

      {/* Show all reviews */}
      <div className="reviews">
        {reviewsList.length > 0 ? (
          reviewsList.map((r, idx) => (
            <div key={idx} className="review-item">
              <span className="review-stars">{'★'.repeat(r.rating)+'☆'.repeat(5-r.rating)}</span>
              <p><strong>{r.name}:</strong> {r.text}</p>
            </div>
          ))
        ) : (
          <p className="no-reviews">No reviews yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
