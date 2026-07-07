// central data + real crest images wired to each provider
import ibadan from './assets/crest-ibadan.png'
import ghana from './assets/crest-ghana.png'
import nairobi from './assets/crest-nairobi.png'
import makerere from './assets/crest-makerere.png'
import rwanda from './assets/crest-rwanda.png'
import melbourne from './assets/crest-melbourne.png'
import oxford from './assets/crest-oxford.png'
import toronto from './assets/crest-toronto.png'

export const crests = { ibadan, ghana, nairobi, makerere, rwanda, melbourne, oxford, toronto }

export const scholarships = [
  { id: 'ibadan-future-leaders', crest: 'ibadan', title: 'African Future Leaders Scholarship', org: 'University of Ibadan',
    country: 'Nigeria', flag: '🇳🇬', level: 'Undergraduate, Masters', field: 'All Fields', funding: 'Fully Funded',
    amount: '$25,000', deadline: '19 Jul 2026', daysLeft: 12, match: 96, verified: true, type: 'Merit based' },
  { id: 'ghana-excellence', crest: 'ghana', title: 'Ghana Excellence Scholarship', org: 'University of Ghana',
    country: 'Ghana', flag: '🇬🇭', level: 'Undergraduate', field: 'All Fields', funding: 'Fully Funded',
    amount: '$18,000', deadline: '01 Aug 2026', daysLeft: 25, match: 91, verified: true, type: 'Merit based' },
  { id: 'oxford-global', crest: 'oxford', title: 'Oxford Global Scholars Award', org: 'University of Oxford',
    country: 'United Kingdom', flag: '🇬🇧', level: 'Masters, PhD', field: 'All Fields', funding: 'Fully Funded',
    amount: '$40,000', deadline: '15 Aug 2026', daysLeft: 39, match: 89, verified: true, type: 'Merit based' },
  { id: 'toronto-future', crest: 'toronto', title: 'North America Future Fund', org: 'University of Toronto',
    country: 'Canada', flag: '🇨🇦', level: 'Masters', field: 'STEM', funding: 'Partially Funded',
    amount: '$22,000', deadline: '26 Jul 2026', daysLeft: 19, match: 98, verified: true, type: 'Need based' },
  { id: 'nairobi-stem', crest: 'nairobi', title: 'Nairobi STEM Innovators Grant', org: 'University of Nairobi',
    country: 'Kenya', flag: '🇰🇪', level: 'Undergraduate', field: 'Engineering', funding: 'Fully Funded',
    amount: '$14,000', deadline: '10 Sep 2026', daysLeft: 65, match: 87, verified: true, type: 'Merit based' },
  { id: 'makerere-community', crest: 'makerere', title: 'Makerere Community Leaders Bursary', org: 'Makerere University',
    country: 'Uganda', flag: '🇺🇬', level: 'Undergraduate, Masters', field: 'Social Sciences', funding: 'Fully Funded',
    amount: '$12,500', deadline: '18 Sep 2026', daysLeft: 73, match: 85, verified: true, type: 'Need based' },
  { id: 'melbourne-excellence', crest: 'melbourne', title: 'Melbourne Excellence Scholarship', org: 'University of Melbourne',
    country: 'Australia', flag: '🇦🇺', level: 'Masters, PhD', field: 'All Fields', funding: 'Fully Funded',
    amount: '$30,000', deadline: '32 Jul 2026', daysLeft: 24, match: 90, verified: true, type: 'Merit based' },
  { id: 'rwanda-rebuild', crest: 'rwanda', title: 'Rwanda Rebuild Futures Award', org: 'University of Rwanda',
    country: 'Rwanda', flag: '🇷🇼', level: 'Undergraduate', field: 'Health Sciences', funding: 'Partially Funded',
    amount: '$9,000', deadline: '05 Oct 2026', daysLeft: 90, match: 83, verified: true, type: 'Need based' },
]

export const fundingClass = (f) =>
  f === 'Fully Funded' ? 'pill-green' : f === 'Partially Funded' ? 'pill-blue' : 'pill-amber'

export const notifications = [
  { id: 1, type: 'match', unread: true, title: 'New 98% match found', body: 'North America Future Fund at University of Toronto fits your profile.', time: '10 minutes ago' },
  { id: 2, type: 'deadline', unread: true, title: 'Deadline in 3 days', body: 'African Future Leaders Scholarship closes on 19 Jul 2026.', time: '2 hours ago' },
  { id: 3, type: 'status', unread: true, title: 'Application under review', body: 'Your Ghana Excellence Scholarship application is now being reviewed.', time: 'Yesterday' },
  { id: 4, type: 'award', unread: false, title: 'Congratulations, you won! 🎉', body: 'You have been awarded the Nairobi STEM Innovators Grant.', time: '2 days ago' },
  { id: 5, type: 'system', unread: false, title: 'Profile 85% complete', body: 'Add your CGPA to unlock more personalised matches.', time: '4 days ago' },
  { id: 6, type: 'match', unread: false, title: '3 new scholarships in Ghana', body: 'Based on your preferred study destinations.', time: '1 week ago' },
]
