import { DOCUMENT, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

type Theme = 'dark' | 'light';

interface NavLink {
  label: string;
  href: string;
}

interface Project {
  title: string;
  description: string;
  stack: string[];
  status: string;
  impact: string;
  cta: string;
  link: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  contributions: string[];
  location: string;
}

interface SkillCluster {
  title: string;
  depth: string;
  items: string[];
}

interface Lab {
  title: string;
  blurb: string;
  category: string;
  link: string;
}

interface ContactChannel {
  label: string;
  value: string;
  hint: string;
  link: string;
}

interface Article {
  title: string;
  summary: string;
  link: string;
  readTime: string;
}

interface ContactModel {
  name: string;
  email: string;
  topic: string;
  message: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgClass, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly documentRef = inject(DOCUMENT);

  readonly navLinks: NavLink[] = [
    { label: 'Vision', href: '#vision' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Initiatives', href: '#labs' },
    { label: 'Credentials', href: '#articles' },
    { label: 'Contact', href: '#contact' }
  ];

  readonly hero = {
    name: 'Mayank Pathak',
    title: 'Software Engineer · Angular + AI Automation',
    summary:
      'Over 2 years of experience designing, building, and deploying Angular platforms plus AI-driven automation that modernize insurance underwriting and developer workflows.',
    availability: 'Open to impactful Angular + AI opportunities',
    location: 'Bengaluru · India',
    ethos: 'Ship measurable productivity gains by pairing clean architecture with intelligent agents.',
    tags: ['Angular & TypeScript', 'AI productivity agents', 'Insurance underwriting', 'Developer experience']
  };

  readonly heroHighlights = [
    { label: 'Delivery acceleration', value: '35%', detail: 'Faster releases through the One UI framework' },
    { label: 'Manual effort reduced', value: '40%', detail: 'AI agent translating BRDs into production-ready code' },
    { label: 'Faster underwriting', value: '30-40%', detail: 'Real-time verification tools for policy approvals' }
  ];

  readonly projects: Project[] = [
    {
      title: 'One UI Framework & AI Dev Agent',
      description:
        'Standardized UI/UX across GoDigit by generating reusable Angular components and JSON-bound models while an AI agent parsed BRDs into quality code.',
      stack: ['Angular', 'TypeScript', 'LLMs', 'Camunda', 'Docker'],
      status: 'GoDigit Life · 2024',
      impact: 'Boosted development speed 35% and reduced manual delivery effort by 40%.',
      cta: 'Explore system map',
      link: 'https://www.linkedin.com/in/mayankpathakmp'
    },
    {
      title: 'Underwriting Intelligence Platform',
      description:
        'Data-driven intelligence layer that analyzes historical policy data, captures renewal signals, and drives accurate quoting strategies.',
      stack: ['Angular', 'TypeScript', 'Python', 'SQL', 'AI automation'],
      status: 'GoDigit Life · 2024',
      impact: 'Delivered actionable insights and sped up quoting accuracy for underwriting teams.',
      cta: 'See decision flow',
      link: '#contact'
    },
    {
      title: 'IBM Quantum Circuit Composer Simulator',
      description:
        'Open-source, browser-based simulator with a drag-and-drop circuit editor that outputs Qiskit code and visualizes results via FastAPI + Chart.js.',
      stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'Docker'],
      status: 'Open source · 2025',
      impact: 'Made quantum computing experiments accessible for students and hobbyists.',
      cta: 'Launch demo',
      link: 'https://github.com/mayankpathak10299'
    }
  ];

  readonly experiences: Experience[] = [
    {
      company: 'Digit Life Insurance',
      role: 'Software Engineer',
      period: 'Jul 2024 → Present',
      location: 'Bengaluru',
      contributions: [
        'Architected the One UI framework so squads can scaffold reusable, data-bound Angular components in minutes.',
        'Embedded an AI-powered development agent that converts Business Requirement Documents into production-ready code.',
        'Accelerated release cadence and improved quality by rolling out standardized components across the enterprise.'
      ]
    },
    {
      company: 'Digit Life Insurance',
      role: 'Trainee Developer',
      period: 'Jun 2023 → Jun 2024',
      location: 'Bengaluru',
      contributions: [
        'Digitized the life insurance underwriting journey by launching core modules that reduced paperwork and processing time 30%.',
        'Built SPA tooling for document submission, medical coordination, and real-time KYC validation.',
        'Integrated AI-driven face detection and audio mismatch checks to strengthen Proposal PIVC verification.'
      ]
    }
  ];

  readonly skills: SkillCluster[] = [
    {
      title: 'Languages & Paradigms',
      depth: 'Core stack',
      items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Object-oriented design']
    },
    {
      title: 'Frontend Systems',
      depth: 'Frameworks & UX',
      items: ['Angular architecture', 'React interfaces', 'HTML/CSS/Sass', 'Responsive design systems']
    },
    {
      title: 'Automation & Intelligence',
      depth: 'AI-driven delivery',
      items: ['LLM + agent design', 'Camunda orchestration', 'Underwriting automation', 'Data visualization']
    },
    {
      title: 'Tools & Operations',
      depth: 'Collaboration & ops',
      items: ['Git & GitHub', 'Docker & DBeaver', 'Postman & API testing', 'Agile rituals']
    }
  ];

  readonly labs: Lab[] = [
    {
      title: 'AgentOps Control Tower',
      blurb: 'Self-hosted portal where Angular dashboards orchestrate AI agents to turn product specs into code, tests, and release notes.',
      category: 'Dev Productivity',
      link: '#'
    },
    {
      title: 'RiskSense Decision Hub',
      blurb: 'Simulation studio blending historical policy data with LLM explainers to stress-test underwriting strategies before launch.',
      category: 'Intelligent Analytics',
      link: '#'
    },
    {
      title: 'Identity Guardian Toolkit',
      blurb: 'Modular verification widgets (face, voice, document) that plug into any Angular SPA to secure onboarding journeys.',
      category: 'Trust & Safety',
      link: '#'
    }
  ];

  readonly articles: Article[] = [
    {
      title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      summary: 'Validated knowledge of core cloud services, workloads, and governance.',
      link: 'https://learn.microsoft.com/en-us/certifications/exams/az-900/',
      readTime: 'Issued 2021'
    },
    {
      title: 'HackerRank Certified: React & JavaScript',
      summary: 'Assessed UI engineering patterns, component logic, and JS fundamentals.',
      link: 'https://www.hackerrank.com/certifications',
      readTime: 'Issued 2022'
    },
    {
      title: 'Coursera: HTML, CSS, and JavaScript for Web Developers',
      summary: 'Completed Johns Hopkins course focused on modern responsive web foundations.',
      link: 'https://www.coursera.org/learn/html-css-javascript-for-web-developers',
      readTime: 'Issued 2020'
    }
  ];

  readonly contactChannels: ContactChannel[] = [
    {
      label: 'Email',
      value: 'mayankpathakmvp@gmail.com',
      hint: 'Best for Angular + AI engagements',
      link: 'mailto:mayankpathakmvp@gmail.com'
    },
    {
      label: 'Phone',
      value: '+91 70521 10998',
      hint: 'Available 10:00–19:00 IST',
      link: 'tel:+917052110998'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/mayankpathakmp',
      hint: 'Signals, writing, and hiring',
      link: 'https://www.linkedin.com/in/mayankpathakmp'
    },
    {
      label: 'GitHub',
      value: 'github.com/mayankpathak10299',
      hint: 'Projects, experiments, and open source',
      link: 'https://github.com/mayankpathak10299'
    }
  ];

  theme = signal<Theme>('dark');

  private readonly baselineExperience = new Date('2023-06-01');

  readonly experienceYears = computed(() => {
    const ms = Date.now() - this.baselineExperience.getTime();
    const years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
    return Math.max(1, years);
  });

  contactModel: ContactModel = {
    name: '',
    email: '',
    topic: '',
    message: ''
  };

  constructor() {
    // Update the global color-scheme token whenever the theme changes.
    effect(() => {
      const mode = this.theme();
      this.documentRef.documentElement.setAttribute('data-theme', mode);
    });
  }

  toggleTheme(): void {
    this.theme.update((mode) => (mode === 'dark' ? 'light' : 'dark'));
  }

  scrollToContact(): void {
    const element = this.documentRef.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  sendMessage(form: NgForm): void {
    const payload = this.contactModel;
    if (!payload.email || !payload.message) {
      return;
    }

    const subject = encodeURIComponent(payload.topic || 'Portfolio inquiry');
    const body = encodeURIComponent(`${payload.message}\n\n— ${payload.name || 'Anonymous'} (${payload.email})`);
    const target = `mailto:${this.contactChannels[0].value}?subject=${subject}&body=${body}`;

    if (typeof window !== 'undefined') {
      window.location.href = target;
    }

    form.resetForm();
  }

  trackByLabel = (_: number, item: { label: string }) => item.label;
  trackByTitle = (_: number, item: { title: string }) => item.title;
  trackByCompany = (_: number, item: Experience) => item.company;
}
