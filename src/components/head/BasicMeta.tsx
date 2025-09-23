
import React from "react";
import { Helmet } from "react-helmet-async";

export const BasicMeta: React.FC = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Get Stuff Done with AI | GSD at Work - AI Consulting & Implementation Services</title>
      
      {/* Primary Meta Tags */}
      <meta name="description" content="Expert AI consulting and implementation services to accelerate your business. From solopreneurs to enterprises, we help you harness AI's potential with proven strategies." />
      <meta name="keywords" content="AI consulting, AI implementation, artificial intelligence, business automation, AI strategy, AI solutions, AI adoption, AI workshop, business transformation, productivity gains" />
      <meta name="author" content="Get Stuff Done AI" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href="https://gsdat.work/" />
      <meta name="theme-color" content="#ffffff" />
      
      <link rel="icon" href="/lovable-uploads/27fe830f-8000-40cf-9d6d-49cfa6d1275a.png" />
      <link rel="apple-touch-icon" href="/lovable-uploads/27fe830f-8000-40cf-9d6d-49cfa6d1275a.png" />
    </Helmet>
  );
};
