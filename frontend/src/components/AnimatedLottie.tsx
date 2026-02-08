"use client"

import React, { useState, useEffect } from 'react'
import Lottie from 'lottie-react'

type Props = {
  className?: string
  animationPath?: string
}

export default function AnimatedLottie({ className = '', animationPath = '/team04.json' }: Props) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Fetch the animation from the public folder
    fetch(animationPath)
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error("Failed to load animation:", err));
  }, [animationPath]);

  if (!animationData) return null;

  return (
    <div className={`${className} flex items-center justify-center w-full h-full`}>
      <Lottie animationData={animationData} loop={true} className="w-full h-full" />
    </div>
  )
}
