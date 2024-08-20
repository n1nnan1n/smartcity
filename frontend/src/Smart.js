import React from 'react';

const Smart = () => {
  return (
    <div style={styles.smartEnvironment}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <img
          src="path/to/your/image.png"
          alt="Wind Turbine"
          style={styles.heroImage}
        />
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>Smart Environment</h1>
          <p style={styles.heroDescription}>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Nunc
            Vulputate Libero Et Velit Interdum, Ac Aliquet Odio Mattis.
          </p>
          <p style={styles.heroDescription}>
            Class Aptent Taciti Sociosqu Ad Litora Torquent Per Conubia Nostra,
            Per Inceptos Himen. Curabitur Tempus Una At Turpis Condimentum
            Lobortis.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div style={styles.services}>
        <div style={styles.service}>
          <img src="path/to/icon1.png" alt="Service 1" style={styles.serviceIcon} />
          <p style={styles.serviceText}>Services 01</p>
        </div>
        <div style={styles.service}>
          <img src="path/to/icon2.png" alt="Service 2" style={styles.serviceIcon} />
          <p style={styles.serviceText}>Services 02</p>
        </div>
        <div style={styles.service}>
          <img src="path/to/icon3.png" alt="Service 3" style={styles.serviceIcon} />
          <p style={styles.serviceText}>Services 03</p>
        </div>
        <div style={styles.service}>
          <img src="path/to/icon4.png" alt="Service 4" style={styles.serviceIcon} />
          <p style={styles.serviceText}>Services 04</p>
        </div>
        <div style={styles.service}>
          <img src="path/to/icon5.png" alt="Service 5" style={styles.serviceIcon} />
          <p style={styles.serviceText}>Services 05</p>
        </div>
      </div>

      {/* About Section */}
      <div style={styles.about}>
        <div style={styles.aboutImageWrapper}>
          <img
            src="path/to/your/image.png"
            alt="Wind Turbine and Solar Panels"
            style={styles.aboutImage}
          />
          <div style={styles.playButton}>
            <i className="fa fa-play"></i>
          </div>
        </div>
        <div style={styles.aboutText}>
          <h2 style={styles.aboutTitle}>About Our Smart Environment services</h2>
          <p style={styles.aboutDescription}>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Nunc
            Vulputate Libero Et Velit Interdum, Ac Aliquet Odio Mattis. Class
            Aptent Taciti Sociosqu Ad Litora Torquent Per Conubia Nostra, Per
            Inceptos Himen. Curabitur Tempus Una At Turpis Condimentum Lobortis.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  smartEnvironment: {
    fontFamily: 'Arial, sans-serif',
  },
  /* Hero Section */
  hero: {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
  },
  heroImage: {
    width: '100%',
    height: 'auto',
  },
  heroText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '10px',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  heroDescription: {
    fontSize: '1.2rem',
  },

  /* Services Section */
  services: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '2rem 0',
    backgroundColor: '#f3f3f3',
    flexWrap: 'wrap',
  },
  service: {
    textAlign: 'center',
    flex: '1 1 150px',
    margin: '10px',
  },
  serviceIcon: {
    width: '80px',
    height: '80px',
  },
  serviceText: {
    marginTop: '1rem',
    fontWeight: 'bold',
  },

  /* About Section */
  about: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem',
    flexWrap: 'wrap',
  },
  aboutImageWrapper: {
    position: 'relative',
    flex: '1 1 400px',
    marginBottom: '20px',
  },
  aboutImage: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '10px',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '50%',
    padding: '1rem',
  },
  aboutText: {
    flex: '2 1 400px',
    marginLeft: '2rem',
  },
  aboutTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  aboutDescription: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
  },

  /* Responsive Styles */
  '@media (max-width: 768px)': {
    heroTitle: {
      fontSize: '2rem',
    },
    heroDescription: {
      fontSize: '1rem',
    },
    about: {
      flexDirection: 'column',
    },
    aboutText: {
      marginLeft: '0',
      marginTop: '20px',
    },
    heroText: {
      padding: '10px',
    },
    playButton: {
      padding: '0.5rem',
    },
  },
};

export default Smart;
