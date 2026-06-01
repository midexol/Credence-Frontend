import { useState } from 'react'
import Banner from '../components/Banner'
import Disclaimer from '../components/Disclaimer'
import { useToast } from '../components/ToastProvider'
import Badge from '../components/Badge'
import Button from '../components/Button'
import AddressInput from '../components/AddressInput'

export default function TrustScore() {
  const { addToast } = useToast()
  const [address, setAddress] = useState('')
  const [isAddressValid, setIsAddressValid] = useState(false)

  const handleLookup = () => {
    addToast('success', 'Trust score retrieved.')
  }

  const mockActivity = [
    { id: 1, action: 'Bond Created', date: '2024-03-25', status: 'active' },
    { id: 2, action: 'Attestation Received', date: '2024-03-20', status: 'active' },
    { id: 3, action: 'Bond Slashed', date: '2024-03-15', status: 'slashed' },
  ]

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '0.5rem',
        }}
      >
        <h1 style={{ margin: 0, color: 'var(--text-primary)' }}>Trust Score</h1>
        <Badge variant="gold" label="Gold Tier" className="tier-badge" />
      </div>
      <p id="trust-desc" style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        Your reputation score is computed from bond amount, duration, and attestations.
      </p>
      <Banner severity="info">
        Scores update once per epoch. Recent bond changes may not be reflected immediately.
      </Banner>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem',
        }}
      >
        <div
          style={{
            padding: '1.5rem',
            border: '1px solid var(--border-default)',
            borderRadius: '12px',
            background: 'var(--bg-card)',
            color: 'var(--text-primary)',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Lookup Identity</h2>
          <AddressInput
            id="wallet-address"
            label="Stellar Address"
            value={address}
            onChange={setAddress}
            onValidationChange={setIsAddressValid}
          />
          <Button
            type="button"
            onClick={handleLookup}
            variant="primary"
            fullWidth
            disabled={!isAddressValid}
            style={{ marginTop: '1rem' }}
          >
            Look up score
          </Button>
        </div>

        <div
          style={{
            padding: '1.5rem',
            border: '1px solid var(--border-default)',
            borderRadius: '12px',
            background: 'var(--bg-card)',
            color: 'var(--text-primary)',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Recent Activity</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {mockActivity.map((item) => (
              <li
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem 0',
                  borderBottom:
                    item.id === mockActivity.length ? 'none' : '1px solid var(--border-default)',
                }}
              >
                <div>
                  <div style={{ fontWeight: 500 }}>{item.action}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    {item.date}
                  </div>
                </div>
                <Badge variant={item.status} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Disclaimer
        context="Trust scores are protocol metrics only and do not constitute creditworthiness assessments."
        termsHref="#"
      />
    </div>
  )
}
