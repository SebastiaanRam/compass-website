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

      <form class="registration-form" @submit.prevent="handleSubmit">
        <div class="form-row">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input id="firstName" type="text" placeholder="Jane" required />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input id="lastName" type="text" placeholder="Doe" required />
          </div>
        </div>

        <div class="form-group">
          <label for="email">Institutional Email</label>
          <input
            id="email"
            type="email"
            placeholder="jane.doe@institution.edu"
            required
          />
        </div>

        <div class="form-group">
          <label for="role">Role / Affiliation</label>
          <select id="role" required>
            <option value="" disabled selected>Select your role</option>
            <option value="clinician">Clinician / Medical Professional</option>
            <option value="researcher">Researcher / Academic</option>
            <option value="engineer">AI/ML Engineer</option>
            <option value="student">Student / PhD Candidate</option>
            <option value="industry">Industry Professional</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit" class="btn-submit">Complete Registration</button>

        <p class="form-disclaimer">
          By registering, you agree to our
          <a href="#">Terms &amp; Conditions</a>.
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
function handleSubmit() {
  alert("Registration submitted! (This is a demo)");
}
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
  padding: 48px;
  max-width: 680px;
  margin: 0 auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: 8px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  font-size: 15px;
  color: var(--color-text-dark);
  background: white;
  transition: border-color var(--transition);
  outline: none;
}

.form-group input::placeholder {
  color: var(--color-text-muted);
}

.form-group input:focus,
.form-group select:focus {
  border-color: var(--color-primary);
}

.btn-submit {
  width: 100%;
  padding: 16px;
  background: var(--color-primary);
  color: white;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
  margin-top: 8px;
  transition: background-color var(--transition);
}

.btn-submit:hover {
  background: var(--color-primary-dark);
}

.form-disclaimer {
  text-align: center;
  font-size: 13px;
  color: var(--color-text-muted);
  margin-top: 16px;
}

.form-disclaimer a {
  color: var(--color-primary);
  text-decoration: underline;
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .registration-form {
    padding: 28px 20px;
  }
}
</style>
