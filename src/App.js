import "./styles.css";
import DisplayResults from "@3d-dice/dice-ui/src/displayResults"; // fui index exports are messed up -> going to src
import DiceParser from "@3d-dice/dice-parser-interface";
import { Dice } from "./components/diceBox";
import AdvRollBtn from "./components/AdvRollBtn";
import SkillComponent from './components/skill.component';

import * as skills from './samples/skills.json' // assert {type: 'json'}
import { useEffect } from "react";

// create Dice Roll Parser to handle complex notations
const DRP = new DiceParser();

// create display overlay for final results
const DiceResults = new DisplayResults("#dice-box");

// initialize the Dice Box outside of the component
Dice.init().then(() => {
  // clear dice on click anywhere on the screen
  document.addEventListener("mousedown", () => {
    const diceBoxCanvas = document.getElementById("dice-canvas");
    if (window.getComputedStyle(diceBoxCanvas).display !== "none") {
      Dice.hide().clear();
      DiceResults.clear();
    }
  });
});

let items = Object.keys(skills.default).map(skillName => {
  const focuses = skills.default[skillName];
  const {
    Level,
    BaseAttribute,
    Roll
  } = focuses;
  const transcap = BaseAttribute.toUpperCase().substring(0, 3);
  delete focuses.Level;
  delete focuses.BaseAttribute;
  delete focuses.Roll;
  const op = Object.keys(focuses).map((focus, idx) => {
    const { Text } = focuses[focus].Roll;
    const output = { Focus: focus, RollFormula: Roll.Notation, Notation: Text }
    return output;
  });
  return { SkillName: `${skillName} (${transcap})`, Level, BaseAttribute: transcap, Foci: op };
});

export default function App() {
  useEffect(() => {
  });

  // This method is triggered whenever dice are finished rolling
  Dice.onRollComplete = (results) => {
    console.log(results);

    // handle any rerolls
    const rerolls = DRP.handleRerolls(results);
    if (rerolls.length) {
      rerolls.forEach((roll) => Dice.add(roll, roll.groupId));
      return rerolls;
    }
    // if no rerolls needed then parse the final results
    const finalResults = DRP.parseFinalResults(results);

    // show the results
    DiceResults.showResults(finalResults);
  };

  // trigger dice roll
  const rollDice = (notation, group) => {
    // trigger the dice roll using the parser
    Dice.show().roll(DRP.parseNotation(notation));
  };

  return (
    <div className="App">
      <h1>SaGE Skill Rolls</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="skill-list col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="row d-flex">
              {items.map((item, idx) => {
                return <div class="col-md-5" key={idx}>
                  <SkillComponent
                    skillName={item.SkillName}
                    diceId1={`${item.Foci[0].Focus.toLowerCase()}-dice`}
                    focus1Name={item.Foci[0].Focus}
                    roll1Notation={item.Foci[0].Notation}
                    rollFormula1={item.Foci[0].RollFormula}
                    diceId2={`${item.Foci[1].Focus.toLowerCase()}-dice`}
                    focus2Name={item.Foci[1].Focus}
                    rollN2otation={item.Foci[1].Notation}
                    rollFormula2={item.Foci[0].RollFormula}
                    dice={(ev) => {
                      const qs = document.querySelector(`#${ev.currentTarget.id}`)
                      const dr = qs.dataset['diceRoll']
                      console.log(`clicked: ${(dr)}`)
                      rollDice(dr)
                    }}
                  ></SkillComponent>
                </div>
              })}
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="row d-flex">
              {/* <div id="dice-box"></div>

            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
