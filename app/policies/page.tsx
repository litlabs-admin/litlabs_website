import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import styles from "./policies.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Lit Labs",
  description: "Privacy Policy for Lit Labs Voice AI and automation services.",
};

export default function PoliciesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <Reveal>
              <header className={styles.header}>
                <Eyebrow>Legal</Eyebrow>
                <h1 className={`t-display ${styles.title}`}>Privacy Policy</h1>
                <div className={styles.meta}>
                  <span className="t-caption">Effective date: 5 August 2026</span>
                  <span className="t-caption">Last updated: 5 August 2026</span>
                </div>
              </header>
            </Reveal>

            <div className={styles.content}>
                <p className={`t-body ${styles.text}`}>Lit Labs (“Lit Labs,” “we,” “us,” or “our”) is a Voice AI and automation company. We design, build, deploy, and manage AI-powered voice agents, chat agents, lead-generation systems, sales assistants, customer-support tools, and workflow automations for businesses.</p>
                <p className={`t-body ${styles.text}`}>This Privacy Policy explains how we collect, use, store, disclose, and protect personal information when you:</p>
                <ul className={styles.list}>
                  <li>Visit our website at https://www.litlabs.io/</li>
                  <li>Contact us or request a consultation</li>
                  <li>Communicate with an AI-powered voice or chat agent operated by us</li>
                  <li>Interact with a Voice AI system that we provide to one of our business customers</li>
                  <li>Use any related service, platform, integration, or application that links to this Privacy Policy</li>
                </ul>
                <p className={`t-body ${styles.text}`}>By using our website or services, you acknowledge the practices described in this Privacy Policy.</p>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>1. Who Is Responsible for Your Information?</h2>
                <div className={`t-body ${styles.text}`}>
                <p>For information collected directly through our website, sales process, or business operations, Lit Labs generally acts as the data controller or business responsible for deciding how that information is used.</p>
                <p>When we provide Voice AI, chat, automation, or related services to another business, we may process personal information on that customer’s behalf. In those situations:</p>
                <ul className={styles.list}>
                  <li>The business customer is generally responsible for deciding how the information is used.</li>
                  <li>Lit Labs generally acts as its data processor or service provider.</li>
                  <li>The customer’s privacy policy may also apply to the interaction.</li>
                  <li>Requests concerning that information may need to be directed to the relevant business customer.</li>
                </ul>
                <p>For privacy-related questions, contact us at info@litlabs.io.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>2. Information We Collect</h2>
                <div className={`t-body ${styles.text}`}>
                <p>The information we collect depends on how you interact with Lit Labs and our services.</p>
                <p><strong>Information You Provide to Us</strong></p>
                <p><strong>We may collect information such as:</strong></p>
                <ul className={styles.list}>
                  <li>Your name</li>
                  <li>Business or work email address</li>
                  <li>Telephone number</li>
                  <li>Company name</li>
                  <li>Job title</li>
                  <li>Information submitted through contact or booking forms</li>
                  <li>Information you provide during sales or discovery calls</li>
                  <li>Messages, questions, instructions, and support requests</li>
                  <li>Information about the workflows or processes you want to automate</li>
                  <li>Account, billing, and transaction information</li>
                  <li>Any other information you choose to provide</li>
                </ul>
                <p><strong>Voice AI and Communication Information</strong></p>
                <p>Because Lit Labs provides Voice AI services, we or our customers may process information generated during telephone, voice, or chat interactions, including:</p>
                <ul className={styles.list}>
                  <li>Your telephone number</li>
                  <li>The date, time, and duration of a call</li>
                  <li>Call routing and delivery information</li>
                  <li>Audio recordings, where recording is enabled and legally permitted</li>
                  <li>Call transcripts</li>
                  <li>Chat messages</li>
                  <li>Questions, responses, and conversation content</li>
                  <li>Appointment and scheduling information</li>
                  <li>Products, services, or topics discussed</li>
                  <li>Lead-qualification information</li>
                  <li>Customer-support information</li>
                  <li>AI-generated call summaries</li>
                  <li>Sentiment, intent, call outcome, and conversation classifications</li>
                  <li>Information required to transfer a conversation to a human representative</li>
                </ul>
                <p>A Voice AI agent may notify you at the beginning of an interaction that you are communicating with an AI system and that the conversation may be monitored, recorded, or transcribed. Where required by law, we or our customer will seek appropriate consent before recording or processing the conversation.</p>
                <p>Please do not provide payment-card details, government identification numbers, health information, account passwords, or other highly sensitive information during a Voice AI interaction unless the relevant business has specifically requested it through an approved and secure process.</p>
                <p><strong>Information Collected Automatically</strong></p>
                <p>When you visit our website or use our services, we may automatically collect:</p>
                <ul className={styles.list}>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Referring pages</li>
                  <li>Pages viewed</li>
                  <li>Date and time of access</li>
                  <li>Approximate location derived from an IP address</li>
                  <li>Cookie and similar technology identifiers</li>
                  <li>Website interactions and usage data</li>
                  <li>Diagnostic, performance, and security logs</li>
                </ul>
                <p><strong>Information from Customers, Partners, and Integrations</strong></p>
                <p><strong>We may receive information from:</strong></p>
                <ul className={styles.list}>
                  <li>Our business customers</li>
                  <li>Customer relationship management platforms</li>
                  <li>Scheduling and calendar tools</li>
                  <li>Communication and telephone providers</li>
                  <li>Email and messaging platforms</li>
                  <li>Advertising and lead-generation platforms</li>
                  <li>Analytics providers</li>
                  <li>Data-enrichment services</li>
                  <li>Customer-support platforms</li>
                  <li>Automation and integration providers</li>
                  <li>Publicly available business sources</li>
                </ul>
                <p>Our customers are responsible for ensuring they have the necessary rights, permissions, and lawful basis to provide personal information to Lit Labs for processing.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>3. How We Use Personal Information</h2>
                <div className={`t-body ${styles.text}`}>
                <p><strong>We may use personal information to:</strong></p>
                <ul className={styles.list}>
                  <li>Operate and improve our website and services</li>
                  <li>Respond to enquiries and consultation requests</li>
                  <li>Assess potential Voice AI and automation opportunities</li>
                  <li>Build, configure, test, and maintain AI agents</li>
                  <li>Enable AI agents to answer questions and respond to callers</li>
                  <li>Qualify leads and route enquiries</li>
                  <li>Schedule appointments and meetings</li>
                  <li>Provide customer service and technical support</li>
                  <li>Produce call transcripts, summaries, classifications, and outcomes</li>
                  <li>Transfer conversations to human representatives</li>
                  <li>Integrate our systems with customer-authorized software</li>
                  <li>Authenticate users and protect accounts</li>
                  <li>Monitor system reliability, quality, security, and performance</li>
                  <li>Troubleshoot technical problems</li>
                  <li>Prevent fraud, abuse, and unauthorized access</li>
                  <li>Process payments and manage customer relationships</li>
                  <li>Comply with contractual and legal obligations</li>
                  <li>Establish, exercise, or defend legal claims</li>
                  <li>Send service-related communications</li>
                  <li>Send marketing communications where permitted by law</li>
                  <li>Develop and improve our products, services, and business operations</li>
                </ul>
                <p>Where required, we rely on an appropriate legal basis, including consent, performance of a contract, compliance with a legal obligation, protection of legitimate interests, or another basis permitted by applicable law.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>4. How Our Voice AI Systems Work</h2>
                <div className={`t-body ${styles.text}`}>
                <p>Our Voice AI systems use artificial intelligence and related technologies to understand speech, generate responses, answer questions, collect information, perform authorized actions, and route conversations.</p>
                <p><strong>A Voice AI system may:</strong></p>
                <ul className={styles.list}>
                  <li>Convert speech into text</li>
                  <li>Analyze the meaning and context of a conversation</li>
                  <li>Retrieve information from an approved knowledge base</li>
                  <li>Generate spoken or written responses</li>
                  <li>Store a recording or transcript where enabled</li>
                  <li>Create a summary of the conversation</li>
                  <li>Update an authorized CRM or other business system</li>
                  <li>Schedule an appointment</li>
                  <li>Send a confirmation or follow-up message</li>
                  <li>Transfer the caller to a human representative</li>
                  <li>Classify the interaction for reporting and quality purposes</li>
                </ul>
                <p>AI-generated responses may occasionally be incomplete, inaccurate, or inappropriate. Voice AI systems should not be relied upon for emergency, medical, legal, financial, or other high-risk decisions unless the relevant service has been specifically designed and approved for that purpose.</p>
                <p>You may ask to speak with a human representative where that option is available.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>5. Call Recording and Transcription</h2>
                <div className={`t-body ${styles.text}`}>
                <p>Calls may be monitored, recorded, and transcribed for purposes such as:</p>
                <ul className={styles.list}>
                  <li>Providing the requested service</li>
                  <li>Maintaining an accurate record of the interaction</li>
                  <li>Quality assurance</li>
                  <li>Staff and system training</li>
                  <li>Security and fraud prevention</li>
                  <li>Troubleshooting</li>
                  <li>Improving AI-agent performance</li>
                  <li>Meeting contractual or legal requirements</li>
                </ul>
                <p>Recording and consent requirements vary by jurisdiction. Lit Labs and its business customers are responsible for configuring appropriate notices and consent mechanisms based on where they operate and where their callers are located.</p>
                <p>If you do not wish to be recorded, you may end the call or request another communication method where one is available.</p>
                <p>Unless separately and clearly disclosed, Lit Labs does not use voice recordings to identify individuals through biometric voiceprints. If a service uses voice information for biometric identification or verification, an additional notice and any legally required consent will be provided.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>6. Automated Processing</h2>
                <div className={`t-body ${styles.text}`}>
                <p><strong>Our services may use automated systems to help:</strong></p>
                <ul className={styles.list}>
                  <li>Categorize an enquiry</li>
                  <li>Determine its apparent intent</li>
                  <li>Assess whether a lead matches customer-defined criteria</li>
                  <li>Recommend a next step</li>
                  <li>Route a conversation</li>
                  <li>Generate a response or summary</li>
                  <li>Detect potential spam, fraud, or abuse</li>
                </ul>
                <p>These systems support business workflows and may not always make final decisions independently. Where applicable law gives you rights concerning a decision made solely through automated processing that produces significant effects, you may contact us or the relevant business customer to request information or human review.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>7. AI Model and Technology Providers</h2>
                <div className={`t-body ${styles.text}`}>
                <p>To provide our services, we may use third-party infrastructure and technology providers, including providers of:</p>
                <ul className={styles.list}>
                  <li>Artificial intelligence models</li>
                  <li>Speech-to-text services</li>
                  <li>Text-to-speech services</li>
                  <li>Telephone and messaging infrastructure</li>
                  <li>Cloud hosting</li>
                  <li>Databases and storage</li>
                  <li>Analytics and monitoring</li>
                  <li>Scheduling and calendar services</li>
                  <li>Customer relationship management tools</li>
                  <li>Automation and integration services</li>
                </ul>
                <p>Information may be sent to these providers only as reasonably necessary to provide, secure, maintain, and improve the relevant service, subject to appropriate contractual and security protections.</p>
                <p>Our handling of customer information is governed by our agreements with the relevant customer and technology providers.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>8. How We Disclose Personal Information</h2>
                <div className={`t-body ${styles.text}`}>
                <p><strong>We may disclose personal information to:</strong></p>
                <ul className={styles.list}>
                  <li>The Lit Labs customer on whose behalf we operate a Voice AI or automation system</li>
                  <li>Hosting, cloud, AI, voice, telephony, analytics, and infrastructure providers</li>
                  <li>CRM, calendar, messaging, support, and integration providers</li>
                  <li>Payment and billing providers</li>
                  <li>Professional advisers, including lawyers, accountants, and auditors</li>
                  <li>Government authorities, regulators, courts, or law-enforcement agencies where legally required</li>
                  <li>A buyer, investor, successor, or adviser in connection with a merger, financing, acquisition, restructuring, or sale of assets</li>
                  <li>Other parties when you direct us or provide consent</li>
                </ul>
                <p>We do not disclose personal information to third parties for purposes unrelated to providing, securing, administering, or improving our services, except where permitted or required by law.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>9. Cookies and Analytics</h2>
                <div className={`t-body ${styles.text}`}>
                <p><strong>We may use cookies and similar technologies to:</strong></p>
                <ul className={styles.list}>
                  <li>Keep the website functioning</li>
                  <li>Remember preferences</li>
                  <li>Understand website usage</li>
                  <li>Measure website and campaign performance</li>
                  <li>Improve user experience</li>
                  <li>Protect the website against fraud and abuse</li>
                </ul>
                <p>Where required, we will request consent before placing non-essential cookies. You can manage cookies through your browser settings. Disabling certain cookies may affect how the website functions.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>10. Marketing Communications</h2>
                <div className={`t-body ${styles.text}`}>
                <p>Where permitted by law, we may use your contact information to send information about Lit Labs services, updates, events, or relevant business content.</p>
                <p>You can unsubscribe from marketing emails using the link included in the message or by contacting us at info@litlabs.io. You may still receive non-marketing communications concerning an existing enquiry, contract, account, security issue, or service.</p>
                <p>Lit Labs does not authorize unsolicited automated marketing calls or messages in violation of applicable law. Customers using our Voice AI services are responsible for ensuring they have all notices, permissions, consents, and lawful bases required for their campaigns and communications.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>11. Data Retention</h2>
                <div className={`t-body ${styles.text}`}>
                <p>We retain personal information only for as long as reasonably necessary to:</p>
                <ul className={styles.list}>
                  <li>Provide the relevant service</li>
                  <li>Fulfil the purposes described in this policy</li>
                  <li>Meet contractual obligations</li>
                  <li>Resolve disputes</li>
                  <li>Enforce agreements</li>
                  <li>Maintain security and audit records</li>
                  <li>Comply with legal, accounting, or regulatory requirements</li>
                </ul>
                <p>Retention periods vary according to the type of information, service configuration, customer instructions, legal requirements, and operational needs.</p>
                <p>Voice recordings, transcripts, and summaries may be retained according to the settings and instructions of the relevant business customer. When Lit Labs processes this information on a customer’s behalf, the customer generally determines the applicable retention period.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>12. International Data Transfers</h2>
                <div className={`t-body ${styles.text}`}>
                <p>Lit Labs, its customers, and its service providers may operate in different countries. Personal information may therefore be processed in a country other than the country where it was originally collected.</p>
                <p>Where required by law, we use appropriate safeguards for international transfers, which may include contractual protections, approved transfer mechanisms, adequacy decisions, or other legally recognized safeguards.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>13. Data Security</h2>
                <div className={`t-body ${styles.text}`}>
                <p>We use reasonable administrative, organizational, and technical safeguards designed to protect personal information. These may include:</p>
                <ul className={styles.list}>
                  <li>Access controls</li>
                  <li>Authentication measures</li>
                  <li>Encryption in transit and, where appropriate, at rest</li>
                  <li>Logging and monitoring</li>
                  <li>Vendor assessments</li>
                  <li>Data minimization</li>
                  <li>Environment and account separation</li>
                  <li>Incident-response processes</li>
                  <li>Regular reviews of permissions and system configurations</li>
                </ul>
                <p>No internet transmission, AI system, telephone network, or storage system can be guaranteed to be completely secure. We cannot guarantee absolute security.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>14. Your Privacy Rights</h2>
                <div className={`t-body ${styles.text}`}>
                <p><strong>Depending on where you live, you may have the right to:</strong></p>
                <ul className={styles.list}>
                  <li>Request access to your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of information</li>
                  <li>Request restriction of processing</li>
                  <li>Object to certain processing</li>
                  <li>Withdraw consent</li>
                  <li>Request a portable copy of your information</li>
                  <li>Opt out of certain marketing communications</li>
                  <li>Request information about how your data is disclosed</li>
                  <li>Request human review of certain automated decisions</li>
                  <li>Submit a complaint to a privacy or data-protection authority</li>
                </ul>
                <p>These rights may be subject to legal exceptions.</p>
                <p>To exercise a right, contact info@litlabs.io. We may need to verify your identity before completing the request.</p>
                <p>If your information was collected through a Voice AI agent operated for one of our customers, please identify the business you contacted, the telephone number used, and the approximate date of the interaction. We may direct your request to that customer when it is responsible for the information.</p>
                <p>We will not discriminate against you for exercising a privacy right.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>15. United States Privacy Disclosures</h2>
                <div className={`t-body ${styles.text}`}>
                <p>Residents of certain US states may have additional rights concerning access, correction, deletion, portability, targeted advertising, sale or sharing of personal information, profiling, and appeals.</p>
                <p>Where applicable, you may submit a request by emailing info@litlabs.io. If we deny your request, you may have the right to appeal by replying to our decision and stating that you wish to appeal.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>16. European Economic Area, United Kingdom, and Switzerland</h2>
                <div className={`t-body ${styles.text}`}>
                <p>If data-protection law in the European Economic Area, United Kingdom, or Switzerland applies, our legal bases may include:</p>
                <ul className={styles.list}>
                  <li>Your consent</li>
                  <li>Performance of a contract or steps requested before entering one</li>
                  <li>Compliance with a legal obligation</li>
                  <li>Our legitimate interests or those of a customer, where those interests are not overridden by your rights</li>
                  <li>Establishment, exercise, or defence of legal claims</li>
                </ul>
                <p>Where Lit Labs acts as a processor, the relevant business customer is generally responsible for determining the applicable legal basis and responding to privacy requests.</p>
                <p>You may have the right to complain to the data-protection authority in the country where you live, work, or believe an infringement occurred.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>17. Children’s Privacy</h2>
                <div className={`t-body ${styles.text}`}>
                <p>Our website and services are intended for businesses and are not directed to children. We do not knowingly collect personal information from children under the age required to provide valid consent in their jurisdiction.</p>
                <p>If you believe a child has provided personal information to us, contact info@litlabs.io so we can investigate and take appropriate action.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>18. Third-Party Websites and Services</h2>
                <div className={`t-body ${styles.text}`}>
                <p>Our website and services may link to or integrate with third-party websites, applications, and platforms. Their privacy practices are governed by their own policies. We are not responsible for the privacy practices of third parties that we do not control.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>19. Customer Responsibilities</h2>
                <div className={`t-body ${styles.text}`}>
                <p><strong>Businesses using Lit Labs services are responsible for:</strong></p>
                <ul className={styles.list}>
                  <li>Providing legally required privacy notices</li>
                  <li>Obtaining legally required call-recording and marketing consent</li>
                  <li>Maintaining a lawful basis for processing personal information</li>
                  <li>Configuring appropriate retention periods</li>
                  <li>Avoiding the collection of unnecessary or prohibited information</li>
                  <li>Honouring applicable opt-out and privacy requests</li>
                  <li>Using Voice AI systems in accordance with applicable consumer-protection, telecommunications, marketing, employment, and privacy laws</li>
                  <li>Informing individuals when they are interacting with an AI system where required</li>
                </ul>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>20. Changes to This Privacy Policy</h2>
                <div className={`t-body ${styles.text}`}>
                <p>We may update this Privacy Policy to reflect changes to our services, technology, legal obligations, or business practices.</p>
                <p>When we make changes, we will publish the revised policy and update the “Last updated” date. If changes are material, we may provide additional notice where required by law.</p>
                </div>
              </section>
              <section className={styles.contentSection}>
                <h2 className={`t-h4 ${styles.heading}`}>21. Contact Us</h2>
                <div className={`t-body ${styles.text}`}>
                <p>If you have questions, concerns, or requests relating to this Privacy Policy or our processing of personal information, contact us:</p>
                <p>Lit Labs Website: https://www.litlabs.io/ Email: info@litlabs.io</p>
                </div>
              </section>
              </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
