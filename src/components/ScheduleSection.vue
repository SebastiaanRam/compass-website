<template>
  <section id="schedule" class="schedule">
    <div class="container">
      <div class="schedule-header">
        <h2 class="section-title schedule-title">Event Schedule</h2>
        <p class="section-subtitle schedule-sub">
          A comprehensive one-day program designed to foster collaboration and
          share cutting-edge insights.
        </p>
      </div>

      <div class="schedule-card">
        <div class="schedule-day-label">September 11, 2026 (Friday)</div>

        <div class="schedule-items">
          <div
            class="schedule-item"
            v-for="item in scheduleItems"
            :key="item.time"
          >
            <div class="schedule-time">{{ item.time }}</div>
            <div class="schedule-details">
              <h3 class="schedule-event-title">{{ item.title }}</h3>
              <p class="schedule-event-desc">{{ item.description }}</p>
              <div class="schedule-speaker" v-if="item.speaker">
                <i class="fas fa-user"></i>
                <span>{{ item.speaker }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="schedule-footer">
          <a href="#" class="download-link">
            Download Full Agenda (PDF) <i class="fas fa-download"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scheduleItems = [
  {
    time: "09:00 AM",
    title: "Opening Keynote: The Future of AI in Radboudumc",
    description:
      "An overview of how AI is transforming clinical workflows and patient care.",
    speaker: "Dr. Sarah Chen",
  },
  {
    time: "10:30 AM",
    title: "Panel: Navigating the Ethics of Clinical AI",
    description:
      "A discussion on meaningful human control and mitigating algorithmic bias.",
    speaker: "Dr. Rostova, Prof. Weber, Dr. Jansen",
  },
  {
    time: "12:00 PM",
    title: "Lunch Break & Networking",
    description:
      "Connect with fellow researchers, clinicians, and AI practitioners.",
    speaker: null,
  },
  {
    time: "01:00 PM",
    title: "Workshop: Implementing Predictive Models",
    description:
      "Hands-on session translating research models into clinical practice tools.",
    speaker: "BioMedTech Team",
  },
  {
    time: "02:30 PM",
    title: "Research Presentations: Advances in Medical AI",
    description:
      "Short talks showcasing the latest breakthroughs in healthcare AI research.",
    speaker: "Selected Presenters",
  },
  {
    time: "03:30 PM",
    title: "Closing Remarks & Future Directions",
    description:
      "Reflecting on key insights and outlining the roadmap for COMPASS initiatives.",
    speaker: "Dr. Sarah Chen",
  },
];
</script>

<style scoped>
.schedule {
  padding: var(--section-padding);
  background: var(--color-navy);
}

.schedule-header {
  text-align: center;
  margin-bottom: 48px;
}

.schedule-title {
  color: white;
}

.schedule-sub {
  color: rgba(255, 255, 255, 0.6);
}

.schedule-card {
  background: var(--color-card-bg);
  border-radius: 20px;
  padding: 48px;
  max-width: 860px;
  margin: 0 auto;
}

.schedule-day-label {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary);
  padding-bottom: 16px;
  border-bottom: 2px solid var(--color-primary);
  display: inline-block;
  margin-bottom: 36px;
}

.schedule-items {
  display: flex;
  flex-direction: column;
}

.schedule-item {
  display: flex;
  gap: 40px;
  padding: 28px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.schedule-item:last-child {
  border-bottom: none;
}

.schedule-time {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 700;
  color: var(--color-primary);
  min-width: 100px;
  padding-top: 2px;
}

.schedule-details {
  flex: 1;
}

.schedule-event-title {
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 6px;
}

.schedule-event-desc {
  font-size: 15px;
  color: var(--color-text-muted);
  margin-bottom: 8px;
  line-height: 1.5;
}

.schedule-speaker {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--color-text-muted);
}

.schedule-speaker i {
  font-size: 12px;
  color: var(--color-primary);
}

.schedule-footer {
  text-align: center;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.download-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-primary);
  transition: gap var(--transition);
}

.download-link:hover {
  gap: 12px;
}

@media (max-width: 768px) {
  .schedule-card {
    padding: 28px 20px;
  }

  .schedule-item {
    flex-direction: column;
    gap: 8px;
  }

  .schedule-time {
    min-width: unset;
  }
}
</style>
