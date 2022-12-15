import { uuid } from 'uuidv4';
import { FaqType } from 'src/types/faq';

export const faqData: FaqType[] = [
  {
    id: uuid(),
    question: 'What does CollAction do with my money?',
    answer:
      "Our expenses are mostly cloud expenses, volunteer support and marketing. Transparency is very important to us, so within due time it'll be possible to see all our individual expenses on the website!",
  },
  {
    id: uuid(),
    question: 'What can CollAction do for my organisation?',
    answer:
      "CollAction designs and executes tailor made Actions for each client. Give us an SDG related theme and a goal and we'll suggest a CrowdAction around it. Together with you we can then fine tune the set up to make it work well. Interested? Fill in the contact form and we'll get back to you.",
  },
  {
    id: uuid(),
    question: 'Is CollAction free to use?',
    answer:
      'Yes! CollAction is 100% for all users now and in the future. CollAction gets income from CrowdFunding and by hosting CrowdActions for Business, Education and Governance.',
  },
];
