<template>
  <section id="organizers" class="organizers">
    <div class="container">
      <div class="organizers-header">
        <div class="organizers-header-text">
          <h2 class="section-title">Organizers</h2>
          <p class="organizers-subtitle">
            Meet the team behind COMPASS.
          </p>
        </div>
      </div>

      <div class="organizers-grid">
        <div
          class="organizer-card"
          v-for="organizer in organizers"
          :key="organizer.name"
          :class="{ clickable: organizer.bio }"
          @click="organizer.bio && openModal(organizer)"
        >
          <div class="organizer-image" :style="{ background: organizer.gradient }">
            <img
              v-if="organizer.photo"
              :src="organizer.photo"
              :alt="organizer.name"
              class="organizer-photo"
            />
            <div v-else class="organizer-initials">{{ organizer.initials }}</div>
            <div v-if="organizer.bio" class="card-hint">
              <i class="fas fa-circle-info"></i>
            </div>
          </div>
          <div class="organizer-info">
            <h3 class="organizer-name">{{ organizer.name }}</h3>
            <p class="organizer-role" v-if="organizer.role">{{ organizer.role }}</p>
            <p class="organizer-affiliation" v-if="organizer.affiliation">
              {{ organizer.affiliation }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="active" class="modal-backdrop" @click.self="closeModal">
          <div class="modal-card" role="dialog" aria-modal="true">
            <button class="modal-close" @click="closeModal" aria-label="Close">
              <i class="fas fa-xmark"></i>
            </button>
            <div class="modal-inner">
              <div class="modal-image">
                <div
                  v-if="active.photo"
                  class="modal-photo-bg"
                  :style="{ backgroundImage: `url(${active.photo})` }"
                />
                <img
                  v-if="active.photo"
                  :src="active.photo"
                  :alt="active.name"
                  class="organizer-photo"
                />
                <div v-else class="organizer-initials">{{ active.initials }}</div>
              </div>
              <div class="modal-body">
                <h3 class="modal-name">{{ active.name }}</h3>
                <p class="modal-role" v-if="active.role">{{ active.role }}</p>
                <p class="modal-affiliation" v-if="active.affiliation">
                  {{ active.affiliation }}
                </p>
                <p class="modal-bio">{{ active.bio }}</p>
                <a
                  v-if="active.url"
                  :href="active.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="modal-link"
                >
                  Personal page
                  <i class="fas fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const active = ref(null);

function openModal(organizer) {
  active.value = organizer;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  active.value = null;
  document.body.style.overflow = "";
}

function onKeydown(e) {
  if (e.key === "Escape") closeModal();
}

onMounted(() => document.addEventListener("keydown", onKeydown));
onUnmounted(() => {
  document.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});

const organizers = [
  {
    name: "Sebastiaan Ram",
    initials: "SR",
    photo: "/organizers/ram.webp",
    role: "PhD Candidate",
    affiliation: "Radboudumc",
    bio: "Sebastiaan obtained his master’s degree in Data Science from Radboud University in April 2024. His thesis, conducted within the Computational Pathology Group, focused on developing a tissue segmentation model for kidney transplant biopsies, aiming to automatically quantify inflammation in different tissue compartments. Following this project, Sebastiaan remained with the group to work on the ANTONI project. Supervised by Geert Litjens, this project aims to develop large multi-modal foundation models for digital pathology, with the goal of creating AI systems that can serve as co-pilots for pathologists.",
    url: "https://www.computationalpathologygroup.eu/members/sebastiaan-ram/",
    gradient: "linear-gradient(135deg, #0F5F80 0%, #00C9FF 100%)",
  },
  {
    name: "Gerry Koons",
    initials: "GK",
    photo: "/organizers/koons.webp",
    role: "Postdoctoral Researcher",
    affiliation: "Radboudumc",
    bio: "Gerry Koons is a postdoctoral research fellow in the Computational Pathology Group. She obtained her medical degree (MD) from Baylor College of Medicine in the USA as a member of the MD/PhD Medical Scientist Training Program. She completed her PhD thesis on 3D printing of biomaterials for bone tissue engineering with the Department of Bioengineering at Rice University in the USA. She received postdoctoral fellowships from the Marie Skłodowska-Curie Actions (MSCA) and Radboud Excellence Initiative to develop machine learning tools for assessment of bone regeneration under the mentorship of Geert Litjens.",
    url: "https://www.computationalpathologygroup.eu/members/gerry-koons/",
    gradient: "linear-gradient(135deg, #006991 0%, #00AFDC 100%)",
  },
  {
    name: "Sanaa Abrahams",
    initials: "SA",
    photo: "/organizers/abrahams.webp",
    role: "PhD Candidate",
    affiliation: "Donders Institute for Brain, Cognition and Behaviour",
    bio: "Sanaa Abrahams is a Research Associate at the Institute for Ethics in Technology at TUHH and is currently a PhD candidate at The Donders Institute, Radboud University. Her research interests include moral and political philosophy, with an emphasis on bioethics and the ethics of AI technologies in medicine.",
    url: "https://www.ru.nl/personen/abrahams-s",
    gradient: "linear-gradient(135deg, #A63387 0%, #00AFDC 100%)",
  },
];
</script>

<style scoped>
.organizers {
  padding: var(--section-padding);
  background: var(--color-bg);
}

.organizers-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 48px;
  gap: 24px;
}

.organizers-header-text {
  max-width: 600px;
}

.organizers-subtitle {
  font-size: 17px;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-top: 12px;
}

.organizers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.organizer-card {
  background: var(--color-card-bg);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition:
    transform var(--transition),
    box-shadow var(--transition);
}

.organizer-card.clickable {
  cursor: pointer;
}

.organizer-card.clickable:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.organizer-image {
  height: 340px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px 12px 0 0;
}

.organizer-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.modal-image .organizer-photo {
  object-fit: contain;
  object-position: center;
  position: relative;
  z-index: 1;
}

.modal-photo-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center top;
  filter: blur(20px) brightness(0.85);
  transform: scale(1.1);
}

.organizer-initials {
  font-family: var(--font-heading);
  font-size: 56px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 2px;
}

.card-hint {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.35);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  backdrop-filter: blur(4px);
}

.organizer-info {
  padding: 24px;
}

.organizer-name {
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 4px;
}

.organizer-role {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.organizer-affiliation {
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.5;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.modal-card {
  background: var(--color-card-bg);
  border-radius: 20px;
  width: 100%;
  max-width: 680px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  transition: background var(--transition);
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.5);
}

.modal-inner {
  display: flex;
  flex-direction: column;
}

.modal-image {
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0 0;
  flex-shrink: 0;
  overflow: hidden;
}

.modal-body {
  padding: 32px;
}

.modal-name {
  font-family: var(--font-body);
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 4px;
}

.modal-role {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.modal-affiliation {
  font-size: 14px;
  color: var(--color-text-muted);
  margin-bottom: 20px;
}

.modal-bio {
  font-size: 15px;
  color: var(--color-text-body);
  line-height: 1.7;
  margin-bottom: 24px;
}

.modal-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
  transition: opacity var(--transition);
}

.modal-link:hover {
  opacity: 0.75;
}

/* Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-active .modal-card,
.modal-leave-active .modal-card {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-card,
.modal-leave-to .modal-card {
  transform: scale(0.95);
  opacity: 0;
}

@media (max-width: 1024px) {
  .organizers-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .organizers-header {
    flex-direction: column;
  }

  .organizers-grid {
    grid-template-columns: 1fr;
  }

  .modal-image {
    height: 300px;
  }

  .modal-body {
    padding: 24px;
  }
}
</style>
