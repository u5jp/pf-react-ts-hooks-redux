import React from "react";
const Particles = require("react-tsparticles");

const BackGround = () => {
  console.log("memo");
  return (
    <Particles
      id="tsparticles"
      width="100vw"
      height="100vh"
      style={{ position: "fixed", zIndex: "-1", top: "0", left: "0" }}
      options={{
        background: {
          color: {
            value: "#efefef",
          },
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          opacity: 1,
        },
        backgroundMask: {
          cover: {
            color: {
              value: "#fff",
            },
            opacity: 1,
          },
          enable: false,
        },
        detectRetina: true,
        fpsLimit: 30,
        infection: {
          cure: false,
          delay: 0,
          enable: false,
          infections: 0,
          stages: [],
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            // onClick: {
            //   enable: false,
            //   mode: "push",
            // },
            // onDiv: {
            //   ids: [],
            //   enable: false,
            //   mode: [],
            //   type: "circle",
            // },
            // onHover: {
            //   enable: true,
            //   mode: "bubble",
            //   parallax: {
            //     enable: false,
            //     force: 2,
            //     smooth: 10,
            //   },
            // },
            resize: true,
          },
          modes: {
            attract: {
              distance: 200,
              duration: 0.4,
              speed: 1,
            },
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              color: {
                value: "#ff0000",
              },
              size: 40,
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              links: {
                opacity: 1,
              },
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              speed: 1,
            },
            slow: {
              factor: 3,
              radius: 200,
            },
            trail: {
              delay: 1,
              quantity: 1,
            },
          },
        },
        particles: {
          collisions: {
            enable: false,
            mode: "bounce",
          },
          color: {
            value: "#1b1e34",
            animation: {
              enable: false,
              speed: 1,
              sync: true,
            },
          },
          links: {
            blink: false,
            color: {
              value: "#ffffff",
            },
            consent: false,
            distance: 200,
            enable: false,
            opacity: 1,
            shadow: {
              blur: 5,
              color: {
                value: "#00ff00",
              },
              enable: false,
            },
            triangles: {
              enable: false,
            },
            width: 2,
            warp: false,
          },
          move: {
            angle: 90,
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            direction: "none",
            enable: true,
            noise: {
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
              },
              enable: false,
            },
            outMode: "out",
            random: false,
            speed: 3,
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: "#000000",
              },
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
              factor: 1000,
            },
            limit: 0,
            value: 6,
          },
          opacity: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 1,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 0.3,
            },
            value: 0.5,
          },
          rotate: {
            animation: {
              enable: false,
              speed: 0,
              sync: false,
            },
            direction: "clockwise",
            path: false,
            random: false,
            value: 0,
          },
          shadow: {
            blur: 0,
            color: {
              value: "#000000",
            },
            enable: false,
            offset: {
              x: 0,
              y: 0,
            },
          },
          shape: {
            options: {
              polygon: {
                nb_sides: 6,
              },
              star: {
                nb_sides: 6,
              },
              image: {
                src: "https://cdn.matteobruni.it/images/particles/github.svg",
                width: 100,
                height: 100,
              },
              images: {
                src: "https://cdn.matteobruni.it/images/particles/github.svg",
                width: 100,
                height: 100,
              },
            },
            type: "polygon",
          },
          size: {
            animation: {
              destroy: "none",
              enable: false,
              minimumValue: 40,
              speed: 5,
              startValue: "max",
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 100,
            },
            value: 160,
          },
          stroke: {
            width: 0,
            color: {
              value: "#000",
              animation: {
                enable: false,
                speed: 1,
                sync: true,
              },
            },
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
            particles: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
          },
        },
        pauseOnBlur: true,
      }}
    />
  );
};

export default BackGround;
