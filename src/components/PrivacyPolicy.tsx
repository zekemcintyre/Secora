import React from 'react';

type Section = { heading: string; body: React.ReactNode };

const email = (
  <a href="mailto:info@sercora.co.uk" className="text-sercora-gold hover:text-sercora-gold-hover underline">
    info@sercora.co.uk
  </a>
);

const sections: Section[] = [
  {
    heading: '1. Who we are',
    body: (
      <>
        <p>
          Sercora Social Care (‘Sercora’, ‘we’, ‘us’, ‘our’) provides independent advocacy, consultancy and training in
          children’s social care across the United Kingdom. We are the data controller for the personal information
          described in this notice.
        </p>
        <p>
          If you have any questions about this notice or how we use your information, please contact us at {email}.
        </p>
      </>
    ),
  },
  {
    heading: '2. Our commitment',
    body: (
      <p>
        Much of our work involves families, children and sensitive matters. We take the privacy of everyone we work
        with very seriously. We handle personal information in line with the UK General Data Protection Regulation
        (UK GDPR) and the Data Protection Act 2018, and we only collect what we genuinely need.
      </p>
    ),
  },
  {
    heading: '3. The information we collect',
    body: (
      <>
        <p>Depending on how you contact or work with us, we may collect:</p>
        <ul>
          <li>
            <strong>Contact details</strong>, such as your name, email address, telephone number and postal address.
          </li>
          <li>
            <strong>Information about your situation</strong>, such as details of your family, your children, and
            your involvement with children’s services, the family courts or other agencies.
          </li>
          <li>
            <strong>Documents you share with us</strong>, such as letters, assessments, child protection plans, court
            papers and reports.
          </li>
          <li>
            <strong>Professional information</strong>, if you contact us on behalf of a Local Authority or
            organisation, such as your job title and employer.
          </li>
          <li>
            <strong>Records of our communications</strong> with you, and notes we make while supporting you.
          </li>
          <li>
            <strong>Billing information</strong>, such as invoices and payment records.
          </li>
        </ul>
        <p>
          Some of this may be <strong>special category data</strong>, such as information about health, ethnicity,
          religion or sexual life, or information about criminal allegations or convictions. It may also include
          information about children. We give this information extra protection.
        </p>
      </>
    ),
  },
  {
    heading: '4. How we collect it',
    body: (
      <p>
        Most information comes directly from you when you email us, speak to us or share documents with us. With your
        agreement, we may also receive information from others involved in your case, such as your solicitor, a Local
        Authority, or other professionals.
      </p>
    ),
  },
  {
    heading: '5. How we use your information and our legal basis',
    body: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>respond to your enquiry;</li>
          <li>provide advocacy, consultancy or training services to you or your organisation;</li>
          <li>prepare for and attend meetings, conferences and court-related matters on your behalf;</li>
          <li>keep accurate records of the work we do;</li>
          <li>invoice for our services and manage our accounts;</li>
          <li>meet our legal, regulatory and safeguarding responsibilities.</li>
        </ul>
        <p>The UK GDPR requires us to have a lawful basis for using personal information. We rely on:</p>
        <ul>
          <li>
            <strong>Contract</strong> – where we need the information to provide a service you have asked for.
          </li>
          <li>
            <strong>Legitimate interests</strong> – for example, responding to enquiries and running our business,
            where this does not override your rights.
          </li>
          <li>
            <strong>Legal obligation</strong> – for example, keeping financial records or complying with a court
            order.
          </li>
          <li>
            <strong>Consent</strong> – where we have asked for your agreement. You can withdraw consent at any time.
          </li>
        </ul>
        <p>For special category and criminal offence data, we also rely on one or more of the following:</p>
        <ul>
          <li>your explicit consent;</li>
          <li>the establishment, exercise or defence of legal claims, including family court proceedings;</li>
          <li>the provision of social care;</li>
          <li>safeguarding children and individuals at risk.</li>
        </ul>
      </>
    ),
  },
  {
    heading: '6. Safeguarding',
    body: (
      <p>
        We treat what you tell us as confidential. However, if we believe a child or adult is at risk of significant
        harm, we may have to share information with the relevant Local Authority, the police or other agencies,
        without your consent if necessary. Wherever it is safe and appropriate to do so, we will tell you first.
      </p>
    ),
  },
  {
    heading: '7. Who we share your information with',
    body: (
      <>
        <p>We never sell your personal information. We only share it where necessary, with:</p>
        <ul>
          <li>professionals involved in your case, such as Local Authorities, solicitors or the courts, with your agreement or where the law requires it;</li>
          <li>agencies we must notify for safeguarding reasons (see section 6);</li>
          <li>trusted service providers who help us run our business, such as our email, IT, website hosting and accountancy providers, who may only use your information on our instructions;</li>
          <li>regulators, the police or other authorities where we are legally required to.</li>
        </ul>
      </>
    ),
  },
  {
    heading: '8. International transfers',
    body: (
      <p>
        Some of our service providers may store information outside the UK. Where this happens, we make sure
        appropriate safeguards are in place, such as UK adequacy regulations or the International Data Transfer
        Agreement approved by the Information Commissioner’s Office.
      </p>
    ),
  },
  {
    heading: '9. How long we keep your information',
    body: (
      <p>
        We only keep personal information for as long as we need it. Case records are normally kept for six years
        after our work with you ends, so that we can respond to any questions, complaints or legal claims. Records may
        be kept longer where the law requires it or where they relate to an ongoing matter involving a child. General
        enquiries that do not lead to any work are deleted within 12 months. Financial records are kept for six years
        to meet HMRC requirements.
      </p>
    ),
  },
  {
    heading: '10. Keeping your information secure',
    body: (
      <p>
        We use appropriate technical and organisational measures to protect your information, including password
        protection, secure devices and limiting access to those who need it. If you send us documents by email, please
        be aware that email is not always fully secure; we are happy to agree a more secure way of sharing sensitive
        documents.
      </p>
    ),
  },
  {
    heading: '11. Your rights',
    body: (
      <>
        <p>Under data protection law, you have the right to:</p>
        <ul>
          <li>ask for a copy of the information we hold about you;</li>
          <li>ask us to correct information that is wrong or incomplete;</li>
          <li>ask us to delete your information;</li>
          <li>ask us to restrict how we use your information;</li>
          <li>object to us using your information;</li>
          <li>ask us to transfer your information to another organisation;</li>
          <li>withdraw your consent at any time, where we rely on consent.</li>
        </ul>
        <p>
          Some of these rights have exceptions, for example where we must keep information for legal or safeguarding
          reasons. To use any of these rights, please email {email}. We will respond within one month, and there is
          normally no charge.
        </p>
      </>
    ),
  },
  {
    heading: '12. Our website',
    body: (
      <p>
        Our website does not use tracking or advertising cookies, and we do not use analytics. Like most websites, our
        hosting provider keeps basic technical logs (such as IP addresses) to keep the site secure and working. Our
        website also loads fonts and images from third-party services (Google Fonts and Unsplash), which means your
        browser will share your IP address with them in order to display the page.
      </p>
    ),
  },
  {
    heading: '13. Complaints',
    body: (
      <p>
        If you are unhappy with how we have handled your information, please contact us first at {email} and we will
        do our best to put things right. You also have the right to complain to the Information Commissioner’s Office
        (ICO), the UK’s data protection regulator, at{' '}
        <a href="https://ico.org.uk/make-a-complaint/" className="text-sercora-gold hover:text-sercora-gold-hover underline" target="_blank" rel="noopener noreferrer">
          ico.org.uk/make-a-complaint
        </a>{' '}
        or by calling 0303 123 1113.
      </p>
    ),
  },
  {
    heading: '14. Changes to this notice',
    body: (
      <p>
        We may update this notice from time to time. The latest version will always be on this page, with the date it
        was last updated.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="bg-white py-[60px]">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <div className="mb-[30px]">
          <h1 className="font-serif text-[36px] font-normal text-sercora-navy mb-[10px]">Privacy Policy</h1>
          <div className="w-[60px] h-[3px] bg-sercora-gold mb-[15px]"></div>
          <p className="font-sans text-[13px] text-sercora-text-light">Last updated: November 2026</p>
        </div>

        <p className="font-sans text-[15px] text-sercora-text leading-relaxed mb-[30px]">
          This notice explains what personal information we collect, why we collect it, how we look after it and what
          your rights are.
        </p>

        <div className="space-y-[30px]">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-serif text-[22px] text-sercora-navy mb-[12px]">{s.heading}</h2>
              <div className="font-sans text-[14px] text-sercora-text-light leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_strong]:text-sercora-text">
                {s.body}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[50px]">
          <a href="/" className="inline-flex px-[24px] py-[12px] rounded-[2px] bg-sercora-gold text-white font-semibold uppercase tracking-[1px] text-[13px] hover:bg-sercora-gold-hover transition-colors">
            Back to home
          </a>
        </div>
      </div>
    </section>
  );
}
