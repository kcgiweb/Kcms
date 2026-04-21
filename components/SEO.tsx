import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'college';
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url, type = 'website' }) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update or create meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateProperty = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta Tags
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    
    // Open Graph Tags
    updateProperty('og:title', title);
    updateProperty('og:description', description);
    if (image) updateProperty('og:image', image);
    updateProperty('og:url', url || window.location.href);
    updateProperty('og:type', type === 'college' ? 'website' : type);

    // Twitter Tags
    updateProperty('twitter:title', title);
    updateProperty('twitter:description', description);
    if (image) updateProperty('twitter:image', image);

    // Schema Markup (JSON-LD)
    const existingSchema = document.getElementById('json-ld-schema');
    if (existingSchema) {
      existingSchema.remove();
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      "name": "Karnataka College of Management & Science",
      "alternateName": "KCMS Bangalore",
      "url": "https://kcms.edu.in",
      "logo": "https://res.cloudinary.com/dejcpd56d/image/upload/v1765439468/Logo-New-1024x222_etmqyk.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9606994048",
        "contactType": "admissions",
        "areaServed": "IN",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61567119833724",
        "https://www.instagram.com/kcmsedu/",
        "https://in.linkedin.com/company/karnataka-college-of-management-science"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Metro Station",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN"
      },
      "description": description
    };

    const script = document.createElement('script');
    script.id = 'json-ld-schema';
    script.type = 'application/json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://kcms.edu.in"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": window.location.href
      }]
    };

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.id = 'breadcrumb-schema';
    breadcrumbScript.type = 'application/json';
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    return () => {
      const bSchema = document.getElementById('breadcrumb-schema');
      if (bSchema) bSchema.remove();
    };

  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;