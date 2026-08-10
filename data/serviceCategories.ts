import { 
  FaHome, FaHeart, FaCut, FaCar, FaLaptop, FaChalkboardTeacher, 
  FaGlassCheers, FaBriefcase, FaPlane, FaHardHat, FaSeedling, 
  FaCoins, FaTshirt, FaUtensils, FaNewspaper, FaShieldAlt, 
  FaBaby, FaDumbbell, FaPray, FaWrench
} from 'react-icons/fa';

export const serviceCategories = [
  // 1. Home & Domestic
  {
    id: 1,
    name: 'Home & Domestic',
    icon: FaHome,
    description: 'Cleaning, plumbing, repairs, and more',
    color: '#ff8c00',
    count: '120+ providers',
    image: '/images/services/home-domestic.jpg',
    subCategories: [
      { name: 'House Cleaning', image: '/images/sub/cleaning.jpg' },
      { name: 'Laundry', image: '/images/sub/laundry.jpg' },
      { name: 'Plumbing', image: '/images/sub/plumbing.jpg' },
      { name: 'Electrical Repairs', image: '/images/sub/electrical.jpg' },
      { name: 'Gardening', image: '/images/sub/gardening.jpg' },
      { name: 'Painting', image: '/images/sub/painting.jpg' },
      { name: 'Carpentry', image: '/images/sub/carpentry.jpg' },
      { name: 'Pest Control', image: '/images/sub/pest-control.jpg' },
      { name: 'Home Security Installation', image: '/images/sub/security-install.jpg' },
      { name: 'Appliance Repair', image: '/images/sub/appliance-repair.jpg' },
      { name: 'Interior Decoration', image: '/images/sub/interior-decoration.jpg' },
      { name: 'Waste Disposal', image: '/images/sub/waste-disposal.jpg' },
    ]
  },
  // 2. Health & Wellness
  {
    id: 2,
    name: 'Health & Wellness',
    icon: FaHeart,
    description: 'Nursing, therapy, fitness, and wellness',
    color: '#ff8c00',
    count: '85+ providers',
    image: '/images/services/health-wellness.jpg',
    subCategories: [
      { name: 'General Medical Services', image: '/images/sub/medical.jpg' },
      { name: 'Nursing', image: '/images/sub/nursing.jpg' },
      { name: 'Physiotherapy', image: '/images/sub/physiotherapy.jpg' },
      { name: 'Personal Training', image: '/images/sub/personal-training.jpg' },
      { name: 'Massage Therapy', image: '/images/sub/massage.jpg' },
      { name: 'Nutrition Consulting', image: '/images/sub/nutrition.jpg' },
      { name: 'Mental Health Counseling', image: '/images/sub/counseling.jpg' },
      { name: 'Yoga Instruction', image: '/images/sub/yoga.jpg' },
      { name: 'Dentistry', image: '/images/sub/dentistry.jpg' },
      { name: 'Optometry', image: '/images/sub/optometry.jpg' },
      { name: 'Midwifery', image: '/images/sub/midwifery.jpg' },
    ]
  },
  // 3. Beauty & Personal Care
  {
    id: 3,
    name: 'Beauty & Personal Care',
    icon: FaCut,
    description: 'Hair, makeup, spa, and grooming',
    color: '#ff8c00',
    count: '95+ providers',
    image: '/images/services/beauty-care.jpg',
    subCategories: [
      { name: 'Hair Styling', image: '/images/sub/hair-styling.jpg' },
      { name: 'Makeup Services', image: '/images/sub/makeup.jpg' },
      { name: 'Nail Care', image: '/images/sub/nails.jpg' },
      { name: 'Barber Services', image: '/images/sub/barber.jpg' },
      { name: 'Spa Treatments', image: '/images/sub/spa.jpg' },
      { name: 'Tattooing', image: '/images/sub/tattoo.jpg' },
      { name: 'Body Piercing', image: '/images/sub/piercing.jpg' },
      { name: 'Skin Care Consulting', image: '/images/sub/skincare.jpg' },
      { name: 'Cosmetic Surgery', image: '/images/sub/cosmetic.jpg' },
      { name: 'Weight Management', image: '/images/sub/weight-loss.jpg' },
    ]
  },
  // 4. Automotive Services
  {
    id: 4,
    name: 'Automotive Services',
    icon: FaCar,
    description: 'Car wash, repairs, towing, and rentals',
    color: '#ff8c00',
    count: '60+ providers',
    image: '/images/services/automotive.jpg',
    subCategories: [
      { name: 'Car Wash', image: '/images/sub/car-wash.jpg' },
      { name: 'Auto Repair', image: '/images/sub/auto-repair.jpg' },
      { name: 'Tire Replacement', image: '/images/sub/tire-replacement.jpg' },
      { name: 'Battery Charging', image: '/images/sub/battery.jpg' },
      { name: 'Towing', image: '/images/sub/towing.jpg' },
      { name: 'Car Interior Cleaning', image: '/images/sub/interior-cleaning.jpg' },
      { name: 'Oil Change', image: '/images/sub/oil-change.jpg' },
      { name: 'Vehicle Inspection', image: '/images/sub/inspection.jpg' },
      { name: 'Car Rental', image: '/images/sub/car-rental.jpg' },
      { name: 'Driver Training', image: '/images/sub/driver-training.jpg' },
    ]
  },
  // 5. Technology & Digital
  {
    id: 5,
    name: 'Technology & Digital',
    icon: FaLaptop,
    description: 'Web dev, design, marketing, and IT support',
    color: '#ff8c00',
    count: '150+ providers',
    image: '/images/services/technology.jpg',
    subCategories: [
      { name: 'Web Development', image: '/images/sub/web-dev.jpg' },
      { name: 'App Development', image: '/images/sub/app-dev.jpg' },
      { name: 'Graphic Design', image: '/images/sub/graphic-design.jpg' },
      { name: 'UI/UX Design', image: '/images/sub/ui-ux.jpg' },
      { name: 'Digital Marketing', image: '/images/sub/digital-marketing.jpg' },
      { name: 'SEO Optimization', image: '/images/sub/seo.jpg' },
      { name: 'Content Writing', image: '/images/sub/content-writing.jpg' },
      { name: 'Data Analysis', image: '/images/sub/data-analysis.jpg' },
      { name: 'IT Support', image: '/images/sub/it-support.jpg' },
      { name: 'Cybersecurity', image: '/images/sub/cybersecurity.jpg' },
      { name: 'Software Installation', image: '/images/sub/software-install.jpg' },
    ]
  },
  // 6. Education & Tutoring
  {
    id: 6,
    name: 'Education & Tutoring',
    icon: FaChalkboardTeacher,
    description: 'Tutoring, language, music, and coaching',
    color: '#ff8c00',
    count: '70+ providers',
    image: '/images/services/education.jpg',
    subCategories: [
      { name: 'Private Tutoring', image: '/images/sub/tutoring.jpg' },
      { name: 'Online Courses', image: '/images/sub/online-courses.jpg' },
      { name: 'Language Training', image: '/images/sub/language.jpg' },
      { name: 'Exam Coaching', image: '/images/sub/exam-coaching.jpg' },
      { name: 'Music Lessons', image: '/images/sub/music-lessons.jpg' },
      { name: 'STEM Tutoring', image: '/images/sub/stem.jpg' },
      { name: 'Vocational Training', image: '/images/sub/vocational.jpg' },
      { name: 'Educational Counseling', image: '/images/sub/edu-counseling.jpg' },
      { name: 'Career Coaching', image: '/images/sub/career-coaching.jpg' },
    ]
  },
  // 7. Event & Entertainment
  {
    id: 7,
    name: 'Event & Entertainment',
    icon: FaGlassCheers,
    description: 'Planning, catering, photography, and DJ',
    color: '#ff8c00',
    count: '65+ providers',
    image: '/images/services/events.jpg',
    subCategories: [
      { name: 'Event Planning', image: '/images/sub/event-planning.jpg' },
      { name: 'Catering', image: '/images/sub/catering.jpg' },
      { name: 'Photography', image: '/images/sub/photography.jpg' },
      { name: 'Videography', image: '/images/sub/videography.jpg' },
      { name: 'DJ Services', image: '/images/sub/dj.jpg' },
      { name: 'MC & Hosting', image: '/images/sub/mc-hosting.jpg' },
      { name: 'Stage Decoration', image: '/images/sub/stage-decoration.jpg' },
      { name: 'Live Band', image: '/images/sub/live-band.jpg' },
      { name: 'Sound Engineering', image: '/images/sub/sound-engineering.jpg' },
      { name: 'Lighting Setup', image: '/images/sub/lighting.jpg' },
    ]
  },
  // 8. Business & Professional
  {
    id: 8,
    name: 'Business & Professional',
    icon: FaBriefcase,
    description: 'Accounting, legal, HR, and consulting',
    color: '#ff8c00',
    count: '55+ providers',
    image: '/images/services/business.jpg',
    subCategories: [
      { name: 'Accounting', image: '/images/sub/accounting.jpg' },
      { name: 'Legal Consulting', image: '/images/sub/legal.jpg' },
      { name: 'Tax Preparation', image: '/images/sub/tax.jpg' },
      { name: 'HR Consulting', image: '/images/sub/hr.jpg' },
      { name: 'Recruitment', image: '/images/sub/recruitment.jpg' },
      { name: 'Translation', image: '/images/sub/translation.jpg' },
      { name: 'Copywriting', image: '/images/sub/copywriting.jpg' },
      { name: 'Virtual Assistance', image: '/images/sub/virtual-assist.jpg' },
      { name: 'Project Management', image: '/images/sub/project-mgmt.jpg' },
      { name: 'Customer Service Outsourcing', image: '/images/sub/customer-service.jpg' },
    ]
  },
  // 9. Travel & Logistics
  {
    id: 9,
    name: 'Travel & Logistics',
    icon: FaPlane,
    description: 'Booking, courier, freight, and tours',
    color: '#ff8c00',
    count: '40+ providers',
    image: '/images/services/travel.jpg',
    subCategories: [
      { name: 'Travel Agency', image: '/images/sub/travel-agency.jpg' },
      { name: 'Hotel Booking', image: '/images/sub/hotel-booking.jpg' },
      { name: 'Flight Booking', image: '/images/sub/flight-booking.jpg' },
      { name: 'Courier Services', image: '/images/sub/courier.jpg' },
      { name: 'Logistics & Freight', image: '/images/sub/logistics.jpg' },
      { name: 'Vehicle Hire', image: '/images/sub/vehicle-hire.jpg' },
      { name: 'Tour Guiding', image: '/images/sub/tour-guide.jpg' },
      { name: 'Visa Assistance', image: '/images/sub/visa.jpg' },
      { name: 'Moving Services', image: '/images/sub/moving.jpg' },
    ]
  },
  // 10. Construction & Real Estate
  {
    id: 10,
    name: 'Construction & Real Estate',
    icon: FaHardHat,
    description: 'Building, architecture, and property',
    color: '#ff8c00',
    count: '75+ providers',
    image: '/images/services/construction.jpg',
    subCategories: [
      { name: 'Building Construction', image: '/images/sub/building.jpg' },
      { name: 'Architecture', image: '/images/sub/architecture.jpg' },
      { name: 'Quantity Surveying', image: '/images/sub/quantity-surveying.jpg' },
      { name: 'Civil Engineering', image: '/images/sub/civil-engineering.jpg' },
      { name: 'Land Surveying', image: '/images/sub/land-surveying.jpg' },
      { name: 'Real Estate Management', image: '/images/sub/real-estate.jpg' },
      { name: 'Property Valuation', image: '/images/sub/property-valuation.jpg' },
      { name: 'Interior Design', image: '/images/sub/interior-design.jpg' },
      { name: 'Building Inspection', image: '/images/sub/building-inspection.jpg' },
    ]
  },
  // 11. Agriculture & Environment
  {
    id: 11,
    name: 'Agriculture & Environment',
    icon: FaSeedling,
    description: 'Farming, irrigation, and forestry',
    color: '#ff8c00',
    count: '30+ providers',
    image: '/images/services/agriculture.jpg',
    subCategories: [
      { name: 'Crop Farming', image: '/images/sub/crop-farming.jpg' },
      { name: 'Animal Rearing', image: '/images/sub/animal-rearing.jpg' },
      { name: 'Agro Consulting', image: '/images/sub/agro-consulting.jpg' },
      { name: 'Irrigation Services', image: '/images/sub/irrigation.jpg' },
      { name: 'Soil Testing', image: '/images/sub/soil-testing.jpg' },
      { name: 'Forestry', image: '/images/sub/forestry.jpg' },
      { name: 'Environmental Management', image: '/images/sub/environmental.jpg' },
      { name: 'Waste Recycling', image: '/images/sub/waste-recycling.jpg' },
      { name: 'Fishery', image: '/images/sub/fishery.jpg' },
      { name: 'Horticulture', image: '/images/sub/horticulture.jpg' },
    ]
  },
  // 12. Finance & Investment
  {
    id: 12,
    name: 'Finance & Investment',
    icon: FaCoins,
    description: 'Advisory, trading, insurance, and loans',
    color: '#ff8c00',
    count: '45+ providers',
    image: '/images/services/finance.jpg',
    subCategories: [
      { name: 'Financial Advisory', image: '/images/sub/financial-advisory.jpg' },
      { name: 'Stock Trading', image: '/images/sub/stock-trading.jpg' },
      { name: 'Insurance Services', image: '/images/sub/insurance.jpg' },
      { name: 'Loan Consulting', image: '/images/sub/loan-consulting.jpg' },
      { name: 'Wealth Management', image: '/images/sub/wealth-management.jpg' },
      { name: 'Cryptocurrency Investment', image: '/images/sub/crypto.jpg' },
      { name: 'Microfinance', image: '/images/sub/microfinance.jpg' },
      { name: 'Crowdfunding', image: '/images/sub/crowdfunding.jpg' },
      { name: 'Venture Capital', image: '/images/sub/venture-capital.jpg' },
    ]
  },
  // 13. Fashion & Apparel
  {
    id: 13,
    name: 'Fashion & Apparel',
    icon: FaTshirt,
    description: 'Tailoring, design, modeling, and jewelry',
    color: '#ff8c00',
    count: '80+ providers',
    image: '/images/services/fashion.jpg',
    subCategories: [
      { name: 'Tailoring', image: '/images/sub/tailoring.jpg' },
      { name: 'Fashion Design', image: '/images/sub/fashion-design.jpg' },
      { name: 'Modeling', image: '/images/sub/modeling.jpg' },
      { name: 'Wardrobe Consulting', image: '/images/sub/wardrobe.jpg' },
      { name: 'Shoe Making', image: '/images/sub/shoe-making.jpg' },
      { name: 'Fabric Dyeing', image: '/images/sub/fabric-dyeing.jpg' },
      { name: 'Jewelry Design', image: '/images/sub/jewelry.jpg' },
      { name: 'Embroidery', image: '/images/sub/embroidery.jpg' },
      { name: 'Costume Design', image: '/images/sub/costume-design.jpg' },
      { name: 'Uniform Production', image: '/images/sub/uniform-production.jpg' },
    ]
  },
  // 14. Food & Culinary
  {
    id: 14,
    name: 'Food & Culinary',
    icon: FaUtensils,
    description: 'Catering, private chef, baking, and delivery',
    color: '#ff8c00',
    count: '110+ providers',
    image: '/images/services/food-culinary.jpg',
    subCategories: [
      { name: 'Catering', image: '/images/sub/catering.jpg' },
      { name: 'Private Chef', image: '/images/sub/private-chef.jpg' },
      { name: 'Baking', image: '/images/sub/baking.jpg' },
      { name: 'Bartending', image: '/images/sub/bartending.jpg' },
      { name: 'Restaurant Services', image: '/images/sub/restaurant.jpg' },
      { name: 'Food Delivery', image: '/images/sub/food-delivery.jpg' },
      { name: 'Nutrition Planning', image: '/images/sub/nutrition-planning.jpg' },
      { name: 'Cooking Classes', image: '/images/sub/cooking-classes.jpg' },
      { name: 'Diet Meal Prep', image: '/images/sub/diet-meal-prep.jpg' },
    ]
  },
  // 15. Media & Communication
  {
    id: 15,
    name: 'Media & Communication',
    icon: FaNewspaper,
    description: 'PR, advertising, podcasting, and editing',
    color: '#ff8c00',
    count: '50+ providers',
    image: '/images/services/media.jpg',
    subCategories: [
      { name: 'Journalism', image: '/images/sub/journalism.jpg' },
      { name: 'Public Relations', image: '/images/sub/pr.jpg' },
      { name: 'Advertising', image: '/images/sub/advertising.jpg' },
      { name: 'Voice Over', image: '/images/sub/voice-over.jpg' },
      { name: 'Podcast Production', image: '/images/sub/podcast.jpg' },
      { name: 'Social Media Management', image: '/images/sub/social-media.jpg' },
      { name: 'Video Editing', image: '/images/sub/video-editing.jpg' },
      { name: 'Brand Consulting', image: '/images/sub/brand-consulting.jpg' },
    ]
  },
  // 16. Security & Safety
  {
    id: 16,
    name: 'Security & Safety',
    icon: FaShieldAlt,
    description: 'Private security, CCTV, and fire safety',
    color: '#ff8c00',
    count: '35+ providers',
    image: '/images/services/security.jpg',
    subCategories: [
      { name: 'Private Security', image: '/images/sub/private-security.jpg' },
      { name: 'Bouncer Services', image: '/images/sub/bouncer.jpg' },
      { name: 'CCTV Installation', image: '/images/sub/cctv.jpg' },
      { name: 'Alarm System Setup', image: '/images/sub/alarm.jpg' },
      { name: 'Safety Training', image: '/images/sub/safety-training.jpg' },
      { name: 'Fire Protection Services', image: '/images/sub/fire-protection.jpg' },
      { name: 'Surveillance Monitoring', image: '/images/sub/surveillance.jpg' },
    ]
  },
  // 17. Child & Elderly Care
  {
    id: 17,
    name: 'Child & Elderly Care',
    icon: FaBaby,
    description: 'Babysitting, nanny, and elderly assistance',
    color: '#ff8c00',
    count: '60+ providers',
    image: '/images/services/childcare.jpg',
    subCategories: [
      { name: 'Babysitting', image: '/images/sub/babysitting.jpg' },
      { name: 'Childcare', image: '/images/sub/childcare.jpg' },
      { name: 'Elderly Care', image: '/images/sub/elderly-care.jpg' },
      { name: 'Nanny Services', image: '/images/sub/nanny.jpg' },
      { name: 'Special Needs Assistance', image: '/images/sub/special-needs.jpg' },
      { name: 'Home Health Aides', image: '/images/sub/home-health.jpg' },
    ]
  },
  // 18. Sports & Recreation
  {
    id: 18,
    name: 'Sports & Recreation',
    icon: FaDumbbell,
    description: 'Coaching, fitness training, and dance',
    color: '#ff8c00',
    count: '40+ providers',
    image: '/images/services/sports.jpg',
    subCategories: [
      { name: 'Sports Coaching', image: '/images/sub/sports-coaching.jpg' },
      { name: 'Fitness Training', image: '/images/sub/fitness-training.jpg' },
      { name: 'Gym Management', image: '/images/sub/gym.jpg' },
      { name: 'Dance Instruction', image: '/images/sub/dance.jpg' },
      { name: 'Martial Arts Training', image: '/images/sub/martial-arts.jpg' },
      { name: 'Recreational Camp Services', image: '/images/sub/recreational-camp.jpg' },
    ]
  },
  // 19. Spiritual & Religious
  {
    id: 19,
    name: 'Spiritual & Religious',
    icon: FaPray,
    description: 'Counseling, prayer services, and mentoring',
    color: '#ff8c00',
    count: '20+ providers',
    image: '/images/services/spiritual.jpg',
    subCategories: [
      { name: 'Counseling', image: '/images/sub/counseling.jpg' },
      { name: 'Prayer Services', image: '/images/sub/prayer-services.jpg' },
      { name: 'Worship Events', image: '/images/sub/worship.jpg' },
      { name: 'Faith-Based Consulting', image: '/images/sub/faith-consulting.jpg' },
      { name: 'Spiritual Mentorship', image: '/images/sub/spiritual-mentorship.jpg' },
    ]
  },
  // 20. General Services
  {
    id: 20,
    name: 'General Services',
    icon: FaWrench,
    description: 'Handyman, repairs, and miscellaneous',
    color: '#ff8c00',
    count: '200+ providers',
    image: '/images/services/general.jpg',
    subCategories: [
      { name: 'Handyman', image: '/images/sub/handyman.jpg' },
      { name: 'General Repairs', image: '/images/sub/general-repairs.jpg' },
      { name: 'Miscellaneous', image: '/images/sub/miscellaneous.jpg' },
    ]
  }
];