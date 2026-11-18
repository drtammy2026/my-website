// Dr. Tammy's recommended resources.
// `blurb` is shown on the page; leave `url` empty until confirmed (the card then shows a placeholder).
export interface Resource {
  name: string;
  location: string;
  url?: string;
  blurb?: string;
  needs?: string; // what is still missing, shown as a placeholder
}

export interface ResourceGroup {
  title: string;
  sub: string;
  items: Resource[];
}

export const resourceGroups: ResourceGroup[] = [
  {
    title: 'In Sarasota',
    sub: 'Local churches and organizations Dr. Tammy knows and trusts.',
    items: [
      {
        name: 'Church of Hope',
        location: 'Sarasota, FL',
        url: 'https://churchofhope.com',
        blurb: 'A welcoming church family with a strong youth ministry, small groups where you can be known, a vibrant creative arts community, and heartfelt worship.',
      },
      {
        name: 'Community Compassion Center',
        location: 'Sarasota, FL',
        needs: 'Website link and a sentence on what they offer and why Dr. Tammy recommends them.',
      },
    ],
  },
  {
    title: 'Adoption & Foster Support',
    sub: 'For families growing through adoption or foster care.',
    items: [
      {
        name: 'OneFamily',
        location: 'Across Florida',
        url: 'https://www.onefamilyfl.com',
        blurb: 'Equips churches and communities across Florida to support foster and adoptive families, with practical ways to serve, give, and help families flourish.',
      },
    ],
  },
  {
    title: 'For Women in Ministry',
    sub: 'Community and mentoring for women called to lead.',
    items: [
      {
        name: 'Trailblazers Mentoring Network',
        location: 'Led by Dr. Jamie Morgan',
        blurb: 'A mentoring network for women in ministry.',
        needs: 'Website link and a sentence on why Dr. Tammy recommends it.',
      },
    ],
  },
];
