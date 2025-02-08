<script setup lang="ts">
import { ref, computed } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';

const queryParams = new URLSearchParams(window.location.search);
const language = ref<'en' | 'es'>(queryParams.get('lang') === 'en' ? 'en' : 'es');

const translations = {
  en: {
    title: 'RSS STRATEGIC RESOURCES',
    subtitle: 'Unified portal of essential systems for Royal Space Society members',
    accessTitle: 'Priority Access',
    accessText: 'These systems are available exclusively for active Royal Space Society members.',
    securityLevel: 'Security Level: Omega-3',
    systemUpdate: 'System update: 18/7/2567 (Korvax Cycle)',
  },
  es: {
    title: 'RECURSOS ESTRATÉGICOS RSS',
    subtitle: 'Portal unificado de sistemas esenciales para miembros de la Royal Space Society',
    accessTitle: 'Acceso Prioritario',
    accessText: 'Estos sistemas están disponibles exclusivamente para miembros activos de la Royal Space Society.',
    securityLevel: 'Nivel de seguridad: Omega-3',
    systemUpdate: 'Actualización de sistemas: 18/7/2567 (Ciclo Korvax)',
  }
};

const t = computed(() => translations[language.value]);

const linkData = {
  es: [
    {
      title: 'Archivos HoloWiki RSS',
      url: 'https://nomanssky.fandom.com/es/wiki/Royal_Space_Society',
      category: 'Intel Galáctica',
      description: 'Núcleo central de conocimiento con registros históricos, protocolos de flota y mapas estelares actualizados',
      icon: 'pi pi-globe'
    },
    {
      title: 'Núcleo de Comando',
      url: 'https://muhaddil.github.io/RSSWikiPageCreator/',
      category: 'Operaciones Tácticas',
      description: 'Interfaz neural para coordinación de flotas estelares y monitorización en tiempo cuántico',
      icon: 'pi pi-sitemap'
    },
    {
      title: 'Sincronizador Cuántico',
      url: 'https://muhaddil.github.io/RSSWikiPageCreator/baserenewal.html',
      category: 'Actualización Sistemas',
      description: 'Módulo de sincronización multidimensional para registro de descubrimientos y artefactos alienígenas',
      icon: 'pi pi-cloud-download'
    },
    {
      title: 'Registro Identidad Galáctica',
      url: 'https://muhaddil.github.io/RSSWikiPageCreator/census.html',
      category: 'Censo Estelar',
      description: 'Sistema de verificación biométrica para membresía RSS y credenciales interestelares',
      icon: 'pi pi-id-card'
    },
    {
      title: 'Protocolos de la Flota',
      url: 'https://muhaddil.github.io/RSSWikiPageCreator/faq.html',
      category: 'Directrices Omega',
      description: 'Algoritmos de inteligencia artificial para resolución de incidencias y protocolos de emergencia',
      icon: 'pi pi-question-circle'
    },
    {
      title: 'Matriz de Portal Cuántico',
      url: 'https://muhaddil.github.io/RSSWikiPageCreator/glyphgeneratorV2.html',
      category: 'Tecnología Alienígena',
      description: 'Sistema de decodificación de coordenadas interdimensionales basado en artefactos de los Antiguos',
      icon: 'pi pi-map-marker'
    },
    {
      title: 'Holored Cuántica',
      url: 'https://discord.gg/oskar1up',
      category: 'Comunicación FTL',
      description: 'Matriz FTL (más rápida que la luz) para coordinación de flotas y eventos multigalácticos',
      icon: 'pi pi-bolt'
    },
    {
      title: 'Red Comando Estelar',
      url: 'https://x.com/RoyalSpaceHub',
      category: 'Comunicaciones Tácticas',
      description: 'Canal prioritario de transmisiones hiperlumínicas desde el Cuartel General de la RSS',
      icon: 'pi pi-sort-alt-slash'
    },
    {
      title: 'Foro Estelar',
      url: 'https://www.reddit.com/r/NMS_RSS/',
      category: 'Inteligencia Colectiva',
      description: 'Base de conocimiento actualizado en tiempo cuántico',
      icon: 'pi pi-comments'
    },
    {
      title: 'Matriz de Logros',
      category: 'Reconocimiento Singularidad',
      url: 'https://muhaddil.github.io/RSSWikiPageCreator/basesdestacadas.html',
      description: 'Base de datos con verificación holográfica de operaciones estelares destacadas',
      icon: 'pi pi-microchip'
    }
  ],
  en: [
    {
      title: 'HoloWiki RSS Archives',
      url: 'https://nomanssky.fandom.com/wiki/Royal_Space_Society',
      category: 'Galactic Intel',
      description: 'Central knowledge hub with historical records, fleet protocols, and updated star maps',
      icon: 'pi pi-globe'
    },
    {
      title: 'Command Core',
      url: 'https://muhaddil.github.io/RSSWikiPageCreator/',
      category: 'Tactical Operations',
      description: 'Neural interface for fleet coordination and real-time quantum monitoring',
      icon: 'pi pi-sitemap'
    },
    {
      title: 'Quantum Synchronizer',
      url: 'https://muhaddil.github.io/RSSWikiPageCreator/baserenewal.html',
      category: 'System Updates',
      description: 'Multidimensional sync module for discovery logs and alien artifact registration',
      icon: 'pi pi-cloud-download'
    },
    {
      title: 'Galactic Identity Registry',
      url: 'https://muhaddil.github.io/RSSWikiPageCreator/census.html',
      category: 'Stellar Census',
      description: 'Biometric verification system for RSS membership and interstellar credentials',
      icon: 'pi pi-id-card'
    },
    {
      title: 'Fleet Protocols',
      url: 'https://muhaddil.github.io/RSSWikiPageCreator/faq.html',
      category: 'Omega Directives',
      description: 'AI-powered algorithms for incident resolution and emergency protocols',
      icon: 'pi pi-question-circle'
    },
    {
      title: 'Quantum Portal Matrix',
      url: 'https://muhaddil.github.io/RSSWikiPageCreator/glyphgeneratorV2.html',
      category: 'Alien Technology',
      description: 'Interdimensional coordinate decoding system based on Ancient artifacts',
      icon: 'pi pi-map-marker'
    },
    {
      title: 'Quantum Holonet',
      url: 'https://discord.gg/oskar1up',
      category: 'FTL Communication',
      description: 'Faster-than-light matrix for fleet coordination and multigalactic events',
      icon: 'pi pi-bolt'
    },
    {
      title: 'Stellar Command Network',
      url: 'https://x.com/RoyalSpaceHub',
      category: 'Tactical Communications',
      description: 'Priority hyperluminal transmission channel from the RSS Headquarters',
      icon: 'pi pi-sort-alt-slash'
    },
    {
      title: 'Stellar Forum',
      url: 'https://www.reddit.com/r/NMS_RSS/',
      category: 'Collective Intelligence',
      description: 'Knowledge base updated in quantum time',
      icon: 'pi pi-comments'
    },
    {
      title: 'Matrix of Achievements',
      url: 'https://muhaddil.github.io/RSSWikiPageCreator/basesdestacadas.html',
      category: 'Recognition of Singularity',
      description: 'Database with holographic verification of notable star operations',
      icon: 'pi pi-microchip'
    }
  ]
};

const links = computed(() => linkData[language.value]);

const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

window.addEventListener('resize', updateScreenWidth);

const gridColumns = computed(() => screenWidth.value < 768 ? 1 : screenWidth.value < 1200 ? 2 : 3);
</script>

<template>
  <Card class="p-0 galactic-card">
    <template #content>
      <div class="space-page-container">
        <div class="flex items-start justify-between mb-6 header-container">
          <div class="flex flex-col">
            <a href="https://nomanssky.fandom.com/es/wiki/Royal_Space_Society" target="_blank">
              <div class="rss-logo">
                <img src="/assets/images/basesdestacadas/RSS-Logo.webp" class="logo-image" alt="RSS Logo" />
              </div>
            </a>
            <h1 class="text-4xl font-bold galactic-title">{{ t.title }}</h1>
            <p class="text-stellar-gray mt-2">{{ t.subtitle }}</p>
          </div>
        </div>

        <div class="grid gap-4" :style="`grid-template-columns: repeat(${gridColumns}, 1fr)`">
          <Card v-for="(link, index) in links" :key="index" class="link-card">
            <template #content>
              <a :href="link.url" target="_blank" class="link-content">
                <div class="flex items-start gap-4 p-4">
                  <i :class="link.icon" class="link-icon"></i>
                  <div>
                    <div class="flex items-center gap-2 mb-2">
                      {{ link.title }}
                      <Tag :value="link.category" class="category-tag" />
                    </div>
                    <p class="link-description">{{ link.description }}</p>
                  </div>
                </div>
              </a>
            </template>
          </Card>
        </div>

        <Panel class="galactic-panel mt-6">
          <template #header>
            <h2 class="panel-title">
              {{ t.accessTitle }}
            </h2>
          </template>
          <p class="panel-content">
            {{ t.accessText }}<br><br>
            <span class="security-level">{{ t.securityLevel }}</span><br>
            {{ t.systemUpdate }}
          </p>
        </Panel>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.galactic-card {
  --primary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --secondary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --text-primary: #1e293b;
  --text-secondary: #475569;
  --background-primary: #ffffff;
  --background-secondary: #f8fafc;
  --border-color: rgba(99, 102, 241, 0.15);
  --hover-effect: rgba(99, 102, 241, 0.1);
  --tag-background: rgba(79, 70, 229, 0.1);
  --tag-border: #4f46e5;
  --tag-text: #4f46e5;
}

.theme-dark .galactic-card {
  --primary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --secondary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --background-primary: #0a0e1a;
  --background-secondary: #1a1f2d;
  --border-color: rgba(103, 232, 249, 0.15);
  --hover-effect: rgba(103, 232, 249, 0.2);
  --tag-background: rgba(103, 232, 249, 0.1);
  --tag-border: #67e8f9;
  --tag-text: #67e8f9;
}

.galactic-card {
  background: var(--background-primary);
  border: 1px solid var(--border-color);
}

.galactic-title {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px var(--hover-effect);
  font-size: 2rem;
  line-height: 1.2;
}

.link-card {
  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.link-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 20px var(--hover-effect);
}

.category-tag {
  background: var(--tag-background) !important;
  border: 1px solid var(--tag-border) !important;
  color: var(--tag-text) !important;
  font-size: 0.8rem;
  margin-left: 0.2rem;
}

.text-stellar-gray {
  color: var(--text-secondary);
}

.link-content {
  color: var(--text-primary);
}

.link-content:hover {
  color: var(--tag-text);
}

.link-icon {
  color: var(--tag-text);
  font-size: 1.5rem;
}

.galactic-panel {
  background: var(--background-secondary) !important;
  border: 1px solid var(--border-color) !important;
}

.panel-title {
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.security-level {
  color: var(--tag-text);
  font-weight: 600;
}

.rss-logo {
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-end;
  right: 5%;
  top: 3%;
  height: auto;
  width: auto;
}

.logo-image {
  height: 80px;
  transition: transform 0.3s ease;
  filter: brightness(var(--logo-brightness, 1));
}

.theme-dark .logo-image {
  --logo-brightness: 0.9;
}

.logo-image:hover {
  transform: rotate(-5deg) scale(1.05);
}

@media (max-width: 768px) {
  .rss-logo {
    position: absolute;
    right: 0.1rem;
    top: 0.5rem;
    margin-top: 1rem;
    width: 60px;
    height: 40px;
  }

  .logo-image {
    height: auto;
    transition: transform 0.3s ease;
    filter: brightness(var(--logo-brightness, 1));
  }

  .galactic-title {
    font-size: 1.5rem;
    text-align: center;
  }

  .header-container {
    text-align: center;
  }
}
</style>
