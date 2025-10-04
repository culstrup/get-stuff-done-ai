import { describe, it, expect } from 'vitest'
import { services, valueMetrics } from './data'
import { ServiceType } from './types'

describe('services data', () => {
  it('contains exactly 5 services', () => {
    expect(services).toHaveLength(5)
  })

  it('all services have required fields', () => {
    services.forEach((service) => {
      // Required fields
      expect(service.title).toBeTruthy()
      expect(typeof service.title).toBe('string')
      
      expect(service.description).toBeTruthy()
      expect(typeof service.description).toBe('string')
      
      expect(service.price).toBeTruthy()
      expect(typeof service.price).toBe('string')
      
      expect(Array.isArray(service.features)).toBe(true)
      expect(service.features.length).toBeGreaterThan(0)
      
      expect(service.cta).toBeTruthy()
      expect(typeof service.cta).toBe('string')
      
      expect(service.secondaryCta).toBeTruthy()
      expect(typeof service.secondaryCta).toBe('string')
    })
  })

  it('all services have valid optional fields when present', () => {
    services.forEach((service) => {
      if (service.subtext) {
        expect(typeof service.subtext).toBe('string')
      }
      if (service.extraText) {
        expect(typeof service.extraText).toBe('string')
      }
      if (service.calendlyLink) {
        expect(typeof service.calendlyLink).toBe('string')
        expect(service.calendlyLink).toMatch(/^https:\/\/calendly\.com/)
      }
      if (service.learnMoreLink) {
        expect(typeof service.learnMoreLink).toBe('string')
        expect(service.learnMoreLink).toMatch(/^\//)
      }
    })
  })

  it('service prices follow expected patterns', () => {
    services.forEach((service) => {
      // Allow dollar amounts, BTC pricing, and "Custom Pricing"
      expect(service.price).toMatch(/(\$[\d,]+|Custom Pricing|[\d.]+\s*BTC|Starts at)/)
    })
  })

  it('all services have at least 5 features', () => {
    services.forEach((service) => {
      expect(service.features.length).toBeGreaterThanOrEqual(5)
      // Quick Win in a Box and Triple A have 6-7 features
      expect(service.features.length).toBeLessThanOrEqual(7)
      service.features.forEach((feature) => {
        expect(typeof feature).toBe('string')
        expect(feature.length).toBeGreaterThan(0)
      })
    })
  })

  it('contains expected workshop services', () => {
    const workshopTitles = services
      .filter(s => s.title.includes('Workshop') || s.title.includes('Session') || s.title.includes('Show') || s.title.includes('Box'))
      .map(s => s.title)

    expect(workshopTitles).toContain('AI Oracle Session')
    expect(workshopTitles).toContain('Quick Win in a Box')
    expect(workshopTitles).toContain('Enterprise AI Cooking Show')
    expect(workshopTitles).toHaveLength(3)
  })

  it('contains expected program services', () => {
    const programTitles = services
      .filter(s => s.title.includes('Program') || s.title.includes('Integration'))
      .map(s => s.title)

    expect(programTitles).toContain('AI Automation & Custom Integration')
    expect(programTitles).toContain('Triple-A Transformation Program')
    expect(programTitles).toHaveLength(2)
  })

  it('workshops have appropriate pricing', () => {
    const workshops = services.filter(s => s.title.includes('Workshop') || s.title.includes('Session') || s.title.includes('Show') || s.title.includes('Box'))
    workshops.forEach((workshop) => {
      if (workshop.title === 'Quick Win in a Box') {
        expect(workshop.price).toBe('0.05 BTC per session')
        expect(workshop.btcPrice).toBe(0.05)
      } else if (workshop.title === 'AI Oracle Session') {
        expect(workshop.price).toBe('0.05 BTC per session')
        expect(workshop.btcPrice).toBe(0.05)
        expect(workshop.subtext).toBe('Executive Intelligence System')
      } else if (workshop.title === 'Enterprise AI Cooking Show') {
        expect(workshop.price).toBe('0.05 BTC')
        expect(workshop.btcPrice).toBe(0.05)
        expect(workshop.subtext).toBe('Premium workshop experience')
      }
    })
  })

  it('all services have CTAs', () => {
    services.forEach((service) => {
      expect(service.cta).toBe('Learn More')
      expect(['Schedule a Consultation', 'Schedule a Strategy Call', 'Schedule Executive Briefing', 'Schedule Discovery Call', 'Book Your Show']).toContain(service.secondaryCta)
    })
  })

  it('all services have learn more links pointing to correct routes', () => {
    const expectedRoutes = {
      'Enterprise AI Cooking Show': '/enterprise-ai-cooking-show',
      'AI Oracle Session': '/ai-oracle-session',
      'Quick Win in a Box': '/ai-action-workshop',
      'AI Automation & Custom Integration': '/ai-automation-integration',
      'Triple-A Transformation Program': '/triple-a-transformation'
    }

    services.forEach((service) => {
      expect(service.learnMoreLink).toBe(expectedRoutes[service.title])
    })
  })

  it('calendly links are valid and appropriate', () => {
    services.forEach((service) => {
      expect(service.calendlyLink).toBeDefined()
      if (service.title === 'Quick Win in a Box') {
        expect(service.calendlyLink).toBe('https://calendly.com/gsdatwork/free-consult')
      } else {
        expect(service.calendlyLink).toBe('https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call')
      }
    })
  })
})

describe('valueMetrics data', () => {
  it('contains exactly 5 value metrics', () => {
    expect(valueMetrics).toHaveLength(5)
  })

  it('all value metrics are non-empty strings', () => {
    valueMetrics.forEach((metric) => {
      expect(typeof metric).toBe('string')
      expect(metric.length).toBeGreaterThan(0)
    })
  })

  it('all metrics include specific outcomes', () => {
    valueMetrics.forEach((metric) => {
      expect(metric).toMatch(/\(e\.g\.,.*\)/)
    })
  })

  it('metrics cover expected categories', () => {
    const categories = ['cost reduction', 'revenue impact', 'Productivity gains', 'Time saved', 'ROI delivered']
    categories.forEach((category) => {
      const hasCategory = valueMetrics.some(metric => metric.includes(category))
      expect(hasCategory).toBe(true)
    })
  })
})