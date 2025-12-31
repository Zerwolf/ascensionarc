// ===============================
// Ascension Arc — Static Artifact Set Catalog
// Offline, editable
// Image path convention:
// images/artifacts/{id}.png
// Each artifact entry: { id, name }
// ===============================

const artifacts = [
  { id: 'instructor', name: "Instructor" },
  { id: 'glad', name: "Gladiator's Finale" },
  { id: 'wanderer', name: "Wanderer's Troupe" },
  { id: 'noblesse', name: "Noblesse Oblige" },
  { id: 'chivalry', name: "Bloodstained Chivalry" },
  { id: 'maiden', name: "Maiden Beloved" },
  { id: 'viridescent', name: "Viridescent Venerer" },
  { id: 'petra', name: "Archaic Petra" },
  { id: 'bolide', name: "Retracing Bolide" },
  { id: 'thundersoother', name: "Thundersoother" },
  { id: 'tfury', name: "Thundering Fury" },
  { id: 'lavawalker', name: "Lavawalker" },
  { id: 'witch', name: "Crimson Witch of Flames" },
  { id: 'blizzard', name: "Blizzard Strayer" },
  { id: 'depth', name: "Heart of Depth" },
  { id: 'tenacity', name: "Tenacity of the Millelith" },
  { id: 'pale', name: "Pale Flame" },
  { id: 'shimmi', name: "Shimenawa's Reminiscence" },
  { id: 'emblem', name: "Emblem of Severed Fate" },
  { id: 'husk', name: "Husk of Opulent Dreams" },
  { id: 'clam', name: "Ocean-Hued Clam" },
  { id: 'vermillion', name: "Vermillion Hereafter" },
  { id: 'echoes', name: "Echoes of an Offering" },
  { id: 'deepwood', name: "Deepwood Memories" },
  { id: 'gilded', name: "Gilded Dreams" },
  { id: 'desert', name: "Desert Pavilion Chronicle" },
  { id: 'paradise', name: "Flower of Paradise Lost" },
  { id: 'nymph', name: "Nymph's Dream" },
  { id: 'glow', name: "Vourukasha's Glow" },
  { id: 'mare', name: "Marechaussee Hunter" },
  { id: 'troupe', name: "Golden Troupe" },
  { id: 'past', name: "Song of Days Past" },
  { id: 'woods', name: "Nighttime Whispers in the Echoing Woods" },
  { id: 'whimsy', name: "Fragment of Harmonic Whimsy" },
  { id: 'reverie', name: "Unfinished Reverie" },
  { id: 'scroll', name: "Scroll of the Hero of Cinder City" },
  { id: 'codex', name: "Obsidian Codex" },
  { id: 'finale', name: "Finale of the Deep Galleries" },
  { id: 'oath', name: "Long Night's Oath" },
  { id: 'unveiling', name: "Night of the Sky's Unveiling" },
  { id: 'serenade', name: "Silken Moon's Serenade" },
];

function getArtifactImage(artifact){
  return `images/artifacts/${artifact.id}.webp`;
}
