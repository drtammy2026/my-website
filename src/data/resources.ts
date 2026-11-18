// Dr. Tammy's recommended resources.
// `blurb` is shown on the page; leave `url` empty until confirmed (the card then shows a placeholder).
export interface Resource {
  name: string;
  location: string;
  url?: string;
  blurb?: string;
  linkLabel?: string; // defaults to "Visit Website"
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
        blurb: "Dr. Tammy's home church. She has served in leadership here since 1999, led the women's ministry for 23 years, and leads the Classic Service with her husband, Peter. A welcoming church family with a strong youth ministry, small groups where you can be known, a vibrant creative arts community, and heartfelt worship.",
      },
      {
        name: 'Community Compassion Center',
        location: 'Sarasota, FL',
        url: 'https://churchofhope.com',
        linkLabel: 'Visit Church of Hope',
        blurb: "An outreach ministry of Church of Hope, part of its Kingdom Builders program. It doesn't have its own website, so reach out through Church of Hope to learn more.",
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
        name: 'Trailblazer Mentoring Network',
        location: 'Led by Dr. Jamie Morgan',
        url: 'https://trailblazermentoring.com',
        blurb: 'Dr. Tammy calls it a greenhouse: a place where women called to ministry can grow in their relationship with God and in the ministry they lead.',
      },
    ],
  },
];
