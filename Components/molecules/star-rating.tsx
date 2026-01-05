import React from "react";
import { Star } from "lucide-react";

/**
 * Props for the RatingStars component.
 */
interface RatingStarsProps {
  /** The numerical rating value (e.g., 4.5, 3.3). */
  rating: number;
  /** The size of the star icons (default: 16). */
  size?: number;
  /** The hex color of the filled stars (default: '#FACC15'). */
  color?: string;
}

/**
 * A component to display star ratings, supporting full, half, and empty stars.
 */
export default function RatingStars({
  rating,
  size = 16,
  color = "#FACC15", // Default yellow color
}: RatingStarsProps) {
  return (
    <div
      className="flex items-center"
      aria-label={`Rating: ${rating} out of 5 stars.`}
    >
      {/* A single loop iterates five times to render each star. */}
      {Array.from({ length: 5 }, (_, i) => {
        const starNumber = i + 1;

        // Logic to determine if the star should be full, half, or empty.
        if (starNumber <= rating) {
          // --- Full Star ---
          // Render a completely filled star.
          return (
            <Star key={`full-${i}`} fill={color} color={color} size={size} />
          );
        } else if (starNumber - 0.5 <= rating) {
          // --- Half Star ---
          // This renders if the rating is, for example, 3.5, 3.6, etc., for the 4th star.
          return (
            <div
              key={`half-${i}`}
              className="relative"
              style={{ width: size, height: size }}
            >
              {/* Background star (provides the border) */}
              <Star
                fill="none"
                color={color}
                size={size}
                className="absolute inset-0"
              />
              {/* Foreground star (filled and clipped to show only the left half) */}
              <Star
                fill={color}
                color={color}
                size={size}
                className="absolute inset-0"
                style={{
                  clipPath: "inset(0 50% 0 0)", // Clips the star to 50% width from the left
                }}
              />
            </div>
          );
        } else {
          // --- Empty Star ---
          // Render a star with only the border visible.
          return (
            <Star key={`empty-${i}`} fill="none" color={color} size={size} />
          );
        }
      })}
    </div>
  );
}
