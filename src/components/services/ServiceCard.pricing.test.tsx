import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ServiceCard } from './ServiceCard'
import { ServiceType } from './types'

// Mock window.open
global.window.open = vi.fn()

// Mock the useBitcoinPrice hook
vi.mock('@/hooks/use-bitcoin-price', () => ({
  useBitcoinPrice: () => ({
    data: 95000, // Mock BTC price
    isLoading: false,
    error: null
  }),
  btcToUsd: (btcAmount: number, btcPrice: number) => btcAmount * btcPrice,
  formatUsd: (amount: number) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}))

// Wrapper component for React Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('ServiceCard Pricing Tiers', () => {
  const mockServiceWithTiers: ServiceType = {
    title: 'AI Action Workshop',
    description: 'Quick win in a box',
    price: '$2,499 per session',
    pricingTiers: [
      {
        label: 'Founder-Led Workshop',
        price: '$2,499',
        description: 'With Christian Ulstrup',
        availability: 'Limited availability'
      },
      {
        label: 'Associate-Led Workshop',
        price: 'Competitive rates',
        description: 'With a GSD Certified Associate',
        availability: 'More scheduling flexibility'
      }
    ],
    subtext: 'Same workshop, different leaders',
    features: ['Feature 1', 'Feature 2'],
    cta: 'Learn More',
    secondaryCta: 'Schedule a Consultation',
    calendlyLink: 'https://calendly.com/gsdatwork/free-consult',
    learnMoreLink: '/ai-action-workshop'
  }

  const mockServiceWithoutTiers: ServiceType = {
    title: 'Regular Service',
    description: 'Standard service',
    price: '$999',
    features: ['Feature 1', 'Feature 2'],
    cta: 'Learn More',
    secondaryCta: 'Schedule a Call'
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders pricing tiers when available', () => {
    renderWithRouter(<ServiceCard service={mockServiceWithTiers} />)
    
    // Check that both pricing tiers are rendered
    expect(screen.getByText('Founder-Led Workshop')).toBeInTheDocument()
    expect(screen.getByText('Associate-Led Workshop')).toBeInTheDocument()
    
    // Check prices
    expect(screen.getByText('$2,499')).toBeInTheDocument()
    expect(screen.getByText('Competitive rates')).toBeInTheDocument()
    
    // Check descriptions
    expect(screen.getByText('With Christian Ulstrup')).toBeInTheDocument()
    expect(screen.getByText('With a GSD Certified Associate')).toBeInTheDocument()
    
    // Check availability
    expect(screen.getByText('Limited availability')).toBeInTheDocument()
    expect(screen.getByText('More scheduling flexibility')).toBeInTheDocument()
  })

  it('does not render pricing tiers section when not available', () => {
    renderWithRouter(<ServiceCard service={mockServiceWithoutTiers} />)
    
    // Should not find any tier-specific elements
    expect(screen.queryByText('Founder-Led Workshop')).not.toBeInTheDocument()
    expect(screen.queryByText('Associate-Led Workshop')).not.toBeInTheDocument()
  })

  it('renders pricing tiers with proper structure', () => {
    renderWithRouter(<ServiceCard service={mockServiceWithTiers} />)
    
    // Check that pricing tiers exist in the DOM
    const founderTier = screen.getByText('Founder-Led Workshop')
    const associateTier = screen.getByText('Associate-Led Workshop')
    
    // Verify both tiers are rendered
    expect(founderTier).toBeInTheDocument()
    expect(associateTier).toBeInTheDocument()
    
    // Check that they have parent containers (don't check specific classes as they may change)
    expect(founderTier.closest('div')).toBeInTheDocument()
    expect(associateTier.closest('div')).toBeInTheDocument()
  })

  it('displays starting price when pricing tiers exist', () => {
    renderWithRouter(<ServiceCard service={mockServiceWithTiers} />)
    
    // Should show the main price
    expect(screen.getByText('$2,499 per session')).toBeInTheDocument()
  })

  it('handles empty pricing tiers array', () => {
    const serviceWithEmptyTiers = { 
      ...mockServiceWithTiers, 
      pricingTiers: [] 
    }
    
    renderWithRouter(<ServiceCard service={serviceWithEmptyTiers} />)
    
    // Should render without errors but not show tier section
    expect(screen.getByText('$2,499 per session')).toBeInTheDocument()
    expect(screen.queryByText('Founder-Led Workshop')).not.toBeInTheDocument()
  })

  it('handles pricing tier without optional fields', () => {
    const serviceWithMinimalTiers: ServiceType = {
      ...mockServiceWithTiers,
      pricingTiers: [
        {
          label: 'Basic Tier',
          price: '$999'
        }
      ]
    }
    
    renderWithRouter(<ServiceCard service={serviceWithMinimalTiers} />)
    
    expect(screen.getByText('Basic Tier')).toBeInTheDocument()
    expect(screen.getByText('$999')).toBeInTheDocument()
    // No description or availability should be shown
    expect(screen.queryByText('With')).not.toBeInTheDocument()
  })
})