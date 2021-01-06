window.onload = function() {
	document.getElementById('options').style.display = "block";
	document.getElementById('report').style.display = "none";
};

var routes = {
	'SPROUT TOWER 1F': 1,
	'SPROUT TOWER 2F': 2,
	'TIN TOWER 2F': 3,
	'TIN TOWER 3F': 4,
	'TIN TOWER 4F': 5,
	'TIN TOWER 5F': 6,
	'TIN TOWER 6F': 7,
	'TIN TOWER 7F': 8,
	'TIN TOWER 8F': 9,
	'TIN TOWER 9F': 10,
	'BURNED TOWER ENTRANCE': 11,
	'BURNED TOWER B1F': 12,
	'NATIONAL PARK': 13,
	'RUINS OF ALPH GRASS': 14,
	'RUINS OF ALPH ROOM': 15,
	'UNION CAVE ENTRANCE': 16,
	'UNION CAVE B1F': 17,
	'UNION CAVE B2F': 18,
	'SLOWPOKE WELL ENTRANCE': 19,
	'SLOWPOKE WELL B1F': 20,
	'ILEX FOREST': 21,
	'MT.MORTAR ENTRANCE': 22,
	'MT.MORTAR 1F': 23,
	'MT.MORTAR B1F': 24,
	'MT.MORTAR 2F': 25,
	'ICE PATH ENTRANCE': 26,
	'ICE PATH B1F': 27,
	'ICE PATH B2F': 28,
	'ICE PATH B3F': 29,
	'ICE PATH B4F': 30,
	'WHIRL ISLANDS 1': 31,
	'WHIRL ISLANDS 2': 32,
	'WHIRL ISLANDS 3': 33,
	'WHIRL ISLANDS 4': 34,
	'WHIRL ISLANDS 5': 35,
	'WHIRL ISLANDS 6': 36,
	'WHIRL ISLANDS 7': 37,
	'WHIRL ISLANDS 8': 38,
	'SILVER CAVE 1': 39,
	'SILVER CAVE 2': 40,
	'SILVER CAVE 3': 41,
	'SILVER CAVE 4': 42,
	'DARK CAVE VIOLET SIDE': 43,
	'DARK CAVE BLACKTHORN SIDE': 44,
	'ROUTE 29': 45,
	'ROUTE 30': 46,
	'ROUTE 31': 47,
	'ROUTE 32': 48,
	'ROUTE 33': 49,
	'ROUTE 34': 50,
	'ROUTE 35': 51,
	'ROUTE 36': 52,
	'ROUTE 37': 53,
	'ROUTE 38': 54,
	'ROUTE 39': 55,
	'ROUTE 42': 56,
	'ROUTE 43': 57,
	'ROUTE 44': 58,
	'ROUTE 45': 59,
	'ROUTE 46': 60,
	'SILVER CAVE GRASS': 61,
	'RUINS OF ALPH SURFING': 62,
	'UNION CAVE ENTRANCE SURFING': 63,
	'UNION CAVE B1F SURFING': 64,
	'UNION CAVE B2F SURFING': 65,
	'SLOWPOKE WELL ENTRANCE SURFING': 66,
	'SLOWPOKE WELL B1F SURFING': 67,
	'ILEX FOREST SURFING': 68,
	'MT.MORTAR ENTRANCE SURFING': 69,
	'MT.MORTAR B1F SURFING': 70,
	'MT.MORTAR 2F SURFING': 71,
	'WHIRL ISLANDS 1 SURFING': 72,
	'WHIRL ISLANDS 2 SURFING': 73,
	'WHIRL ISLANDS 3 SURFING': 74,
	'SILVER CAVE SURFING': 75,
	'DARK CAVE VIOLET SIDE SURFING': 76,
	'DARK CAVE BLACKTHORN SIDE SURFING': 77,
	'DRAGON\'S DEN': 78,
	'OLIVINE CITY PORT': 79,
	'ROUTE 30 SURFING': 80,
	'ROUTE 31 SURFING': 81,
	'ROUTE 32 SURFING': 82,
	'ROUTE 34 SURFING': 83,
	'ROUTE 35 SURFING': 84,
	'ROUTE 40 SURFING': 85,
	'ROUTE 41 SURFING': 86,
	'ROUTE 42 SURFING': 87,
	'ROUTE 43 SURFING': 88,
	'ROUTE 44 SURFING': 89,
	'ROUTE 45 SURFING': 90,
	'NEW BARK TOWN': 91,
	'CHERRYGROVE CITY': 92,
	'VIOLET CITY': 93,
	'CIANWOOD CITY': 94,
	'OLIVINE CITY': 95,
	'ECRUTEAK CITY': 96,
	'LAKE OF RAGE': 97,
	'BLACKTHORN CITY': 98,
	'SILVER CAVE': 99,
	'DIGLETT\'S CAVE': 100,
	'MT.MOON': 101,
	'ROCK TUNNEL 1': 102,
	'ROCK TUNNEL 2': 103,
	'VICTORY ROAD': 104,
	'TOHJO FALLS': 105,
	'ROUTE 1': 106,
	'ROUTE 2': 107,
	'ROUTE 3': 108,
	'ROUTE 4': 109,
	'ROUTE 5': 110,
	'ROUTE 6': 111,
	'ROUTE 7': 112,
	'ROUTE 8': 113,
	'ROUTE 9': 114,
	'ROUTE 10': 115,
	'ROUTE 11': 116,
	'ROUTE 13': 117,
	'ROUTE 14': 118,
	'ROUTE 15': 119,
	'ROUTE 16': 120,
	'ROUTE 17': 121,
	'ROUTE 18': 122,
	'ROUTE 21': 123,
	'ROUTE 22': 124,
	'ROUTE 24': 125,
	'ROUTE 25': 126,
	'ROUTE 26': 127,
	'ROUTE 27': 128,
	'ROUTE 28': 129,
	'TOHJO FALLS SURFING': 130,
	'VERMILION CITY PORT': 131,
	'ROUTE 4 SURFING': 132,
	'ROUTE 6 SURFING': 133,
	'ROUTE 9 SURFING': 134,
	'ROUTE 10 SURFING': 135,
	'ROUTE 12 SURFING': 136,
	'ROUTE 13 SURFING': 137,
	'ROUTE 19 SURFING': 138,
	'ROUTE 20 SURFING': 139,
	'ROUTE 21 SURFING': 140,
	'ROUTE 22 SURFING': 141,
	'ROUTE 24 SURFING': 142,
	'ROUTE 25 SURFING': 143,
	'ROUTE 26 SURFING': 144,
	'ROUTE 27 SURFING': 145,
	'ROUTE 28 SURFING': 146,
	'PALLET TOWN': 147,
	'VIRIDIAN CITY': 148,
	'CERULEAN CITY': 149,
	'VERMILION CITY': 150,
	'CELADON CITY': 151,
	'FUCHSIA CITY': 152,
	'CINNABAR ISLAND': 153,
	'DARK CAVE SWARM': 154,
	'ROUTE 35 SWARM': 155,
	'Fishing 1': 156,
	'Fishing 2': 157,
	'Fishing 3': 158,
	'Fishing 4': 159,
	'Fishing 5': 160,
	'Fishing 6': 161,
	'Fishing 7': 162,
	'Fishing 8': 163,
	'Fishing 9': 164,
	'Fishing 10': 165,
	'Fishing 11': 166,
	'Fishing 12': 167,
	'Headbutt Trees 1': 168,
	'Headbutt Trees 2': 169,
	'Headbutt Trees 3': 170,
	'Headbutt Trees 4': 171,
	'Headbutt Trees 5': 172,
	'Headbutt Trees 6': 173,
	'Headbutt Trees 7': 174,
	'Headbutt Trees 8': 175,
	'Headbutt Trees 9': 176,
	'Headbutt Trees 10': 177,
	'Headbutt Trees 11': 178,
	'Headbutt Trees 12': 179,
	'Headbutt Trees 13': 180,
	'Bug Catching': 181
};

var trades = {
	'ABRA': 1,
	'BELLSPROUT': 2,
	'KRABBY': 3,
	'DRAGONAIR': 4,
	'HAUNTER': 5,
	'CHANSEY': 6,
	'DUGTRIO': 7
};

var statics = {
	'LAPRAS': 1,
	'ELECTRODE': 2,
	'ELECTRODE(2)': 3,
	'ELECTRODE(3)': 4,
	'LUGIA': 5,
	'GYARADOS': 6,
	'SUDOWOODO': 7,
	'SNORLAX': 8,
	'HO-OH': 9,
	'SUICUNE': 10,
	'VOLTORB': 11,
	'GEODUDE': 12,
	'KOFFING': 13,
	'SHUCKLE': 14,
	'TYROGUE': 15,
	'TOGEPI': 16,
	'SPEAROW': 17,
	'EEVEE': 18,
	'DRATINI': 19,
	'RAIKOU': 20,
	'ENTEI': 21,
	'ABRA': 22,
	'CUBONE': 23,
	'WOBBUFFET': 24,
	'PIKACHU': 25,
	'PORYGON': 26,
	'LARVITAR': 27,
	'PICHU': 28,
	'PICHU(2)': 29,
	'CLEFFA': 30,
	'CLEFFA(2)': 31,
	'IGGLYBUFF': 32,
	'IGGLYBUFF(2)': 33,
	'SMOOCHUM': 34,
	'SMOOCHUM(2)': 35,
	'MAGBY': 36,
	'MAGBY(2)': 37,
	'ELEKID': 38,
	'ELEKID(2)': 39,
	'TYROGUE(2)': 40,
	'TYROGUE(3)': 41
};

var pokeGoals = {
	"Magcargo or Magneton" : [["MAGCARGO", "MAGNETON"]],
	"Mantine or Skarmory" : [["MANTINE", "SKARMORY"]],
	"Miltank or Tauros" : [["MILTANK", "TAUROS"]],
	"Onix or Scyther" : [["ONIX", "SCYTHER"]],
	"Ho-oh or Lugia" : [["HO-OH", "LUGIA"]],

	"Mewtwo, Mew or Celebi" : [["MEWTWO", "MEW", "CELEBI"]],
	"Hitmonchan, Hitmontop, or Hitmonlee" : [["HITMONCHAN", "HITMONTOP", "HITMONLEE"], ["TYROGUE"]],
	"Articuno, Zapdos, or Moltres" : [["ARTICUNO", "ZAPDOS", "MOLTRES"]],
	"Electabuzz, Jynx, or Magmar" : [["ELECTABUZZ", "JYNX", "MAGMAR"]],
	"Gligar, Delibird, or Sneasel" : [["GLIGAR", "DELIBIRD", "SNEASEL"]],

	"Yanma or Piloswine" : [["YANMA", "PILOSWINE"]],
	"Murkrow or Misdreavus" : [["MURKROW", "MISDREAVUS"]],
	"Venonat or Paras" : [["VENONAT", "PARAS"]],
	"Cubone or Diglett" : [["CUBONE", "DIGLETT"]],

	"Rhydon or Golem": [["RHYDON", "GOLEM"]],
	"Ditto or Smeargle": [["DITTO", "SMEARGLE"]],
	"Mankey or Meowth": [["MANKEY", "MEOWTH"]],
	"Houndour or Snubbull": [["HOUNDOUR", "SNUBULL"]],
	"Phanpy or Teddiursa": [["PHANPY", "TEDDIURSA"]],

	"Omanyte, Kabuto, or Aerodactyl": [["OMANYTE", "KABUTO", "AERODACTYL"]],
	"Dunsparce, Wobbuffet, or Girafarig": [["DUNSPARCE", "WOBBUFFET", "GIRAFARIG"]],
	"Zubat, Koffing, or Grimer": [["ZUBAT", "KOFFING", "GRIMER"]],
	"Heracross, Pinsir, or Aipom": [["HERACROSS", "PINSIR", "AIPOM"]],
	"Suicune, Raikou, or Entei": [["SUICUNE", "RAIKOU", "ENTEI"]],

	"A Dark-Type Pokémon": [["HOUNDOOM", "HOUNDOUR", "SNEASEL", "MURKROW", "TYRANITAR"]],
	"A Steel-Type Pokémon": [["MAGNEMITE", "MAGNETON", "SKARMORY", "SCIZOR", "STEELIX", "FORRETRESS"]],
	"Pidgeotto or Raticate": [["PIDGEOTTO", "RATICATE"], ["PIDGEY", "RATTATA"]],
	"Ariados or Ledian": [["ARIADOS", "LEDIAN"], ["SPINARAK", "LEDYBA"]],
	"Sandslash or Arbok": [["SANDSLASH", "ARBOK"], ["SANDSHREW", "EKANS"]],
	"Corsola or Qwilfish": [["CORSOLA", "QWILFISH"]],

	"Furret or Kadabra": [["FURRET", "KADABRA"], ["SENTRET", "ABRA"]],
	"Noctowl or Fearow": [["NOCTOWL", "FEAROW"], ["HOOTHOOT", "SPEAROW"]],

	"Nidoking or Nidoqueen": [["NIDOKING", "NIDOQUEEN"], ["NIDORAN♂", "NIDORINO", "NIDORAN♀", "NIDORINA"]],
	"Vileplume or Victreebel": [["VILEPLUME", "VICTREEBEL"], ["ODDISH", "GLOOM", "BELLSPROUT", "WEEPINBELL"]],
	"Bayleef, Quilava, or Croconaw": [["BAYLEEF", "QUILAVA", "CROCONAW"], ["CHIKORITA", "CYNDAQUIL", "TOTODILE"]],
	"Ivysaur, Charmeleon, or Wartortle": [["IVYSAUR", "CHARMELEON", "WARTORTLE"], ["BULBASAUR", "CHARMANDER", "SQUIRTLE"]],
	"Beedrill or Butterfree": [["BEEDRILL", "BUTTERFREE"], ["WEEDLE", "KAKUNA", "CATERPIE", "METAPOD"]],

	"Starmie or Cloyster": [["STARMIE", "CLOYSTER"], ["STARYU", "SHELLDER"]],
	"Arcanine or Ninetales": [["ARCANINE", "NINETALES"], ["GROWLITHE", "VULPIX"]],
	"Poliwrath or Slowking": [["POLIWRATH", "SLOWKING"], ["POLIWHIRL", "SLOWPOKE"]],
	"Clefable or Wigglytuff": [["CLEFABLE", "WIGGLYTUFF"], ["CLEFAIRY", "JIGGLYPUFF"]],
	"Sunflora or Exeggutor": [["SUNFLORA", "EXEGGUTOR"], ["SUNKERN", "EXEGGCUTE"]],

	"3 Different Genderless Pokémon": [["MAGNEMITE", "MAGNETON", "VOLTORB", "ELECTRODE", "STARYU", "STARMIE", "PORYGON", "PORYGON2",
	"DITTO", "ARTICUNO", "ZAPDOS", "MOLTRES", "MEWTWO", "MEW", "UNOWN", "RAIKOU", "ENTEI", "SUICUNE", "LUGIA", "HO-OH", "CELEBI"], ["STARYU"]],
	"2 Different Baby Pokémon": [["PICHU"," CLEFFA", "IGGLYBUFF", "TOGEPI", "TYROGUE", "SMOOCHUM", "ELEKID", "MAGBY"]],
	"2 Different Eeveelutions": [["JOLTEON", "FLAREON", "VAPOREON", "ESPEON", "UMBREON"], ["EEVEE"]],

	"A Dragon-Type Pokémon": [["DRATINI", "DRAGONAIR", "DRAGONITE", "KINGDRA"]],
	"A Ghost-Type Pokémon": [["GASTLY", "HAUNTER", "GENGAR", "MISDREAVUS"]],
	"Forretress or Octillery": [["FORRETRESS", "OCTILLERY"]],
	"Ponyta or Horsea": [["PONYTA", "HORSEA"]],
	"Alakazam, Gengar, or Machamp": [["ALAKAZAM", "GENGAR", "MACHAMP"]]
}

function handleLogFile(){
	const file = document.getElementById('logfile').files[0];
	let reader = new FileReader();
	reader.onload = event => {
		var input = reader.result;
		const text = input.split('\n');
		var obtainablePokes = {};
		obtainablePokes.starters = extractStarters(text);
		obtainablePokes.statics = extractStatics(text, generateLegalStaticsArray());
		obtainablePokes.trades = extractTrades(text, generateTradesArray());
		obtainablePokes.routes = extractRoutes(text, generateRoutesArray());
		analyseObtainableGoals(obtainablePokes);
		toggleReportDisplay();
	}
	reader.readAsText(file, "UTF-8");
	return false;	
}

function toggleReportDisplay() {
	const options = document.getElementById('options');
	const report = document.getElementById('report');
	if(report.style.display == 'none'){
		options.style.display = 'none';
        report.style.display = 'block';
    }
    else {
        options.style.display = 'block';
        report.style.display = 'none';
        report.innerHTML = '<h2> Report </h2>\n<button type="button" onclick="toggleReportDisplay()">Go Back</button>\n<h3> Goals Not Obtainable: </h3>\n<ul id="unobtainable">\n</ul>\n<h3> Goals Obtainable: </h3>\n<ul id="obtainable">\n</ul>\n<button type="button" onclick="toggleReportDisplay()">Go Back</button>'
        
    }
}	

function analyseObtainableGoals(obtainablePokes) {
	const actualPokemon = 0;
	const preEvolution = 1;
	var keys = Object.keys(pokeGoals);
	for(var i = 0; i < keys.length; ++i) {
		// requirements has two lists -> one with the actual Pokemon and another with the preevos that can be evolved into the Pokemon
		var requirements = pokeGoals[keys[i]];
		var availabilities = [];
		for(var j = 0; j < requirements[actualPokemon].length; ++j) {
			var locations = checkPokemonAvailability(obtainablePokes, requirements[actualPokemon][j]);
			if(Object.keys(locations).length > 0)
				availabilities.push(locations);
		}
		if(requirements.length == 2){
			var availabilities_evolve = [];
			for(var j = 0; j < requirements[1].length; ++j) {
				var locations = checkPokemonAvailability(obtainablePokes, requirements[preEvolution][j]);
				if(Object.keys(locations).length > 0)
					availabilities_evolve.push(locations);
			}
			addAvailabilitiesToWebPage(keys[i], availabilities, availabilities_evolve);
		}
		else
			addAvailabilitiesToWebPage(keys[i], availabilities, []);
	}
}

// Returns a dictionary with location -> rarity for pokemon
function checkPokemonAvailability(obtainablePokes, pokemon) {
	const landEncounterSlots = 7;
	const waterEncounterSlots = 3;
	const bugCatchingSlots = 10;
	if (pokemon == "PICHU")
		console.log("Teste");
	var availabilities = {};
	var starterIndex = obtainablePokes.starters.indexOf(pokemon);
	if(starterIndex != -1) availabilities.starter = "-";
	var static_keys = Object.keys(obtainablePokes.statics);
	for(var i = 0; i < static_keys.length; ++i){
		if(obtainablePokes.statics[static_keys[i]].localeCompare(pokemon) == 0)
			availabilities[static_keys[i]] = '-';
	}
	// List with the names of the routes, used to access the name -> 
	var routeKeys = Object.keys(obtainablePokes.routes);
	for(var i = 0; i < routeKeys.length; ++i) {
		var encounterTableSlots = obtainablePokes.routes[routeKeys[i]].length;
		for(var j = 0; j < encounterTableSlots; ++j) {
			if(obtainablePokes.routes[routeKeys[i]][j][0] == pokemon) {

				if(encounterTableSlots == landEncounterSlots) {
					if(j < 2)
						availabilities[routeKeys[i]] = 'COMMON';
					else if (j < 4)
						availabilities[routeKeys[i]] = 'UNCOMMON';
					else
						availabilities[routeKeys[i]] = 'RARE';
				}
				else if(encounterTableSlots == waterEncounterSlots) {
					if(j == 0)
						availabilities[routeKeys[i]] = 'COMMON';
					else if (j == 1)
						availabilities[routeKeys[i]] = 'UNCOMMON';
					else
						availabilities[routeKeys[i]] = 'RARE';
				}
				else
					availabilities[routeKeys[i]] = "";
			}
		}

	}
	return availabilities;
}

function addAvailabilitiesToWebPage(goal, availabilities, availabilities_evolve) {
	var html = "";
	// Both the actual Pokemons and its pre evos can be used to complete the goal
	if(availabilities.length > 0 && availabilities_evolve.length > 0) {
		for(var i = 0; i < availabilities.length; ++i) {
			var locations = Object.keys(availabilities[i]);
			for(var j = 0; j < locations.length; ++j) {
				if(locations[j] == 'starter'){
					var pokemon = pokeGoals[goal][0][i];
					html += ("<li> Choose the starter " + pokemon + ". </li>");
				}
				else if(Object.keys(statics).indexOf(locations[j]) != -1) {
					var pokemon = pokeGoals[goal][0][i];
					var location = locations[j];
					html += ("<li>" + pokemon + " is available via the static " + locationRenamer(location) + ". </li>");
				}
				else {
					var pokemon = pokeGoals[goal][0][i];
					var rarity = availabilities[i][locations[j]];
					var location = locations[j];
					html += ("<li> Catch " + pokemon + ", " + rarity + " in " + locationRenamer(location) + ". </li>");
				}
			}
		}
		for(var i = 0; i < availabilities_evolve.length; ++i) {
			var locations = Object.keys(availabilities_evolve[i]);
			for(var j = 0; j < locations.length; ++j) {
				if(locations[j] == 'starter'){
					var pokemon = pokeGoals[goal][1][i];
					html += ("<li> Choose and evolve the starter " + pokemon + ". </li>");
				}
				else if(Object.keys(statics).indexOf(locations[j]) != -1){
					var pokemon = pokeGoals[goal][1][i];
					var location = locations[j];
					html += ("<li> Evolve " + pokemon + ", available via the static " + locationRenamer(location) + ". </li>");
				}
				else {
					var pokemon = pokeGoals[goal][1][i];
					var rarity = availabilities_evolve[i][locations[j]];
					var location = locations[j];
					html += ("<li> Catch and evolve " + pokemon + ", " + rarity + " in " + locationRenamer(location) + ". </li>");
				}
			}
		}
		html = "<ul>" + html + "</ul>";
		html = "<li>" + goal + html + "</li>";
		document.getElementById("obtainable").innerHTML += html;
	}
	// Only the actual Pokemons can be used to complete the goal
	else if(availabilities.length > 0) {
		for(var i = 0; i < availabilities.length; ++i) {
			var locations = Object.keys(availabilities[i]);
			for(var j = 0; j < locations.length; ++j) {
				if(locations[j] == 'starter'){
					var pokemon = pokeGoals[goal][0][i];
					html += ("<li> Choose the starter " + pokemon + ". </li>");
				}
				else if(Object.keys(statics).indexOf(locations[j]) != -1) {
					var pokemon = pokeGoals[goal][0][i];
					var location = locations[j];
					html += ("<li>" + pokemon + " is available via the static " + locationRenamer(location) + ". </li>");
				}
				else {
					var pokemon = pokeGoals[goal][0][i];
					var rarity = availabilities[i][locations[j]];
					var location = locations[j];
					html += ("<li> Catch " + pokemon + ", " + rarity + " in " + locationRenamer(location) + ". </li>");
				}
			}
		}
		html = "<ul>" + html + "</ul>";
		html = "<li>" + goal + html + "</li>";
		document.getElementById("obtainable").innerHTML += html;
	}
	// Goal is not available at all
	else {
		html = "<li>" + goal + html + "</li>";
		document.getElementById("unobtainable").innerHTML += html;
	}
}

function locationRenamer(text) {
	if (text == "CUBONE")
		return "CUBONE (second Goldenrod Game Corner Pokemon)";
	else if (text == "ABRA")
		return "ABRA (first Goldenrod Game Corner Pokemon)";
	else if (text == "WOBBUFFET")
		return "WOBBUFFET (third Goldenrod Game Corner Pokemon)";
	else if (text == "ELECTRODE")
		return "first ELECTRODE";
	else if (text == "ELECTRODE(2)")
		return "second ELECTRODE";
	else if (text == "ELECTRODE(3)")
		return "third ELECTRODE";
	else if (text == "GEODUDE")
		return "GEODUDE (Rocket Hideout Trap)";
	else if (text == "KOFFING")
		return "KOFFING (Rocket Hideout Trap)";
	else if (text == "VOLTORB")
		return "VOLTORB (Rocket Hideout Trap)";
	else if (text == "Bug Catching")
		return "BUG CATCHING CONTEST";
	return text;
}

function extractStarters(text){
	const index = indexOf(text, "Random Starters");
	let re = /Set starter \d to (.+)/
	let starter1 = text[index+1].match(re)[1];
	let starter2 = text[index+2].match(re)[1];
	let starter3 = text[index+3].match(re)[1];
	return [starter1, starter2, starter3];
}

function extractRoutes(text, routesArray){
	const index = indexOf(text, "Wild Pokemon");
	var ret = {};
	var line;
	for(var i=0; i<routesArray.length;++i){
		ret[routesArray[i]] = extractRoute(text[index+routes[routesArray[i]]]);
	}
	return ret;
}

function extractRoute(encounterTable){
	var re = /Set #\d\d?\d? - .+ - (.+)/
	let pokes = encounterTable.match(re)[1].split(', ');
	var ret = [];
	for(var i = 0; i < pokes.length; ++i) {
		poke = pokes[i].split(' Lv');
		ret.push([poke[0], parseInt(poke[1])]);
	}
	console.log(ret);
	return ret;
}

function extractTrades(text, tradesArray){
	const index = indexOf(text, "In-Game Trades");
	var ret = {};
	var line;
	for(var i=0; i< tradesArray.length;++i){
		line = text[index+trades[tradesArray[i]]].split(" ");
		pokemon = line[line.length-1];
		// Remove the trailing newline
		ret[tradesArray[i]] = pokemon.substring(0, pokemon.length - 1);
	}
	return ret;
}

function extractStatics(text, staticsArray){
	const index = indexOf(text, "Static Pokemon");
	var ret = [];
	var line;
	for(var i=0; i<staticsArray.length;++i){
		line = text[index+statics[staticsArray[i]]].split(" ");
		pokemon = line[line.length-1];
		// Remove the trailing newline
		ret[staticsArray[i]] = pokemon.substring(0, pokemon.length - 1);
	}
	return ret;
}

function generateRoutesArray() {
	routesArray = [];
	if(document.getElementById('1').checked) routesArray.push('ROUTE 1');
	if(document.getElementById('2').checked) routesArray.push('ROUTE 2');
	if(document.getElementById('3').checked) routesArray.push('ROUTE 3');
	if(document.getElementById('4').checked) routesArray.push('ROUTE 4');
	if(document.getElementById('5').checked) routesArray.push('ROUTE 5');
	if(document.getElementById('6').checked) routesArray.push('ROUTE 6');
	if(document.getElementById('7').checked) routesArray.push('ROUTE 7');
	if(document.getElementById('8').checked) routesArray.push('ROUTE 8');
	if(document.getElementById('9').checked) routesArray.push('ROUTE 9');
	if(document.getElementById('10').checked) routesArray.push('ROUTE 10');
	if(document.getElementById('11').checked) routesArray.push('ROUTE 11');
	if(document.getElementById('13').checked) routesArray.push('ROUTE 13');
	if(document.getElementById('14').checked) routesArray.push('ROUTE 14');
	if(document.getElementById('15').checked) routesArray.push('ROUTE 15');
	if(document.getElementById('16').checked) routesArray.push('ROUTE 16');
	if(document.getElementById('17').checked) routesArray.push('ROUTE 17');
	if(document.getElementById('18').checked) routesArray.push('ROUTE 18');
	if(document.getElementById('21').checked) routesArray.push('ROUTE 21');
	if(document.getElementById('22').checked) routesArray.push('ROUTE 22');
	if(document.getElementById('24').checked) routesArray.push('ROUTE 24');
	if(document.getElementById('25').checked) routesArray.push('ROUTE 25');
	if(document.getElementById('26').checked) routesArray.push('ROUTE 26');
	if(document.getElementById('27').checked) routesArray.push('ROUTE 27');
	if(document.getElementById('28').checked) routesArray.push('ROUTE 28');
	if(document.getElementById('29').checked) routesArray.push('ROUTE 29');
	if(document.getElementById('30').checked) routesArray.push('ROUTE 30');
	if(document.getElementById('31').checked) routesArray.push('ROUTE 31');
	if(document.getElementById('32').checked) routesArray.push('ROUTE 32');
	if(document.getElementById('33').checked) routesArray.push('ROUTE 33');
	if(document.getElementById('34').checked) routesArray.push('ROUTE 34');
	if(document.getElementById('35').checked) routesArray.push('ROUTE 35');
	if(document.getElementById('36').checked) routesArray.push('ROUTE 36');
	if(document.getElementById('37').checked) routesArray.push('ROUTE 37');
	if(document.getElementById('38').checked) routesArray.push('ROUTE 38');
	if(document.getElementById('39').checked) routesArray.push('ROUTE 39');
	if(document.getElementById('42').checked) routesArray.push('ROUTE 42');
	if(document.getElementById('43').checked) routesArray.push('ROUTE 43');
	if(document.getElementById('44').checked) routesArray.push('ROUTE 44');
	if(document.getElementById('45').checked) routesArray.push('ROUTE 45');
	if(document.getElementById('46').checked) routesArray.push('ROUTE 46');

	if(document.getElementById('4surfing').checked) routesArray.push('ROUTE 4 SURFING');
	if(document.getElementById('6surfing').checked) routesArray.push('ROUTE 6 SURFING');
	if(document.getElementById('9surfing').checked) routesArray.push('ROUTE 8 SURFING');
	if(document.getElementById('10surfing').checked) routesArray.push('ROUTE 10 SURFING');
	if(document.getElementById('12surfing').checked) routesArray.push('ROUTE 12 SURFING');
	if(document.getElementById('13surfing').checked) routesArray.push('ROUTE 13 SURFING');
	if(document.getElementById('19surfing').checked) routesArray.push('ROUTE 19 SURFING');
	if(document.getElementById('20surfing').checked) routesArray.push('ROUTE 20 SURFING');
	if(document.getElementById('21surfing').checked) routesArray.push('ROUTE 21 SURFING');
	if(document.getElementById('22surfing').checked) routesArray.push('ROUTE 22 SURFING');
	if(document.getElementById('24surfing').checked) routesArray.push('ROUTE 24 SURFING');
	if(document.getElementById('25surfing').checked) routesArray.push('ROUTE 25 SURFING');
	if(document.getElementById('26surfing').checked) routesArray.push('ROUTE 26 SURFING');
	if(document.getElementById('27surfing').checked) routesArray.push('ROUTE 27 SURFING');
	if(document.getElementById('28surfing').checked) routesArray.push('ROUTE 28 SURFING');
	if(document.getElementById('30surfing').checked) routesArray.push('ROUTE 30 SURFING');
	if(document.getElementById('31surfing').checked) routesArray.push('ROUTE 31 SURFING');
	if(document.getElementById('32surfing').checked) routesArray.push('ROUTE 32 SURFING');
	if(document.getElementById('34surfing').checked) routesArray.push('ROUTE 34 SURFING');
	if(document.getElementById('35surfing').checked) routesArray.push('ROUTE 35 SURFING');
	if(document.getElementById('36surfing').checked) routesArray.push('ROUTE 40 SURFING');
	if(document.getElementById('37surfing').checked) routesArray.push('ROUTE 41 SURFING');
	if(document.getElementById('42surfing').checked) routesArray.push('ROUTE 42 SURFING');
	if(document.getElementById('43surfing').checked) routesArray.push('ROUTE 43 SURFING');
	if(document.getElementById('44surfing').checked) routesArray.push('ROUTE 44 SURFING');
	if(document.getElementById('45surfing').checked) routesArray.push('ROUTE 45 SURFING');

	if(document.getElementById('newbark').checked) routesArray.push('NEW BARK TOWN');
	if(document.getElementById('cherrygrove').checked) routesArray.push('CHERRYGROVE CITY');
	if(document.getElementById('violet').checked) routesArray.push('VIOLET CITY');
	if(document.getElementById('cianwood').checked) routesArray.push('CIANWOOD CITY');
	if(document.getElementById('ecruteak').checked) routesArray.push('ECRUTEAK CITY');
	if(document.getElementById('lake').checked) routesArray.push('LAKE OF RAGE');
	if(document.getElementById('blackthorn').checked) routesArray.push('BLACKTHORN CITY');
	if(document.getElementById('den').checked) routesArray.push('DRAGON\'S DEN');

	if(document.getElementById('pallet').checked) routesArray.push('PALLET TOWN');
	if(document.getElementById('viridian').checked) routesArray.push('VIRIDIAN CITY');
	if(document.getElementById('cerulean').checked) routesArray.push('CERULEAN CITY');
	if(document.getElementById('celadon').checked) routesArray.push('CELADON CITY');
	if(document.getElementById('fuschia').checked) routesArray.push('FUSCHIA CITY');
	if(document.getElementById('cinnabar').checked) routesArray.push('CINNABAR ISLAND');

	if(document.getElementById('national').checked) routesArray.push('NATIONAL PARK');
	if(document.getElementById('contest').checked) routesArray.push('Bug Catching');
	if(document.getElementById('moon').checked) routesArray.push('MT.MOON');
	if(document.getElementById('diglett').checked) routesArray.push('DIGLETT\'S CAVE');
	if(document.getElementById('vroad').checked) routesArray.push('VICTORY ROAD');

	if(document.getElementById('unionentrance').checked) routesArray.push('UNION CAVE ENTRANCE');
	if(document.getElementById('unionb1f').checked) routesArray.push('UNION CAVE B1F');
	if(document.getElementById('unionb2f').checked) routesArray.push('UNION CAVE B2F');
	if(document.getElementById('unionentrancesurfing').checked) routesArray.push('UNION CAVE ENTRANCE SURFING');
	if(document.getElementById('unionb1fsurfing').checked) routesArray.push('UNION CAVE B1F SURFING');
	if(document.getElementById('unionb2fsurfing').checked) routesArray.push('UNION CAVE B2F SURFING');

	if(document.getElementById('roaroom').checked) routesArray.push('RUINS OF ALPH ROOM');
	if(document.getElementById('roagrass').checked) routesArray.push('RUINS OF ALPH GRASS');
	if(document.getElementById('roawater').checked) routesArray.push('RUINS OF ALPH SURFING');

	if(document.getElementById('wellentrance').checked) routesArray.push('SLOWPOKE WELL ENTRANCE');
	if(document.getElementById('wellb1f').checked) routesArray.push('SLOWPOKE WELL B1F');
	if(document.getElementById('wellentrancesurfing').checked) routesArray.push('SLOWPOKE WELL ENTRANCE SURFING');
	if(document.getElementById('wellb1fsurfing').checked) routesArray.push('SLOWPOKE WELL B1F SURFING');
	
	if(document.getElementById('darkviolet').checked) routesArray.push('DARK CAVE VIOLET SIDE');
	if(document.getElementById('darkblackthorn').checked) routesArray.push('DARK CAVE BLACKTHORN SIDE');
	if(document.getElementById('darkvioletsurfing').checked) routesArray.push('DARK CAVE VIOLET SIDE SURFING');
	if(document.getElementById('darkblackthornsurfing').checked) routesArray.push('DARK CAVE BLACKTHORN SIDE SURFING');

	if(document.getElementById('mortarentrance').checked) routesArray.push('MT.MORTAR ENTRANCE');
	if(document.getElementById('mortar1f').checked) routesArray.push('MT.MORTAR 1F');
	if(document.getElementById('mortar2f').checked) routesArray.push('MT.MORTAR 2F');
	if(document.getElementById('mortarb1f').checked) routesArray.push('MT.MORTAR B1F');
	if(document.getElementById('mortarentrancesurfing').checked) routesArray.push('MT.MORTAR ENTRANCE SURFING');
	if(document.getElementById('mortar2fsurfing').checked) routesArray.push('MT.MORTAR 2F SURFING');
	if(document.getElementById('mortarb1fsurfing').checked) routesArray.push('MT.MORTAR B1F SURFING');

	if(document.getElementById('mortarb1fsurfing').checked) routesArray.push('MT.MORTAR B1F SURFING');
	if(document.getElementById('mortarb1fsurfing').checked) routesArray.push('MT.MORTAR B1F SURFING');
	if(document.getElementById('mortarb1fsurfing').checked) routesArray.push('MT.MORTAR B1F SURFING');
	if(document.getElementById('mortarb1fsurfing').checked) routesArray.push('MT.MORTAR B1F SURFING');
	if(document.getElementById('mortarb1fsurfing').checked) routesArray.push('MT.MORTAR B1F SURFING');

	if(document.getElementById('rocksmash').checked) routesArray.push('Headbutt Trees 13');

	if(document.getElementById('olivine').checked) {
		routesArray.push('OLIVINE CITY');
		routesArray.push('OLIVINE CITY PORT');
	}

	if(document.getElementById('vermilion').checked) {
		routesArray.push('VERMILION CITY');
		routesArray.push('VERMILION CITY PORT');
	}

	if(document.getElementById('tunnel').checked) {
		routesArray.push('ROCK TUNNEL 1');
		routesArray.push('ROCK TUNNEL 2');
	}	

	if(document.getElementById('ilex').checked) {
		routesArray.push('ILEX FOREST');
		routesArray.push('ILEX FOREST SURFING');
	}


	if(document.getElementById('tohjo').checked) {
		routesArray.push('TOHJO FALLS');
		routesArray.push('TOHJO FALLS SURFING');
	}	

	if(document.getElementById('sprout').checked) {
		routesArray.push('SPROUT TOWER 1F');
		routesArray.push('SPROUT TOWER 2F');
	}

	if(document.getElementById('tin').checked) {
		routesArray.push('TIN TOWER 2F');
		routesArray.push('TIN TOWER 3F');
		routesArray.push('TIN TOWER 4F');
		routesArray.push('TIN TOWER 5F');
		routesArray.push('TIN TOWER 6F');
		routesArray.push('TIN TOWER 7F');
		routesArray.push('TIN TOWER 8F');
		routesArray.push('TIN TOWER 9F');
	}

	if(document.getElementById('burned').checked) {
		routesArray.push('BURNED TOWER ENTRANCE');
		routesArray.push('BURNED TOWER B1F');
	}

	if(document.getElementById('ice').checked) {
		routesArray.push('ICE PATH ENTRANCE');
		routesArray.push('ICE PATH B1F');
		routesArray.push('ICE PATH B2F');
		routesArray.push('ICE PATH B3F');
		routesArray.push('ICE PATH B4F');
	}


	if(document.getElementById('whirl').checked) {
		routesArray.push('WHIRL ISLANDS 1');
		routesArray.push('WHIRL ISLANDS 2');
		routesArray.push('WHIRL ISLANDS 3');
		routesArray.push('WHIRL ISLANDS 4');
		routesArray.push('WHIRL ISLANDS 5');
		routesArray.push('WHIRL ISLANDS 6');
		routesArray.push('WHIRL ISLANDS 7');
		routesArray.push('WHIRL ISLANDS 8');
		routesArray.push('WHIRL ISLANDS 1 SURFING');
		routesArray.push('WHIRL ISLANDS 2 SURFING');
		routesArray.push('WHIRL ISLANDS 3 SURFING');
	}

	if(document.getElementById('silver').checked) {
		routesArray.push('SILVER CAVE');
		routesArray.push('SILVER CAVE 1');
		routesArray.push('SILVER CAVE 2');
		routesArray.push('SILVER CAVE 3');
		routesArray.push('SILVER CAVE 4');
		routesArray.push('SILVER CAVE GRASS');
		routesArray.push('SILVER CAVE SURFING');
	}

	if(document.getElementById('fishing').checked) {
		routesArray.push('Fishing 1');
		routesArray.push('Fishing 2');
		routesArray.push('Fishing 3');
		routesArray.push('Fishing 4');
		routesArray.push('Fishing 5');
		routesArray.push('Fishing 7');
		routesArray.push('Fishing 8');
		routesArray.push('Fishing 9');
		routesArray.push('Fishing 10');
		routesArray.push('Fishing 11');
		routesArray.push('Fishing 12');
	}

	if(document.getElementById('headbutt').checked) {
		routesArray.push('Headbutt Trees 1');
		routesArray.push('Headbutt Trees 2');
		routesArray.push('Headbutt Trees 3');
		routesArray.push('Headbutt Trees 4');
		routesArray.push('Headbutt Trees 5');
		routesArray.push('Headbutt Trees 6');
		routesArray.push('Headbutt Trees 7');
		routesArray.push('Headbutt Trees 8');
		routesArray.push('Headbutt Trees 9');
		routesArray.push('Headbutt Trees 10');
		routesArray.push('Headbutt Trees 11');
		routesArray.push('Headbutt Trees 12');
	}

	if(document.getElementById('swarms').checked) {
		routesArray.push('DARK CAVE SWARM');
		routesArray.push('ROUTE 35 SWARM');
		routesArray.push('Fishing 6');
	}

	return routesArray;
}

function generateTradesArray(){
	tradesArray = [];
	if(document.getElementById('abra').checked) tradesArray.push('ABRA');
	if(document.getElementById('bellsprout').checked) tradesArray.push('BELLSPROUT');
	if(document.getElementById('krabby').checked) tradesArray.push('KRABBY');
	if(document.getElementById('dragonair').checked) tradesArray.push('DRAGONAIR');
	if(document.getElementById('haunter').checked) tradesArray.push('HAUNTER');
	if(document.getElementById('dugtrio').checked) tradesArray.push('DUGTRIO');
	if(document.getElementById('chansey').checked) tradesArray.push('CHANSEY');
	return tradesArray;
}

function generateLegalStaticsArray(){
	staticsArray = [];
	if(document.getElementById('lapras').checked) staticsArray.push('LAPRAS');
	if(document.getElementById('lugia').checked) staticsArray.push('LUGIA');
	if(document.getElementById('gyarados').checked) staticsArray.push('GYARADOS');
	if(document.getElementById('sudowoodo').checked) staticsArray.push('SUDOWOODO');
	if(document.getElementById('snorlax').checked) staticsArray.push('SNORLAX');
	if(document.getElementById('hooh').checked) staticsArray.push('HO-OH');
	if(document.getElementById('suicune').checked) staticsArray.push('SUICUNE');
	if(document.getElementById('shuckie').checked) staticsArray.push('SHUCKLE');
	if(document.getElementById('tyrogue').checked) staticsArray.push('TYROGUE');
	if(document.getElementById('mysteryegg').checked) staticsArray.push('TOGEPI');
	if(document.getElementById('kenya').checked) staticsArray.push('SPEAROW');
	if(document.getElementById('eevee').checked) staticsArray.push('EEVEE');
	if(document.getElementById('dratini').checked) staticsArray.push('DRATINI');
	if(document.getElementById('roamers').checked) {
		staticsArray.push('RAIKOU');
		staticsArray.push('ENTEI');
	}
	if(document.getElementById('gamecornerjohto').checked) {
		staticsArray.push('ABRA');
		staticsArray.push('CUBONE');
		staticsArray.push('WOBBUFFET');
	}
	if(document.getElementById('gamecornerkanto').checked) {
		staticsArray.push('PIKACHU');
		staticsArray.push('PORYGON');
		staticsArray.push('LARVITAR');
	}
	if(document.getElementById('rockettraps').checked) {
		staticsArray.push('VOLTORB');
		staticsArray.push('GEODUDE');
		staticsArray.push('KOFFING');
	}
	if(document.getElementById('electrodes').checked) {
		staticsArray.push('ELECTRODE');
		staticsArray.push('ELECTRODE(2)');
		staticsArray.push('ELECTRODE(3)');
	}
	if(document.getElementById('oddegg').checked) {
		staticsArray.push('PICHU');
		staticsArray.push('CLEFFA');
		staticsArray.push('IGGLYBUFF');
		staticsArray.push('MAGBY');
		staticsArray.push('SMOOCHUM');
		staticsArray.push('ELEKID');
		staticsArray.push('TYROGUE(2)');
	}
	if(document.getElementById('oddeggshinies').checked) {
		staticsArray.push('PICHU(2)');
		staticsArray.push('CLEFFA(2)');
		staticsArray.push('IGGLYBUFF(2)');
		staticsArray.push('MAGBY(2)');
		staticsArray.push('SMOOCHUM(2)');
		staticsArray.push('ELEKID(2)');
		staticsArray.push('TYROGUE(3)');
	}
	staticsArray.sort(function(a,b){return a-b;});
	return staticsArray;
}

function indexOf(text, expression){
	for(var i = 0; i < text.length; ++i){
		if(text[i].includes(expression))
			return i;
	}

}
