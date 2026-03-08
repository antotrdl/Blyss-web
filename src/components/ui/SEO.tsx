import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title = 'Blyss - La plateforme dédiée aux professionnels ongulaires',
    description = 'La plateforme de gestion intuitive conçue exclusivement pour les prothésistes ongulaires. Réservation en ligne, gestion de planning, notifications automatiques et bien plus.',
    image = 'https://i.ibb.co/1YVVTQTc/B3-B2.png',
    canonical = 'https://blyssapp.fr'
}) => {
    const fullTitle = title.includes('Blyss') ? title : `${title} | Blyss`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="language" content="French" />
            <meta name="geo.region" content="FR-74" />
            <meta name="geo.placename" content="Annecy" />

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={fullTitle} />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:site_name" content="Blyss" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonical} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content={fullTitle} />
        </Helmet>
    );
};
