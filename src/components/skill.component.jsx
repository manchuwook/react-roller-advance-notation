import * as React from "react";
import "./skill.component.css";

const SkillComponent = (props) => (
  <svg viewBox="-10 -70 325 175" preserveAspectRatio="xMinYMin meet">
    <path className="focus-background" d="M2.48-18.1h282.64v40.91H2.48z" />
    <g
      style={{
        fill: "#ff0",
        stroke: "#000",
        strokeOpacity: 1,
      }}
    >
      <path
        className="pip"
        transform="scale(1 -1) rotate(-45 -103.855 114.47)"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        d="M85.47 151.71h24.72v24.72H85.47z"
      />
      <path
        d="m97.83 147.3 16.77 16.77-16.77 16.78-16.77-16.78 16.77-16.77m0-1.41-18.19 18.18 18.19 18.19 18.19-18.19z"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        transform="matrix(1 0 0 -1 -24 157.14)"
      />
    </g>
    <path
      className="pip-check"
      d="M73.837-20.047 60.72-6.93 73.837 6.187 86.954-6.93z"
    />
    <g
      style={{
        fill: "#ff0",
        stroke: "#000",
        strokeOpacity: 1,
      }}
    >
      <path
        className="pip"
        transform="scale(1 -1) rotate(-45 -123.825 95.55)"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        d="M65.5 132.79h24.72v24.72H65.5z"
      />
      <path
        d="m77.86 128.38 16.78 16.77-16.78 16.77-16.77-16.77 16.77-16.77m0-1.42-18.18 18.2 18.18 18.18 18.2-18.19z"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        transform="matrix(1 0 0 -1 -24 157.14)"
      />
    </g>
    <path
      className="pip-check"
      d="M53.86-1.12 40.743 11.997 53.86 25.114l13.117-13.117z"
    />
    <g
      style={{
        fill: "#ff0",
        stroke: "#000",
        strokeOpacity: 1,
      }}
    >
      <path
        className="pip"
        transform="scale(1 -1) rotate(-45 -143.705 114.82)"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        d="M45.62 152.06h24.72v24.72H45.62z"
      />
      <path
        d="m57.98 147.65 16.78 16.77-16.78 16.78-16.77-16.78 16.77-16.77m0-1.41L39.8 164.42l18.18 18.2 18.2-18.2z"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        transform="matrix(1 0 0 -1 -24 157.14)"
      />
    </g>
    <path
      className="pip-check"
      d="M33.98-20.39 20.863-7.273 33.98 5.844 47.097-7.273z"
    />
    <g
      style={{
        fill: "#ff0",
        stroke: "#000",
        strokeOpacity: 1,
      }}
    >
      <path
        className="pip"
        transform="scale(1 -1) rotate(-45 -163.645 95.55)"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        d="M25.68 132.79H50.4v24.72H25.68z"
      />
      <path
        d="m38.04 128.38 16.77 16.77-16.77 16.77-16.78-16.77 16.78-16.77m0-1.42-18.19 18.2 18.19 18.18 18.18-18.19z"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        transform="matrix(1 0 0 -1 -24 157.14)"
      />
    </g>
    <path
      className="pip-check"
      d="M14.047-1.127.93 11.99l13.117 13.117L27.164 11.99z"
    />
    <text
      x={-46.98}
      y={-12.86}
      className="skill-focus-name focus-name"
      transform="translate(144 16.7)"
    >
      <tspan x={-46.98} y={-12.86}>
        {props.focus1Name}
      </tspan>
    </text>
    <text
      x={-47.81}
      y={2.15}
      className="skill-focus-notation dice-text"
      transform="translate(144 16.7)"
    >
      <tspan
        x={-47.81}
        y={2.15}
        style={{
          fontSize: 16,
        }}
      >
        {props.roll1Notation}
      </tspan>
    </text>
    <g id={props.diceId1} data-dice-roll={props.rollFormula1} onClick={props.dice}>
      <path
        style={{
          fill: "#806600",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 0.577399,
        }}
        d="M288.27 96.17h-.2L256.7 81.93c-.2 0-.2-.2-.2-.2l-3.46-6.16c-.19-.19-.19-.38 0-.57l16.75-30.6c0-.2.2-.2.38-.2h.2l31.37 13.67s0 .19.2.19l4.03 6.16c.2.2.2.38 0 .58l-17.32 31.18c-.2.19-.2.19-.38.19z"
        transform="matrix(-1 0 0 1 559.83 -67.8)"
      />
      <path
        style={{
          fill: "#000",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 0.577399,
        }}
        d="m270.17 44.97 31.18 13.67 3.85 5.96-17.13 30.8-30.98-14.24-3.28-5.97 16.36-30.22m0-1.54c-.57 0-.96.2-1.15.58l-16.75 30.6c-.19.39-.19.96 0 1.35l3.47 6.16.58.58 31.37 14.24h.58c.38 0 .77-.2.96-.58l17.51-31.18c.2-.38.2-.96-.19-1.35l-4.04-6.16c-.2-.19-.39-.38-.58-.38l-31.37-13.86h-.39z"
        transform="matrix(-1 0 0 1 559.83 -67.8)"
      />
      <path
        style={{
          fill: "#000",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 0.577399,
        }}
        d="m250.73 75.96 3.66 6.74c0 .19.2.38.58.57l33.49 15.79c.58.38 1.35.19 1.73-.39l19.05-33.49c.2-.38.2-.96 0-1.35l-4.42-6.73c0-.2-.2-.39-.39-.39l-33.68-15.2c-.58-.39-1.35-.2-1.54.38L250.73 74.8c-.38.39-.38.77 0 1.16m36-3.08 1.54 23.29-31.38-14.82 10.01-11.93 19.83 3.46m19.82-8.28-17.13 30.03-1.35-22.14 12.51-10.77 5.97 2.88m-3.66-5.77 2.31 3.66-4.42-2.12-16.36-9.82 18.47 8.28m-32.33-14.24.2-.2 3.84 1.54 24.64 15.2-11.94 10.4-20.01-3.27 3.27-23.67m-1.73 3.27-2.9 20.6-9.8 11.93-2.9-5 15.6-27.53z"
        transform="matrix(-1 0 0 1 559.83 -67.8)"
      />
    </g>
    <path className="focus-background" d="M2.98 40.29h282.64V81.2H2.98z" />
    <g
      style={{
        fill: "#ff0",
        stroke: "#000",
        strokeOpacity: 1,
      }}
    >
      <path
        className="pip"
        transform="rotate(-45 -27.436 145.417)"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        d="M85.47 151.71h24.72v24.72H85.47z"
      />
      <path
        d="m97.83 147.3 16.77 16.77-16.77 16.78-16.77-16.78 16.77-16.77m0-1.41-18.19 18.18 18.19 18.19 18.19-18.19z"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        transform="translate(-23.5 -94.04)"
      />
    </g>
    <path
      className="pip-check"
      d="M74.337 83.147 61.22 70.03l13.117-13.117L87.454 70.03z"
    />
    <g
      style={{
        fill: "#ff0",
        stroke: "#000",
        strokeOpacity: 1,
      }}
    >
      <path
        className="pip"
        transform="rotate(-45 -47.406 126.497)"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        d="M65.5 132.79h24.72v24.72H65.5z"
      />
      <path
        d="m77.86 128.38 16.78 16.77-16.78 16.77-16.77-16.77 16.77-16.77m0-1.42-18.18 18.2 18.18 18.18 18.2-18.19z"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        transform="translate(-23.5 -94.04)"
      />
    </g>
    <path
      className="pip-check"
      d="M54.36 64.22 41.243 51.103 54.36 37.986l13.117 13.117z"
    />
    <g
      style={{
        fill: "#ff0",
        stroke: "#000",
        strokeOpacity: 1,
      }}
    >
      <path
        className="pip"
        transform="rotate(-45 -67.286 145.767)"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        d="M45.62 152.06h24.72v24.72H45.62z"
      />
      <path
        d="m57.98 147.65 16.78 16.77-16.78 16.78-16.77-16.78 16.77-16.77m0-1.41L39.8 164.42l18.18 18.2 18.2-18.2z"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        transform="translate(-23.5 -94.04)"
      />
    </g>
    <path
      className="pip-check"
      d="M34.48 83.49 21.363 70.373 34.48 57.256l13.117 13.117z"
    />
    <g
      style={{
        fill: "#ff0",
        stroke: "#000",
        strokeOpacity: 1,
      }}
    >
      <path
        className="pip"
        transform="rotate(-45 -87.226 126.497)"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        d="M25.68 132.79H50.4v24.72H25.68z"
      />
      <path
        d="m38.04 128.38 16.77 16.77-16.77 16.77-16.78-16.77 16.78-16.77m0-1.42-18.19 18.2 18.19 18.18 18.18-18.19z"
        style={{
          fill: "#ff0",
          stroke: "#000",
          strokeOpacity: 1,
        }}
        transform="translate(-23.5 -94.04)"
      />
    </g>
    <path
      className="pip-check"
      d="M14.547 64.227 1.43 51.11l13.117-13.117L27.664 51.11z"
    />
    <text
      x={96}
      y={16.76}
      className="skill-focus-name focus-name"
      transform="translate(.5 43.97)"
    >
      <tspan x={96} y={16.76}>
        {props.focus2Name}
      </tspan>
    </text>
    <text
      x={96.19}
      y={34}
      className="skill-focus-notation dice-text"
      transform="translate(.5 43.97)"
    >
      <tspan
        x={96.19}
        y={34}
        style={{
          fontSize: 16,
        }}
      >
        {props.rollN2otation}
      </tspan>
    </text>
    <g id={props.diceId2} data-dice-roll={props.rollFormula2} onClick={props.dice}>
      <path
        style={{
          fill: "#4b5957",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 0.577399,
        }}
        d="M288.27 96.17h-.2L256.7 81.93c-.2 0-.2-.2-.2-.2l-3.46-6.16c-.19-.19-.19-.38 0-.57l16.75-30.6c0-.2.2-.2.38-.2h.2l31.37 13.67s0 .19.2.19l4.03 6.16c.2.2.2.38 0 .58l-17.32 31.18c-.2.19-.2.19-.38.19z"
        transform="translate(.5 -10.41)"
      />
      <path
        style={{
          fill: "#000",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 0.577399,
        }}
        d="m270.17 44.97 31.18 13.67 3.85 5.96-17.13 30.8-30.98-14.24-3.28-5.97 16.36-30.22m0-1.54c-.57 0-.96.2-1.15.58l-16.75 30.6c-.19.39-.19.96 0 1.35l3.47 6.16.58.58 31.37 14.24h.58c.38 0 .77-.2.96-.58l17.51-31.18c.2-.38.2-.96-.19-1.35l-4.04-6.16c-.2-.19-.39-.38-.58-.38l-31.37-13.86h-.39z"
        transform="translate(.5 -10.41)"
      />
      <path
        style={{
          fill: "#000",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 0.577399,
        }}
        d="m250.73 75.96 3.66 6.74c0 .19.2.38.58.57l33.49 15.79c.58.38 1.35.19 1.73-.39l19.05-33.49c.2-.38.2-.96 0-1.35l-4.42-6.73c0-.2-.2-.39-.39-.39l-33.68-15.2c-.58-.39-1.35-.2-1.54.38L250.73 74.8c-.38.39-.38.77 0 1.16m36-3.08 1.54 23.29-31.38-14.82 10.01-11.93 19.83 3.46m19.82-8.28-17.13 30.03-1.35-22.14 12.51-10.77 5.97 2.88m-3.66-5.77 2.31 3.66-4.42-2.12-16.36-9.82 18.47 8.28m-32.33-14.24.2-.2 3.84 1.54 24.64 15.2-11.94 10.4-20.01-3.27 3.27-23.67m-1.73 3.27-2.9 20.6-9.8 11.93-2.9-5 15.6-27.53z"
        transform="translate(.5 -10.41)"
      />
    </g>
    <text className="skill-name" transform="translate(0 -34)">
      <tspan x={0} y={0}>
        {props.skillName}
      </tspan>
    </text>
  </svg>
);

export default SkillComponent;
