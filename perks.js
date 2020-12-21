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

var annihilation = [
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