<template>
  <section id="speakers" class="speakers">
    <div class="container">
      <div class="speakers-header">
        <div class="speakers-header-text">
          <h2 class="section-title">Featured Speakers</h2>
          <p class="speakers-subtitle">
            Hear from experts in AI, clinical practice, and ethics.
          </p>
        </div>
      </div>

      <div class="speakers-grid">
        <div
          class="speaker-card"
          v-for="speaker in speakers"
          :key="speaker.name"
          :class="{ clickable: speaker.bio || speaker.url }"
          @click="(speaker.bio || speaker.url) && openModal(speaker)"
        >
          <div class="speaker-image" :style="!speaker.photo ? { background: speaker.gradient } : {}">
            <div
              v-if="speaker.photo"
              class="card-photo-bg"
              :style="{ backgroundImage: `url(${speaker.photo})` }"
            />
            <span v-if="speaker.keynote" class="keynote-badge">KEYNOTE</span>
            <img
              v-if="speaker.photo"
              :src="speaker.photo"
              :alt="speaker.name"
              class="speaker-photo"
            />
            <div v-else class="speaker-initials">{{ speaker.initials }}</div>
            <div v-if="speaker.bio || speaker.url" class="card-hint">
              <i class="fas fa-circle-info"></i>
            </div>
          </div>
          <div class="speaker-info">
            <h3 class="speaker-name">{{ speaker.name }}</h3>
            <p class="speaker-role" v-if="speaker.role">{{ speaker.role }}</p>
            <p class="speaker-affiliation" v-if="speaker.affiliation">
              {{ speaker.affiliation }}
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
                <span v-if="active.keynote" class="keynote-badge">KEYNOTE</span>
                <img
                  v-if="active.photo"
                  :src="active.photo"
                  :alt="active.name"
                  class="speaker-photo"
                />
                <div v-else class="speaker-initials">{{ active.initials }}</div>
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

function openModal(speaker) {
  active.value = speaker;
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

const speakers = [
  {
    name: "Prof. Dr. Guillén Fernández",
    initials: "GF",
    photo: "/speakers/fernandez.webp",
    role: "Scientific Director",
    affiliation: "Radboudumc",
    bio: "Guillén Fernández is Scientific Director of the Radboudumc and Principal Investigator at the Donders Institute. His research focuses on the brain basis of memory, emotion and their interaction, using an interdisciplinary approach that combines cognitive neuroimaging, genetics, pharmacology and various clinical disciplines. Guillén Fernández is a Knight in the Order of the Netherlands Lion, a member of the Royal Netherlands Academy of Arts and Sciences (KNAW), the Academia Europaea and the Memory Disorder Research Society. He has received many honours, including the Richard Jung Award from the German Society for Clinical Neurophysiology, the Vici Award from the Netherlands Organisation for Scientific Research, the Radboud Science Award and an Advanced Investigator Grant from the European Research Council.",
    url: "https://www.radboudumc.nl/en/people/guillen-fernandez",
    keynote: false,
    gradient: "linear-gradient(135deg, #0F5F80 0%, #00C9FF 100%)",
  },
  {
    name: "Dr. Giulio Mecacci",
    initials: "GM",
    photo: "/speakers/mecacci.webp",
    role: "Associate Professor",
    affiliation: "Donders Institute for Brain, Cognition and Behaviour",
    bio: "Giulio Mecacci is interested in the ethical, legal and societal implications of AI and neurotechnologies, which he approaches from an applied ethics perspective. In particular, he focuses on developing and operationalising the notion of Meaningful Human Control to address responsibility gaps in human-AI interaction. He is also a passionate teacher, delivering bachelor and master courses in ethics and the societal impact of AI. In the Donders CNS master's programme, he teaches the course Neurophilosophy. His main driving ideal is providing future AI and CNS professionals with the skills to create and contribute to an enduring dialogue between science, technology and society.",
    url: "https://www.ru.nl/personen/mecacci-g",
    keynote: true,
    gradient: "linear-gradient(135deg, #006991 0%, #00AFDC 100%)",
  },
  {
    name: "Erik Gelderblom",
    initials: "EG",
    photo: "/speakers/gelderblom.webp",
    role: "Medical Physicist",
    affiliation: "Radboudumc",
    bio: "Erik Gelderblom is a medical physicist at Radboudumc who works at the intersection of healthcare, technology and innovation. His expertise includes the development, evaluation and implementation of medical technology and digital health solutions, with special interest in AI-based systems. He is committed to translating innovations into clinical practice while ensuring patient safety and regulatory compliance.",
    url: "https://www.linkedin.com/in/egelderblom/",
    keynote: true,
    gradient: "linear-gradient(135deg, #0F5F80 0%, #00C9FF 100%)",
  },
  {
    name: "Dr. Banu Buruk",
    initials: "BB",
    photo: "/speakers/buruk.webp",
    role: "Assistant Professor",
    affiliation: "Donders Institute for Brain, Cognition and Behaviour",
    bio: "Banu Buruk her research expertise focuses on the ethical integration of AI-driven decision support systems (DSS) in healthcare, with a particular emphasis on ensuring these systems enhance diagnostic accuracy, treatment personalization, and patient outcomes without introducing or perpetuating systemic biases or errors. She investigates how physicians, as key intermediaries between AI and patients, can effectively utilize their expertise to evaluate and, when necessary, challenge AI-generated outcomes. Her research also explores the dynamic roles of patients, physicians, and other professionals within this evolving ecosystem, emphasizing the importance of maintaining patient autonomy and ensuring ethical AI usage across diverse clinical contexts. Additionally, she examines the current regulatory landscape, which is rapidly evolving but may not fully address the needs and concerns of all stakeholders, advocating for robust safeguards that extend beyond minimum legal requirements to foster trust and efficacy in AI-supported healthcare.",
    url: "https://www.ru.nl/personen/buruk-b",
    keynote: false,
    gradient: "linear-gradient(135deg, #A63387 0%, #00AFDC 100%)",
  },
  {
    name: "Dr. Gerlof Bosma",
    initials: "GB",
    photo: "/speakers/bosma.webp",
    role: "Radiologist, Residency Program Director of Radiology",
    affiliation: "Elisabeth-TweeSteden Ziekenhuis (ETZ)",
    bio: "Gerlof Bosma is a radiologist and residency program director of radiology at the Elisabeth-TweeSteden Ziekenhuis (ETZ) in Tilburg. He received his medical degree from Erasmus University Rotterdam and completed his radiology training at Leiden University Medical Center, where he also obtained his PhD in neuroradiology. His areas of expertise include musculoskeletal, interventional, thoracic, mammography, and abdominal radiology. He specializes in minimally invasive interventional procedures including vessel dilation, shunt interventions, hemorrhage management, and abscess drainage. He is also a member of the national inspection committee for the Dutch Radiology Association.",
    url: "https://www.etz.nl/specialist/dr-g-p-t-bosma/",
    keynote: false,
    gradient: "linear-gradient(135deg, #0F5F80 0%, #00C9FF 100%)",
  },
  {
    name: "Dr. Denise Hilling",
    initials: "DH",
    photo: "/speakers/hilling.webp",
    role: "Assistant Professor, Surgeon",
    affiliation: "Erasmus MC, Erasmus University Rotterdam",
    bio: "Denise Hilling is a surgical researcher at Erasmus MC whose work focuses on gastrointestinal and colorectal cancer treatment. Her expertise encompasses neoadjuvant therapy approaches, fluorescence-guided surgery, and topical tumor visualization. She investigates the integration of artificial intelligence in surgical practice and has authored over 70 publications spanning systematic reviews and clinical studies. Her research further covers minimally invasive surgical techniques and health-related quality of life outcomes in cancer patients.",
    url: "https://pure.eur.nl/en/persons/denise-hilling/",
    keynote: false,
    gradient: "linear-gradient(135deg, #006991 0%, #00AFDC 100%)",
  },
  {
    name: "Dr.ir. Helma Torkamaan",
    initials: "HT",
    photo: "/speakers/torkamaan.webp",
    role: "Assistant Professor in AI for Health Systems",
    affiliation: "Delft University of Technology",
    bio: "Helma Torkamaan is an assistant professor specializing in artificial intelligence applications within health systems at the faculty of Technology, Policy and Management. She earned her PhD from the Interactive Systems group at the University of Duisburg-Essen, focusing on recommender systems in healthcare, and holds a master's degree in computer science from the University of Bonn. Her research employs an interdisciplinary approach combining computer science, psychology, business and healthcare perspectives. She concentrates on developing solutions for complex health system challenges, advancing technology-supported mental and physical wellness, designing user-centered personalized interactive systems, and evaluating AI-driven solutions responsibly, addressing the individual, mental, ecological and societal impacts of technological interventions.",
    url: "https://www.tudelft.nl/staff/h.torkamaan/",
    keynote: false,
    gradient: "linear-gradient(135deg, #A63387 0%, #00AFDC 100%)",
  },
  {
    name: "Harry Verbunt",
    initials: "HV",
    photo: "/speakers/verbunt.webp",
    role: "Chief Patient Officer",
    affiliation: "Antoni van Leeuwenhoek (AVL)",
    bio: "Harry Verbunt is Chief Patients Officer (CPO) at the Antoni van Leeuwenhoek Netherlands Cancer Institute. He is also CPO for CumuluZ, a non-profit foundation established by Dutch hospital and healthcare associations that builds a national data-integration infrastructure to make health data securely and efficiently available to healthcare providers, patients, and researchers across the country. In both roles, Harry represents the lived patient perspective at a strategic level, working to ensure patients are truly placed at the center of decisions on care, data, and innovation. He also serves as a patient advocate with organizations including CancerConnect and Digestive Cancers Europe (DiCE). Before this phase, he spent nearly 40 years in the ICT sector, the last 15 as Healthcare Lead at Hewlett Packard Enterprise, advising hospitals in the Netherlands and internationally.",
    url: "https://www.linkedin.com/in/harryverbunt/",
    keynote: false,
    gradient: "linear-gradient(135deg, #005A7D 0%, #00A0D1 100%)",
  },
];
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
  transition:
    transform var(--transition),
    box-shadow var(--transition);
}

.speaker-card.clickable {
  cursor: pointer;
}

.speaker-card.clickable:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.speaker-image {
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

.speaker-photo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  position: relative;
  z-index: 1;
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
  z-index: 2;
  background: var(--color-primary);
  color: white;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 6px 12px;
  border-radius: 4px;
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
  margin-bottom: 4px;
}

.speaker-affiliation {
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

  .modal-image {
    height: 220px;
  }

  .modal-body {
    padding: 24px;
  }
}
</style>
