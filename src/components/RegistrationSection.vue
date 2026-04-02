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

      <div class="registration-cta">
        <div v-if="formUrl" class="cta-card">
          <i class="fas fa-clipboard-list cta-icon"></i>
          <p class="cta-text">
            Registration is handled via the Radboudumc website. Click the button below to open the form in a new tab.
          </p>
          <a :href="formUrl" target="_blank" rel="noopener noreferrer" class="cta-button">
            Register Now <i class="fas fa-arrow-up-right-from-square"></i>
          </a>
          <p class="cta-perks">
            <i class="fas fa-utensils"></i> Free lunch included
          </p>
        </div>
        <div v-else class="cta-card">
          <i class="fas fa-clipboard-list cta-icon"></i>
          <h3 class="cta-placeholder-title">Registration Opening Soon</h3>
          <p class="cta-text">
            The registration form will be available here shortly. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const formUrl = 'https://www.radboudumc.nl/en/forms/compass-2026-symposium-registration'
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

.registration-cta {
  max-width: 640px;
  margin: 0 auto;
}

.cta-card {
  background: var(--color-card-bg);
  border-radius: 20px;
  padding: 56px 48px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
}

.cta-icon {
  font-size: 48px;
  color: var(--color-primary);
  margin-bottom: 24px;
}

.cta-placeholder-title {
  font-family: var(--font-body);
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 12px;
}

.cta-text {
  font-size: 16px;
  color: var(--color-text-muted);
  line-height: 1.6;
  max-width: 420px;
  margin: 0 auto 32px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--color-primary);
  color: #fff;
  font-family: var(--font-body);
  font-size: 17px;
  font-weight: 600;
  padding: 14px 36px;
  border-radius: 50px;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
}

.cta-perks {
  margin-top: 16px;
  font-size: 14px;
  color: var(--color-text-muted);
}

.cta-perks .fa-utensils {
  color: var(--color-primary);
  margin-right: 6px;
}

.cta-button:hover {
  background: var(--color-primary-dark, var(--color-primary));
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .cta-card {
    padding: 40px 24px;
  }
}
</style>
