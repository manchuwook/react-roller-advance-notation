import hbs from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';
import * as skills from './skills.json' assert {type: 'json'}

const __dirname = path.resolve();

const tpl = fs.readFileSync(path.join(__dirname, 'skills.hbs'), { encoding: 'utf-8' });
const artTpl = fs.readFileSync(path.join(__dirname, 'skill-art.hbs'), { encoding: 'utf-8' });

const o = Object.keys(skills.default).map(skillName => {
    const focuses = skills.default[skillName];
    const {
        Level,
        BaseAttribute,
        Roll
    } = skills.default[skillName];
    const transcap = BaseAttribute.toUpperCase().substring(0,3);
    delete focuses.Level;
    delete focuses.BaseAttribute;
    delete focuses.Roll;
    const op = Object.keys(focuses).map((focus, idx) => {
        const { Text } = focuses[focus].Roll;
        const output = { Focus: focus, Notation: Text }
        return output;
    });
    return { SkillName: skillName, Level, BaseAttribute: transcap, Foci: op };
})
console.log(o);

const { compile } = hbs
var template = compile(tpl);
const compiled = template({ skill: o });
var artTemplate = compile(artTpl);
const compiledArt = artTemplate({ skill: o[0] });

fs.writeFileSync('output.svg', compiledArt, { encoding: 'utf-8' });
