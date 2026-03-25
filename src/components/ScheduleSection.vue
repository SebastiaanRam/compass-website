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
              <h3 class="schedule-event-title">{{ item.title }}</h3>
              <p class="schedule-event-desc">{{ item.description }}</p>
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
    time: "09:00 AM",
    title: "Opening & Welcome",
    description: "Introduction to the symposium and its themes.",
  },
  {
    time: "12:00 PM",
    title: "Lunch Break",
    description: "Networking and refreshments.",
  },
  {
    time: "04:00 PM",
    title: "Closing Discussion & Reflections",
    description: "Wrapping up",
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
