import { Button } from "@/components/ui/button";
import BeigeBg from "@/components/beige-bg";
import Newsletter from "@/features/home/components/newsletter";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full h-full">
      <BeigeBg />
      
      {/* Header section */}
      <div className="container mt-4 md:mt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-beige-12 mb-4">
            About Prompt Engineers
          </h1>
          <p className="text-xl text-beige-11 leading-relaxed">
            The premier destination for AI professionals seeking opportunities in prompt engineering, 
            machine learning, and artificial intelligence.
          </p>
        </div>
      </div>
      
      {/* Main content */}
      <div className="bg-background">
        <div className="container py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Mission section */}
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We&apos;re building the bridge between exceptional AI talent and groundbreaking opportunities. 
                In a world where artificial intelligence is reshaping every industry, prompt engineers and 
                AI specialists are the architects of human-AI collaboration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform connects curious technologists, seasoned researchers, and innovative companies 
                who are pushing the boundaries of what&apos;s possible with AI. Whether you&apos;re crafting the perfect 
                prompt, optimizing large language models, or designing the next generation of AI interactions, 
                we&apos;re here to help you find your next breakthrough role.
              </p>
            </section>

            {/* Why Prompt Engineering section */}
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                Why Prompt Engineering Matters
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    The New Frontier
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Prompt engineering represents a fundamental shift in how we communicate with AI systems. 
                    It&apos;s not just about technology—it&apos;s about creating intuitive, effective, and ethical 
                    interactions between humans and artificial intelligence.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    High-Impact Work
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every prompt engineered today shapes how millions of users will interact with AI tomorrow. 
                    From improving customer service to advancing scientific research, prompt engineers are 
                    at the forefront of AI&apos;s real-world applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Growing Demand
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As AI adoption accelerates across industries, the demand for skilled prompt engineers 
                    continues to grow exponentially. Companies need experts who can unlock the full potential 
                    of AI systems and ensure they work effectively for real users.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Interdisciplinary Field
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Prompt engineering combines technical expertise with creativity, psychology, and domain 
                    knowledge. It&apos;s a field where diverse backgrounds and perspectives create the most 
                    innovative solutions.
                  </p>
                </div>
              </div>
            </section>

            {/* What we offer section */}
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                What We Offer
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-neutral-2 rounded-xl">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Curated Opportunities
                  </h3>
                  <p className="text-muted-foreground">
                    Hand-picked roles from leading AI companies, research institutions, and innovative startups 
                    working at the cutting edge of artificial intelligence.
                  </p>
                </div>
                <div className="p-6 bg-neutral-2 rounded-xl">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Industry Insights
                  </h3>
                  <p className="text-muted-foreground">
                    Stay informed with our blog featuring the latest trends, techniques, and best practices 
                    in prompt engineering and AI development.
                  </p>
                </div>
                <div className="p-6 bg-neutral-2 rounded-xl">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Community Focus
                  </h3>
                  <p className="text-muted-foreground">
                    Connect with a community of AI professionals who share your passion for advancing 
                    human-AI collaboration and pushing technological boundaries.
                  </p>
                </div>
              </div>
            </section>

            {/* Stats section */}
            <section className="mb-16 text-center">
              <h2 className="text-3xl font-semibold text-foreground mb-8">
                Growing Together
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary-11 mb-2">200k+</div>
                  <p className="text-muted-foreground">AI professionals in our network</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-11 mb-2">500+</div>
                  <p className="text-muted-foreground">Companies posting opportunities</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-11 mb-2">95%</div>
                  <p className="text-muted-foreground">Success rate for qualified candidates</p>
                </div>
              </div>
            </section>

            {/* Newsletter section */}
            <section className="mb-16">
              <Newsletter />
            </section>

            {/* CTA section */}
            <section className="text-center">
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                Ready to Shape the Future of AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of AI professionals who have found their next opportunity through our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/">Browse Jobs</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/blog">Read Our Blog</Link>
                </Button>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}