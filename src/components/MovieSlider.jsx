import React from 'react';

const images = [
    '/images/slider/s1.avif',
    '/images/slider/s2.avif',
    '/images/slider/s3.avif',
    '/images/slider/s4.avif',
    '/images/slider/s5.avif',
    '/images/slider/s6.avif'
];

const MovieSlider = () => {
    // We duplicate the images to create a seamless infinite loop
    const duplicatedImages = [...images, ...images];

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', overflow: 'hidden', padding: '60px 0' }}>
            <div className="container" style={{ marginBottom: '2rem' }}>
                <div className="section-title" style={{ marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900' }}>Kies het Beste Streaming Abonnement in Nederland</h2>
                    <p>Kies het Beste Streaming Abonnement in Nederland
                        Vergelijk betrouwbare streaming pakketten met snelle activatie, stabiele prestaties en 24/7 ondersteuning. Geniet van live sport, films en series in HD en 4K kwaliteit op al uw apparaten – eenvoudig, veilig en zonder gedoe.
                        Premium TV-kanalen</p>
                </div>
            </div>

            <div style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}>
                <div
                    className="movie-slider-track"
                    style={{
                        display: 'flex',
                        gap: '20px',
                        width: 'max-content',
                    }}
                >
                    {duplicatedImages.map((src, index) => (
                        <div
                            key={index}
                            className="movie-card"
                            style={{
                                width: '300px',
                                height: '450px',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                flexShrink: 0,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                border: '1px solid var(--border-color)',
                                backgroundColor: 'var(--bg-light)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <img
                                src={src}
                                alt="Populaire IPTV film en serie poster"
                                width="300"
                                height="450"
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .movie-card {
            width: 200px !important;
            height: 300px !important;
          }
        }
      `}</style>
        </section>
    );
};

export default MovieSlider;
