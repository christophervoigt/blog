---
name: Tion 'Iron Mane'
class: Fighter
subclass: Echo Knight
level: 6
favorite: true
hit_points: 58
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

defenses:
  immunities:
    - Critical Hits

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
  attacks:
    - name: Maul, +1
      meta: 'Melee 5 ft.'
      to_hit: '+8'
      damage: '2d6+5'
    - name: Claws
      meta: 'Melee 5 ft.'
      to_hit: '+7'
      damage: '1d4+4'
    - name: Warhammer
      meta: 'Melee 5 ft.'
      to_hit: '+7'
      damage: '1d8+4'
    - name: Longsword
      meta: 'Melee 5 ft.'
      to_hit: '+7'
      damage: '1d8+4'
    - name: Dagger
      meta: 'Thrown 20/60 ft.'
      to_hit: '+7'
      damage: '1d4+4'

bonus_actions:
  - type: Bonus
    name: Manifest Echo
    text: 'Summon a spectral duplicate of yourself within 15 ft; you can make attacks from its space and swap places with it once per turn for free.'
  - type: Bonus
    name: Second Wind
    text: 'Regain 1d10+6 hit points. Once per short or long rest.'
  - type: Bonus
    name: Great Weapon Master
    text: 'On a critical hit or when you drop a creature to 0 HP with a melee weapon, make one extra melee weapon attack as a bonus action.'
  - type: Bonus
    name: Daunting Roar
    text: 'Creatures within 10 ft must succeed on a DC 14 Wisdom save or be frightened until the end of your next turn.'
  - type: Reaction
    name: Opportunity Attack
    text: "Attack a creature that leaves your reach - including from your echo's space."

inventory:
  - group: Weapons
    items:
      - name: Maul, +1
        note: '2d6 bludgeoning, +1'
      - name: Warhammer
        note: '1d8 bludgeoning, versatile'
      - name: Longsword
        note: '1d8 slashing, versatile'
      - name: Dagger
        note: '1d4 slashing, 20/60 ft., 2 pcs.'
  - group: Armor
    items:
      - name: Adamantine Chain Mail
        note: 'AC 16'
      - name: Shield
        note: '+2 AC'
  - group: Adventuring Gear
    items:
      - name: Backpack
      - name: Bedroll
      - name: Mess Kit
      - name: Rations
        note: '10 days'
      - name: Hempen Rope
        note: '50 ft.'
      - name: Tinderbox
      - name: Torch
        note: 10 pcs.
      - name: Waterskin
  - group: Treasure & Keepsakes
    items:
      - name: Brooch of Human Disguise
        note: 'Wondrous item'

coins:
  gold: 514
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
    max: 6

features:
  - source: Fighter
    name: 'Great Weapon Fighting'
    text: 'While wielding a two-handed melee weapon in both hands, you can reroll a 1 or 2 on a damage die (you must use the new roll).'
  - source: Fighter
    name: Second Wind
    text: 'As a bonus action, regain 1d10 + fighter level (6) hit points. Recharges on a short or long rest.'
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
    text: '+2 Strength (15 → 17). Boosts the attack and damage of every Strength-based attack, as well as Athletics.'
  - level: Level 6
    name: Great Weapon Master
    text: 'On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 HP with one, you can make one melee weapon attack as a bonus action. Before a melee attack with a heavy weapon you are proficient with, you can take a -5 penalty to the attack roll to add +10 to the damage. Also grants +1 Strength (17 → 18).'
---
