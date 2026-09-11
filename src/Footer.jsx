import React from 'react';

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Unordered Lists */}
        <div className="footer-links">
          <ul>
            <li><strong>Company</strong></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>

          <ul>
            <li><strong>Resources</strong></li>
            <li><a href="#docs">Docs</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>

          <ul>
            <li><strong>Legal</strong></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
          </ul>
        </div>

        {/* Social Links with href="#" */}
        <div className="footer-socials">
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>

        {/* Copyright Paragraph */}
        <p>© 2026 All rights reserved.</p>
      </div>
    </footer>
  );
}