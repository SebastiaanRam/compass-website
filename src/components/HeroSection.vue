<template>
  <section id="about" class="hero">
    <div class="container hero-content">
      <div class="hero-logo">
        <img src="/compass-logo.png" alt="COMPASS logo" class="hero-logo-icon" />
      </div>
      <span class="badge">2026 SYMPOSIUM</span>
      <h1 class="hero-title">
        Who holds the <span class="highlight">compass</span>?
      </h1>
      <p class="hero-tagline">
        Navigating AI explainability, accountability, and design.
      </p>
      <p class="hero-acronym">
        <strong>C</strong>linical <strong>O</strong>versight through
        <strong>M</strong>eaningful <strong>P</strong>articipation of
        <strong>A</strong>I-<strong>S</strong>upported <strong>S</strong>ystems
      </p>
      <p class="hero-description">
        Join us for a one-day symposium with expert clinicians, ethicists, and
        researchers.
      </p>
      <div class="hero-actions">
        <a href="#register" class="btn-primary">
          Register Now <i class="fas fa-arrow-right"></i>
        </a>
        <a href="#schedule" class="btn-secondary">View Schedule</a>
      </div>
    </div>

    <div class="stats-bar">
      <div class="container stats-container">
        <div class="stat" v-for="stat in stats" :key="stat.label">
          <span class="stat-number">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: "6+", label: "EXPERT SPEAKERS" },
  { value: "4", label: "CORE THEMES" },
  { value: "100+", label: "PARTICIPANTS" },
];
</script>

<style scoped>
.hero {
  background: var(--color-bg-light);
}

.hero-content {
  text-align: center;
  padding: 64px 24px 60px;
}

.hero-logo {
  margin-bottom: 28px;
}

.hero-logo-icon {
  height: 80px;
  width: auto;
}

.badge {
  display: inline-block;
  background: var(--color-primary);
  color: white;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 8px 20px;
  border-radius: 50px;
  margin-bottom: 32px;
}

.hero-title {
  font-size: 52px;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 24px;
  color: var(--color-text-dark);
}

.highlight {
  color: var(--color-primary);
}

.hero-tagline {
  font-size: 22px;
  color: var(--color-navy);
  font-weight: 600;
  max-width: 620px;
  margin: 0 auto 16px;
  line-height: 1.5;
  letter-spacing: 0.3px;
}

.hero-acronym {
  font-size: 15px;
  color: var(--color-text-muted);
  max-width: 580px;
  margin: 0 auto 24px;
  line-height: 1.6;
  letter-spacing: 0.5px;
}

.hero-acronym strong {
  color: var(--color-primary);
  font-weight: 700;
}

.hero-description {
  font-size: 18px;
  color: var(--color-text-muted);
  max-width: 580px;
  margin: 0 auto 40px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.stats-bar {
  border-top: 1px solid var(--color-border);
  padding: 40px 0;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  text-align: center;
}

.stat-number {
  display: block;
  font-family: var(--font-heading);
  font-size: 36px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.stat-label {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: var(--color-text-muted);
}

@media (max-width: 1024px) {
  .hero-content {
    padding: 60px 24px 40px;
  }

  .hero-title {
    font-size: 38px;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 40px 16px 32px;
  }

  .hero-title {
    font-size: 30px;
  }

  .hero-description {
    font-size: 16px;
  }

  .stats-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .stat-number {
    font-size: 28px;
  }
}
</style>
