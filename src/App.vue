<script setup lang="ts">
import { reactive } from 'vue';
import CharacterOverview from './components/CharacterOverview.vue'
import CharacterProfile from './components/CharacterProfile.vue'
import CharacterBadas from './components/CharacterBadas.vue'
import type { Character } from './models/character';

const character: Character = reactive({
  name: "DAREDEVIL",
  badas: true,
  overview: {
    description: "Daredevil (Marvel's The Defenders) | Marvel 101"
  },
  profile: {
    description: "Blinded as a boy, Matt Murdock used his sonar-strong hearing to aid him in his martial arts training, becoming a fight-for-the-underdog defense attorney by day and a masked vigilante called Daredevil by night."
  },
})
</script>

<template>
  <div>
    <h1>{{ character.name }}</h1>
    <h2>{{ character.badas ? "Badas" : "Pas Badas"}}</h2>
    <h2>Overview</h2>
    <span>{{ character.overview.description }}</span>
    <h2>Profile</h2>
    <span>{{ character.profile.description }}</span>
  </div>
  <main>
    <CharacterOverview v-model="character.overview"/>
    <CharacterProfile v-model="character.profile"/>
    <CharacterBadas v-model="character.badas"/>
  </main>
</template>
