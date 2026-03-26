import type { AcknowledgementContext } from "@/types";

export interface AcknowledgementTemplate {
  context: AcknowledgementContext;
  label: string;
  description: string;
  template: (countryName: string, peopleName?: string) => string;
  tips: string[];
}

export const acknowledgementTemplates: AcknowledgementTemplate[] = [
  {
    context: "formal-event",
    label: "Formal Event or Conference",
    description: "Opening of a conference, public event, or ceremony",
    template: (countryName, peopleName) =>
      `I would like to begin by acknowledging that we are meeting on the traditional Country of the ${peopleName ?? countryName + " people"}, and pay my respects to their Elders past, present and emerging. I acknowledge that sovereignty was never ceded — this always was and always will be Aboriginal land.`,
    tips: [
      "Deliver slowly and sincerely — don't rush through it",
      "If possible, invite a Traditional Owner to give a Welcome to Country instead",
      "Acknowledge any specific Elders present by name if appropriate",
    ],
  },
  {
    context: "meeting",
    label: "Meeting or Workshop",
    description: "Work meetings, team sessions, training",
    template: (countryName, peopleName) =>
      `Before we begin, I'd like to acknowledge we are on the Country of the ${peopleName ?? countryName + " people"}. I pay my respects to Elders past and present.`,
    tips: [
      "Keep it genuine rather than formulaic — a shorter sincere acknowledgement is better than a long rehearsed one",
      "Consider rotating who gives the acknowledgement across team members",
    ],
  },
  {
    context: "classroom",
    label: "Classroom or Education Setting",
    description: "Schools, universities, training programs",
    template: (countryName, peopleName) =>
      `We begin today by acknowledging the ${peopleName ?? countryName + " people"} as the traditional custodians of the land on which we learn. We pay our respects to their Elders past, present and emerging, and recognise their continuing connection to land, water and community.`,
    tips: [
      "Use this as a teaching moment — briefly explain why we acknowledge Country",
      "Encourage students to learn more about the specific Country they are on",
      "Avoid making it feel like a tick-box — connect it to the day's learning where possible",
    ],
  },
  {
    context: "written",
    label: "Written Document or Publication",
    description: "Reports, websites, emails, publications",
    template: (countryName, peopleName) =>
      `This document was produced on the traditional Country of the ${peopleName ?? countryName + " people"}. We acknowledge their continuing connection to land, water and community, and pay our respects to Elders past, present and emerging.`,
    tips: [
      "Place at the beginning of the document, not buried in footnotes",
      "For websites, include in the footer and/or About page",
    ],
  },
  {
    context: "informal",
    label: "Informal or Personal",
    description: "Social gatherings, casual settings",
    template: (countryName, peopleName) =>
      `Just want to acknowledge we're on ${peopleName ?? countryName} Country — always was, always will be.`,
    tips: [
      "Authenticity matters more than length in informal settings",
      "You can add a brief personal note about what this means to you",
    ],
  },
];

export const acknowledgementExplainer = {
  differenceTitle: "Acknowledgement vs Welcome to Country",
  differenceBody:
    "An Acknowledgement of Country can be given by anyone — Aboriginal or non-Aboriginal. It is a sign of respect. A Welcome to Country is a formal ceremony that can only be performed by a Traditional Owner of that specific Country. When possible, invite a Traditional Owner to give a Welcome to Country at significant events.",
  whyItMatters:
    "Acknowledging Country recognises the deep and unbroken connection Aboriginal and Torres Strait Islander peoples have with their land — a connection spanning tens of thousands of years. It is one small but meaningful step toward reconciliation.",
};
