<template>
  <section id="venue" class="venue">
    <div class="container">
      <div class="venue-header">
        <h2 class="section-title">Venue &amp; Getting There</h2>
        <p class="section-subtitle">
          The symposium takes place at the Radboudumc Experience Center.
        </p>
      </div>

      <div class="venue-grid">
        <div class="venue-card">
          <div class="venue-icon">
            <i class="fas fa-location-dot"></i>
          </div>
          <h3 class="venue-card-title">Address</h3>
          <p class="venue-address">Radboudumc Experience Center</p>
          <p class="venue-address">Geert Grooteplein Zuid 10</p>
          <p class="venue-address">6525 GA Nijmegen</p>
          <p class="venue-room">Auditorium, route 6 (M260.-1.075)</p>
        </div>

        <div class="venue-card">
          <div class="venue-icon">
            <i class="fas fa-bicycle"></i>
          </div>
          <h3 class="venue-card-title">By Bike</h3>
          <p class="venue-card-text">
            Free bike parking is available at the venue.
          </p>
        </div>

        <div class="venue-card">
          <div class="venue-icon">
            <i class="fas fa-train"></i>
          </div>
          <h3 class="venue-card-title">Public Transport</h3>
          <p class="venue-card-text">
            The venue is easily reachable by public transport. Nijmegen station
            is well-connected by train and several bus lines stop nearby.
          </p>
        </div>

        <div class="venue-card">
          <div class="venue-icon">
            <i class="fas fa-car"></i>
          </div>
          <h3 class="venue-card-title">By Car</h3>
          <p class="venue-card-text">
            Plenty of paid car parking is available near the Radboudumc campus.
            Follow signs for Radboudumc parking upon arrival.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.venue {
  padding: var(--section-padding);
  background: var(--color-card-bg);
}

.venue-header {
  text-align: center;
  margin-bottom: 48px;
}

.venue-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.venue-card {
  background: var(--color-bg-light);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
}

.venue-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 175, 220, 0.1);
  border-radius: 50%;
  margin: 0 auto 20px;
  font-size: 22px;
  color: var(--color-primary);
}

.venue-card-title {
  font-family: var(--font-body);
  font-size: 17px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 12px;
}

.venue-address {
  font-size: 15px;
  color: var(--color-text-body);
  line-height: 1.6;
}

.venue-room {
  font-size: 14px;
  color: var(--color-primary);
  font-weight: 600;
  margin-top: 8px;
}

.venue-card-text {
  font-size: 15px;
  color: var(--color-text-muted);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .venue-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .venue-grid {
    grid-template-columns: 1fr;
  }
}
</style>
