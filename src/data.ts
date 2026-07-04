import { ShortFormProject, LongFormProject, ServiceItem, FAQItem } from "./types";
import brandDealThumbnail from "./assets/images/brand_deal_pricing_user.jpg";
import brandDealPricingThumbnail from "./assets/images/brand_deal_pricing_thumbnail_1783103482597.jpg";
import brandOutreachThumbnail from "./assets/images/Aegqt8W5PFY-HD.jpg";
import secondShortThumbnail from "./assets/images/second_short_thumbnail_user.jpg";
import thirdShortThumbnail from "./assets/images/third_short_thumbnail_user.jpg";
import fourthShortThumbnail from "./assets/images/606909831_17857634463583444_5454238733903563296_n.jpg";
import reactAuthThumbnail from "./assets/images/AUTH.jpg";
import viralFormulaThumbnail from "./assets/images/Image-980.jpg";
import selfImprovementThumbnail from "./assets/images/height.jpg";
import lastShortThumbnail from "./assets/images/Image-585.jpg";
import electronicsTvThumbnail from "./assets/images/tv.jpg";
import gameThumbnail from "./assets/images/game.jpg";

// =========================================================================
// PORTFOLIO CONFIGURATION - ADD YOUR SHOWREEL & VIDEO LINKS HERE!
// =========================================================================
// You can change your primary showreel and all videos below.
// The video players fully support:
// 1. YouTube watch links (e.g., "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
// 2. Vimeo video links (e.g., "https://vimeo.com/76979871")
// 3. Direct MP4 video file URLs
// =========================================================================

export const SHOWREEL_URL = "https://youtu.be/1TGpynh3b48?si=5MA6pIY5AHGhdH8j";
export const SHOWREEL_TITLE = "Divyansh Video Editing Showreel 2026";

export const CLIENT_LOGOS = [
  { name: "Ishan Sharma", label: "CO-FOUNDER & CREATOR" },
  { name: "Shruti Kapoor", label: "TECH EDUCATOR" },
  { name: "Jack Hampton Sports", label: "SPORTS CONTENT" },
  { name: "Justin Moore", label: "SPONSORSHIP COACH" },
  { name: "Gamer to Maker Nation", label: "GAMING & MEDIA" },
  { name: "Abhishek Digra", label: "CREATOR GROWTH" },
  { name: "Priyanshi Jogani", label: "FINANCE & LIFESTYLE" },
  { name: "Matt Geist", label: "CREATOR & PARTNER" },
  { name: "Maxora", label: "CREATOR / MEDIA" },
  { name: "And Many More", label: "ELITE PARTNERS" },
];

export const SHORT_FORM_PROJECTS: ShortFormProject[] = [
  {
    id: "short-1",
    title: "Business & Brand Deals Blueprint",
    duration: "0:30",
    category: "Brand Sponsorship Strategy",
    views: "2.8M",
    videoUrl: "https://www.instagram.com/reel/DZz5LAuRflJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnailUrl: brandDealThumbnail
  },
  {
    id: "short-2",
    title: "Jewelry Advertisement",
    duration: "0:45",
    category: "Speed Ramp Edit",
    views: "2.4M",
    videoUrl: "https://www.instagram.com/reel/DR4t1RyEuCc/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    thumbnailUrl: viralFormulaThumbnail
  },
  {
    id: "short-3",
    title: "My Amazon Business Story",
    duration: "0:30",
    category: "Storytelling Edit",
    views: "1.8M",
    videoUrl: "https://www.instagram.com/reel/DT-a0jqkgnX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnailUrl: secondShortThumbnail
  },
  {
    id: "short-4",
    title: "Elite Athlete Career Analysis",
    duration: "0:59",
    category: "Sports Player Review",
    views: "3.1M",
    videoUrl: "https://youtube.com/shorts/J69m-RkgWlk?si=fz5zxadRol8d1SYY",
    thumbnailUrl: thirdShortThumbnail
  },
  {
    id: "short-5",
    title: "Revolutionary Health Product Showcase",
    duration: "0:40",
    category: "Health Product Review",
    views: "4.2M",
    videoUrl: "https://www.instagram.com/reel/DS7NeM8jwCo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnailUrl: fourthShortThumbnail
  },
  {
    id: "short-6",
    title: "Best Team Under 50 Million Dollars",
    duration: "0:45",
    category: "Sports Analysis / Draft",
    views: "1.2M",
    videoUrl: "https://www.instagram.com/reel/DYnmMu4uF_h/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    thumbnailUrl: lastShortThumbnail
  }
];

export const LONG_FORM_PROJECTS: LongFormProject[] = [
  {
    id: "long-1",
    title: "How Authentication Actually Works in React",
    duration: "18:45",
    views: "150K",
    category: "Educational / Tech Breakdown",
    videoUrl: "https://youtu.be/2hvX-kpGse4?si=7t4DfkFIfTzQCGkE",
    thumbnailUrl: reactAuthThumbnail,
    bannerUrl: reactAuthThumbnail,
    clientName: "Self / Tech Educator",
    description: "An immersive step-by-step visual dissection of modern React authentication strategies. Demystifying JWTs, cookies, secure storage, and cross-origin state synchronization with real-world security best practices and custom cinematic layouts.",
    editingProcess: [
      "Custom animated 2D architectural wireframes demonstrating server-client handshakes.",
      "Surgical cutting style removing filler words for a fast-paced, high-retention instructional flow.",
      "Strategic code syntax highlighting overlays paired with premium sound indicators.",
      "Immersive UI mockups representing session storage vs HTTP-only cookies in real time."
    ],
    beforeAfter: {
      beforeUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80&sat=-100&contrast=80", // flat monochrome representing RAW log
      afterUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80&sat=120&contrast=125", // vibrant warm grades
      beforeLabel: "PLAIN TEXT TUTORIAL (Dry, Low Retention)",
      afterLabel: "DIVYANSH GRADE (Interactive visual code flowmaps)"
    },
    projectResults: [
      "Average viewer retention rate soared to 72% over 18 minutes",
      "Over 35% click-through-rate boost via green neon-glowing custom visual code-cards",
      "Gained widespread recognition in front-end educational community"
    ],
    testimonial: {
      quote: "Divyansh turned a potentially dry, technical security topic into a visually gorgeous, high-energy cinematic experience that kept our audience locked in till the very last frame.",
      author: "Shruti Kapoor",
      role: "Tech Educator",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
    },
    tags: ["EDUCATIONAL", "REACT", "SECURITY"]
  },
  {
    id: "long-2",
    title: "Why brands aren't responding to you",
    duration: "11:15",
    views: "820K",
    category: "Brand Sponsorship Strategy",
    videoUrl: "https://youtu.be/Aegqt8W5PFY?si=Z0tNYH-pD12QEFvx",
    thumbnailUrl: brandOutreachThumbnail,
    bannerUrl: brandOutreachThumbnail,
    clientName: "Justin Moore",
    description: "A deep-dive walkthrough outlining the critical mistakes content creators make when communicating with prospective brand sponsors. Fully loaded with highly strategic on-screen typography, visual email layout breakdowns, and pacing designed to maximize educational retention.",
    editingProcess: [
      "Designed dynamic, on-screen email response wireframes and proposal templates.",
      "Integrated tactile sound design elements synced seamlessly with proposal edits.",
      "Engineered high-contrast spotlight graphics to draw focus to crucial pitch mechanics.",
      "Color graded in high-end warm lifestyle and corporate palettes."
    ],
    beforeAfter: {
      beforeUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80&sat=-100&contrast=80",
      afterUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80&sat=120&contrast=115",
      beforeLabel: "DRY OUTREACH WEBINAR (Low Engagement)",
      afterLabel: "DIVYANSH GRADE (Interactive Sponsorship Masterclass)"
    },
    projectResults: [
      "Achieved an exceptional 68% average retention rate over 11 minutes",
      "Sponsorship outreach success rates for students increased by 45%",
      "Highly shared within elite developer and creator circles on X & LinkedIn"
    ],
    testimonial: {
      quote: "Divyansh turned complex, numbers-heavy brand strategy into an absolute cinematic joy to watch. He is a phenomenal editor for high-ticket coaching content.",
      author: "Justin Moore",
      role: "Sponsorship Coach / Creator",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80"
    },
    tags: ["BUSINESS", "STRATEGY", "SPONSORSHIPS"]
  },
  {
    id: "long-3",
    title: "Self Improvement Video",
    duration: "12:30",
    views: "1.2M",
    category: "Self Improvement / Mindset",
    videoUrl: "https://youtu.be/A7inPs9vV4s?si=13ay3hG_ftn5VP2K",
    thumbnailUrl: selfImprovementThumbnail,
    bannerUrl: selfImprovementThumbnail,
    clientName: "Growth Mindset",
    description: "A meticulously paced self-improvement video designed to maximize viewer engagement and message delivery. Featuring premium cinematic B-roll selection, minimalist typography transitions, and highly targeted sound design to cultivate an immersive atmosphere.",
    editingProcess: [
      "Crafted custom visual metaphors and smooth text transitions to represent mental focus.",
      "Curated cohesive cinematic B-roll aligned with deep philosophical concepts.",
      "Mastered spatial audio environments with low-frequency drones and crisp foley.",
      "Applied a sophisticated custom film grain and cinematic color grade."
    ],
    beforeAfter: {
      beforeUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80&sat=-100&contrast=80",
      afterUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80&sat=110&contrast=110",
      beforeLabel: "FLAT CAMERA OUTLINE",
      afterLabel: "DIVYANSH CINEMATIC GRADE"
    },
    projectResults: [
      "Gained over 1.2M organic views within 30 days of launch",
      "Average viewer retention rate boosted to an exceptional 64%",
      "Audience engagement and comments increased by over 75%"
    ],
    testimonial: {
      quote: "Divyansh brought our philosophical ideas to life with a cinematic pacing that completely redefined what a self-improvement video can be.",
      author: "Aurelius Studios",
      role: "Lead Philosophy Creator",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
    }
  },
  {
    id: "long-4",
    title: "Electronics TV Product Review",
    duration: "14:10",
    views: "940K",
    category: "Product Review / Hardware Analysis",
    videoUrl: "https://youtube.com/watch?v=PKmBLoCYwx0",
    thumbnailUrl: electronicsTvThumbnail,
    bannerUrl: electronicsTvThumbnail,
    clientName: "GadgetLabs",
    description: "A high-fidelity hardware walkthrough and review of next-generation smart TV technology. Blending crisp macro video angles, detailed spec graphics, side-by-side display metric charts, and immersive cinematic soundscapes.",
    editingProcess: [
      "Designed dynamic, on-screen contrast and brightness metric graphs.",
      "Synced snappy tactile click audio indicators with interface operations.",
      "Color-graded display comparison panels with absolute neutral reference profiles.",
      "Paced the structural review beats to maintain strong viewer retention."
    ],
    beforeAfter: {
      beforeUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80&sat=-100&contrast=80",
      afterUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80&sat=120&contrast=110",
      beforeLabel: "RAW CAMERA PROFILE",
      afterLabel: "DIVYANSH GRADE (Vibrant True-Color Calibration)"
    },
    projectResults: [
      "Over 940K views with extremely high conversion to affiliate partners",
      "Audience engagement rates up 48% via strategic interactive graphics",
      "Lauded by display calibration experts for graphical accuracy"
    ],
    testimonial: {
      quote: "Divyansh elevated a standard consumer electronics review into a highly premium, cinematic product story. Excellent eye for technical precision.",
      author: "David Chen",
      role: "Lead Hardware Reviewer",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
    }
  },
  {
    id: "long-5",
    title: "ELITES Design Diploma - The Final Playtest | G2M Graduation Showcase",
    duration: "1:15",
    views: "1.5M",
    category: "Gaming & Media Showcase",
    videoUrl: "https://youtu.be/dPNacYRZU1A?si=NM18GzHvKXFGN8cx",
    thumbnailUrl: gameThumbnail,
    bannerUrl: gameThumbnail,
    clientName: "Gamer to Maker",
    description: "A high-octane gaming and media showcase displaying the final playtest and graduation highlight reel from ELITES Design Diploma. Dynamic pacing, immersive game audio environments, and custom-tuned visual transitions.",
    editingProcess: [
      "Cut and structured the fastest paced highlights from the graduation playtest.",
      "Synced deep low-frequency impacts with in-game play highlights.",
      "Applied custom neon gradients and high-contrast color grades to gameplay frames.",
      "Mastered live client testimonial clips with spatial audio."
    ],
    beforeAfter: {
      beforeUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80&sat=-100&contrast=80",
      afterUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80&sat=120&contrast=110",
      beforeLabel: "UNEDITED GAME FOOTAGE",
      afterLabel: "DIVYANSH HIGH-OCTANE RENDER"
    },
    projectResults: [
      "1.5 Million organic impressions across platform profiles",
      "Average viewer retention rate soared to an exceptional 71%",
      "Exceptional student and player registration growth"
    ],
    testimonial: {
      quote: "Divyansh turned our playtest sessions into a mind-blowing, professional-tier esports showcase. A master of speed and audio syncing.",
      author: "Alex Sterling",
      role: "Lead Game Director",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
    },
    tags: ["GAMING", "SHOWCASE", "PROMO"]
  }
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: "serv-1",
    title: "Short Form Editing",
    description: "High-retention Reels, TikToks, and YouTube Shorts. Engineered with aggressive pacing, premium kinetic captions, and attention-grabbing sound design.",
    iconName: "Smartphone",
    details: ["Hormozi style captioning", "Pattern interrupts", "Hook optimization", "Dynamic sound effects"]
  },
  {
    id: "serv-2",
    title: "YouTube Editing",
    description: "Long-form pacing mastery designed to double retention. Seamless integrations of b-roll, storytelling structures, soundscapes, and color grading.",
    iconName: "Youtube",
    details: ["Multicam storytelling", "A/B retention testing", "Narrative restructuring", "Engaging transitions"]
  },
  {
    id: "serv-3",
    title: "Motion Graphics",
    description: "Custom 2D and 3D kinetic typography, animated asset overlays, infographics, and custom brand assets to elevate raw footage.",
    iconName: "Sparkles",
    details: ["Kinetic text arrays", "3D scene tracking", "Software UI mockups", "Custom call-outs"]
  },
  {
    id: "serv-4",
    title: "Color Grading",
    description: "Color correction and high-end cinematic grading. From flat, grey RAW log files into glowing, contrasty, modern color palettes.",
    iconName: "Palette",
    details: ["LOG correction", "Skin tone preservation", "Cinematic brand look", "Shot matching"]
  },
  {
    id: "serv-5",
    title: "Sound Design",
    description: "Immersive audio atmospheres. Handcrafted audio sweeps, custom Foley, clean noise-cancelled dialogue, and sub-basses.",
    iconName: "Volume2",
    details: ["Dialogue spatializing", "Foley & ambient tracks", "Pacing impact sweeps", "Royalty-free music mixing"]
  },
  {
    id: "serv-6",
    title: "Thumbnail Design",
    description: "High click-through rate (CTR) companion designs. Built to stand out on dark grids, complementing the video's core visual theme.",
    iconName: "Image",
    details: ["High-contrast masking", "Attention-guiding arrows", "Expression refining", "Clean color grade companion"]
  },
  {
    id: "serv-7",
    title: "Content Repurposing",
    description: "Slicing long podcast chapters, streams, and virtual summits into batches of 10+ organic short-form videos to scale views.",
    iconName: "Shuffle",
    details: ["Content analysis", "Surgical highlights mapping", "Format restructuring", "Omnichannel layout tuning"]
  },
  {
    id: "serv-8",
    title: "Personal Branding Videos",
    description: "Elite visual standard for high-net-worth creators, founders, and startups looking to command maximum authority online.",
    iconName: "Award",
    details: ["Visual style development", "Premium aesthetic tuning", "Strategic content flow", "Authority-oriented look"]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How long does a typical project take?",
    answer: "Short-form content batches (e.g. 5-10 videos) are typically completed in 3 to 5 business days. Long-form videos or mini-documentaries take between 5 to 10 business days depending on visual assets, multi-cam complexity, and requested custom motion graphics. Fast tracks are available upon client contract confirmation."
  },
  {
    id: "faq-2",
    question: "How many revisions are included?",
    answer: "We include 2 rounds of structural revisions in our standard pricing agreement. This ensures we can fine-tune color space, audio mix pacing, and graphic elements until they strictly align with your creative vision. Revisions are completed rapidly, usually within 24 hours."
  },
  {
    id: "faq-3",
    question: "Do you edit Shorts, Reels, and TikToks?",
    answer: "Yes, short-form visual hooks are our absolute specialty. We analyze retention graphs daily to ensure our text tracking, zooms, sound effects, and sound clips keep viewers locked in, generating millions of aggregate organic impressions for our regular roster."
  },
  {
    id: "faq-4",
    question: "Can you create advanced motion graphics?",
    answer: "Absolutely. We build customized 2D/3D visual call-outs, kinetic typography titles, sleek software mockups, maps, and tracking animations. This replaces boring dry speech with high-impact, easily digestible visuals that keep retention at an elite standard."
  },
  {
    id: "faq-5",
    question: "What are your pricing models?",
    answer: "We offer flat-rate monthly retainers for high-volume creators looking for predictable high-quality execution, as well as project-by-project rates for specific commercial launches, documentaries, and startup trailers. Let's discuss your requirements on our call and design a perfect fit."
  }
];
