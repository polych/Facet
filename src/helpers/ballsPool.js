import Matter from "matter-js";
import a from "../static/images/a.svg";

const ballPool = (scene) => {
  const windowWidth = window.innerWidth;
  const wrapWidth = scene.current.offsetWidth;
  const wrapHeight = scene.current.offsetHeight;
  let menuWidth;
  let balRes;
  let ballApear;
  if (windowWidth >= 1399) {
    menuWidth = 410;
  } else {
    menuWidth = 175;
  }
  if (windowWidth >= 1200) {
    balRes = 0.5;
  } else {
    balRes = 0.1;
  }
  if (windowWidth < 576) {
    ballApear = wrapWidth / 2;
  } else {
    ballApear = wrapWidth / 2 - 200;
  }
  const wall = () => {
    if (windowWidth >= 768) {
      return [
        // walls
        Bodies.rectangle(wrapWidth / 2, 1, wrapWidth, 5, wallConfig),
        Bodies.rectangle(
          wrapWidth / 2,
          wrapHeight - 15,
          wrapWidth,
          100,
          wallConfig
        ),
        Bodies.rectangle(wrapWidth, wrapHeight / 2, 20, wrapHeight, wallConfig),
        Bodies.rectangle(0, wrapHeight / 2, 5, wrapHeight, wallConfig),
        Bodies.rectangle(wrapWidth - 170, wrapHeight - menuWidth, 2000, 40, {
          isStatic: true,
          angle: -Math.PI * 0.248,
          render: {
            fillStyle: "transparent",
          },
        }),
      ];
    } else {
      return [
        // walls
        Bodies.rectangle(wrapWidth / 2, 1, wrapWidth, 5, wallConfig),
        Bodies.rectangle(
          wrapWidth / 2,
          wrapHeight - 15,
          wrapWidth,
          100,
          wallConfig
        ),
        Bodies.rectangle(wrapWidth, wrapHeight / 2, 20, wrapHeight, wallConfig),
        Bodies.rectangle(0, wrapHeight / 2, 5, wrapHeight, wallConfig),
      ];
    }
  };
  const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

  const engine = Engine.create({
    // positionIterations: 20,
  });

  const render = Render.create({
    element: scene.current,
    engine: engine,
    options: {
      width: wrapWidth,
      height: wrapHeight,
      wireframes: false,
    },
  });
  // const ballConfig = [
  //   wrapWidth - 100,
  //   1,
  //   40,
  //   {
  //     restitution: 0.5,
  //     render: {
  //       sprite: {
  //         texture: a,
  //       },
  //     },
  //   },
  // ];
  const ballConfig = [
    ballApear,
    wrapHeight - 160,
    40,
    {
      restitution: balRes,
      render: {
        sprite: {
          texture: a,
        },
      },
    },
  ];
  let balls = [];
  for (let index = 0; index < 15; index++) {
    balls.push(Bodies.circle(...ballConfig));
  }
  balls.forEach((el, index) => (el.val = `value of ball ${index}`));

  const wallConfig = {
    isStatic: true,
    render: {
      fillStyle: "transparent",
    },
  };
  World.add(engine.world, wall());
  World.add(engine.world, balls);
  // add mouse control
  const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0,
        render: {
          visible: false,
        },
      },
    });

  World.add(engine.world, mouseConstraint);

  //Add event with 'mousemove'
  Matter.Events.on(mouseConstraint, "mousemove", function (event) {
    const foundPhysics = Matter.Query.point(balls, event.mouse.position);
    balls.forEach((el) => {
      el.render.sprite.xScale = 1;
      el.render.sprite.yScale = 1;
    });
    if (foundPhysics[0]) {
      foundPhysics[0].render.sprite.xScale = 1.2;
      foundPhysics[0].render.sprite.yScale = 1.2;
    }
  });
  Matter.Events.on(mouseConstraint, "mousedown", function (event) {
    const bodies = engine.world.bodies;
    bodies.forEach((el) => {
      if (Matter.Bounds.contains(el.bounds, mouseConstraint.mouse.position)) {
        console.log(el.val);
      }
    });
  });

  Engine.run(engine);
  Render.run(render);
};
export default ballPool;
//   with animation
//   const ballConfig = [
//     wrapWidth - 100,
//     1,
//     40,
//     {
//       restitution: 0.5,

//     },
//   ];
