<template>
  <section id="about" class="hero">
    <div class="container hero-content">
      <div class="hero-logo">
        <img
          src="/compass-logo.webp"
          alt="COMPASS logo"
          class="hero-logo-icon"
        />
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
        <strong>M</strong>eaningful <strong>P</strong>articipation in
        <strong>A</strong>I-<strong>S</strong>upported <strong>S</strong>ystems
      </p>
      <p class="hero-description">
        Join us for a one-day symposium with expert clinicians, ethicists, and
        researchers.
      </p>
      <div class="hero-actions">
        <a href="https://www.radboudumc.nl/en/forms/compass-2026-symposium-registration" target="_blank" rel="noopener noreferrer" class="btn-primary">
          Register Now <i class="fas fa-arrow-right"></i>
        </a>
        <a href="#schedule" class="btn-secondary">View Schedule</a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

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
}
</style>
