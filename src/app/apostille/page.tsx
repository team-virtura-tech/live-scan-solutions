import { GenericHero } from '@/components/common/GenericHero';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Check,
  CheckCircle,
  Clock,
  FileText,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
  Smartphone,
  Stamp,
  Star,
  Users,
} from 'lucide-react';

const apostilleServices = [
  {
    icon: FileText,
    title: 'Personal Documents',
    description:
      'Birth certificates, death certificates, marriage certificates',
    examples: [
      'Birth certificates',
      'Death certificates',
      'Marriage certificates',
      'Divorce decrees',
      'Adoption papers',
    ],
  },
  {
    icon: BookOpen,
    title: 'Educational Documents',
    description: 'Diplomas, transcripts, and academic credentials',
    examples: [
      'University diplomas',
      'High school diplomas',
      'Transcripts',
      'Degree certificates',
      'Academic records',
    ],
  },
  {
    icon: Building2,
    title: 'Corporate Documents',
    description: 'Business certificates, articles of incorporation',
    examples: [
      'Articles of incorporation',
      'Business licenses',
      'Corporate certificates',
      'Partnership agreements',
      'Power of attorney',
    ],
  },
  {
    icon: Stamp,
    title: 'Legal Documents',
    description: 'Court documents, affidavits, and legal certificates',
    examples: [
      'Court orders',
      'Affidavits',
      'Legal certificates',
      'Custody documents',
      'Criminal background checks',
    ],
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Consultation & Assessment',
    description:
      'We review your documents and determine apostille requirements',
    icon: Users,
    details: [
      'Document type verification',
      'Country requirement check',
      'Processing timeline estimate',
      'Cost assessment',
    ],
  },
  {
    step: 2,
    title: 'Document Submission',
    description: 'Submit your documents in person or via secure mail',
    icon: Mail,
    details: [
      'In-person submission',
      'Secure mail option',
      'Document verification',
      'Receipt confirmation',
    ],
  },
  {
    step: 3,
    title: 'Processing & Certification',
    description: 'Our experts handle the entire apostille process',
    icon: Stamp,
    details: [
      'State authentication',
      'Secretary of State processing',
      'Quality verification',
      'Secure handling',
    ],
  },
  {
    step: 4,
    title: 'Delivery',
    description: 'Receive your apostilled documents securely',
    icon: CheckCircle,
    details: [
      'In-person pickup',
      'Secure mail delivery',
      'Tracking information',
      'Document verification',
    ],
  },
];

const serviceOptions = [
  {
    icon: Users,
    title: 'Standard Processing',
    description: '5-10 business days processing time',
    timeframe: '5-10 days',
    price: 'From $75',
    features: [
      'Complete apostille service',
      'Document verification',
      'State processing',
      'Secure handling',
    ],
    popular: false,
  },
  {
    icon: Clock,
    title: 'Express Processing',
    description: '2-3 business days expedited service',
    timeframe: '2-3 days',
    price: 'From $125',
    features: [
      'Priority processing',
      'Expedited state handling',
      'Rush verification',
      'Express delivery option',
    ],
    popular: true,
  },
  {
    icon: Smartphone,
    title: 'Consultation Service',
    description: 'Expert guidance for complex cases',
    timeframe: 'Same day',
    price: 'From $50',
    features: [
      'Document assessment',
      'Requirement analysis',
      'Process guidance',
      'Country-specific advice',
    ],
    popular: false,
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Certified Expertise',
    description:
      'Years of experience in document authentication and apostille services',
  },
  {
    icon: Globe,
    title: 'International Knowledge',
    description:
      'Deep understanding of Hague Convention requirements and country-specific needs',
  },
  {
    icon: Shield,
    title: 'Secure Processing',
    description:
      'Your sensitive documents are handled with the highest security standards',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description:
      'Efficient processing with standard and expedited options available',
  },
];

const faqItems = [
  {
    question: 'What is an Apostille?',
    answer:
      'An apostille is a form of authentication issued to documents for use in countries that participate in the Hague Convention. It verifies the authenticity of the document for international use.',
  },
  {
    question: 'Which countries accept apostille?',
    answer:
      'All countries that are members of the Hague Convention accept apostille. This includes most European countries, many Asian countries, Australia, and others. For non-Hague countries, documents require embassy legalization.',
  },
  {
    question: 'How long does the apostille process take?',
    answer:
      'Standard processing typically takes 5-10 business days, while expedited service can be completed in 2-3 business days. Processing times may vary depending on the document type and state requirements.',
  },
  {
    question: 'Do I need to notarize my documents first?',
    answer:
      'Some documents may require notarization before apostille. We provide comprehensive services including notarization, translation, and authentication to simplify the entire process.',
  },
];

export default function ApostillePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <GenericHero
        badges={[
          {
            icon: Globe,
            text: 'Hague Convention Certified',
            variant: 'secondary',
          },
          {
            icon: Shield,
            text: 'Secure Processing',
            variant: 'secondary',
          },
          {
            icon: Star,
            text: 'Expert Service',
            variant: 'outline',
            iconClassName: 'fill-yellow-400 text-yellow-400',
          },
        ]}
        title={
          <>
            Professional <span className="text-primary">Apostille</span>{' '}
            Services
          </>
        }
        description="Simplifying document authentication for international use. Expert apostille services for personal, educational, and corporate documents with fast, secure processing."
        benefits={[
          { text: 'Fast processing' },
          { text: 'Secure handling' },
          { text: 'Expert guidance' },
          { text: 'All document types' },
        ]}
        ctaText="Please call us to schedule your appointment"
        buttons={[
          {
            text: '(650) 961-4646',
            href: 'tel:650-961-4646',
            icon: Phone,
            variant: 'outline',
            size: 'lg',
          },
        ]}
        quickInfo={[
          {
            icon: Clock,
            text: 'Mon-Fri: 10AM-5PM PST | Sat: 10AM-2PM PST | Sun: Closed',
          },
          {
            icon: MapPin,
            text: 'Bay Area Locations',
          },
        ]}
        rightContent={
          <div className="space-y-4 md:space-y-6">
            <Card className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <h3 className="text-lg md:text-xl font-semibold">
                  Apostille Services
                </h3>
                <Badge
                  variant="outline"
                  className="self-start sm:self-center bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-900"
                >
                  Lowest price in town
                </Badge>
              </div>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Document authentication</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                  <span className="text-sm">State certification</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                  <span className="text-sm">International validation</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Secure processing</span>
                </li>
              </ul>
            </Card>

            <Card className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <h3 className="text-lg md:text-xl font-semibold">
                  Additional Services
                </h3>
                <Badge
                  variant="outline"
                  className="self-start sm:self-center bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-900"
                >
                  Complete Solution
                </Badge>
              </div>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Document notarization</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Translation services</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Embassy legalization</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Consultation & guidance</span>
                </li>
              </ul>
            </Card>
          </div>
        }
      />

      {/* Document Types Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Documents We Apostille
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide apostille services for a wide range of document types
              to meet your international requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {apostilleServices.map((service, index) => (
              <Card key={index} className="p-6 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.examples.map((example, exampleIndex) => (
                      <li
                        key={exampleIndex}
                        className="flex items-center text-sm"
                      >
                        <Check className="w-3 h-3 mr-2 text-green-600" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Step-by-Step Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve streamlined the apostille process to make it simple and
              efficient for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 h-full">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center text-sm"
                        >
                          <Check className="w-3 h-3 mr-2 text-green-600" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-7 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service level that best fits your timeline and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceOptions.map((option, index) => (
              <Card
                key={index}
                className={`relative ${option.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}
              >
                {option.popular && (
                  <Badge className="absolute -top-3 left-6" variant="secondary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-center">
                    {option.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-center">
                    {option.description}
                  </p>
                  {/* <div className="text-center"> */}
                  {/* FUTURE: Add a feature flag and uncomment this section */}
                  {/* <div className="text-2xl font-bold text-primary">
                      {option.price}
                    </div> */}
                  {/* <div className="text-sm text-muted-foreground">
                      {option.timeframe}
                    </div> */}
                  {/* </div> */}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <Check className="w-4 h-4 mr-2 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* FUTURE: Add a feature flag and uncomment this section */}
                  {/* <Button
                    className="w-full mt-6"
                    variant={option.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Live Scan Solutions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our professional apostille
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Get answers to common questions about apostille services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              For more FAQs including Live Scan questions,{' '}
              <a href="/faq" className="text-primary hover:underline">
                visit our full FAQ page
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
