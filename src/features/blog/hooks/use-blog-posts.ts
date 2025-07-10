import { BlogPost } from "../types";

const dummyBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Prompt Engineering: Trends to Watch in 2024",
    slug: "future-prompt-engineering-2024",
    excerpt: "Explore the emerging trends and technologies that are shaping the future of prompt engineering, from advanced AI models to new interaction paradigms.",
    content: "The landscape of prompt engineering is evolving at an unprecedented pace. As we look ahead to 2024, several key trends are emerging that will fundamentally reshape how we interact with artificial intelligence systems.\n\nOne of the most significant developments is the rise of multimodal prompting. Unlike traditional text-based prompts, these new approaches allow engineers to combine text, images, audio, and even video inputs to create more nuanced and context-aware AI interactions. This shift represents a paradigm change from single-modal communication to rich, multimedia conversations with AI systems.\n\nAnother crucial trend is the development of meta-prompting frameworks. These sophisticated systems enable prompt engineers to create prompts that can generate other prompts, leading to more dynamic and adaptive AI interactions. This recursive approach to prompt design opens up possibilities for AI systems that can modify their own behavior based on context and user feedback.\n\nThe emergence of domain-specific prompt libraries is also transforming the field. Rather than starting from scratch, prompt engineers can now leverage specialized collections of proven prompts tailored to specific industries like healthcare, finance, or education. This standardization is accelerating adoption and improving consistency across different applications.\n\nPersonalization is becoming increasingly important in prompt engineering. AI systems are beginning to learn individual user preferences and communication styles, allowing for more natural and effective interactions. This trend toward personalized prompting represents a shift from one-size-fits-all approaches to truly customized AI experiences.\n\nFinally, the integration of real-time feedback loops is revolutionizing how prompts are optimized. Modern systems can analyze prompt effectiveness in real-time, automatically adjusting and improving prompts based on user responses and outcomes. This continuous improvement cycle ensures that prompt engineering becomes more effective over time.",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      bio: "AI Research Engineer at OpenAI"
    },
    publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["AI", "Prompt Engineering", "Future Tech"],
    readingTime: 8,
    featured: true
  },
  {
    id: "2",
    title: "Building Better Prompts: A Guide to Effective AI Communication",
    slug: "building-better-prompts-guide",
    excerpt: "Learn the fundamental principles of crafting prompts that get you better results from large language models.",
    content: "Full article content here...",
    author: {
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Senior Prompt Engineer at Anthropic"
    },
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    featuredImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
    tags: ["Prompting", "Best Practices", "Tutorial"],
    readingTime: 12,
    featured: false
  },
  {
    id: "3",
    title: "From Zero to Hero: Breaking Into the Prompt Engineering Field",
    slug: "breaking-into-prompt-engineering",
    excerpt: "A comprehensive roadmap for transitioning into a career in prompt engineering, including skills needed and where to start.",
    content: "Full article content here...",
    author: {
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Career Coach & Former ML Engineer"
    },
    publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    featuredImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
    tags: ["Career", "Getting Started", "Skills"],
    readingTime: 10,
    featured: true
  },
  {
    id: "4",
    title: "Advanced Prompt Techniques: Chain-of-Thought and Beyond",
    slug: "advanced-prompt-techniques",
    excerpt: "Dive deep into sophisticated prompting strategies including chain-of-thought reasoning, few-shot learning, and meta-prompting.",
    content: "Full article content here...",
    author: {
      name: "Dr. Emily Watson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bio: "AI Researcher at Google DeepMind"
    },
    publishedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    featuredImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Advanced", "Techniques", "Research"],
    readingTime: 15,
    featured: false
  },
  {
    id: "5",
    title: "The Economics of AI: How Prompt Engineers Are Changing Business",
    slug: "economics-ai-prompt-engineers",
    excerpt: "Examining the economic impact of prompt engineering roles and how they're transforming industries across the board.",
    content: "Full article content here...",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      bio: "Business Analyst & AI Strategy Consultant"
    },
    publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    tags: ["Business", "Economics", "Industry"],
    readingTime: 9,
    featured: false
  },
  {
    id: "6",
    title: "Multimodal AI: The Next Frontier in Prompt Engineering",
    slug: "multimodal-ai-prompt-engineering",
    excerpt: "Explore how prompt engineering is evolving with multimodal AI systems that can process text, images, audio, and video.",
    content: "Full article content here...",
    author: {
      name: "Lisa Zhang",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      bio: "Computer Vision Engineer at Meta"
    },
    publishedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    featuredImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop",
    tags: ["Multimodal", "Computer Vision", "Innovation"],
    readingTime: 11,
    featured: true
  },
  {
    id: "7",
    title: "Ethical Considerations in AI Prompt Design",
    slug: "ethical-considerations-ai-prompt-design",
    excerpt: "Understanding the ethical implications of prompt engineering and how to build responsible AI interactions.",
    content: "Full article content here...",
    author: {
      name: "Dr. Aisha Patel",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      bio: "AI Ethics Researcher at Stanford"
    },
    publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    featuredImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    tags: ["Ethics", "Responsibility", "AI Safety"],
    readingTime: 13,
    featured: false
  },
  {
    id: "8",
    title: "Tools and Frameworks Every Prompt Engineer Should Know",
    slug: "tools-frameworks-prompt-engineers",
    excerpt: "A comprehensive guide to the essential tools, libraries, and frameworks that can supercharge your prompt engineering workflow.",
    content: "Full article content here...",
    author: {
      name: "Tommy Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Developer Advocate at Hugging Face"
    },
    publishedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    featuredImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    tags: ["Tools", "Development", "Workflow"],
    readingTime: 7,
    featured: false
  },
  {
    id: "9",
    title: "Case Study: How Netflix Uses Prompt Engineering for Content",
    slug: "netflix-prompt-engineering-case-study",
    excerpt: "An inside look at how major streaming platforms leverage prompt engineering to enhance content discovery and user experience.",
    content: "Full article content here...",
    author: {
      name: "Jennifer Wu",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      bio: "Product Manager at Netflix"
    },
    publishedAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
    featuredImage: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=400&fit=crop",
    tags: ["Case Study", "Industry", "Content"],
    readingTime: 14,
    featured: true
  },
  {
    id: "10",
    title: "The Psychology Behind Effective AI Communication",
    slug: "psychology-effective-ai-communication",
    excerpt: "Understanding the cognitive principles that make some prompts more effective than others in human-AI interactions.",
    content: "Full article content here...",
    author: {
      name: "Dr. Michael Brown",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Cognitive Scientist & UX Researcher"
    },
    publishedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    featuredImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
    tags: ["Psychology", "UX", "Human-AI"],
    readingTime: 16,
    featured: false
  },
  {
    id: "11",
    title: "Prompt Engineering for Different Languages and Cultures",
    slug: "prompt-engineering-languages-cultures",
    excerpt: "Exploring the challenges and strategies for creating effective prompts across different languages and cultural contexts.",
    content: "Full article content here...",
    author: {
      name: "Sofia Martinez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bio: "Multilingual AI Specialist"
    },
    publishedAt: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString(),
    featuredImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop",
    tags: ["Localization", "Culture", "Languages"],
    readingTime: 12,
    featured: false
  },
  {
    id: "12",
    title: "Building AI-Powered Chatbots: A Prompt Engineer's Guide",
    slug: "building-ai-chatbots-guide",
    excerpt: "Step-by-step instructions for creating intelligent chatbots using modern prompt engineering techniques and best practices.",
    content: "Full article content here...",
    author: {
      name: "Ryan Park",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      bio: "Conversational AI Engineer"
    },
    publishedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    featuredImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop",
    tags: ["Chatbots", "Tutorial", "Development"],
    readingTime: 18,
    featured: false
  }
];

export function useBlogPosts(): BlogPost[] {
  return dummyBlogPosts;
}