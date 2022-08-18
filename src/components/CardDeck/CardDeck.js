// import React, { useState } from "react";
// import { useSpring } from "react-spring";
// import { useDrag } from "@use-gesture/react";
// import TaskCard from "../TaskCard/TaskCard";

// // taskName, taskDescription, taskProgressCount

// const cards = [1, 2, 3, 4, 5];
// const objs = [
//   {
//     taskName: "Progress Task Progress",
//     taskDescription: "3/5 is completed",
//     taskProgressCount: 68,
//   },
//   {
//     taskName: "Registration",
//     taskDescription: "3/4 is completed",
//     taskProgressCount: 75,
//   },
//   {
//     taskName: "Invite 5 Members",
//     taskDescription: "2/5 is completed",
//     taskProgressCount: 50,
//   },
//   {
//     taskName: "Setup Profile",
//     taskDescription: "3/4 is completed",
//     taskProgressCount: 75,
//   },
//   {
//     taskName: "PComplete Workspace",
//     taskDescription: "3/5 is completed",
//     taskProgressCount: 69,
//   },
// ];

// const to = (i) => ({
//   x: 0,
//   y: i * -10,
//   scale: 1,
//   rot: -10 + Math.random() * 20,
//   delay: i * 100,
// });

// const from = (i) => ({ rot: 0, scale: 1.5, y: -1000 });
// const trans = (r, s) =>
//   `perspective(1500px) rotateX(30deg) rotateY(${r /
//     10}deg) rotateZ(${r}deg) scale(${s})`;

// function CardDeck() {
//   const [gone] = useState(() => new Set());
//   const [props, set] = useSpring(cards.length, (i) => ({
//     ...to(i),
//     from: from(i),
//   }));

//   const bind = useDrag(
//     ({
//       args: [index],
//       down,
//       delta: [xDelta],
//       distance,
//       direction: [xDir],
//       velocity,
//     }) => {
//       const trigger = velocity > 0.2;
//       const dir = xDir < 0 ? -1 : 1;
//       if (!down && trigger) gone.add(index);
//       set((i) => {
//         if (index !== i) return;
//         const isGone = gone.has(index);
//         const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;
//         const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
//         const scale = down ? 1.1 : 1;
//         return {
//           x,
//           rot,
//           scale,
//           delay: undefined,
//           config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
//         };
//       });

//       if (!down && gone.size === cards.length)
//         setTimeout(() => gone.clear() || set((i) => to(i)), 600);
//     }
//   );

//   return props.map(({ x, y, rot, scale }, i) => (
//     <TaskCard
//       i={i}
//       x={x}
//       y={y}
//       rot={rot}
//       scale={scale}
//       trans={trans}
//       cards={cards}
//       objs={objs}
//       bind={bind}
//     />
//   ));
// }

// export default CardDeck;
