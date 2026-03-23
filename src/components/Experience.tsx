import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-28 md:scroll-mt-20 py-16 md:py-20 bg-muted/30 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground text-lg">
              My professional journey
            </p>
          </div>

          <Card className="p-8 shadow-medium">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">Software Engineer - Full Stack</h3>
                  <p className="text-lg text-primary font-semibold">Worktual Innovations Pvt Ltd</p>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <Calendar className="h-4 w-4" />
                    <span>July 2023 – Present</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm leading-relaxed">
                  {/* <p className="text-base leading-relaxed">
                  I worked on enterprise contact center solutions, building web and mobile applications that support real-time communication, multi-channel engagement, and business-critical workflows.
                  </p> */}
                  <ul className="space-y-3 leading-relaxed">
                    <li className="flex items-start gap-3 rounded-md bg-background/70 px-3 py-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span>Designed and developed an AI-powered CCaaS platform integrated with CRM systems like Salesforce, HubSpot, Microsoft Dynamics, Zendesk, and Zoho, improving customer interaction workflows,
                      </span>                      </li>
                    <li className="flex items-start gap-3 rounded-md bg-background/70 px-3 py-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span>Built AI chatbot integrations for e-commerce platforms including Shopify, BigCommerce, and Wix to automate customer support and enhance user engagement,
                      </span>
                      </li>
                    <li className="flex items-start gap-3 rounded-md bg-background/70 px-3 py-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span>Developed scalable REST APIs using Node.js and Fastify for CRM integrations and real-time scheduling systems with tools like Google Calendar, Outlook, and Calendly,
                      </span>
                      </li>
                    <li className="flex items-start gap-3 rounded-md bg-background/70 px-3 py-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span> Implemented Zapier-based workflow automation enabling integration with 500+ third-party applications and reducing manual processes,
                      </span>
                      </li>
                    <li className="flex items-start gap-3 rounded-md bg-background/70 px-3 py-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span>Built secure backend services using Node.js, Fastify, and MySQL with authentication using JWT and OAuth 2.0,
                      </span>
                      </li>
                      <li className="flex items-start gap-3 rounded-md bg-background/70 px-3 py-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span>Contributed to a SaaS-based SEO and digital marketing platform by integrating APIs like DataForSEO, Serpstat, and Google Ads for real-time analytics
                      </span>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
