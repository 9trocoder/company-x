import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import "./TaskCard.css";

const cards = {
  carditems: [
    {
      taskName: "Progress Task Progress",
      taskDescription: "3/5 is completed",
      taskProgressCount: 68,
    },
    {
      taskName: "Registration",
      taskDescription: "3/4 is completed",
      taskProgressCount: 75,
    },
    {
      taskName: "Invite 5 Members",
      taskDescription: "2/5 is completed",
      taskProgressCount: 50,
    },
    {
      taskName: "Setup Profile",
      taskDescription: "3/4 is completed",
      taskProgressCount: 75,
    },
    {
      taskName: "PComplete Workspace",
      taskDescription: "3/5 is completed",
      taskProgressCount: 69,
    },
  ],
};

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r /
    10}deg) rotateZ(${r}deg) scale(${s})`;

function TaskCard() {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(cards.carditems.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.2;
      if (!active && trigger) {
        gone.add(index);
      }
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;
        const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0);
        const scale = active ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!active && gone.size === cards.carditems.length) {
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
      }
    }
  );
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="deck" key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{ transform: interpolate([rot, scale], trans) }}
          >
            {cards.carditems.map((cardam, key) => {
              return (
                <div className="nameam">
                  <h1>{cardam.taskName}</h1>
                  <p>{cardam.taskDescription}</p>
                  <p>{cardam.taskProgressCount}</p>
                </div>
              );
            })}
          </animated.div>
        </animated.div>
      ))}
    </>
  );
}

export default TaskCard;
