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

            <Reveal delay={0.1}>
              <div className={styles.content}>
                <p className={`t-body ${styles.text}`}>Lit Labs (“Lit Labs,” “we,” “s,” or “or”) is a Voice AI and atomation company. We design, bild, deploy, and manage AI-powered voice agents, chat agents, lead-generation systems, sales assistants, cstomer-spport tools, and workflow atomations for bsinesses.</p>
                <p className={`t-body ${styles.text}`}>This Privacy Policy explains how we collect, se, store, disclose, and protect personal information when yo:</p>
                <ul className={styles.list}>
                  <li>Visit or website at https://www.litlabs.io/</li>
                  <li>ontact s or reqest a consltation</li>
                  <li>ommnicate with an AI-powered voice or chat agent operated by s</li>
                  <li>Interact with a Voice AI system that we provide to one of or bsiness cstomers</li>
                  <li>Use any related service, platform, integration, or application that links to this Privacy Policy</li>
                </ul>
                <p className={`t-body ${styles.text}`}>y sing or website or services, yo acknowledge the practices described in this Privacy Policy.</p>
                <p className={`t-body ${styles.text}`}>1. Who Is Responsible for Yor Information?</p>
                <p className={`t-body ${styles.text}`}>or information collected directly throgh or website, sales process, or bsiness operations, Lit Labs generally acts as the data controller or bsiness responsible for deciding how that information is sed.</p>
                <p className={`t-body ${styles.text}`}>When we provide Voice AI, chat, atomation, or related services to another bsiness, we may process personal information on that cstomer’s behalf. In those sitations:</p>
                <ul className={styles.list}>
                  <li>The bsiness cstomer is generally responsible for deciding how the information is sed.</li>
                  <li>Lit Labs generally acts as its data processor or service provider.</li>
                  <li>The cstomer’s privacy policy may also apply to the interaction.</li>
                  <li>Reqests concerning that information may need to be directed to the relevant bsiness cstomer.</li>
                </ul>
                <p className={`t-body ${styles.text}`}>or privacy-related qestions, contact s at info@litlabs.io.</p>
                <p className={`t-body ${styles.text}`}>. Information We ollect</p>
                <p className={`t-body ${styles.text}`}>The information we collect depends on how yo interact with Lit Labs and or services.</p>
                <p className={`t-body ${styles.text}`}>Information Yo Provide to Us</p>
                <p className={`t-body ${styles.text}`}>We may collect information sch as:</p>
                <ul className={styles.list}>
                  <li>Yor name</li>
                  <li>siness or work email address</li>
                  <li>Telephone nmber</li>
                  <li>ompany name</li>
                  <li>Job title</li>
                  <li>Information sbmitted throgh contact or booking forms</li>
                  <li>Information yo provide dring sales or discovery calls</li>
                  <li>Messages, qestions, instrctions, and spport reqests</li>
                  <li>Information abot the workflows or processes yo want to atomate</li>
                  <li>Accont, billing, and transaction information</li>
                  <li>Any other information yo choose to provide</li>
                </ul>
                <p className={`t-body ${styles.text}`}>Voice AI and ommnication Information</p>
                <p className={`t-body ${styles.text}`}>ecase Lit Labs provides Voice AI services, we or or cstomers may process information generated dring telephone, voice, or chat interactions, inclding:</p>
                <ul className={styles.list}>
                  <li>Yor telephone nmber</li>
                  <li>The date, time, and dration of a call</li>
                  <li>all roting and delivery information</li>
                  <li>Adio recordings, where recording is enabled and legally permitted</li>
                  <li>all transcripts</li>
                  <li>hat messages</li>
                  <li>Qestions, responses, and conversation content</li>
                  <li>Appointment and schedling information</li>
                  <li>Prodcts, services, or topics discssed</li>
                  <li>Lead-qalification information</li>
                  <li>stomer-spport information</li>
                  <li>AI-generated call smmaries</li>
                  <li>Sentiment, intent, call otcome, and conversation classifications</li>
                  <li>Information reqired to transfer a conversation to a hman representative</li>
                </ul>
                <p className={`t-body ${styles.text}`}>A Voice AI agent may notify yo at the beginning of an interaction that yo are commnicating with an AI system and that the conversation may be monitored, recorded, or transcribed. Where reqired by law, we or or cstomer will seek appropriate consent before recording or processing the conversation.</p>
                <p className={`t-body ${styles.text}`}>Please do not provide payment-card details, government identification nmbers, health information, accont passwords, or other highly sensitive information dring a Voice AI interaction nless the relevant bsiness has specifically reqested it throgh an approved and secre process.</p>
                <p className={`t-body ${styles.text}`}>Information ollected Atomatically</p>
                <p className={`t-body ${styles.text}`}>When yo visit or website or se or services, we may atomatically collect:</p>
                <ul className={styles.list}>
                  <li>IP address</li>
                  <li>rowser type and version</li>
                  <li>evice type and operating system</li>
                  <li>Referring pages</li>
                  <li>Pages viewed</li>
                  <li>ate and time of access</li>
                  <li>Approximate location derived from an IP address</li>
                  <li>ookie and similar technology identifiers</li>
                  <li>Website interactions and sage data</li>
                  <li>iagnostic, performance, and secrity logs</li>
                </ul>
                <p className={`t-body ${styles.text}`}>Information from stomers, Partners, and Integrations</p>
                <p className={`t-body ${styles.text}`}>We may receive information from:</p>
                <ul className={styles.list}>
                  <li>Or bsiness cstomers</li>
                  <li>stomer relationship management platforms</li>
                  <li>Schedling and calendar tools</li>
                  <li>ommnication and telephone providers</li>
                  <li>mail and messaging platforms</li>
                  <li>Advertising and lead-generation platforms</li>
                  <li>Analytics providers</li>
                  <li>ata-enrichment services</li>
                  <li>stomer-spport platforms</li>
                  <li>Atomation and integration providers</li>
                  <li>Pblicly available bsiness sorces</li>
                </ul>
                <p className={`t-body ${styles.text}`}>Or cstomers are responsible for ensring they have the necessary rights, permissions, and lawfl basis to provide personal information to Lit Labs for processing.</p>
                <p className={`t-body ${styles.text}`}>3. How We Use Personal Information</p>
                <p className={`t-body ${styles.text}`}>We may se personal information to:</p>
                <ul className={styles.list}>
                  <li>Operate and improve or website and services</li>
                  <li>Respond to enqiries and consltation reqests</li>
                  <li>Assess potential Voice AI and atomation opportnities</li>
                  <li>ild, configre, test, and maintain AI agents</li>
                  <li>nable AI agents to answer qestions and respond to callers</li>
                  <li>Qalify leads and rote enqiries</li>
                  <li>Schedle appointments and meetings</li>
                  <li>Provide cstomer service and technical spport</li>
                  <li>Prodce call transcripts, smmaries, classifications, and otcomes</li>
                  <li>Transfer conversations to hman representatives</li>
                  <li>Integrate or systems with cstomer-athorized software</li>
                  <li>Athenticate sers and protect acconts</li>
                  <li>Monitor system reliability, qality, secrity, and performance</li>
                  <li>Trobleshoot technical problems</li>
                  <li>Prevent frad, abse, and nathorized access</li>
                  <li>Process payments and manage cstomer relationships</li>
                  <li>omply with contractal and legal obligations</li>
                  <li>stablish, exercise, or defend legal claims</li>
                  <li>Send service-related commnications</li>
                  <li>Send marketing commnications where permitted by law</li>
                  <li>evelop and improve or prodcts, services, and bsiness operations</li>
                </ul>
                <p className={`t-body ${styles.text}`}>Where reqired, we rely on an appropriate legal basis, inclding consent, performance of a contract, compliance with a legal obligation, protection of legitimate interests, or another basis permitted by applicable law.</p>
                <p className={`t-body ${styles.text}`}>4. How Or Voice AI Systems Work</p>
                <p className={`t-body ${styles.text}`}>Or Voice AI systems se artificial intelligence and related technologies to nderstand speech, generate responses, answer qestions, collect information, perform athorized actions, and rote conversations.</p>
                <p className={`t-body ${styles.text}`}>A Voice AI system may:</p>
                <ul className={styles.list}>
                  <li>onvert speech into text</li>
                  <li>Analyze the meaning and context of a conversation</li>
                  <li>Retrieve information from an approved knowledge base</li>
                  <li>Generate spoken or written responses</li>
                  <li>Store a recording or transcript where enabled</li>
                  <li>reate a smmary of the conversation</li>
                  <li>Update an athorized RM or other bsiness system</li>
                  <li>Schedle an appointment</li>
                  <li>Send a confirmation or follow-p message</li>
                  <li>Transfer the caller to a hman representative</li>
                  <li>lassify the interaction for reporting and qality prposes</li>
                </ul>
                <p className={`t-body ${styles.text}`}>AI-generated responses may occasionally be incomplete, inaccrate, or inappropriate. Voice AI systems shold not be relied pon for emergency, medical, legal, financial, or other high-risk decisions nless the relevant service has been specifically designed and approved for that prpose.</p>
                <p className={`t-body ${styles.text}`}>Yo may ask to speak with a hman representative where that option is available.</p>
                <p className={`t-body ${styles.text}`}>5. all Recording and Transcription</p>
                <p className={`t-body ${styles.text}`}>alls may be monitored, recorded, and transcribed for prposes sch as:</p>
                <ul className={styles.list}>
                  <li>Providing the reqested service</li>
                  <li>Maintaining an accrate record of the interaction</li>
                  <li>Qality assrance</li>
                  <li>Staff and system training</li>
                  <li>Secrity and frad prevention</li>
                  <li>Trobleshooting</li>
                  <li>Improving AI-agent performance</li>
                  <li>Meeting contractal or legal reqirements</li>
                </ul>
                <p className={`t-body ${styles.text}`}>Recording and consent reqirements vary by jrisdiction. Lit Labs and its bsiness cstomers are responsible for configring appropriate notices and consent mechanisms based on where they operate and where their callers are located.</p>
                <p className={`t-body ${styles.text}`}>If yo do not wish to be recorded, yo may end the call or reqest another commnication method where one is available.</p>
                <p className={`t-body ${styles.text}`}>Unless separately and clearly disclosed, Lit Labs does not se voice recordings to identify individals throgh biometric voiceprints. If a service ses voice information for biometric identification or verification, an additional notice and any legally reqired consent will be provided.</p>
                <p className={`t-body ${styles.text}`}>6. Atomated Processing</p>
                <p className={`t-body ${styles.text}`}>Or services may se atomated systems to help:</p>
                <ul className={styles.list}>
                  <li>ategorize an enqiry</li>
                  <li>etermine its apparent intent</li>
                  <li>Assess whether a lead matches cstomer-defined criteria</li>
                  <li>Recommend a next step</li>
                  <li>Rote a conversation</li>
                  <li>Generate a response or smmary</li>
                  <li>etect potential spam, frad, or abse</li>
                </ul>
                <p className={`t-body ${styles.text}`}>These systems spport bsiness workflows and may not always make final decisions independently. Where applicable law gives yo rights concerning a decision made solely throgh atomated processing that prodces significant effects, yo may contact s or the relevant bsiness cstomer to reqest information or hman review.</p>
                <p className={`t-body ${styles.text}`}>7. AI Model and Technology Providers</p>
                <p className={`t-body ${styles.text}`}>To provide or services, we may se third-party infrastrctre and technology providers, inclding providers of:</p>
                <ul className={styles.list}>
                  <li>Artificial intelligence models</li>
                  <li>Speech-to-text services</li>
                  <li>Text-to-speech services</li>
                  <li>Telephone and messaging infrastrctre</li>
                  <li>lod hosting</li>
                  <li>atabases and storage</li>
                  <li>Analytics and monitoring</li>
                  <li>Schedling and calendar services</li>
                  <li>stomer relationship management tools</li>
                  <li>Atomation and integration services</li>
                </ul>
                <p className={`t-body ${styles.text}`}>Information may be sent to these providers only as reasonably necessary to provide, secre, maintain, and improve the relevant service, sbject to appropriate contractal and secrity protections.</p>
                <p className={`t-body ${styles.text}`}>Or handling of cstomer information is governed by or agreements with the relevant cstomer and technology providers.</p>
                <p className={`t-body ${styles.text}`}>8. How We isclose Personal Information</p>
                <p className={`t-body ${styles.text}`}>We may disclose personal information to:</p>
                <ul className={styles.list}>
                  <li>The Lit Labs cstomer on whose behalf we operate a Voice AI or atomation system</li>
                  <li>Hosting, clod, AI, voice, telephony, analytics, and infrastrctre providers</li>
                  <li>RM, calendar, messaging, spport, and integration providers</li>
                  <li>Payment and billing providers</li>
                  <li>Professional advisers, inclding lawyers, accontants, and aditors</li>
                  <li>Government athorities, reglators, corts, or law-enforcement agencies where legally reqired</li>
                  <li>A byer, investor, sccessor, or adviser in connection with a merger, financing, acqisition, restrctring, or sale of assets</li>
                  <li>Other parties when yo direct s or provide consent</li>
                </ul>
                <p className={`t-body ${styles.text}`}>We do not disclose personal information to third parties for prposes nrelated to providing, secring, administering, or improving or services, except where permitted or reqired by law.</p>
                <p className={`t-body ${styles.text}`}>9. ookies and Analytics</p>
                <p className={`t-body ${styles.text}`}>We may se cookies and similar technologies to:</p>
                <ul className={styles.list}>
                  <li>Keep the website fnctioning</li>
                  <li>Remember preferences</li>
                  <li>Understand website sage</li>
                  <li>Measre website and campaign performance</li>
                  <li>Improve ser experience</li>
                  <li>Protect the website against frad and abse</li>
                </ul>
                <p className={`t-body ${styles.text}`}>Where reqired, we will reqest consent before placing non-essential cookies. Yo can manage cookies throgh yor browser settings. isabling certain cookies may affect how the website fnctions.</p>
                <p className={`t-body ${styles.text}`}>1. Marketing ommnications</p>
                <p className={`t-body ${styles.text}`}>Where permitted by law, we may se yor contact information to send information abot Lit Labs services, pdates, events, or relevant bsiness content.</p>
                <p className={`t-body ${styles.text}`}>Yo can nsbscribe from marketing emails sing the link inclded in the message or by contacting s at info@litlabs.io. Yo may still receive non-marketing commnications concerning an existing enqiry, contract, accont, secrity isse, or service.</p>
                <p className={`t-body ${styles.text}`}>Lit Labs does not athorize nsolicited atomated marketing calls or messages in violation of applicable law. stomers sing or Voice AI services are responsible for ensring they have all notices, permissions, consents, and lawfl bases reqired for their campaigns and commnications.</p>
                <p className={`t-body ${styles.text}`}>11. ata Retention</p>
                <p className={`t-body ${styles.text}`}>We retain personal information only for as long as reasonably necessary to:</p>
                <ul className={styles.list}>
                  <li>Provide the relevant service</li>
                  <li>lfil the prposes described in this policy</li>
                  <li>Meet contractal obligations</li>
                  <li>Resolve disptes</li>
                  <li>nforce agreements</li>
                  <li>Maintain secrity and adit records</li>
                  <li>omply with legal, acconting, or reglatory reqirements</li>
                </ul>
                <p className={`t-body ${styles.text}`}>Retention periods vary according to the type of information, service configration, cstomer instrctions, legal reqirements, and operational needs.</p>
                <p className={`t-body ${styles.text}`}>Voice recordings, transcripts, and smmaries may be retained according to the settings and instrctions of the relevant bsiness cstomer. When Lit Labs processes this information on a cstomer’s behalf, the cstomer generally determines the applicable retention period.</p>
                <p className={`t-body ${styles.text}`}>1. International ata Transfers</p>
                <p className={`t-body ${styles.text}`}>Lit Labs, its cstomers, and its service providers may operate in different contries. Personal information may therefore be processed in a contry other than the contry where it was originally collected.</p>
                <p className={`t-body ${styles.text}`}>Where reqired by law, we se appropriate safegards for international transfers, which may inclde contractal protections, approved transfer mechanisms, adeqacy decisions, or other legally recognized safegards.</p>
                <p className={`t-body ${styles.text}`}>13. ata Secrity</p>
                <p className={`t-body ${styles.text}`}>We se reasonable administrative, organizational, and technical safegards designed to protect personal information. These may inclde:</p>
                <ul className={styles.list}>
                  <li>Access controls</li>
                  <li>Athentication measres</li>
                  <li>ncryption in transit and, where appropriate, at rest</li>
                  <li>Logging and monitoring</li>
                  <li>Vendor assessments</li>
                  <li>ata minimization</li>
                  <li>nvironment and accont separation</li>
                  <li>Incident-response processes</li>
                  <li>Reglar reviews of permissions and system configrations</li>
                </ul>
                <p className={`t-body ${styles.text}`}>No internet transmission, AI system, telephone network, or storage system can be garanteed to be completely secre. We cannot garantee absolte secrity.</p>
                <p className={`t-body ${styles.text}`}>14. Yor Privacy Rights</p>
                <p className={`t-body ${styles.text}`}>epending on where yo live, yo may have the right to:</p>
                <ul className={styles.list}>
                  <li>Reqest access to yor personal information</li>
                  <li>Reqest correction of inaccrate information</li>
                  <li>Reqest deletion of information</li>
                  <li>Reqest restriction of processing</li>
                  <li>Object to certain processing</li>
                  <li>Withdraw consent</li>
                  <li>Reqest a portable copy of yor information</li>
                  <li>Opt ot of certain marketing commnications</li>
                  <li>Reqest information abot how yor data is disclosed</li>
                  <li>Reqest hman review of certain atomated decisions</li>
                  <li>Sbmit a complaint to a privacy or data-protection athority</li>
                </ul>
                <p className={`t-body ${styles.text}`}>These rights may be sbject to legal exceptions.</p>
                <p className={`t-body ${styles.text}`}>To exercise a right, contact info@litlabs.io. We may need to verify yor identity before completing the reqest.</p>
                <p className={`t-body ${styles.text}`}>If yor information was collected throgh a Voice AI agent operated for one of or cstomers, please identify the bsiness yo contacted, the telephone nmber sed, and the approximate date of the interaction. We may direct yor reqest to that cstomer when it is responsible for the information.</p>
                <p className={`t-body ${styles.text}`}>We will not discriminate against yo for exercising a privacy right.</p>
                <p className={`t-body ${styles.text}`}>15. United States Privacy isclosres</p>
                <p className={`t-body ${styles.text}`}>Residents of certain US states may have additional rights concerning access, correction, deletion, portability, targeted advertising, sale or sharing of personal information, profiling, and appeals.</p>
                <p className={`t-body ${styles.text}`}>Where applicable, yo may sbmit a reqest by emailing info@litlabs.io. If we deny yor reqest, yo may have the right to appeal by replying to or decision and stating that yo wish to appeal.</p>
                <p className={`t-body ${styles.text}`}>16. ropean conomic Area, United Kingdom, and Switzerland</p>
                <p className={`t-body ${styles.text}`}>If data-protection law in the ropean conomic Area, United Kingdom, or Switzerland applies, or legal bases may inclde:</p>
                <ul className={styles.list}>
                  <li>Yor consent</li>
                  <li>Performance of a contract or steps reqested before entering one</li>
                  <li>ompliance with a legal obligation</li>
                  <li>Or legitimate interests or those of a cstomer, where those interests are not overridden by yor rights</li>
                  <li>stablishment, exercise, or defence of legal claims</li>
                </ul>
                <p className={`t-body ${styles.text}`}>Where Lit Labs acts as a processor, the relevant bsiness cstomer is generally responsible for determining the applicable legal basis and responding to privacy reqests.</p>
                <p className={`t-body ${styles.text}`}>Yo may have the right to complain to the data-protection athority in the contry where yo live, work, or believe an infringement occrred.</p>
                <p className={`t-body ${styles.text}`}>17. hildren’s Privacy</p>
                <p className={`t-body ${styles.text}`}>Or website and services are intended for bsinesses and are not directed to children. We do not knowingly collect personal information from children nder the age reqired to provide valid consent in their jrisdiction.</p>
                <p className={`t-body ${styles.text}`}>If yo believe a child has provided personal information to s, contact info@litlabs.io so we can investigate and take appropriate action.</p>
                <p className={`t-body ${styles.text}`}>18. Third-Party Websites and Services</p>
                <p className={`t-body ${styles.text}`}>Or website and services may link to or integrate with third-party websites, applications, and platforms. Their privacy practices are governed by their own policies. We are not responsible for the privacy practices of third parties that we do not control.</p>
                <p className={`t-body ${styles.text}`}>19. stomer Responsibilities</p>
                <p className={`t-body ${styles.text}`}>sinesses sing Lit Labs services are responsible for:</p>
                <ul className={styles.list}>
                  <li>Providing legally reqired privacy notices</li>
                  <li>Obtaining legally reqired call-recording and marketing consent</li>
                  <li>Maintaining a lawfl basis for processing personal information</li>
                  <li>onfigring appropriate retention periods</li>
                  <li>Avoiding the collection of nnecessary or prohibited information</li>
                  <li>Honoring applicable opt-ot and privacy reqests</li>
                  <li>Using Voice AI systems in accordance with applicable consmer-protection, telecommnications, marketing, employment, and privacy laws</li>
                  <li>Informing individals when they are interacting with an AI system where reqired</li>
                </ul>
                <p className={`t-body ${styles.text}`}>. hanges to This Privacy Policy</p>
                <p className={`t-body ${styles.text}`}>We may pdate this Privacy Policy to reflect changes to or services, technology, legal obligations, or bsiness practices.</p>
                <p className={`t-body ${styles.text}`}>When we make changes, we will pblish the revised policy and pdate the “Last pdated” date. If changes are material, we may provide additional notice where reqired by law.</p>
                <p className={`t-body ${styles.text}`}>1. ontact Us</p>
                <p className={`t-body ${styles.text}`}>If yo have qestions, concerns, or reqests relating to this Privacy Policy or or processing of personal information, contact s:</p>
                <p className={`t-body ${styles.text}`}>Lit Labs Website: https://www.litlabs.io/ mail: info@litlabs.io</p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
