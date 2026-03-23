<template>
  <header class="nav-header" :class="{ scrolled: isScrolled }">
    <div class="container nav-container">
      <a href="#" class="logo" @click.prevent="scrollToTop">
        <img class="logo-icon" src="/compass-logo.png" alt="COMPASS logo" />
        <span class="logo-text">COMPASS</span>
      </a>

      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" :aria-expanded="mobileOpen" aria-label="Toggle navigation">
        <i class="fas" :class="mobileOpen ? 'fa-xmark' : 'fa-bars'"></i>
      </button>

      <nav class="nav-links" :class="{ open: mobileOpen }">
        <a href="#about" @click="closeMobile">About</a>
        <a href="#themes" @click="closeMobile">Themes</a>
        <a href="#speakers" @click="closeMobile">Speakers</a>
        <a href="#schedule" @click="closeMobile">Schedule</a>
        <a href="#register" class="btn-primary nav-cta" @click="closeMobile">Register Now</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function closeMobile() {
  mobileOpen.value = false
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(240, 244, 247, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: background var(--transition), border-color var(--transition), box-shadow var(--transition);
}

.nav-header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  border-bottom-color: var(--color-border);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 10;
}

.logo-icon {
  height: 40px;
  width: auto;
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text-dark);
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links a:not(.nav-cta) {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-body);
  transition: color var(--transition);
}

.nav-links a:not(.nav-cta):hover {
  color: var(--color-primary);
}

.nav-cta {
  padding: 10px 24px !important;
  font-size: 14px !important;
}

.mobile-toggle {
  display: none;
  background: none;
  font-size: 22px;
  color: var(--color-text-dark);
  z-index: 10;
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition);
  }

  .nav-links.open {
    opacity: 1;
    pointer-events: all;
  }

  .nav-links a:not(.nav-cta) {
    font-size: 20px;
  }
}
</style>
