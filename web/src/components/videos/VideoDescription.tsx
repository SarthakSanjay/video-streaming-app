import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
const VideoDescription = () => {
  const [toggleDesc, setToggleDesc] = useState(false)
  return (
    <motion.div className='h-max w-full dark:bg-violet-800/35 rounded-2xl my-3 overflow-hidden py-2 px-3 relative'
      animate={toggleDesc ? { height: "100%" } : {}}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <motion.p className='overflow-hidden w-full'
        initial={{ height: "22vh" }}
        animate={toggleDesc ? { height: '100%' } : {}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >

        [Mobile Name] Review: A Solid Performer with Great Features

        The [Mobile Name] is a well-rounded smartphone that delivers a solid performance, great design, and impressive features at a competitive price point. Let’s dive into what makes this device stand out.

        Design and Build
        The [Mobile Name] boasts a sleek, modern design with a sturdy build. Its lightweight body and slim profile make it comfortable to hold and use one-handed. The [size]-inch display is vibrant and crisp, offering excellent viewing angles and brightness levels, making it ideal for outdoor use.

        Display
        The AMOLED/LCD display is one of the highlights, with [resolution] and vivid color reproduction. Whether you're watching videos, gaming, or browsing, the screen delivers sharp details and deep contrasts.

        Performance
        Powered by the [Processor Name], the [Mobile Name] handles multitasking, gaming, and daily operations smoothly. Apps load quickly, and switching between them is seamless. With [RAM size] of RAM and [Storage size] of storage, it offers plenty of room for apps, photos, and videos.

        Camera
        The camera setup is another area where the [Mobile Name] shines. The [MP] main sensor captures detailed and vibrant photos even in low light. The wide-angle and macro lenses allow for versatile shooting, whether it's landscapes or close-ups. Video recording is smooth, supporting [resolution] and [fps].

        Battery Life
        With a [battery size] mAh battery, the phone easily lasts a full day with moderate u       [Mobile Name] Review: A Solid Performer with Great Features

        The [Mobile Name] is a well-rounded smartphone that delivers a solid performance, great design, and impressive features at a competitive price point. Let’s dive into what makes this device stand out.

        Design and Build
        The [Mobile Name] boasts a sleek, modern design with a sturdy build. Its lightweight body and slim profile make it comfortable to hold and use one-handed. The [size]-inch display is vibrant and crisp, offering excellent viewing angles and brightness levels, making it ideal for outdoor use.

        Display
        The AMOLED/LCD display is one of the highlights, with [resolution] and vivid color reproduction. Whether you're watching videos, gaming, or browsing, the screen delivers sharp details and deep contrasts.

        Performance
        Powered by the [Processor Name], the [Mobile Name] handles multitasking, gaming, and daily operations smoothly. Apps load quickly, and switching between them is seamless. With [RAM size] of RAM and [Storage size] of storage, it offers plenty of room for apps, photos, and videos.

        Camera
        The camera setup is another area where the [Mobile Name] shines. The [MP] main sensor captures detailed and vibrant photos even in low light. The wide-angle and macro lenses allow for versatile shooting, whether it's landscapes or close-ups. Video recording is smooth, supporting [resolution] and [fps].

        Battery Life
        With a [battery size] mAh battery, the phone easily lasts a full day with moderate use. The device also supports fast charging, so you can quickly top up when needed.

        Software
        Running on [Operating System] with [Custom UI], the user experience is clean and responsive. It offers a variety of customization options and comes with useful features like [specific features like dark mode, split-screen, etc.].

        Verdict
        Overall, the [Mobile Name] is a strong contender in its price range. It offers a good balance of performance, camera quality, and design. Whether you're a casual user or someone who enjoys mobile gaming and photography, this device won't disappoint. If you're looking for a budget-friendly phone with premium features, the [Mobile Name] should be on your radar.

      </motion.p>
      <button onClick={() => setToggleDesc(!toggleDesc)} className='absolute bottom-0 left-[50%] transform -translate-x-1/2'><ChevronDown /></button>
    </motion.div>
  )
}

export default VideoDescription
