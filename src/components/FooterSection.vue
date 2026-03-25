<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img class="logo-icon" src="/compass-logo.webp" alt="COMPASS logo" />
            <span class="footer-logo-text">COMPASS</span>
          </div>
          <p class="footer-description">
            Clinical Oversight through Meaningful Participation of AI-Supported
            Systems.
          </p>
          <p class="footer-hosts">
            Hosted by
            <a
              href="https://www.computationalpathologygroup.eu/"
              target="_blank"
              rel="noopener"
              >Computational Pathology Group</a
            >
            (Radboudumc) &amp;
            <a
              href="https://www.ru.nl/afdelingen/donders-centre-for-cognition/meaningful-human-control-of-ai"
              target="_blank"
              rel="noopener"
              >Meaningful Human Control of AI</a
            >
            (Radboud University)
          </p>
          <!-- <div class="footer-socials">
            <a href="#" aria-label="Twitter"
              ><i class="fab fa-x-twitter"></i
            ></a>
            <a href="#" aria-label="LinkedIn"
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </div> -->
        </div>

        <div class="footer-contact">
          <h4>Contact</h4>
          <div class="contact-item">
            <i class="fas fa-location-dot"></i>
            <div>
              <p>Radboudumc Experience Center</p>
              <p>Geert Grooteplein Zuid 10</p>
              <p>6525 GA Nijmegen</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <a href="mailto:sebastiaan.ram@radboudumc.nl"
              >sebastiaan.ram@radboudumc.nl</a
            >
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 COMPASS Symposium / Radboudumc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-navy);
  padding: 64px 0 0;
  color: rgba(255, 255, 255, 0.7);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.logo-icon {
  height: 32px;
  width: auto;
}

.footer-logo-text {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
}

.footer-description {
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 8px;
}

.footer-hosts {
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.footer-hosts a {
  color: var(--color-primary-light);
  transition: color var(--transition);
}

.footer-hosts a:hover {
  color: white;
}

.footer-socials {
  display: flex;
  gap: 12px;
}

.footer-socials a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  transition:
    background var(--transition),
    color var(--transition);
}

.footer-socials a:hover {
  background: var(--color-primary);
  color: white;
}

.footer-contact h4 {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
}

.footer-contact .contact-item {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 14px;
}

.footer-contact .contact-item i {
  color: var(--color-primary-light);
  margin-top: 3px;
  width: 16px;
  text-align: center;
}

.footer-contact .contact-item a {
  color: rgba(255, 255, 255, 0.6);
  transition: color var(--transition);
}

.footer-contact .contact-item a:hover {
  color: white;
}

.footer-contact .contact-item p {
  line-height: 1.5;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
}

.footer-legal {
  display: flex;
  gap: 24px;
}

.footer-legal a {
  color: rgba(255, 255, 255, 0.5);
  transition: color var(--transition);
}

.footer-legal a:hover {
  color: white;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>
