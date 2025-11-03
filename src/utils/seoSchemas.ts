// FAQ Schema for SEO
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does solar panel installation cost in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solar panel installation costs in India typically range from ₹40,000 to ₹60,000 per kW for residential systems. A 3kW system costs approximately ₹1.5-2 lakhs, while a 5kW system costs ₹2.5-3.5 lakhs. Government subsidies can reduce costs by 40% for systems up to 3kW."
      }
    },
    {
      "@type": "Question",
      "name": "What is the ROI period for solar panels in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential solar systems in India achieve ROI within 3-5 years, depending on electricity consumption, local electricity rates, and available subsidies. After payback, you can enjoy 20+ years of free electricity."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need permission to install solar panels on my rooftop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For rooftop solar installations, you need approval from your electricity distribution company (DISCOM) for net metering. Axisol handles all paperwork and approvals as part of our comprehensive EPC services."
      }
    },
    {
      "@type": "Question",
      "name": "What is the government subsidy for solar panels in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the PM Surya Ghar Yojana, the Indian government provides subsidies: ₹30,000 for 1-2 kW systems, ₹60,000 for 2-3 kW systems, and ₹78,000 for systems above 3 kW (40% subsidy up to 3 kW and 20% for additional capacity)."
      }
    },
    {
      "@type": "Question",
      "name": "How much electricity can a 5kW solar system generate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 5kW solar system in India typically generates 20-25 units (kWh) per day, approximately 600-750 units per month, depending on location, weather, and panel orientation. This is sufficient for a medium-sized home."
      }
    },
    {
      "@type": "Question",
      "name": "What is net metering and how does it work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Net metering allows you to export excess solar electricity to the grid and receive credits on your electricity bill. When your solar panels produce more than you consume, the surplus goes to the grid. At night, you use grid power, and credits offset the cost."
      }
    },
    {
      "@type": "Question",
      "name": "How long do solar panels last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quality solar panels have a lifespan of 25-30 years with minimal maintenance. Most manufacturers provide a 25-year performance warranty guaranteeing 80-85% efficiency after 25 years. Axisol uses only premium panels with comprehensive warranties."
      }
    },
    {
      "@type": "Question",
      "name": "Is solar panel installation worth it in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! With high solar irradiation (300+ sunny days), rising electricity costs, government subsidies, and environmental benefits, solar installation in India offers excellent returns. Most homeowners save 50-90% on electricity bills immediately."
      }
    }
  ]
};

// Service Schema
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Solar Panel Installation",
  "provider": {
    "@type": "Organization",
    "name": "Axisol"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR",
    "description": "Professional solar panel installation services for residential and commercial properties"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Solar Energy Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Solar Installation",
          "description": "Complete rooftop solar solutions for homes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Solar Installation",
          "description": "Large-scale solar systems for businesses and industries"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solar Maintenance",
          "description": "Regular maintenance and monitoring services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Net Metering Setup",
          "description": "Complete net metering application and installation"
        }
      }
    ]
  }
};

// Product Schema (for specific solar panels)
export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Premium Solar Panel System",
  "description": "High-efficiency solar panel systems for residential and commercial use",
  "brand": {
    "@type": "Brand",
    "name": "Axisol"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "lowPrice": "150000",
    "highPrice": "500000",
    "offerCount": "100"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "250"
  }
};

// BreadcrumbList Schema
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Review Schema
export const createReviewSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Organization",
    "name": "Axisol"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Customer Name"
  },
  "reviewBody": "Excellent solar installation service. Professional team and great results!"
});
