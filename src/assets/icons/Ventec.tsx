import React from 'react';

interface VentecProps {
  size?: number;
  color?: string;
}

export default function Ventec({ size = 40, color = '#000' }: VentecProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 80 80"
    >
      <image
        id="Capa_1"
        fill={color}
        data-name="Capa 1"
        x={4}
        y={13}
        width={76}
        height={57}
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAA5CAYAAACceM1ZAAAE6klEQVR4nM2ba4hVVRTHfzPZg5ISyx5IUyK9qKCs6PHF/JJEVNaHHkQEPaDIiIGICntABEVUU1nIlCAh9iGqD1pRH9KionJgQk2mMotAlHwwhGn56MQe/keul7nn7rXv3vucHxwuM/fstdddZ+3HWmufvqIoVgHXYeMGYKWxTUquBlbn6MgZbDawATjG0O434Hxgb0LdLHwNXJWjo37gV+BFY7tZwBOJdLJybS5jIQ9zn8cCPwJnGtr+C1wI/JJOva70AWuBS3J12K/PPcCgse3RwOIEOlm4MaexaPGwkk+Ba4wybgHei65Zd9zD/kFeno12g50FrJf3+LIFOBfYndlgtwHvZu7z0JAscfPRK0YZM4Gn46rVlSnAM5n7nKDdwxxTtQAMGOTsB+Zoe5KDu4Blmfo6jHYPQ0PrEaOcI7UA9EXWr1NfuT36EJMZDE3inxtlzQXuiKRXFXdrH1gLkw3JEjeRr9MT9WUbcB4wnujHuGhkk+bNbnwLXBlbgU4e5hgDXjPKOxV4tkedqrjf01iOF1IoUOVhaAEYMyjpOAhcBoz2rt5hHKcw7hSPe50XngP8F1mHSg9DC8CjRplHAG96yLay0NNYKDaObiw8PAytfKs1qVu4D3g7kp7HK0My3ePe7cAZqTIpPl5Q6OkeMMp+HjgxUK92Bj2NhebddGkn52Ge11BhZ9ggv9M1vSiKcc+e/y6K4qQIfXa8LPPMU9o2WLgHuKLHZ+o20Sd43rsU2NFjf5X4zGGthIQko1o1DwbodzKwWStkNw5oD7gpoB9vrCvZO8BXxjYXAw8E6ve4p7EcH6Q2FgEe5rgIGNH2wZdxPX3LkJ4pA/jWGi4Hvrf+GCsheyWXtFtibDMtoG6wyGCsNTmMRaCHIQP8DMwwtClUDvvS495ZijCO8pR9PbDKoEswobvx8YCqkdsAv+EZzD9pMNZG4COjLsH0Er4sVUbAwgXAw13uPxu40yDzJXlvFkKHZMmlwHdGw+9W6mhLh+9XALd7ytqq0uA+Q/890WuA7FbLYWObqRV1A+eBtxpkvZrTWETwMBQv/hQQN84HPmv73/vAzZ7tnaeenjBZOSkxUjA7tQWwsritnOeKKDcZZAznNtYEkYLS/qIo1gYE54taZHxsaLe/KIqBlEF2pyvGkCxxQfY3xsrRHs1bp+kEji/LjStpNGIazPEWcK+xzUotBPMMbeYkSIF7EdtgMxQBTEun8sRCMT+h/Epi5923By4AFl5OLL+S2B6GshgjymrEZlTHm7Lt7NuJ7WEoUfhQoh81VKexSORhJcuUoY3FH8DsgGJMVFJ4WMljwF8R5b1et7FIbLBtKpzEYDwgaZmElAZD+a8YZ8aGazjhOCkp57CSuaqch54d26cUztb4qtlJ7WGOL3o8i7qiKcYik4ehCtCYQiALhWLNjTmU9CGHh6Hsasgh3k+aZCwyehgqfqxTetqXeSqhNYZcHoZOWj9ouH+kacYis8HQQWPft0ashd8s5BySJQN6D6BqAdisI5e17+zbye1hKCZ8rss9Q000FjV5GCp+rNe7Te3s0FGBRuzs26nDw9C7lgs7fLekqcaiRg8r+RBY0PL3XoVBf9apVBV1eVjJoCpHJcubbCwaYLDfddoanatv5FailbqHJDo0t0HXAo/7a2VKA3T4R0egdjVAl2qA/wE66wV9Z9qlZwAAAABJRU5ErkJggg=="
      />
    </svg>
  );
}
