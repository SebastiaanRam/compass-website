<template>
  <section id="speakers" class="speakers">
    <div class="container">
      <div class="speakers-header">
        <div class="speakers-header-text">
          <h2 class="section-title">Featured Speakers</h2>
          <p class="speakers-subtitle">
            Hear from pioneers at the forefront of medical artificial intelligence
            and clinical innovation.
          </p>
        </div>
        <a href="#speakers" class="view-all">
          View all speakers <i class="fas fa-arrow-right"></i>
        </a>
      </div>

      <div class="speakers-grid">
        <div class="speaker-card" v-for="speaker in speakers" :key="speaker.name">
          <div class="speaker-image" :style="{ background: speaker.gradient }">
            <span v-if="speaker.keynote" class="keynote-badge">KEYNOTE</span>
            <div class="speaker-initials">{{ speaker.initials }}</div>
          </div>
          <div class="speaker-info">
            <h3 class="speaker-name">{{ speaker.name }}</h3>
            <p class="speaker-role">{{ speaker.role }}</p>
            <p class="speaker-bio">{{ speaker.bio }}</p>
            <div class="speaker-socials">
              <a v-for="social in speaker.socials" :key="social.icon" href="#" :aria-label="social.label">
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const speakers = [
  {
    name: 'Dr. Sarah Chen',
    initials: 'SC',
    role: 'Head of AI in Diagnostics, Radboudumc',
    bio: 'Pioneering work in multimodal deep learning for early cancer detection.',
    keynote: true,
    gradient: 'linear-gradient(135deg, #006991 0%, #00AFDC 100%)',
    socials: [
      { icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
      { icon: 'fab fa-x-twitter', label: 'X' },
    ],
  },
  {
    name: 'Prof. Marcus Weber',
    initials: 'MW',
    role: 'Chair of BioMedTech Institute',
    bio: 'Leading research on integrating wearable sensors with predictive AI models.',
    keynote: false,
    gradient: 'linear-gradient(135deg, #A63387 0%, #00AFDC 100%)',
    socials: [
      { icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
    ],
  },
  {
    name: 'Dr. Elena Rostova',
    initials: 'ER',
    role: 'Director of Ethics in AI',
    bio: 'Focuses on meaningful human control and transparency in clinical AI systems.',
    keynote: false,
    gradient: 'linear-gradient(135deg, #005A7D 0%, #00A0D1 100%)',
    socials: [
      { icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
      { icon: 'fas fa-globe', label: 'Website' },
    ],
  },
]
</script>

<style scoped>
.speakers {
  padding: var(--section-padding);
  background: var(--color-bg-light);
}

.speakers-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 48px;
  gap: 24px;
}

.speakers-header-text {
  max-width: 600px;
}

.speakers-subtitle {
  font-size: 17px;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-top: 12px;
}

.view-all {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-primary);
  white-space: nowrap;
  margin-top: 12px;
  transition: gap var(--transition);
}

.view-all:hover {
  gap: 12px;
}

.speakers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.speaker-card {
  background: var(--color-card-bg);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: transform var(--transition), box-shadow var(--transition);
}

.speaker-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.speaker-image {
  height: 260px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px 12px 0 0;
}

.speaker-initials {
  font-family: var(--font-heading);
  font-size: 56px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 2px;
}

.keynote-badge {
  position: absolute;
  bottom: 16px;
  left: 16px;
  background: var(--color-primary);
  color: white;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 6px 12px;
  border-radius: 4px;
}

.speaker-info {
  padding: 24px;
}

.speaker-name {
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 4px;
}

.speaker-role {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-primary);
  margin-bottom: 12px;
}

.speaker-bio {
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 16px;
}

.speaker-socials {
  display: flex;
  gap: 12px;
}

.speaker-socials a {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 18px;
  transition: color var(--transition);
}

.speaker-socials a:hover {
  color: var(--color-primary);
}

@media (max-width: 1024px) {
  .speakers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .speakers-header {
    flex-direction: column;
  }

  .speakers-grid {
    grid-template-columns: 1fr;
  }
}
</style>
