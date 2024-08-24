import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="intro">
        Welcome to [Your Platform Name], the premier destination for connecting ambitious students with experienced industry professionals. Our mission is to empower individuals through personalized mentorship, helping them to achieve their career goals and reach their full potential.
      </p>
      <section className="what-we-do">
        <h2>What We Do</h2>
        <p>
          At [Your Platform Name], we offer a diverse range of mentorship sessions across various fields such as:
        </p>
        <ul>
          <li>Digital Marketing</li>
          <li>Software Development</li>
          <li>Data Science</li>
          <li>Machine Learning</li>
          <li>Product Management</li>
          <li>Cybersecurity</li>
          <li>Business Analytics</li>
          <li>Artificial Intelligence</li>
          <li>Human Resources</li>
          <li>Project Management</li>
          <li>And more...</li>
        </ul>
        <p>
          Our mentors are seasoned professionals with years of experience in their respective fields. They are dedicated to guiding you through your learning journey, offering valuable insights, and providing practical advice tailored to your needs.
        </p>
      </section>
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>
          Choosing [Your Platform Name] means investing in your future. Here’s why our platform stands out:
        </p>
        <ul>
          <li><strong>Expert Mentors:</strong> Learn from the best in the industry who bring real-world experience to the table.</li>
          <li><strong>Personalized Guidance:</strong> Tailored sessions that address your specific career aspirations and challenges.</li>
          <li><strong>Flexible Scheduling:</strong> Access mentorship sessions at times that work best for you, accommodating various time zones and schedules.</li>
          <li><strong>Broad Range of Topics:</strong> From technical skills to soft skills, our platform covers a wide array of subjects to support your career growth.</li>
          <li><strong>Supportive Community:</strong> Join a network of learners and mentors committed to mutual success and growth.</li>
        </ul>
      </section>
      <section className="our-commitment">
        <h2>Our Commitment</h2>
        <p>
          We are committed to providing a transformative mentorship experience. Our platform is designed to foster meaningful connections, facilitate continuous learning, and support your journey towards professional success. We believe in the power of mentorship to inspire and drive positive change.
        </p>
      </section>
      <footer className="contact-us">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need further assistance, feel free to reach out to us. We're here to help and ensure you have a great experience on our platform.
        </p>
        
      </footer>
    </div>
  );
}

export default About;
