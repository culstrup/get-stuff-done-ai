import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { EngagementLevels } from './EngagementLevels'

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

describe('EngagementLevels', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the main heading and description', () => {
    renderWithRouter(<EngagementLevels />)
    
    expect(screen.getByText('Two Paths to AI Transformation')).toBeInTheDocument()
    expect(screen.getByText(/Whether you're looking for a quick win or comprehensive transformation/)).toBeInTheDocument()
  })

  it('renders both engagement paths', () => {
    renderWithRouter(<EngagementLevels />)

    // Quick Win path
    expect(screen.getByText('Quick Win in a Box')).toBeInTheDocument()
    // Should show USD price (mocked at $4,750)
    expect(screen.getByText('$4,750')).toBeInTheDocument()

    // Transformation path
    expect(screen.getByText('AI Transformation Programs')).toBeInTheDocument()
    expect(screen.getByText('Custom Engagement Pricing')).toBeInTheDocument()
  })

  it('renders all quick win features', () => {
    renderWithRouter(<EngagementLevels />)

    expect(screen.getByText('1-2 hour hands-on session')).toBeInTheDocument()
    expect(screen.getByText('Founder-led or Associate-led (competitive rates)')).toBeInTheDocument()
    expect(screen.getByText('Transform a 2-day task into 2 hours')).toBeInTheDocument()
    expect(screen.getByText('Create reusable processes & SOPs')).toBeInTheDocument()
    expect(screen.getByText('Bundle discounts: 20% (5-pack) or 30% (10-pack)')).toBeInTheDocument()
  })

  it('renders all transformation program features', () => {
    renderWithRouter(<EngagementLevels />)
    
    expect(screen.getByText('Multi-week to multi-month programs')).toBeInTheDocument()
    expect(screen.getByText('Organization-wide AI adoption')).toBeInTheDocument()
    expect(screen.getByText('Custom roadmaps & implementation')).toBeInTheDocument()
    expect(screen.getByText('Ongoing coaching & optimization')).toBeInTheDocument()
  })

  it('renders the bottom messaging', () => {
    renderWithRouter(<EngagementLevels />)
    
    expect(screen.getByText(/Many clients start with a Quick Win workshop/)).toBeInTheDocument()
    expect(screen.getByText('Begin your AI journey today with the approach that fits your needs.')).toBeInTheDocument()
  })

  it('has correct link to Quick Win page', () => {
    renderWithRouter(<EngagementLevels />)

    const workshopLink = screen.getByRole('link', { name: /Explore Quick Win Options/i })
    expect(workshopLink).toHaveAttribute('href', '/ai-action-workshop')
  })

  it('opens consultation link when Quick Win consultation button is clicked', async () => {
    const user = userEvent.setup()
    renderWithRouter(<EngagementLevels />)
    
    // Find the first Schedule Free Consultation button (in Quick Win section)
    const consultButtons = screen.getAllByText('Schedule Free Consultation')
    await user.click(consultButtons[0])
    
    expect(window.open).toHaveBeenCalledWith('https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call', '_blank')
  })

  it('opens consultation link when Transformation consultation button is clicked', async () => {
    const user = userEvent.setup()
    renderWithRouter(<EngagementLevels />)
    
    // Find the second Schedule Free Consultation button (in Transformation section)
    const consultButtons = screen.getAllByText('Schedule Free Consultation')
    await user.click(consultButtons[1])
    
    expect(window.open).toHaveBeenCalledWith('https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call', '_blank')
  })

  it('displays ideal audience for each path', () => {
    renderWithRouter(<EngagementLevels />)
    
    expect(screen.getByText(/Ideal for: Individual teams, first-time engagements/)).toBeInTheDocument()
    expect(screen.getByText(/Ideal for: Enterprises, strategic initiatives/)).toBeInTheDocument()
  })

  it('renders with proper visual hierarchy', () => {
    renderWithRouter(<EngagementLevels />)

    // Check that both cards exist with proper structure
    const quickWinCard = screen.getByText('Quick Win in a Box').closest('div[class*="rounded-xl"]')
    const transformCard = screen.getByText('AI Transformation Programs').closest('div[class*="rounded-xl"]')

    expect(quickWinCard).toHaveClass('border-blue-200')
    expect(transformCard).toHaveClass('border-secondary')
  })
})