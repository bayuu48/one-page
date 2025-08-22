import React from 'react';
import '../App.css';

const Info = () => {
  return (
    <div className="row">
      <div className="kolom" data-aos="fade-right">
        <div className="kotak" data-aos="zoom-in">
          <div className="desc" data-aos="fade-up">
            <h3>Media Sosial</h3>
            <p><i className="fab fa-instagram"></i> Langit.Pradana</p>
            <p><i className="fab fa-github"></i> bayuu48</p>
            <p><i className="fab fa-discord"></i> bayuu468</p>
          </div>
        </div>
      </div>
      <div className="kolom" data-aos="fade-left">
        <div className="kotak" data-aos="zoom-in">
          <div className="desc" data-aos="fade-up">
            <h3>Skill</h3>
            <p>Figma</p>
            <p>Canva</p>
            <p>Photoshop</p>
            <p>Editing Foto</p>
            <p>UI/UX Dasar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;