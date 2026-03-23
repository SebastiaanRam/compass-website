<template>
  <section id="themes" class="themes">
    <div class="container">
      <div class="themes-header">
        <h2 class="section-title">Symposium Themes</h2>
        <p class="section-subtitle">
          Exploring the intersection of advanced technology and clinical excellence
          through four foundational pillars.
        </p>
      </div>

      <div class="themes-grid">
        <div class="theme-card" v-for="theme in themes" :key="theme.title">
          <div class="theme-icon">
            <i :class="theme.icon"></i>
          </div>
          <h3 class="theme-title">{{ theme.title }}</h3>
          <p class="theme-description">{{ theme.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const themes = [
  {
    icon: 'fas fa-flask',
    title: 'Research',
    description:
      'Advancing the theoretical foundations of medical AI, focusing on interpretability, fairness, and robustness in healthcare models.',
  },
  {
    icon: 'fas fa-user-doctor',
    title: 'Clinical Practice',
    description:
      'Translating AI innovations into actionable clinical workflows, enhancing diagnostic accuracy and patient outcomes.',
  },
  {
    icon: 'fas fa-microchip',
    title: 'BioMedTech',
    description:
      'Integrating hardware and software solutions, from wearable sensors to advanced imaging systems powered by deep learning.',
  },
  {
    icon: 'fas fa-brain',
    title: 'Human-Centric AI',
    description:
      'Ensuring AI systems remain tools for human oversight, prioritizing ethical deployment and meaningful human participation.',
  },
]
</script>

<style scoped>
.themes {
  padding: var(--section-padding);
  background: var(--color-bg-light);
}

.themes-header {
  text-align: center;
  margin-bottom: 56px;
}

.themes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.theme-card {
  background: var(--color-card-bg);
  border-radius: 16px;
  padding: 32px 28px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: transform var(--transition), box-shadow var(--transition);
}

.theme-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.theme-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: var(--color-icon-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.theme-icon i {
  font-size: 22px;
  color: var(--color-primary);
}

.theme-title {
  font-family: var(--font-body);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text-dark);
}

.theme-description {
  font-size: 15px;
  line-height: 1.65;
  color: var(--color-text-muted);
}

@media (max-width: 1024px) {
  .themes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .themes-grid {
    grid-template-columns: 1fr;
  }
}
</style>
