import React from 'react';

const PaymentPartners = () => {
    const partners = ['iDEAL', 'PayPal', 'VISA', 'Mastercard', 'Bitcoin', 'Apple Pay'];

    return (
        <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem 0', textAlign: 'center' }}>
            <div className="container">
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '2px', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                    Veilig Betalen Met
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.5 }}>
                    {partners.map((p, i) => (
                        <span
                            key={i}
                            className="partner-item"
                            style={{ 
                                fontSize: '0.9rem', 
                                fontWeight: '900', 
                                letterSpacing: '1px',
                                animationDelay: `${i * 0.1}s`
                            }}
                        >
                            {p}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaymentPartners;
