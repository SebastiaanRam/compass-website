<script setup>
import HeroSection from './components/HeroSection.vue'
import ThemesSection from './components/ThemesSection.vue'
import SpeakersSection from './components/SpeakersSection.vue'
import ScheduleSection from './components/ScheduleSection.vue'
import RegistrationSection from './components/RegistrationSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <main>
    <HeroSection />
    <ThemesSection />
    <SpeakersSection />
    <ScheduleSection />
    <RegistrationSection />
  </main>
  <FooterSection />
</template>

<style>
/* Remove any inherited layout constraints */
#app {
  width: 100%;
  max-width: none;
  border: none;
  text-align: left;
  display: block;
  min-height: auto;
}
</style>
