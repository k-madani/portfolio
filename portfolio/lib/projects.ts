export type Project = {
  id: number;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  achievements: string[];
  techStack: { name: string; description: string }[];
  techBadges: string[];
  metrics: { icon: string; text: string }[];
  links: {
    demo?: string;
    github?: string;
    blog?: string;
  };
  image?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Real-Time Auction Platform',
    description: 'WebSocket-powered bidding system handling 1000+ concurrent users with sub-100ms latency',
    challenge: 'Building a scalable real-time auction system that prevents auction sniping while maintaining low latency for hundreds of concurrent bidders.',
    solution: 'Implemented auto-extension mechanism using WebSocket/STOMP for bidirectional communication, Redis for session management and caching, with JWT authentication. The system includes bidirectional reviews, watchlist functionality, and automated auction lifecycle management.',
    achievements: [
      '1000+ concurrent users with stable performance',
      '210ms average bid processing time',
      'Sub-50ms response time with Redis caching',
      'Zero-downtime deployment with Docker/Kubernetes',
      '99.9% uptime over 30-day testing period',
    ],
    techStack: [
      { name: 'Spring Boot', description: 'Backend API framework with WebSocket support' },
      { name: 'WebSocket/STOMP', description: 'Real-time bidirectional communication protocol' },
      { name: 'Redis', description: 'Caching layer and session management' },
      { name: 'React', description: 'Frontend with real-time updates' },
      { name: 'PostgreSQL', description: 'Primary database for auction data' },
      { name: 'JWT', description: 'Stateless authentication mechanism' },
    ],
    techBadges: ['Spring Boot', 'WebSocket', 'React', 'Redis', 'PostgreSQL', 'Docker'],
    metrics: [
      { icon: '👥', text: '1000+ users' },
      { icon: '⚡', text: '210ms latency' },
      { icon: '🎯', text: '99.9% uptime' },
    ],
    links: {
      demo: 'https://auction-demo.com',
      github: 'https://github.com/yourusername/auction-platform',
      blog: 'https://blog.com/auction-architecture',
    },
  },
  {
    id: 2,
    title: 'ContentForge',
    description: 'Multi-agent AI content generation system producing publication-ready articles in 5 minutes at zero cost',
    challenge: 'Creating a production-grade AI content system that combines research, writing, editing, and SEO optimization while working within free-tier API limitations.',
    solution: 'Built a multi-agent architecture using CrewAI with specialized agents (Research, Writer, Editor, SEO). Implemented RAG with ChromaDB for semantic search, hybrid LLM strategy (Groq + Gemini) to bypass rate limits, and smart prompt engineering to reduce iterations.',
    achievements: [
      'Zero operational cost using free-tier APIs',
      '97% content generation success rate',
      '5-minute average generation time',
      'Quality scores of 82-87/100',
      'Replaces $49-99/month SaaS tools',
    ],
    techStack: [
      { name: 'CrewAI', description: 'Multi-agent orchestration framework' },
      { name: 'Gemini Pro', description: 'Primary LLM for content generation' },
      { name: 'Groq', description: 'Secondary LLM for research and editing' },
      { name: 'ChromaDB', description: 'Vector database for RAG implementation' },
      { name: 'Sentence Transformers', description: 'Semantic search and embeddings' },
    ],
    techBadges: ['CrewAI', 'Gemini', 'Groq', 'ChromaDB', 'RAG', 'Python'],
    metrics: [
      { icon: '💰', text: '$0 cost' },
      { icon: '📊', text: '97% success' },
      { icon: '⏱️', text: '5 min generation' },
    ],
    links: {
      github: 'https://github.com/yourusername/contentforge',
    },
  },
  {
    id: 3,
    title: 'Budgetly',
    description: 'Gamified budget tracking with auto-categorization, analytics, and achievement system',
    challenge: 'Creating an engaging budget tracking application that encourages consistent financial management without promoting unhealthy money obsession.',
    solution: 'Built a full-stack application with Django REST Framework backend and Next.js TypeScript frontend. Features include JWT authentication, ML-powered auto-categorization of transactions, gamification with achievements (excluding streak-based elements), interactive analytics charts, and CSV export functionality.',
    achievements: [
      'Dual-mode landing page (pre/post-login experiences)',
      'Auto-categorization reducing manual entry by 80%',
      'Achievement system with 15+ milestone badges',
      'Interactive analytics with Chart.js visualizations',
      'Theme switching with professional color schemes',
    ],
    techStack: [
      { name: 'Django REST Framework', description: 'Backend API with robust authentication' },
      { name: 'Next.js', description: 'Frontend with TypeScript for type safety' },
      { name: 'PostgreSQL', description: 'Relational database for financial data' },
      { name: 'Chart.js', description: 'Interactive data visualizations' },
      { name: 'JWT', description: 'Secure token-based authentication' },
    ],
    techBadges: ['Django', 'Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
    metrics: [
      { icon: '🎯', text: '80% less manual entry' },
      { icon: '🏆', text: '15+ achievements' },
      { icon: '📈', text: 'Real-time analytics' },
    ],
    links: {
      demo: 'https://budgetly-demo.com',
      github: 'https://github.com/yourusername/budgetly',
    },
  },
  {
    id: 4,
    title: 'RL Portfolio Optimizer',
    description: 'Deep Q-Network reinforcement learning system for stock portfolio optimization',
    challenge: 'Developing a reinforcement learning system that can make profitable trading decisions while managing risk in volatile market conditions.',
    solution: 'Implemented a DQN (Deep Q-Network) combined with Contextual Bandit algorithms for portfolio optimization. The system learns optimal allocation strategies through 100 training episodes, incorporating technical indicators and risk management.',
    achievements: [
      '160.94% total returns on test data',
      'Sharpe ratio of 1.93 indicating strong risk-adjusted returns',
      'Portfolio growth from $100k to $260k',
      'Zero training failures with clean convergence',
      'Smooth epsilon decay from exploration to exploitation',
    ],
    techStack: [
      { name: 'Python', description: 'Primary language for ML implementation' },
      { name: 'PyTorch', description: 'Deep learning framework for DQN' },
      { name: 'NumPy', description: 'Numerical computations and data processing' },
      { name: 'Pandas', description: 'Financial data manipulation' },
      { name: 'Matplotlib', description: 'Visualization of training progress' },
    ],
    techBadges: ['Python', 'PyTorch', 'NumPy', 'Pandas', 'RL'],
    metrics: [
      { icon: '📈', text: '160% returns' },
      { icon: '💹', text: '1.93 Sharpe ratio' },
      { icon: '🎯', text: 'Zero failures' },
    ],
    links: {
      github: 'https://github.com/yourusername/rl-portfolio',
    },
  },
];