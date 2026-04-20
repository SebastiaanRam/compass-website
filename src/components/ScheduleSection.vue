<template>
  <section id="schedule" class="schedule">
    <div class="container">
      <div class="schedule-header">
        <h2 class="section-title schedule-title">Schedule</h2>
        <p class="section-subtitle schedule-sub">
          A tailored one-day program of interactive discussions, panels, and
          talks.
        </p>
        <span class="preliminary-badge">Preliminary Schedule</span>
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
              <div class="schedule-event-header">
                <h3 class="schedule-event-title">{{ item.title }}</h3>
                <span
                  v-if="item.tag"
                  :class="[
                    'schedule-tag',
                    `schedule-tag--${item.tag.toLowerCase()}`,
                  ]"
                  >{{ item.tag }}</span
                >
              </div>
              <p class="schedule-event-desc" v-if="item.description">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="schedule-note">
          <i class="fas fa-circle-info"></i>
          The final schedule with confirmed speakers and session details will be
          announced soon.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scheduleItems = [
  {
    time: "09:00 – 09:10",
    title: "Welcome",
    description: "Opening remarks and introduction to the COMPASS symposium.",
    tag: "Opening",
  },
  {
    time: "09:10 – 09:30",
    title: "Prof. Dr. Guillén Fernández",
    description: "Scientific Director, Radboudumc.",
    tag: "Talk",
  },
  {
    time: "09:30 – 09:50",
    title: "Speaker 2",
    description: "To be announced.",
    tag: "Talk",
  },
  {
    time: "09:50 – 10:10",
    title: "Speaker 3",
    description: "To be announced.",
    tag: "Talk",
  },
  {
    time: "10:10 – 10:30",
    title: "Coffee Break",
    description: "Refreshments and networking.",
    tag: "Break",
  },
  {
    time: "10:30 – 11:00",
    title: "Dr. Giulio Mecacci",
    description: "Associate Professor, Donders Institute for Brain, Cognition and Behaviour",
    tag: "Keynote",
  },
  {
    time: "11:00 – 12:00",
    title: "Panel Discussion",
    description:
      "An interactive discussion with invited experts on the symposium themes.",
    tag: "Panel",
  },
  {
    time: "12:00 – 13:00",
    title: "Lunch Break",
    description: "Lunch and networking with fellow attendees.",
    tag: "Break",
  },
  {
    time: "13:00 – 13:30",
    title: "Keynote",
    description: "Speaker to be announced.",
    tag: "Keynote",
  },
  {
    time: "13:30 – 15:10",
    title: "Interactive Workshop",
    description:
      "Two parallel hands-on collaborative sessions exploring key challenges in human-AI interaction in clinical settings and biomaterials design.",
    tag: "Workshop",
  },
  {
    time: "15:10 – 15:30",
    title: "Speaker 4",
    description: "To be announced.",
    tag: "Talk",
  },
  {
    time: "15:30 – 15:50",
    title: "Speaker 5",
    description: "To be announced.",
    tag: "Talk",
  },
  {
    time: "15:50 – 16:00",
    title: "Closing",
    description: "Closing remarks.",
    tag: "Closing",
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

.preliminary-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.85);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.5px;
  padding: 8px 20px;
  border-radius: 50px;
  margin-top: 20px;
  text-transform: uppercase;
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

.schedule-event-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
  flex-wrap: wrap;
}

.schedule-event-title {
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text-dark);
}

.schedule-tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 50px;
  white-space: nowrap;
  background: rgba(0, 0, 0, 0.07);
  color: var(--color-text-muted);
}

.schedule-tag--keynote {
  background: rgba(15, 95, 128, 0.12);
  color: var(--color-primary);
}

.schedule-tag--panel {
  background: rgba(15, 95, 128, 0.12);
  color: var(--color-primary);
}

.schedule-tag--workshop {
  background: rgba(166, 51, 135, 0.1);
  color: #a63387;
}

.schedule-tag--break {
  background: rgba(0, 0, 0, 0.05);
  color: var(--color-text-muted);
}

.schedule-event-desc {
  font-size: 15px;
  color: var(--color-text-muted);
  margin-bottom: 8px;
  line-height: 1.5;
}

.schedule-note {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 32px;
  padding: 16px 20px;
  background: var(--color-bg-light);
  border-radius: 10px;
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.schedule-note i {
  color: var(--color-primary);
  font-size: 16px;
  flex-shrink: 0;
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
