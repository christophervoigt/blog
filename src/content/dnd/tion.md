---
name: Tion 'Iron Mane'
class: Fighter
subclass: Echoknight
level: 5
favorite: true
hit_points: 49
armor_class: 16
speed: 35 ft.
proficiency_bonus: 3
initiative: 0

abilities:
  strength: 18
  dexterity: 10
  constitution: 16
  intelligence: 10
  wisdom: 13
  charisma: 10

saving_throws:
  strength:
    base_value: 4
    proficiency: true
  dexterity:
    base_value: 0
  constitution:
    base_value: 3
    proficiency: true
  intelligence:
    base_value: 0
  wisdom:
    base_value: 1
  charisma:
    base_value: 0

senses:
  passive_perception: 14
  darkvision: 60 ft.

training:
  armor:
    - Light Armor
    - Medium Armor
    - Heavy Armor
    - Shields
  weapons:
    - Simple Weapons
    - Martial Weapons
  languages:
    - Common
    - Leonin
  tools:
    - Disguise Kit
    - Horn

skills:
  acrobatics:
    base_value: 0
    proficiency: true
  animal_handling:
    base_value: 1
  arcana:
    base_value: 0
  athletics:
    base_value: 4
    proficiency: true
  deception:
    base_value: 0
  history:
    base_value: 0
  insight:
    base_value: 1
  intimidation:
    base_value: 0
  investigation:
    base_value: 0
  medicine:
    base_value: 1
  nature:
    base_value: 0
  perception:
    base_value: 1
    proficiency: true
  performance:
    base_value: 0
    proficiency: true
  persuasion:
    base_value: 0
  religion:
    base_value: 0
  sleight_of_hand:
    base_value: 0
  stealth:
    base_value: 0
    disadvantage: true
  survival:
    base_value: 1
    proficiency: true

background:
  title: Gladiator
  feature: By Popular Demand
  description: 'You can always find a place to perform in any place that features combat for entertainment - perhaps a gladiatorial arena or secret pit fighting club. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.'

characteristics:
  alignment: Lawful Neutral
  gender: Male
  eyes: green
  size: Medium
  race: Leonin
  hair: dark gray
  height: --
  weight: --
  personality_traits: 'I love a good insult, even one directed at me.'
  ideals: 'Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)'
  bonds: 'I would do anything for the other members of my old troupe.'
  flaws: 'I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.'

actions:
  note: 'Extra Attack - make 2 attacks whenever you take the Attack action.'
  attacks:
    - name: Longsword
      meta: 'Melee 5 ft.'
      to_hit: '+7'
      damage: '1d8+6'
    - name: Claws
      meta: 'Melee 5 ft.'
      to_hit: '+7'
      damage: '1d4+4'
    - name: Handaxe
      meta: 'Thrown 20/60 ft.'
      to_hit: '+7'
      damage: '1d6+4'
    - name: Javelin
      meta: 'Thrown 30/120 ft.'
      to_hit: '+7'
      damage: '1d6+4'
  footnote: 'Spells: none - Tion is a pure martial fighter.'

bonus_actions:
  - type: Bonus
    name: Manifest Echo
    text: 'Summon a spectral duplicate of yourself within 15 ft; you can make attacks from its space and swap places with it once per turn for free.'
  - type: Bonus
    name: Second Wind
    text: 'Regain 1d10+5 hit points. Once per short or long rest.'
  - type: Bonus
    name: Daunting Roar
    text: 'Creatures within 10 ft must succeed on a DC 14 Wisdom save or be frightened until the end of your next turn.'
  - type: Reaction
    name: Opportunity Attack
    text: "Attack a creature that leaves your reach - including from your echo's space."

inventory:
  - group: Weapons
    items:
      - name: Longsword
        note: '1d8 slashing'
      - name: Handaxe
        note: '1d6, 20/60 ft.'
      - name: Javelin
        note: '1d6, 30/120 ft.'
  - group: Armor
    items:
      - name: Scale Mail
        note: 'AC 14'
      - name: Shield
        note: '+2 AC'
  - group: Adventuring Gear
    items:
      - name: Backpack
      - name: Bedroll
      - name: Mess Kit
      - name: Tinderbox
      - name: Torch
        note: 10 pcs.
      - name: Rations
        note: '10 days'
      - name: Waterskin
      - name: Hempen Rope
        note: '50 ft.'
      - name: Disguise Kit
        note: Tool
      - name: Horn
        note: Instrument
  - group: Treasure & Keepsakes
    items:
      - name: "Gladiator's Medallion"
        note: Background
      - name: Belt of Trophy Teeth

coins:
  gold: 14
  silver: 1
  copper: 16

resources:
  - name: Second Wind
    reset: short rest
    max: 1
  - name: Action Surge
    reset: short rest
    max: 1
  - name: Unleash Incarnation
    reset: long rest
    max: 3
  - name: Daunting Roar
    reset: long rest
    max: 3
  - name: Hit Dice (d10)
    reset: long rest
    max: 5

features:
  - source: Fighter
    name: 'Fighting Style: Dueling'
    text: 'While wielding a one-handed melee weapon and no other weapon, you gain +2 to damage rolls with it.'
  - source: Fighter
    name: Second Wind
    text: 'As a bonus action, regain 1d10 + fighter level (5) hit points. Recharges on a short or long rest.'
  - source: Fighter
    name: Action Surge
    text: 'Once per short or long rest, take one additional action on your turn.'
  - source: Fighter
    name: Extra Attack
    text: 'You attack twice whenever you take the Attack action.'
  - source: Echo Knight
    name: Manifest Echo
    text: 'Summon a spectral duplicate (AC 17, 1 HP) within 15 ft. You can move it, make attacks from its space, and once per turn swap places with it for free (up to 15 ft).'
  - source: Echo Knight
    name: Unleash Incarnation
    text: "When you take the Attack action, make one additional melee attack from your echo's space - a number of times equal to your Constitution modifier (3) per long rest."
  - source: Leonin
    name: Darkvision
    text: 'You can see in dim light within 60 ft as if it were bright light, and in darkness as if it were dim light (grayscale only).'
  - source: Leonin
    name: Claws
    text: 'Your claws are natural weapons: an unarmed strike deals 1d4 + Strength modifier slashing damage.'
  - source: Leonin
    name: Daunting Roar
    text: 'As a bonus action, creatures within 10 ft must succeed on a DC 14 Wisdom save or be frightened until the end of your next turn.'

feats:
  - level: Level 4
    name: Ability Score Improvement
    text: '+2 Strength (16 → 18). Boosts the attack and damage of every Strength-based attack, as well as Athletics.'
---
