<template>
  <section id="panel" class="panel">
    <div class="container">
      <div class="panel-header">
        <div class="panel-header-text">
          <h2 class="section-title">Panel Discussion</h2>
          <p class="panel-subtitle">
            Meet the panelists joining the interactive discussion on the symposium themes.
          </p>
        </div>
      </div>

      <div class="panel-grid">
        <div
          class="panel-card"
          v-for="member in panel"
          :key="member.name"
          :class="{ clickable: member.bio || member.url }"
          @click="(member.bio || member.url) && openModal(member)"
        >
          <div class="panel-image" :style="!member.photo ? { background: member.gradient } : {}">
            <div
              v-if="member.photo"
              class="card-photo-bg"
              :style="{ backgroundImage: `url(${member.photo})` }"
            />
            <img
              v-if="member.photo"
              :src="member.photo"
              :alt="member.name"
              class="panel-photo"
            />
            <div v-else class="panel-initials">{{ member.initials }}</div>
            <div v-if="member.bio || member.url" class="card-hint">
              <i class="fas fa-circle-info"></i>
            </div>
          </div>
          <div class="panel-info">
            <h3 class="panel-name">{{ member.name }}</h3>
            <p class="panel-role" v-if="member.role">{{ member.role }}</p>
            <p class="panel-affiliation" v-if="member.affiliation">
              {{ member.affiliation }}
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
              <div class="modal-image" :style="!active.photo ? { background: active.gradient } : {}">
                <div
                  v-if="active.photo"
                  class="modal-photo-bg"
                  :style="{ backgroundImage: `url(${active.photo})` }"
                />
                <img
                  v-if="active.photo"
                  :src="active.photo"
                  :alt="active.name"
                  class="panel-photo"
                />
                <div v-else class="panel-initials">{{ active.initials }}</div>
              </div>
              <div class="modal-body">
                <h3 class="modal-name">{{ active.name }}</h3>
                <p class="modal-role" v-if="active.role">{{ active.role }}</p>
                <p class="modal-affiliation" v-if="active.affiliation">
                  {{ active.affiliation }}
                </p>
                <p v-if="active.bio" class="modal-bio">{{ active.bio }}</p>
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

function openModal(member) {
  active.value = member;
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

const panel = [
  {
    name: "Jacqueline Kernahan",
    initials: "JK",
    photo: "/speakers/kernahan.webp",
    role: "PhD Candidate (Host)",
    affiliation: "TU Delft (AlgoSoc)",
    bio: "Jacqueline Kernahan is a PhD candidate at TU Delft, in the Ethics & Philosophy of Technology section, and part of the AlgoSoc (Algorithmic Society) consortium. Her research examines the safety, fairness and functional limits of AI tools used in clinical decision-making, including a system-theoretic approach to algorithmic fairness and the challenges of applying NLP to unstructured clinical text.",
    url: "https://research.tudelft.nl/en/persons/ja-kernahan/",
    gradient: "linear-gradient(135deg, #0F5F80 0%, #00C9FF 100%)",
  },
  {
    name: "Emma Rengers",
    initials: "ER",
    photo: "/speakers/rengers.webp",
    role: "Postdoctoral Researcher",
    affiliation: "Radboud University (ELSA Lab)",
    bio: "Emma Rengers is a postdoctoral researcher at Radboud University's Private Law department, in the ELSA Lab for Legal, Regulatory, and Policy Aspects of Clinical Decision Support Systems. She holds a PhD from the University of Birmingham on computer vision in law enforcement and the rule of law, and an LLM from Cambridge. Her work focuses on the legal and ethical aspects of emerging technologies, including AI regulation in healthcare.",
    url: "https://www.ru.nl/en/people/rengers-e",
    gradient: "linear-gradient(135deg, #006991 0%, #00AFDC 100%)",
  },
  {
    name: "Milan Petković",
    initials: "MP",
    photo: "/speakers/petkovic.webp",
    role: "Head of AI & Data Science R&D, Philips / Professor of Trustworthy AI, TU Eindhoven",
    affiliation: "Philips / TU Eindhoven",
    bio: "Milan Petković leads AI and data science R&D for hospital patient monitoring at Philips, and holds a part-time chair as Full Professor of Trustworthy Artificial Intelligence at TU Eindhoven. He is a former Vice President of the Big Data Value Association and advises the European Commission on data governance.",
    url: "https://www.tue.nl/en/research/researchers/milan-petkovic",
    gradient: "linear-gradient(135deg, #A63387 0%, #00AFDC 100%)",
  },
  {
    name: "Dr. Banu Buruk",
    initials: "BB",
    photo: "/speakers/buruk.webp",
    role: "Assistant Professor",
    affiliation: "Donders Institute for Brain, Cognition and Behaviour",
    bio: "Banu Buruk her research expertise focuses on the ethical integration of AI-driven decision support systems (DSS) in healthcare, with a particular emphasis on ensuring these systems enhance diagnostic accuracy, treatment personalization, and patient outcomes without introducing or perpetuating systemic biases or errors. She investigates how physicians, as key intermediaries between AI and patients, can effectively utilize their expertise to evaluate and, when necessary, challenge AI-generated outcomes. Her research also explores the dynamic roles of patients, physicians, and other professionals within this evolving ecosystem, emphasizing the importance of maintaining patient autonomy and ensuring ethical AI usage across diverse clinical contexts. Additionally, she examines the current regulatory landscape, which is rapidly evolving but may not fully address the needs and concerns of all stakeholders, advocating for robust safeguards that extend beyond minimum legal requirements to foster trust and efficacy in AI-supported healthcare.",
    url: "https://www.ru.nl/personen/buruk-b",
    gradient: "linear-gradient(135deg, #A63387 0%, #00AFDC 100%)",
  },
  {
    name: "Merlijn Hutteman",
    initials: "MH",
    photo: "/speakers/hutteman.webp",
    role: "Oncological & Gastrointestinal Surgeon",
    affiliation: "Radboudumc",
    bio: "Merlijn Hutteman is an oncological and gastrointestinal surgeon at Radboudumc, where he has worked since 2023. He holds an MSc in Artificial Intelligence from Utrecht University alongside his medical training, and completed his PhD cum laude on image-guided surgery, based on research at Leiden University Medical Center and Harvard Medical School.",
    url: "https://www.radboudumc.nl/personen/merlijn-hutteman",
    gradient: "linear-gradient(135deg, #005A7D 0%, #00A0D1 100%)",
  },
];
</script>

<style scoped>
.panel {
  padding: var(--section-padding);
  background: var(--color-bg-light);
}

.panel-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 48px;
  gap: 24px;
}

.panel-header-text {
  max-width: 600px;
}

.panel-subtitle {
  font-size: 17px;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-top: 12px;
}

.panel-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.panel-card {
  background: var(--color-card-bg);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition:
    transform var(--transition),
    box-shadow var(--transition);
}

.panel-card.clickable {
  cursor: pointer;
}

.panel-card.clickable:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.panel-image {
  height: 340px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
}

.card-photo-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center top;
  filter: blur(20px) brightness(0.85);
  transform: scale(1.1);
}

.panel-photo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  position: relative;
  z-index: 1;
}

.panel-initials {
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
  z-index: 2;
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

.panel-info {
  padding: 24px;
}

.panel-name {
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 4px;
}

.panel-role {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.panel-affiliation {
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
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0 0;
  flex-shrink: 0;
  overflow: hidden;
}

.modal-photo-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center top;
  filter: blur(20px) brightness(0.85);
  transform: scale(1.1);
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
  .panel-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .panel-header {
    flex-direction: column;
  }

  .panel-grid {
    grid-template-columns: 1fr;
  }

  .modal-image {
    height: 220px;
  }

  .modal-body {
    padding: 24px;
  }
}
</style>
