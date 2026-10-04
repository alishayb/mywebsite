import { motion } from "framer-motion";
import "./MeshBackground.css";

const LINE_COUNT = 14;

// Deterministic random generator.
// Using this instead of Math.random() keeps the paths stable between renders.
function random(seed: number) {
  const x = Math.sin(seed * 9999.91) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * Generates one organic flowing path.
 *
 * Every line gets:
 * - its own vertical position
 * - its own wave amplitude
 * - its own curvature
 * - its own local variations
 */
function generatePath(index: number, variant = 0) {
  const seed = index * 137 + variant * 791;

  // Spread the lines unevenly instead of using equal spacing.
  const baseSpacing = 120;
  const spacingVariation = (random(seed) - 0.5) * 28;

  const baseY =
    -120 +
    index * baseSpacing +
    spacingVariation;

  // Different lines have different amounts of movement.
  const amplitude =
    30 +
    random(seed + 10) * 100;

  const slope =
    (random(seed + 20) - 0.5) * 80;

  // More points = more organic changes along the line.
  const points = [];

  const pointCount = 9;

  for (let i = 0; i < pointCount; i++) {
    const x = (i / (pointCount - 1)) * 1200 - 100;

    // Large smooth wave.
    const largeWave =
      Math.sin(
        i * 0.75 +
        index * 0.37 +
        variant * 0.55
      ) * amplitude;

    // Smaller irregularity.
    const smallWave =
      Math.sin(
        i * 1.6 +
        index * 0.91 +
        variant * 0.8
      ) *
      (15 + random(seed + i * 3) * 35);

    // Slight overall slope.
    const y =
      baseY +
      largeWave +
      smallWave +
      (x / 1000) * slope;

    points.push({ x, y });
  }

  // Convert points into smooth cubic Bézier curves.
  let path = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const current = points[i];
    const next = points[i + 1];

    const previous = points[i - 1] || current;
    const afterNext = points[i + 2] || next;

    const cp1x =
      current.x +
      (next.x - previous.x) / 6;

    const cp1y =
      current.y +
      (next.y - previous.y) / 6;

    const cp2x =
      next.x -
      (afterNext.x - current.x) / 6;

    const cp2y =
      next.y -
      (afterNext.y - current.y) / 6;

    path += `
      C
      ${cp1x} ${cp1y},
      ${cp2x} ${cp2y},
      ${next.x} ${next.y}
    `;
  }

  return path;
}

// Generate paths once so React doesn't regenerate them on every render.
const waves = Array.from(
  { length: LINE_COUNT },
  (_, index) => ({
    paths: [
      generatePath(index, 0),
      generatePath(index, 1),
      generatePath(index, 2),
    ],

    // Every line has a slightly different speed.
    duration: 18 + random(index * 42) * 18,

    // Different starting points make the animation less synchronized.
    delay: -random(index * 73) * 20,
  })
);

export default function MeshBackground() {
  return (
    <div className="mesh-background">
      <svg
        className="mesh-svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="mesh-softness">
            <feGaussianBlur stdDeviation="1" />
          </filter>
        </defs>

        {waves.map((wave, index) => (
          <motion.path
            key={index}
            className="mesh-line"
            d={wave.paths[0]}
            animate={{
              d: [
                wave.paths[0],
                wave.paths[1],
                wave.paths[2],
                wave.paths[0],
              ],
            }}
            transition={{
              duration: wave.duration,
              delay: wave.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            filter="url(#mesh-softness)"
          />
        ))}
      </svg>
    </div>
  );
}