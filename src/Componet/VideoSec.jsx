import React from 'react';

const VideoSec = () => {
  return (
    <section className='Video-sec pb-80'>
      
      <div className="row video-content align-items-center">
        <div className='col-md-6'>
        <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        preload="metadata" 
        width="100%"
        onError={(e) => console.error('Video error:', e)}
      >
        <source src="./assets/img/pnp-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
        <div className='col-md-6'>
        <div className="section3Left ps-3">
                            <ul>
                                <li> <i class="fa-solid fa-circle-check pe-2"></i>Crafting website strategies based on thorough research and data insights</li>
                                <li><i class="fa-solid fa-circle-check pe-2"></i>Designing custom websites that meet international standards</li>
                                <li><i class="fa-solid fa-circle-check pe-2"></i>Creating mobile-friendly, responsive websites</li>
                                <li><i class="fa-solid fa-circle-check pe-2"></i>Developing top-notch dynamic websites</li>
                                <li><i class="fa-solid fa-circle-check pe-2"></i>Offering consultations with world-class web experts</li>
                                <li><i class="fa-solid fa-circle-check pe-2"></i>Building SEO-friendly websites to boost your online presence</li>
                                <li><i class="fa-solid fa-circle-check pe-2"></i>Providing premium client service and clear communication</li>
                                <li><i class="fa-solid fa-circle-check pe-2"></i>Ensuring professional support even after project delivery</li>
                            </ul>
                            <div class="cpBtnSection1">
                                <a href="#contact" class="btn main-colorbg">Share your requirement</a>
                            </div>
                        </div>
        </div>
      </div>
      
    </section>
  );
};

export default VideoSec;
