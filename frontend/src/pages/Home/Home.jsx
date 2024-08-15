// Import the necessary libraries
import React from 'react';
import {useState} from 'react'
const Home = () => {
  const [user,setuser]=useState(500)
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            <img
              className="w-18 h-20"
              src="https://static.vecteezy.com/system/resources/previews/020/195/404/original/fitness-icon-for-your-website-design-logo-app-ui-free-vector.jpg"
              alt="Fitlife Logo"
            />
            Fitlife
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Profile
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Community
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Become Member
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <>
      <div
        className="container mx-auto px-6 py-12 bg-cover bg-center h-80"
        style={{
          backgroundImage:
            "url(https://t3.ftcdn.net/jpg/04/29/35/62/360_F_429356296_CVQ5LkC6Pl55kUNLqLisVKgTw9vjyif1.jpg)",
        }}
      >
        <div className="px-6 py-6 mt-6 text-center">
          <h1 className="text-3xl font-bold text-white">
            Welcome to
            <span className="flex justify-center items-center"></span>
            Fitlife
          </h1>
        </div>
      </div>
      </>
      <>
      
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5em' }}>Our Mission</h1>
        <h2 style={{ fontSize: '1.5em', color: '#555' }}>Empowering Active and Healthy Lifestyles for Seniors</h2>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '1.5em', marginBottom: '10px' }}>Introduction</h3>
        <p>
          Welcome to FitLife! We are dedicated to helping older adults lead active, fulfilling lives through personalized fitness programs designed with their unique needs in mind. Our mission is to empower seniors to stay strong, flexible, and confident as they age.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '1.5em', marginBottom: '10px' }}>Our Story</h3>
        <p>
          Founded by a team of fitness enthusiasts and health professionals, FitLife was created with the belief that fitness is a key component to a vibrant and joyful life at any age. Our founders have extensive experience in senior fitness and wellness, and they bring a wealth of knowledge to our programs.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '1.5em', marginBottom: '10px' }}>Meet the Team</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>Hitesh - Founder & CEO:</strong> With a background in geriatric fitness and a passion for promoting healthy aging, Hitesh leads our team with dedication and expertise.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Isha - Fitness Coach:</strong> Our certified fitness coach specializing in senior fitness, Isha designs our programs to ensure they are safe and effective.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Aayush - Wellness Specialist:</strong> Aayush provides valuable insights into nutrition and overall well-being, helping to complement our fitness programs.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Harsh - Program Coordinator:</strong> Harsh ensures that our fitness programs are well-coordinated and meet the needs of our clients.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '1.5em', marginBottom: '10px' }}>Our Approach</h3>
        <ul>
          <li>Personalized Fitness Plans: Tailored to fit individual needs and abilities.</li>
          <li>Gentle and Safe Workouts: Designed to be effective while minimizing the risk of injury.</li>
          <li>Holistic Wellness: Incorporating nutrition advice and mental well-being into our programs.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '1.5em', marginBottom: '10px' }}>Testimonials</h3>
        <blockquote style={{ borderLeft: '3px solid #ddd', paddingLeft: '20px', marginBottom: '10px' }}>
          <p>"I never thought I could feel this strong again. FitLife has truly changed my life." – Hardik</p>
        </blockquote>
        <blockquote style={{ borderLeft: '3px solid #ddd', paddingLeft: '20px' }}>
          <p>"The personalized approach and supportive community make all the difference." – rohit</p>
        </blockquote>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '30px' }}>
        <h3 style={{ fontSize: '1.5em', marginBottom: '10px' }}>Join Us</h3>
        <p>Discover how our programs can help you lead a more active and fulfilling life.</p>
        <a href="/contact" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Contact Us</a>
        <p style={{ marginTop: '10px' }}>Contact Us: 4567890456 | fitlife@gmail.com| fitlife</p>
      </footer>
    </div>

      </>
      <>
      <h1 className='text-center'>Active Users</h1>
      <p>{user}K</p><br/>
      <p>Active users are users who have logged in within the last 30 days.</p>
      </>
    </div>

  );
};

export default Home;
