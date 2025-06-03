"use client"; 

import React, { useEffect, useRef, useState } from 'react'
import type { BackgroundMediaProps , ResponsiveSources } from '../../types/media.type'



export const BackgroundMedia:React.FC<BackgroundMediaProps> = ({
    videoSources,
    imageSources,
    altText = "background media"
}) => {
    const [isVideoLoaded , setIsVideoLoaded] = useState(false);
    const [currentVideoSrc, setCurrentVideoSrc] = useState('');
    const [currentImageSrc , setCurrentImageSrc] = useState('');
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(()=> {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            setCurrentVideoSrc(isMobile ? videoSources.mobile: videoSources.desktop);
            setCurrentImageSrc(isMobile ? imageSources.mobile : imageSources.desktop );
            setIsVideoLoaded(false);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    },[videoSources , imageSources]);

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

  return (
    <div className='fixed inset-0 -z-0 w-full h-full overflow-hidden' >
        {!isVideoLoaded && currentImageSrc && (
            <img
                key={`img-${currentImageSrc}`}
                src={currentImageSrc}
                alt={altText}
                className='object-cover w-full h-full'
                onError={(e)=> (e.currentTarget.style.display = 'none')}
                onLoad={(e)=> (e.currentTarget.style.display = 'block')} 
                />
        )}

        {currentVideoSrc && (
            <video
                ref={videoRef}
                key={`video-${currentVideoSrc}`}
                src={currentVideoSrc}
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={handleVideoLoad}
                className={` object-cover w-full h-full transition-opacity duration-1000 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
                
            >
                مرورگز شما از ویدیو پشتیبانی نمی کند
            </video>
        )}
    </div>
  );
};

export default BackgroundMedia