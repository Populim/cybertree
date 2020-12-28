var all_perks = [];

var athletics = [
	{
		name: "The Rock:",
		ef: ["Enemies cannot knock you down."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:20
	},//0
	{
		name: "Cardio Cure",
		ef: ["Health Regenerates 25% faster as you move."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:12
	},
	{
		name: "Gladiator",
		ef: ["Reduces the amount of Stamina consumed when blocking melee attacks by 20%.",
		"Reduces the amount of Stamina consumed when blocking melee attacks by 40%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:9
	},
	{
		name: "Pack Mule",
		ef: ["Increases carrying capacity by 60."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:1
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},//4
	{
		name: "Like a Butterfly",
		ef: ["Dodging does not drain Stamina."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:11
	},
	{
		name: "Dog of War",
		ef: ["Increases Health Regen in combat by 15%.",
		"Increases Health Regen in combat by 20%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:16
	},
	{
		name: "Steel Sheel",
		ef: ["Steel Sheel increases Armor by 10%."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:18
	},
	{
		name: "Stronger Together",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:12
	},
	{
		name: "Steel and Chrome",
		ef: ["Increases melee damage by 10%.",
		"Increases melee damage by 20%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:9
	},
	{
		name: "Regeneration",
		ef: ["Health Slowly regenerates during combat."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:1
	},
	{
		name: "True Grit",
		ef: ["Increases max Stamina by 10%.",
		"Increases max Stamina by 20%.",
		"Increases max Stamina by 30%."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:5
	},
	{
		name: "Multitasker",
		ef: ["Allows you to shoot while sprinting, sliding and vaulting."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:11
	},
	{
		name: "Marathoner",
		ef: ["Sprinting does not drain Stamina."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:14
	},
	{
		name: "Indestructible",
		ef: ["Reduces all incoming damage by 10%."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:20
	},
	{
		name: "Human Shield",
		ef: ["Increases Armor by 20% when grappling an enemy"],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:14
	},
	{
		name: "Divided Attention",
		ef: ["Allows you to reload while sprinting, sliding and vaulting"],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:11
	},
	{
		name: "Invincible",
		ef: ["Increases max Health by 10%.",
		"Increases max Health by 20%.",
		"Increases max Health by 30%."],
		mV:3,
		aV:0,
		rL:5
	},
	{
		name: "Soft on your feet",
		ef: ["Reduces fall damage by 5%.",
		"Reduces fall damage by 10%.",
		"Reduces fall damage by 15%.",],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Transporter",
		ef: ["Allows you to shoot with Pistols and Revolvers or sprint while carrying a body."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:12
	},
	{
		name: "Wolverine",
		ef: ["Health regen activates 50% faster during combat.",
		"Health regen activates 90% faster during combat."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:16
	},
	{
		name: "Hard Motherfucker",
		ef: ["When entering combat, Armor and Resistances increase by 10% for 10sec.<br>"+
		"+1% per Perk level." ],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:20
	}
]

var annihilation = [
	{
		name: "Speed Demon",
		ef: ["You deal more damage the faster you're moving."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:16
	},//0
	{
		name: "Momentum Shift",
		ef: ["Defeating an enemy increases movement speed by 10% for 10 sec.",
		"Defeating an enemy increases movement speed by 15% for 10 sec.",
		"Defeating an enemy increases movement speed by 20% for 10 sec."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:11
	},
	{
		name: "Pump it, Louder!",
		ef: ["Reduces recoil of Shotguns and Light Machine Guns by 10%.",
		"Reduces recoil of Shotguns and Light Machine Guns by 20%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:5
	},
	{
		name: "Dead Center",
		ef: ["Increases damage to torsos by 10%.",
		"Increases damage to torsos by 20%.",],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:7
	},
	{
		name: "Heavy Lead",
		ef: ["Shotguns and Light Machine Guns knocks back enemies with more force."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:12
	},//4
	{
		name: "Poppin' Off",
		ef: ["Shotguns have a 25% higher chance of dismembering enemies.",
		"Shotguns have a 50% higher chance of dismembering enemies."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:18
	},
	{
		name: "Manic",
		ef: ["When entering combat, your movement speed increases by 20% for 10 sec."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:14
	},
	{
		name: "Mongoose",
		ef: ["Increases Evasion by 25% while reloading."],
		mV:1,
		aV:0,
		rL:9
	},
	{
		name: "Hail of Bullets",
		ef: ["Shotguns and Light Machine Guns deal 3% more damage.",
		"Shotguns and Light Machine Guns deal 6% more damage.",
		"Shotguns and Light Machine Guns deal 9% more damage."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:1
	},
	{
		name: "BloodRush",
		ef: ["Increases movement speed in combat by 5% while carrying a Shotgun or Light Machine Gun.",
		"Increases movement speed in combat by 10% while carrying a Shotgun or Light Machine Gun."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:7
	},
	{
		name: "Skeet Shooter",
		ef: ["Deal 15% more damage to moving targets."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:12
	},
	{
		name: "Hit the Deck",
		ef: ["Increases damage to staggered and knock-down enemies by 10%.",
		"Increases damage to staggered and knock-down enemies by 20%."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:18
	},
	{
		name: "Burn Baby Burn",
		ef: ["Doubles the duration of burn."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:16
	},
	{
		name: "Epimorphosis",
		ef: ["Increases Crit Damage with Shotguns and Light Machine Guns by 15%",
		"Increases Crit Damage with Shotguns and Light Machine Guns by 30%",
		"Increases Crit Damage with Shotguns and Light Machine Guns by 45%"],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: [""],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:7
	},
	{
		name: "final",
		ef: [""],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:7
	}

]

var street_brawler = [
	{
		name: "The Rock:",
		ef: ["Enemies cannot knock you down."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:20
	},//0
	{
		name: "Cardio Cure",
		ef: ["Health Regenerates 25% faster as you move."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:12
	},
	{
		name: "Gladiator",
		ef: ["Reduces the amount of Stamina consumed when blocking melee attacks by 20%.",
		"Reduces the amount of Stamina consumed when blocking melee attacks by 40%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:9
	},
	{
		name: "Pack Mule",
		ef: ["Increases carrying capacity by 60."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:1
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},//4
	{
		name: "Like a Butterfly",
		ef: ["Dodging does not drain Stamina."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:11
	},
	{
		name: "Dog of War",
		ef: ["Increases Health Regen in combat by 15%.",
		"Increases Health Regen in combat by 20%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:16
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	}
]

// reflexes

var assault = [
	{
		name: "The Rock:",
		ef: ["Enemies cannot knock you down."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:20
	},//0
	{
		name: "Cardio Cure",
		ef: ["Health Regenerates 25% faster as you move."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:12
	},
	{
		name: "Gladiator",
		ef: ["Reduces the amount of Stamina consumed when blocking melee attacks by 20%.",
		"Reduces the amount of Stamina consumed when blocking melee attacks by 40%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:9
	},
	{
		name: "Pack Mule",
		ef: ["Increases carrying capacity by 60."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:1
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},//4
	{
		name: "Like a Butterfly",
		ef: ["Dodging does not drain Stamina."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:11
	},
	{
		name: "Dog of War",
		ef: ["Increases Health Regen in combat by 15%.",
		"Increases Health Regen in combat by 20%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:16
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	}
]

var handguns = [
	{
		name: "The Rock:",
		ef: ["Enemies cannot knock you down."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:20
	},//0
	{
		name: "Cardio Cure",
		ef: ["Health Regenerates 25% faster as you move."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:12
	},
	{
		name: "Gladiator",
		ef: ["Reduces the amount of Stamina consumed when blocking melee attacks by 20%.",
		"Reduces the amount of Stamina consumed when blocking melee attacks by 40%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:9
	},
	{
		name: "Pack Mule",
		ef: ["Increases carrying capacity by 60."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:1
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},//4
	{
		name: "Like a Butterfly",
		ef: ["Dodging does not drain Stamina."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:11
	},
	{
		name: "Dog of War",
		ef: ["Increases Health Regen in combat by 15%.",
		"Increases Health Regen in combat by 20%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:16
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	}
]

var blades = [
	{
		name: "The Rock:",
		ef: ["Enemies cannot knock you down."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:20
	},//0
	{
		name: "Cardio Cure",
		ef: ["Health Regenerates 25% faster as you move."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:12
	},
	{
		name: "Gladiator",
		ef: ["Reduces the amount of Stamina consumed when blocking melee attacks by 20%.",
		"Reduces the amount of Stamina consumed when blocking melee attacks by 40%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:9
	},
	{
		name: "Pack Mule",
		ef: ["Increases carrying capacity by 60."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:1
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},//4
	{
		name: "Like a Butterfly",
		ef: ["Dodging does not drain Stamina."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:11
	},
	{
		name: "Dog of War",
		ef: ["Increases Health Regen in combat by 15%.",
		"Increases Health Regen in combat by 20%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:16
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	}
]

// tech

var crafting = [
	{
		name: "The Rock:",
		ef: ["Enemies cannot knock you down."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:20
	},//0
	{
		name: "Cardio Cure",
		ef: ["Health Regenerates 25% faster as you move."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:12
	},
	{
		name: "Gladiator",
		ef: ["Reduces the amount of Stamina consumed when blocking melee attacks by 20%.",
		"Reduces the amount of Stamina consumed when blocking melee attacks by 40%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:9
	},
	{
		name: "Pack Mule",
		ef: ["Increases carrying capacity by 60."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:1
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},//4
	{
		name: "Like a Butterfly",
		ef: ["Dodging does not drain Stamina."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:11
	},
	{
		name: "Dog of War",
		ef: ["Increases Health Regen in combat by 15%.",
		"Increases Health Regen in combat by 20%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:16
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	}
]

//

var engineering = [
	{
		name: "The Rock:",
		ef: ["Enemies cannot knock you down."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:20
	},//0
	{
		name: "Cardio Cure",
		ef: ["Health Regenerates 25% faster as you move."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:12
	},
	{
		name: "Gladiator",
		ef: ["Reduces the amount of Stamina consumed when blocking melee attacks by 20%.",
		"Reduces the amount of Stamina consumed when blocking melee attacks by 40%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:9
	},
	{
		name: "Pack Mule",
		ef: ["Increases carrying capacity by 60."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:1
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},//4
	{
		name: "Like a Butterfly",
		ef: ["Dodging does not drain Stamina."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:11
	},
	{
		name: "Dog of War",
		ef: ["Increases Health Regen in combat by 15%.",
		"Increases Health Regen in combat by 20%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:16
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	}
]

// cool

var stealth = [
	{
		name: "The Rock:",
		ef: ["Enemies cannot knock you down."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:20
	},//0
	{
		name: "Cardio Cure",
		ef: ["Health Regenerates 25% faster as you move."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:12
	},
	{
		name: "Gladiator",
		ef: ["Reduces the amount of Stamina consumed when blocking melee attacks by 20%.",
		"Reduces the amount of Stamina consumed when blocking melee attacks by 40%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:9
	},
	{
		name: "Pack Mule",
		ef: ["Increases carrying capacity by 60."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:1
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},//4
	{
		name: "Like a Butterfly",
		ef: ["Dodging does not drain Stamina."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:11
	},
	{
		name: "Dog of War",
		ef: ["Increases Health Regen in combat by 15%.",
		"Increases Health Regen in combat by 20%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:16
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	}
]

var cold_blood = [
	{
		name: "The Rock:",
		ef: ["Enemies cannot knock you down."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:20
	},//0
	{
		name: "Cardio Cure",
		ef: ["Health Regenerates 25% faster as you move."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:12
	},
	{
		name: "Gladiator",
		ef: ["Reduces the amount of Stamina consumed when blocking melee attacks by 20%.",
		"Reduces the amount of Stamina consumed when blocking melee attacks by 40%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:9
	},
	{
		name: "Pack Mule",
		ef: ["Increases carrying capacity by 60."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:1
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},//4
	{
		name: "Like a Butterfly",
		ef: ["Dodging does not drain Stamina."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:11
	},
	{
		name: "Dog of War",
		ef: ["Increases Health Regen in combat by 15%.",
		"Increases Health Regen in combat by 20%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:16
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	}
]

// intelligence

var breach_protocol = [
	{
		name: "The Rock:",
		ef: ["Enemies cannot knock you down."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:20
	},//0
	{
		name: "Cardio Cure",
		ef: ["Health Regenerates 25% faster as you move."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:12
	},
	{
		name: "Gladiator",
		ef: ["Reduces the amount of Stamina consumed when blocking melee attacks by 20%.",
		"Reduces the amount of Stamina consumed when blocking melee attacks by 40%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:9
	},
	{
		name: "Pack Mule",
		ef: ["Increases carrying capacity by 60."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:1
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},//4
	{
		name: "Like a Butterfly",
		ef: ["Dodging does not drain Stamina."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:11
	},
	{
		name: "Dog of War",
		ef: ["Increases Health Regen in combat by 15%.",
		"Increases Health Regen in combat by 20%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:16
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	}
]

var quickhacking = [
	{
		name: "The Rock:",
		ef: ["Enemies cannot knock you down."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:20
	},//0
	{
		name: "Cardio Cure",
		ef: ["Health Regenerates 25% faster as you move."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:12
	},
	{
		name: "Gladiator",
		ef: ["Reduces the amount of Stamina consumed when blocking melee attacks by 20%.",
		"Reduces the amount of Stamina consumed when blocking melee attacks by 40%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:9
	},
	{
		name: "Pack Mule",
		ef: ["Increases carrying capacity by 60."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:1
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},//4
	{
		name: "Like a Butterfly",
		ef: ["Dodging does not drain Stamina."],
		type:"Passive Body Perk",
		mV:1,
		aV:0,
		rL:11
	},
	{
		name: "Dog of War",
		ef: ["Increases Health Regen in combat by 15%.",
		"Increases Health Regen in combat by 20%."],
		type:"Passive Body Perk",
		mV:2,
		aV:0,
		rL:16
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	},
	{
		name: "Epimorphosis",
		ef: ["Health regenerates up to 70% of max Health outside of combat.",
		"Health regenerates up to 80% of max Health outside of combat.",
		"Health regenerates up to 90% of max Health outside of combat."],
		type:"Passive Body Perk",
		mV:3,
		aV:0,
		rL:7
	}
]

all_perks.push(athletics);
all_perks.push(annihilation);
all_perks.push(street_brawler);

all_perks.push(assault);
all_perks.push(handguns);
all_perks.push(blades);

all_perks.push(crafting);
all_perks.push(engineering);

all_perks.push(cold_blood);
all_perks.push(stealth);

all_perks.push(breach_protocol);
all_perks.push(quickhacking);