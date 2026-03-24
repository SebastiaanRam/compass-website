<template>
  <section id="register" class="registration">
    <div class="registration-bg">
      <!-- Decorative compass pattern -->
      <svg
        class="deco-pattern"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="compassPattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <!-- Diamond / compass rose shapes -->
            <path
              d="M100 20 L115 90 L100 160 L85 90 Z"
              fill="rgba(200, 190, 140, 0.15)"
            />
            <path
              d="M20 100 L90 85 L160 100 L90 115 Z"
              fill="rgba(200, 190, 140, 0.10)"
            />
            <circle cx="100" cy="100" r="6" fill="rgba(200, 190, 140, 0.12)" />
            <!-- Small stars -->
            <path
              d="M40 40 L43 48 L40 56 L37 48 Z"
              fill="rgba(200, 190, 140, 0.08)"
            />
            <path
              d="M160 160 L163 168 L160 176 L157 168 Z"
              fill="rgba(200, 190, 140, 0.08)"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#compassPattern)" />
      </svg>
    </div>

    <div class="container registration-container">
      <div class="registration-header">
        <h2 class="section-title">Secure Your Spot at COMPASS 2026</h2>
        <p class="section-subtitle">
          Join the conversation on shaping the future of meaningful AI
          participation in clinical oversight.
        </p>
      </div>

      <div class="registration-form">
        <div v-if="formUrl" class="form-embed">
          <iframe
            :src="formUrl"
            frameborder="0"
            class="ms-form-iframe"
            allowfullscreen
          ></iframe>
        </div>
        <div v-else class="form-placeholder">
          <i class="fas fa-clipboard-list form-placeholder-icon"></i>
          <h3 class="form-placeholder-title">Registration Opening Soon</h3>
          <p class="form-placeholder-text">
            The registration form will be available here shortly. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Replace with the Microsoft Forms URL when available
const formUrl = ref('')
</script>

<style scoped>
.registration {
  position: relative;
  padding: var(--section-padding);
  background: var(--color-bg-light);
  overflow: hidden;
}

.registration-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.deco-pattern {
  width: 100%;
  height: 100%;
}

.registration-container {
  position: relative;
  z-index: 1;
}

.registration-header {
  text-align: center;
  margin-bottom: 40px;
}

.registration-form {
  background: var(--color-card-bg);
  border-radius: 20px;
  max-width: 780px;
  margin: 0 auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.form-embed {
  width: 100%;
}

.ms-form-iframe {
  width: 100%;
  min-height: 600px;
  border: none;
  display: block;
}

.form-placeholder {
  padding: 64px 48px;
  text-align: center;
}

.form-placeholder-icon {
  font-size: 48px;
  color: var(--color-primary);
  margin-bottom: 24px;
}

.form-placeholder-title {
  font-family: var(--font-body);
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 12px;
}

.form-placeholder-text {
  font-size: 16px;
  color: var(--color-text-muted);
  line-height: 1.6;
  max-width: 400px;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .form-placeholder {
    padding: 40px 20px;
  }

  .ms-form-iframe {
    min-height: 500px;
  }
}
</style>
