function slugify(s){ return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }

const weaponsByType = {
  sword: [
    // 5-Stars
    { id:'aquila-favonia', name:"Aquila Favonia", rarity:5, image:`images/weapons/sword/aquila-favonia.png` },
    { id:'absolution', name:"Absolution", rarity:5, image:`images/weapons/sword/absolution.webp` },
    { id:'athame', name:"Athame Artis", rarity:5, image:`images/weapons/sword/athame.webp` },
    { id:'azurelight', name:"Azurelight", rarity:5, image:`images/weapons/sword/azurelight.webp` },
    { id:'freedom-sworn', name:"Freedom-Sworn", rarity:5, image:`images/weapons/sword/freedom-sworn.webp` },
    { id:'haran', name:"Haran Geppaku Futsu", rarity:5, image:`images/weapons/sword/haran.webp` },
    { id:'key', name:"Key of Khaj-Nisut", rarity:5, image:`images/weapons/sword/key.webp` },
    { id:'lofi', name:"Light of Foliar Incision", rarity:5, image:`images/weapons/sword/lofi.webp` },
    { id:'mistsplitter', name:"Mistsplitter Reforged", rarity:5, image:`images/weapons/sword/mistsplitter.webp` },
    { id:'peak-patrol', name:"Peak Patrol Song", rarity:5, image:`images/weapons/sword/peak-patrol.webp` },
    { id:'jade-cutter', name:"Primordial Jade Cutter", rarity:5, image:`images/weapons/sword/jade-cutter.webp` },
    { id:'skyward-blade', name:"Skyward Blade", rarity:5, image:`images/weapons/sword/skyward-blade.webp` },
    { id:'splendor', name:"Splendor of Tranquil Waters", rarity:5, image:`images/weapons/sword/splendor.webp` },
    { id:'summit-shaper', name:"Summit Shaper", rarity:5, image:`images/weapons/sword/summit-shaper.webp` },
    { id:'misuguri', name:"Uraku Misugiri", rarity:5, image:`images/weapons/sword/misuguri.webp` },
    
    // 4-Stars
    { id:'kageuchi', name:"Amenoma Kageuchi", rarity:4, image:`images/weapons/sword/kageuchi.webp` },
    { id:'blackcliff-s', name:"Blackcliff Longsword", rarity:4, image:`images/weapons/sword/blackcliff-s.webp` },
    { id:'eshu', name:"Calamity of Eshu", rarity:4, image:`images/weapons/sword/eshu.webp` },
    { id:'cinnabar', name:"Cinnabar Spindle", rarity:4, image:`images/weapons/sword/cinnabar.webp` },
    { id:'favonious-s', name:"Favonius Sword", rarity:4, image:`images/weapons/sword/favonious-s.webp` },
    { id:'festering', name:"Festering Desire", rarity:4, image:`images/weapons/sword/festering.webp` },
    { id:'finale', name:"Finale of the Deep", rarity:4, image:`images/weapons/sword/finale.webp` },
    { id:'pipe', name:"Fleuve Cendre Ferryman", rarity:4, image:`images/weapons/sword/pipe.webp` },
    { id:'flute', name:"Flute of Ez­pit­zal", rarity:4, image:`images/weapons/sword/flute.webp` },
    { id:'sting', name:"Iron Sting", rarity:4, image:`images/weapons/sword/sting.webp` },
    { id:'isshin', name:"Kagotsurube Isshin", rarity:4, image:`images/weapons/sword/isshin.webp` },
    { id:'lion', name:"Lion's Roar", rarity:4, image:`images/weapons/sword/lion.webp` },
    { id:'moon', name:"Moonweaver's Dawn", rarity:4, image:`images/weapons/sword/moon.webp` },
    { id:'proto-s', name:"Prototype Rancour", rarity:4, image:`images/weapons/sword/proto-s.webp` },
    { id:'royal-s', name:"Royal Longsword", rarity:4, image:`images/weapons/sword/royal-s.webp` },
    { id:'sac-s', name:"Sacrificial Sword", rarity:4, image:`images/weapons/sword/sac-s.webp` },
    { id:'sapwood', name:"Sapwood Blade", rarity:4, image:`images/weapons/sword/sapwood.webp` },
    { id:'serenity', name:"Serenity's Call", rarity:4, image:`images/weapons/sword/serenity.webp` },
    { id:'bone', name:"Sturdy Bone", rarity:4, image:`images/weapons/sword/bone.webp` },
    { id:'flash', name:"The Alley Flash", rarity:4, image:`images/weapons/sword/flash.webp` },
    { id:'black-s', name:"The Black Sword", rarity:4, image:`images/weapons/sword/black-s.webp` },
    { id:'dockhand', name:"The Dockhand's Assistant", rarity:4, image:`images/weapons/sword/dockhand.webp` },
    { id:'the-flute', name:"The Flute", rarity:4, image:`images/weapons/sword/the-flute.webp` },
    { id:'umbrella', name:"Toukabou Shigure", rarity:4, image:`images/weapons/sword/umbrella.webp` },
    { id:'wolf', name:"Wolf-Fang", rarity:4, image:`images/weapons/sword/wolf.webp` },
    { id:'xiphos', name:"Xiphos' Moonlight", rarity:4, image:`images/weapons/sword/xiphos.webp` },
  ],

  claymore: [
    // 5-Stars
    { id:'suns', name:"A Thousand Blazing Suns", rarity:5, image:`images/weapons/claymore/suns.webp` },
    { id:'beacon', name:"Beacon of the Reed Sea", rarity:5, image:`images/weapons/claymore/beacon.webp` },
    { id:'mountain-king', name:"Fang of the Mountain King", rarity:5, image:`images/weapons/claymore/mountain-king.webp` },
    { id:'redhorn', name:"Redhorn Stonethresher", rarity:5, image:`images/weapons/claymore/redhorn.webp` },
    { id:'skyward-c', name:"Skyward Pride", rarity:5, image:`images/weapons/claymore/skyward-c.webp` },
    { id:'broken-pines', name:"Song of Broken Pines", rarity:5, image:`images/weapons/claymore/broken-pines.webp` },
    { id:'unforged', name:"The Unforged", rarity:5, image:`images/weapons/claymore/unforged.webp` },
    { id:'verdict', name:"Verdict", rarity:5, image:`images/weapons/claymore/verdict.webp` },
    { id:'gravestone', name:"Wolf's Gravestone", rarity:5, image:`images/weapons/claymore/gravestone.webp` },

    // 4-Stars
    { id:'akuoumaru', name:"Akuoumaru", rarity:4, image:`images/weapons/claymore/akuoumaru.webp` },
    { id:'blackcliff-c', name:"Blackcliff Slasher", rarity:4, image:`images/weapons/claymore/blackcliff-c.webp` },
    { id:'shaker', name:"Earth Shaker", rarity:4, image:`images/weapons/claymore/shaker.webp` },
    { id:'fav-c', name:"Favonius Greatsword", rarity:4, image:`images/weapons/claymore/fav-c.webp` },
    { id:'insight', name:"Flame-Forged Insight", rarity:4, image:`images/weapons/claymore/insight.webp` },
    { id:'regalia', name:"Forest Regalia", rarity:4, image:`images/weapons/claymore/regalia.webp` },
    { id:'hook', name:"Fruitful Hook", rarity:4, image:`images/weapons/claymore/hook.webp` },
    { id:'nagamasa', name:"Katsuragikiri Nagamasa", rarity:4, image:`images/weapons/claymore/nagamasa.webp` },
    { id:'lblade', name:"Lithic Blade", rarity:4, image:`images/weapons/claymore/lblade.webp` },
    { id:'big-fish', name:"Luxurious Sea-Lord", rarity:4, image:`images/weapons/claymore/big-fish.webp` },
    { id:'flower', name:"Mailed Flower", rarity:4, image:`images/weapons/claymore/flower.webp` },
    { id:'aquamarine', name:"Makhaira Aquamarine", rarity:4, image:`images/weapons/claymore/aquamarine.webp` },
    { id:'master-key', name:"Master Key", rarity:4, image:`images/weapons/claymore/master-key.webp` },
    { id:'saw', name:"Portable Power Saw", rarity:4, image:`images/weapons/claymore/saw.webp` },
    { id:'proto-c', name:"Prototype Archaic", rarity:4, image:`images/weapons/claymore/proto-c.webp` },
    { id:'rain', name:"Rainslasher", rarity:4, image:`images/weapons/claymore/rain.webp` },
    { id:'royal-c', name:"Royal Greatsword", rarity:4, image:`images/weapons/claymore/royal-c.webp` },
    { id:'sac-c', name:"Sacrificial Greatsword", rarity:4, image:`images/weapons/claymore/sac-c.webp` },
    { id:'spine', name:"Serpent Spine", rarity:4, image:`images/weapons/claymore/spine.webp` },
    { id:'snow', name:"Snow-Tombed Star­sil­ver", rarity:4, image:`images/weapons/claymore/snow.webp` },
    { id:'stick', name:"Talking Stick", rarity:4, image:`images/weapons/claymore/stick.webp` },
    { id:'bell', name:"The Bell", rarity:4, image:`images/weapons/claymore/bell.webp` },
    { id:'tidal', name:"Tidal Shadow", rarity:4, image:`images/weapons/claymore/tidal.webp` },
    { id:'whiteblind', name:"Whiteblind", rarity:4, image:`images/weapons/claymore/whiteblind.webp` },
  ],

  polearm: [
    // 5-Star
    { id:'ruins', name:"Bloodsoaked Ruins", rarity:5, image:`images/weapons/polearm/ruins.webp` },
    { id:'calamity', name:"Calamity Queller", rarity:5, image:`images/weapons/polearm/calamity.webp` },
    { id:'crimson', name:"Crimson Moon's Semblance", rarity:5, image:`images/weapons/polearm/crimson.webp` },
    { id:'lightning', name:"Engulfing Lightning", rarity:5, image:`images/weapons/polearm/lightning.webp` },
    { id:'halo', name:"Fractured Halo", rarity:5, image:`images/weapons/polearm/halo.webp` },
    { id:'elegy', name:"Lumidouce Elegy", rarity:5, image:`images/weapons/polearm/elegy.webp` },
    { id:'jade', name:"Primordial Jade Winged-Spear", rarity:5, image:`images/weapons/polearm/jade.webp` },
    { id:'skyward-p', name:"Skyward Spine", rarity:5, image:`images/weapons/polearm/skyward-p.webp` },
    { id:'homa', name:"Staff of Homa", rarity:5, image:`images/weapons/polearm/homa.webp` },
    { id:'scarlet', name:"Staff of the Scar­let Sands", rarity:5, image:`images/weapons/polearm/scarlet.webp` },
    { id:'scents', name:"Symphonist of Scents", rarity:5, image:`images/weapons/polearm/scents.webp` },
    { id:'vortex', name:"Vortex Vanquisher", rarity:5, image:`images/weapons/polearm/vortex.webp` },

    // 4-Star
    { id:'fjord', name:"Ballad of the Fjords", rarity:4, image:`images/weapons/polearm/fjord.webp` },
    { id:'black-p', name:"Blackcliff Pole", rarity:4, image:`images/weapons/polearm/black-p.webp` },
    { id:'pike', name:"Cres­cent Pike", rarity:4, image:`images/weapons/polearm/pike.webp` },
    { id:'deathmatch', name:"Death­match", rarity:4, image:`images/weapons/polearm/deathmatch.webp` },
    { id:'sages', name:"Dialogues of the Desert Sages", rarity:4, image:`images/weapons/polearm/sages.webp` },
    { id:'bane', name:"Dragon's Bane", rarity:4, image:`images/weapons/polearm/bane.webp` },
    { id:'dragonspine', name:"Dragonspine Spear", rarity:4, image:`images/weapons/polearm/dragonspine.webp` },
    { id:'fav-p', name:"Favonius Lance", rarity:4, image:`images/weapons/polearm/fav-p.webp` },
    { id:'rainbow', name:"Foot­print of the Rain­bow", rarity:4, image:`images/weapons/polearm/rainbow.webp` },
    { id:'cross', name:"Ki­ta­in Cross Spear", rarity:4, image:`images/weapons/polearm/cross.webp` },
    { id:'lithic-spear', name:"Lithic Spear", rarity:4, image:`images/weapons/polearm/lithic-spear.webp` },
    { id:'windspear', name:"Mis­sive Wind­spear", rarity:4, image:`images/weapons/polearm/windspear.webp` },
    { id:'moonpiercer', name:"Moonpiercer", rarity:4, image:`images/weapons/polearm/moonpiercer.webp` },
    { id:'bracing', name:"Moun­tain-Brac­ing Bolt", rarity:4, image:`images/weapons/polearm/bracing.webp` },
    { id:'drill', name:"Pro­spect­or's Drill", rarity:4, image:`images/weapons/polearm/drill.webp` },
    { id:'shovel', name:"Pro­spec­tor's Shov­el", rarity:4, image:`images/weapons/polearm/shovel.webp` },
    { id:'proto-p', name:"Prototype Starglitter", rarity:4, image:`images/weapons/polearm/proto-p.webp` },
    { id:'reward', name:"Rightful Reward", rarity:4, image:`images/weapons/polearm/reward.webp` },
    { id:'royal-p', name:"Royal Spear", rarity:4, image:`images/weapons/polearm/royal-p.webp` },
    { id:'sacrificer', name:"Sacrificer's Staff", rarity:4, image:`images/weapons/polearm/sacrificer.webp` },
    { id:'catch', name:"The Catch", rarity:4, image:`images/weapons/polearm/catch.webp` },
    { id:'lantern', name:"Tamayuratei no Ohanashi", rarity:4, image:`images/weapons/polearm/lantern.webp` },
    { id:'wavebreaker', name:"Wavebreaker's Fin", rarity:4, image:`images/weapons/polearm/wavebreaker.webp` },
  ],

  bow: [
    // 5-Star
    { id:'amos', name:"Amos' Bow", rarity:5, image:`images/weapons/bow/amos.webp` },
    { id:'simulacra', name:"Aqua Simulacra", rarity:5, image:`images/weapons/bow/simulacra.webp` },
    { id:'vulture', name:"Astral Vulture's Crimson Plumage", rarity:5, image:`images/weapons/bow/vulture.webp` },
    { id:'elegy', name:"Elegy for the End", rarity:5, image:`images/weapons/bow/elegy.webp`},
    { id:'hunter', name:"Hunter's Path", rarity:5, image:`images/weapons/bow/hunter.webp` },
    { id:'polar', name:"Polar Star", rarity:5, image:`images/weapons/bow/polar.webp` },
    { id:'heart', name:"Sil­ver­show­er Heart­strings", rarity:5, image:`images/weapons/bow/heart.webp` },
    { id:'harp', name:"Sky­ward Harp", rarity:5, image:`images/weapons/bow/harp.webp` },
    { id:'daybreak', name:"The Daybreak Chronicles", rarity:5, image:`images/weapons/bow/daybreak.webp` },
    { id:'magic', name:"The First Great Magic", rarity:5, image:`images/weapons/bow/magic.webp` },
    { id:'pulse', name:"Thundering Pulse", rarity:5, image:`images/weapons/bow/pulse.webp` },  

    // 4-Star
    { id:'alleyh', name:"Alley Hunter", rarity:4, image:`images/weapons/bow/alleyh.webp` },
    { id:'black-b', name:"Blackcliff Warbow", rarity:4, image:`images/weapons/bow/black-b.webp` },
    { id:'chain', name:"Chain Break­er", rarity:4, image:`images/weapons/bow/chain.webp` },
    { id:'cloudforged', name:"Cloudforged", rarity:4, image:`images/weapons/bow/cloudforged.webp` },
    { id:'compound', name:"Compound Bow", rarity:4, image:`images/weapons/bow/compound.webp` },
    { id:'line', name:"End of the Line", rarity:4, image:`images/weapons/bow/line.webp` },
    { id:'twilight', name:"Fad­ing Twi­light", rarity:4, image:`images/weapons/bow/twilight.webp` },
    { id:'fav-b', name:"Favonius Warbow", rarity:4, image:`images/weapons/bow/fav-b.webp` },
    { id:'feathers', name:"Flow­er-Wreath­ed Feath­ers", rarity:4, image:`images/weapons/bow/feathers.webp` },
    { id:'hamayumi', name:"Ha­ma­yumi", rarity:4, image:`images/weapons/bow/hamayumi.webp` },
    { id:'ibis', name:"Ibis Pierc­er", rarity:4, image:`images/weapons/bow/ibis.webp` },
    { id:'squire', name:"King's Squire", rarity:4, image:`images/weapons/bow/squire.webp` },
    { id:'waltz', name:"Mit­ter­nachts Waltz", rarity:4, image:`images/weapons/bow/waltz.webp` },
    { id:'mouun', name:"Mouun's Moon", rarity:4, image:`images/weapons/bow/mouun.webp` },
    { id:'predator', name:"Predator", rarity:4, image:`images/weapons/bow/predator.webp` },
    { id:'proto-b', name:"Prototype Crescent", rarity:4, image:`images/weapons/bow/proto-b.webp` },
    { id:'serpent', name:"Rainbow Serpent's Rain Bow", rarity:4, image:`images/weapons/bow/serpent.webp` },
    { id:'guage', name:"Range Gauge", rarity:4, image:`images/weapons/bow/guage.webp` },
    { id:'royal-b', name:"Royal Bow", rarity:4, image:`images/weapons/bow/royal-b.webp` },
    { id:'rust', name:"rust", rarity:4, image:`images/weapons/bow/rust.webp` },
    { id:'sac-b', name:"Sacrificial Bow", rarity:4, image:`images/weapons/bow/sac-b.webp` },
    { id:'scion', name:"Scion of the Blazing Sun", rarity:4, image:`images/weapons/bow/scion.webp` },
    { id:'solitude', name:"Se­quence of Sol­i­tude", rarity:4, image:`images/weapons/bow/solitude.webp` },
    { id:'snare', name:"Snare Hook", rarity:4, image:`images/weapons/bow/snare.webp` },
    { id:'stillness', name:"Song of Stillness", rarity:4, image:`images/weapons/bow/stillness.webp` },
    { id:'stringless', name:"The Stringless", rarity:4, image:`images/weapons/bow/stringless.webp` },
    { id:'thehunt', name:"The Viri­des­cent Hunt", rarity:4, image:`images/weapons/bow/thehunt.webp` },
    { id:'windblume', name:"Windblume Ode", rarity:4, image:`images/weapons/bow/windblume.webp` },

    // 3-Star
    { id:'slingshot', name:"Slingshot", rarity:3, image:`images/weapons/bow/slingshot.webp` },

  ],

  catalyst: [
    // 5-Star
    { id:'dreams', name:"A Thousand Floating Dreams", rarity:5, image:`images/weapons/catalyst/dreams.webp` },
    { id:'cashflow', name:"Cashflow Supervision", rarity:5, image:`images/weapons/catalyst/cashflow.webp` },
    { id:'crane', name:"Crane's Echoing Call", rarity:5, image:`images/weapons/catalyst/crane.webp` },
    { id:'moonglow', name:"Everlasting Moonglow", rarity:5, image:`images/weapons/catalyst/moonglow.webp` },
    { id:'jadefall', name:"Jadefall's Splendor", rarity:5, image:`images/weapons/catalyst/jadefall.webp` },
    { id:'verity', name:"Kagura's Verity", rarity:5, image:`images/weapons/catalyst/verity.webp` },
    { id:'prayer', name:"Lost Prayer to the Sa­cred Winds", rarity:5, image:`images/weapons/catalyst/prayer.webp` },
    { id:'dust', name:"Memory of Dust", rarity:5, image:`images/weapons/catalyst/dust.webp` },
    { id:'glass', name:"Nightweaver's Looking Glass", rarity:5, image:`images/weapons/catalyst/glass.webp` },
    { id:'truth', name:"Rel­i­quary of Truth", rarity:5, image:`images/weapons/catalyst/truth.webp` },
    { id:'atlas', name:"Skyward Atlas", rarity:5, image:`images/weapons/catalyst/atlas.webp` },
    { id:'starcaller', name:"Star­cal­ler's Watch", rarity:5, image:`images/weapons/catalyst/starcaller.webp` },
    { id:'sunny', name:"Sun­ny Morn­ing Sleep-In", rarity:5, image:`images/weapons/catalyst/sunny.webp` },
    { id:'surf', name:"Surf's Up", rarity:5, image:`images/weapons/catalyst/surf.webp` },
    { id:'tome', name:"Tome of the Eter­nal Flow", rarity:5, image:`images/weapons/catalyst/tome.webp` },
    { id:'wbell', name:"Tulaytullah's Remembrance", rarity:5, image:`images/weapons/catalyst/wbell.webp` },
    { id:'vivid', name:"Vivid Notions", rarity:5, image:`images/weapons/catalyst/vivid.webp` },
    
    // 4-Star
    { id:'horn', name:"Ash-Graven Drinking Horn", rarity:4, image:`images/weapons/catalyst/horn.webp` },
    { id:'blue', name:"Bal­lad of the Bound­less Blue", rarity:4, image:`images/weapons/catalyst/blue.webp` },
    { id:'black-c', name:"Blackcliff Agate", rarity:4, image:`images/weapons/catalyst/black-c.webp` },
    { id:'blackmarrow', name:"Blackmarrow Lantern", rarity:4, image:`images/weapons/catalyst/blackmarrow.webp` },
    { id:'dawning', name:"Dawn­ing Frost", rarity:4, image:`images/weapons/catalyst/dawning.webp` },
    { id:'dodoco', name:"Do­do­co Tales", rarity:4, image:`images/weapons/catalyst/dodoco.webp` },
    { id:'spindelute', name:"E­ther­light Spin­dle­lute", rarity:4, image:`images/weapons/catalyst/spindelute.webp` },
    { id:'eye', name:"Eye of Per­cep­tion", rarity:4, image:`images/weapons/catalyst/eye.webp` },
    { id:'fav-c', name:"Favonius Codex", rarity:4, image:`images/weapons/catalyst/fav-c.webp` },
    { id:'flowing', name:"Flowing Purity", rarity:4, image:`images/weapons/catalyst/flowing.webp` },
    { id:'frostbearer', name:"Frost­bear­er", rarity:4, image:`images/weapons/catalyst/frostbearer.webp` },
    { id:'fruit', name:"Fruit of Ful­fill­ment", rarity:4, image:`images/weapons/catalyst/fruit.webp` },
    { id:'ring', name:"Haku­shin Ring", rarity:4, image:`images/weapons/catalyst/ring.webp` },
    { id:'mappa', name:"Mappa Mare", rarity:4, image:`images/weapons/catalyst/mappa.webp` },
    { id:'oathsworn', name:"Oathsworn Eye", rarity:4, image:`images/weapons/catalyst/oathsworn.webp` },
    { id:'proto-c', name:"Prototype Amber", rarity:4, image:`images/weapons/catalyst/proto-c.webp` },
    { id:'yaxche', name:"Ring of Yaxche", rarity:4, image:`images/weapons/catalyst/yaxche.webp` },
    { id:'royal-c', name:"Royal Grimoire", rarity:4, image:`images/weapons/catalyst/royal-c.webp` },
    { id:'sac-c', name:"Sacrificial Fragments", rarity:4, image:`images/weapons/catalyst/sac-c.webp` },
    { id:'sjade', name:"Sacrificial Jade", rarity:4, image:`images/weapons/catalyst/sjade.webp` },
    { id:'pearl', name:"So­lar Pearl", rarity:4, image:`images/weapons/catalyst/pearl.webp` },
    { id:'widsith', name:"The Widsith", rarity:4, image:`images/weapons/catalyst/widsith.webp` },
    { id:'evenstar', name:"Wan­der­ing E­ven­star", rarity:4, image:`images/weapons/catalyst/evenstar.webp` },
    { id:'waveriding', name:"Waveriding Whirl", rarity:4, image:`images/weapons/catalyst/waveriding.webp` },
    { id:'wine', name:"Wine and Song", rarity:4, image:`images/weapons/catalyst/wine.webp` },
    
    // 3-Star
    { id:'tales', name:"Thrill­ing Tales of Drag­on Slay­ers", rarity:3, image:`images/weapons/catalyst/tales.webp` },


  ]
};

// Flattened list helper
const weapons = Object.keys(weaponsByType).reduce((acc, type) => {
  weaponsByType[type].forEach(w => acc.push(Object.assign({}, w, { type })));
  return acc;
}, []);

function getWeaponImage(type, weapon){
  const id = typeof weapon === 'string' ? weapon : (weapon && weapon.id ? weapon.id : '');
  return `images/weapons/${type}/${id}.png`;
}

// Note: This file is intended to be edited — add or remove weapons and ensure image files are named
// according to the `id` field.
