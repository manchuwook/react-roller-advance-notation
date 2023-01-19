import * as React from "react";
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
import Ajv, { JSONSchemaType } from 'ajv';
import { addFormats } from 'ajv-formats';

const schema = {
    "title": "Skills",
    "type": "object",
    "description": "Collection of all skills",
    "properties": {
        "Agility": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "description": "Foci: Acrobatics, Escape",
                    "properties": {
                        "Acrobatics": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Escape": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Acrobatics",
                        "Escape"
                    ]
                }
            ],
            "description": "Agility is your ability to move your body with precision. Acrobatic flips (Acrobatics), squeezing through tight spaces, or twisting yourself free from entrapment (Escape) are examples of Agility."
        },
        "Athletics": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Grapple": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Prowess": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Grapple",
                        "Prowess"
                    ]
                }
            ],
            "description": "Athletics governs feats of physical strength that use your whole body core. Engaging in grapples (Grapple), as well as jumping, swimming, and climbing (Prowess) are all examples of Athletics."
        },
        "AxiomaticMagic": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Formulae": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Ritual": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Formulae",
                        "Ritual"
                    ]
                }
            ],
            "description": "Axiomatic Magic is the keen understanding of magical calculations, and equations. Formulae is the recitation of these calculations, while Ritual is a practiced process."
        },
        "BloodMagic": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Inherited": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Morphic": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Inherited",
                        "Morphic"
                    ]
                }
            ],
            "description": "Blood Magic summons the inherent magic in your own blood and body. Inherited focuses on latent energies in your body, while Morphic governs the ability to affect change in your body."
        },
        "BondsMagic": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Ego": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Spirit": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Ego",
                        "Spirit"
                    ]
                }
            ],
            "description": "Bonds Magic deals with spirits, either your own (Ego), or external (Spirit). Bonds Magic is the compelling of these energies through the force of your own confidence."
        },
        "CloseWeapons": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Slice": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Stab": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Slice",
                        "Stab"
                    ]
                }
            ],
            "description": "Close Weapons are small, designed to fight close in, and can only be used in one-handed attacks. They are built for speed and precision using arcing attacks (Slice) or punctures (Stab)."
        },
        "Command": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Inspire": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Intimidate": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Inspire",
                        "Intimidate"
                    ]
                }
            ],
            "description": "Command is your presence, and your ability to inspire friends (Inspire) or bring fear to the hearts of your enemies (Intimidate). Command can bring hope to allies, or fear to enemies."
        },
        "Cunning": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Discern": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Plan": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Discern",
                        "Plan"
                    ]
                }
            ],
            "description": "Cunning is your grasp of complex scenarios, or your ability to ferret out the truth from someone. Gauging others (Discern), and generating tactics (Plan) are examples of Cunning."
        },
        "Dexterity": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Finesse": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Pilfer": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Finesse",
                        "Pilfer"
                    ]
                }
            ],
            "description": "Dexterity is a measure of the precision work your hands are capable of. With Pilfer you can steal objects, or plant them on people, and Finesse is useful for working complex mechanisms."
        },
        "FlexibleWeapons": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Flail": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Whip": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Flail",
                        "Whip"
                    ]
                }
            ],
            "description": "Flexible Weapons are chaotic and hard to wield, relying on momentum, and indirect attack angles. Flails (Arc) are heavy at the end of the chain/rope, while Whips (Lash) are light throughout."
        },
        "FocusMagic": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Banish": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Manipulate": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Banish",
                        "Manipulate"
                    ]
                }
            ],
            "description": "Focus Magic is the directing of magical forces and focusing them with your will to either expel and push those forces (Banish) or control and direct those forces (Manipulate)"
        },
        "HaftedWeapons": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Impale": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Strike": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Impale",
                        "Strike"
                    ]
                }
            ],
            "description": "Hafted Weapons are noted by a haft, and a heavily weighted strike surface, or spear in at least one end of the haft. Strikes require swings, while Impale takes advantage of spear heads."
        },
        "LongArms": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Crossbows": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Rifles": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Crossbows",
                        "Rifles"
                    ]
                }
            ],
            "description": "Long Arms are weapons that must be steadied and sighted to effectively fire them, typically braced at the shoulder. Crossbows are mechanically fired (Quarrel), while Rifles use Black Powder (Shot)."
        },
        "MissileWeapons": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Archery": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Throwing": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Archery",
                        "Throwing"
                    ]
                }
            ],
            "description": "Missile Weapons require coordination and body movement to fire. Archery governs the use of any bow (Arrow), while (Throw) ranges from throwing knives, to slings, and darts."
        },
        "Mobility": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Chase": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Skirmish": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Chase",
                        "Skirmish"
                    ]
                }
            ],
            "description": "Mobility represents your sure footedness. Mobility is your balance, how well you can navigate poor footing (Skirmish), and to chase someone down (Chase)."
        },
        "Observation": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Search": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Survey": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Search",
                        "Survey"
                    ]
                }
            ],
            "description": "Observation is your ability to actively scan for threats or to find hidden things. Trying to keep watch over an area (Survey), or to find a hidden door (Search) , are examples of Observation."
        },
        "Persuade": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Con": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Handle": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Con",
                        "Handle"
                    ]
                }
            ],
            "description": "Persuade is your ability to manipulate others, either through compelling arguments, or by deceiving them. Con governs your ability to lie, while Handle is the power of your negotiation."
        },
        "Stealth": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Concealment": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Infiltration": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Concealment",
                        "Infiltration"
                    ]
                }
            ],
            "description": "Stealth is your ability to hide and sneak around. With Stealth you can hide in dark places (Concealment) or sneak up on someone (Infiltration)."
        },
        "Swords": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Cut": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Thrust": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Cut",
                        "Thrust"
                    ]
                }
            ],
            "description": "Swords are held at one end, with a long cutting edge. Considered the most steadfast melee weapon, Swords can make either Cut (swung) or Thrust (driving the point) attacks."
        },
        "UnarmedCombat": {
            "allOf": [
                {
                    "$ref": "#/definitions/Base-skill_Schema.v1"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "Kick": {
                            "$ref": "#/definitions/Focus-base.v1"
                        },
                        "Punch": {
                            "$ref": "#/definitions/Focus-base.v1"
                        }
                    },
                    "required": [
                        "Kick",
                        "Punch"
                    ]
                }
            ],
            "description": "Unarmed Combat is something everyone has, and doesn’t require a weapon. Punches can be made with the arms, while Kicks are with the legs."
        }
    },
    "required": [
        "Agility",
        "Athletics",
        "AxiomaticMagic",
        "BloodMagic",
        "BondsMagic",
        "CloseWeapons",
        "Command",
        "Cunning",
        "Dexterity",
        "FlexibleWeapons",
        "FocusMagic",
        "HaftedWeapons",
        "LongArms",
        "MissileWeapons",
        "Mobility",
        "Observation",
        "Persuade",
        "Stealth",
        "Swords",
        "Unarmed"
    ],
    "definitions": {
        "Roll_Schema.v1": {
            "title": "Roll",
            "type": "object",
            "description": "A dice roll",
            "examples": [
                {
                    "Base": 3,
                    "Threshold": 9,
                    "Notation": "5d10>7",
                    "Text": "5d (7+)"
                }
            ],
            "properties": {
                "Base": {
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 50,
                    "description": "The number of 10-sided dice to roll"
                },
                "Threshold": {
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 10,
                    "description": "Number to meet or exceed on a 10-sided dice (e.g. 7+)"
                },
                "Notation": {
                    "type": "string",
                    "example": "5d10>7",
                    "description": "Dice notation of roll",
                    "pattern": "^[0-9]+d10>[0-9]+$",
                    uniforms: {
                        component: () => null
                    }
                },
                "Text": {
                    "type": "string",
                    "example": "5d (7+)",
                    "description": "User-friendly view of dice roll",
                    "pattern": "^[0-9]+d \\([0-9]+\\+\\)$",
                    uniforms: {
                        component: () => null
                    }
                }
            },
            "required": [
                "Base",
                "Threshold",
                "Notation",
                "Text"
            ]
        },
        "Base-skill_Schema.v1": {
            "title": "Base Skill",
            "type": "object",
            "discriminator": {
                "propertyName": "skillType"
            },
            "description": "Base structure with roll",
            "properties": {
                "Level": {
                    "type": "string",
                    "enum": [
                        "Inept",
                        "Untrained",
                        "Trained",
                        "Adept",
                        "Expert",
                        "Master",
                        "Grand Master"
                    ],
                    "description": "One of Inept , Untrained, Trained, Adept, Expert, Master, Grand Master"
                },
                "BaseAttribute": {
                    "type": "string",
                    "enum": [
                        "Strength",
                        "Endurance",
                        "Quickness",
                        "Coordination",
                        "Intellect",
                        "Charisma",
                        "Willpower",
                        "Sensitivity"
                    ],
                    "description": "One of Strength, Endurance, Quickness, Coordination, Intellect, Charisma, Willpower, or Sensitivity"
                },
                "Roll": {
                    "$ref": "#/definitions/Roll_Schema.v1",
                    uniforms: {
                        component: () => null
                    }
                }
            },
            "required": [
                "Level",
                "BaseAttribute"
            ],
            "examples": [
                {
                    "Level": "Inept",
                    "BaseAttribute": "Strength",
                    "Roll": {
                        "Base": 3,
                        "Threshold": 9,
                        "Notation": "3d10>9",
                        "Text": "3d10 (9+)"
                    }
                }
            ]
        },
        "Focus-base.v1": {
            "type": "object",
            "discriminator": {
                "propertyName": "focusType"
            },
            "title": "Focus Base",
            "description": "Base object for a skill focus",
            "properties": {
                "Focus": {
                    "type": "integer",
                    "description": "A value between 0 and 4 that adds dice"
                },
                "Roll": {
                    "$ref": "#/definitions/Roll_Schema.v1"
                },
                "focusType": {
                    "type": "string",
                    uniforms: {
                        component: () => null
                    }
                }
            },
            "required": [
                "Focus",
                "Roll"
            ],
            "examples": [
                {
                    "Focus": 0,
                    "Roll": {
                        "Base": 3,
                        "Threshold": 9,
                        "Notation": "3d10>9",
                        "Text": "3d (9+)"
                    },
                    "focusType": "string"
                }
            ]
        }
    }
}

const ajv = new Ajv({
    allErrors: true,
    useDefaults: true,
    strict: false,
    discriminator: true
});
// commonValidator.addKeyword({ keyword: 'example', errors: false });
// commonValidator.addKeyword({ keyword: 'uniforms', errors: false });
// addFormats(ajv);

function createValidator(schema) {
    const validator = ajv.compile(schema);

    return (model) => {
        validator(model);
        return validator.errors?.length ? { details: validator.errors } : null;
    };
}

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);
