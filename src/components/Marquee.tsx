import React from 'react';
import {BowArrow,  Heart, Telescope, Pause, Wand} from 'lucide-react';
const Marquee = () => {

    const messages = [
        {icon: <BowArrow className='w-5 h-5'/>},
        {text:"Let the universe spoil you" },
        {icon: <Heart className='w-5 h-5'/>},
        {text:"Love is either here or it's on its way"},
        {icon:  <Telescope className='w-5 h-5'/> },
        {text:"Trust the universe"},
        {icon: <Pause className='w-5 h-5'/> },
        {text:"Pause your thoughts and listen to what you feel"},
        {icon:  <Wand className='w-5 h-5'/>},
        {text:"Align with good vibes only"},
    ]
  return (
    <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden whitespace-nowrap py-4">
      <div className="inline-flex animate-marquee hover:[animation-play-state:paused]">
        {
            [...Array(2)].map((_, i) => (
                <ul
                key={i}
                className="flex items-center gap-8 text-[rgb(156,108,84)] font-playfair text-lg font-medium"
                >
                    { 
                        messages.map((item, idx)=>(
                            <li key={idx}
                            className={` shrink-0 flex items-center gap-2 ${idx===messages.length - 1 ? "mr-8" : ""}`}>
                                {item.icon}
                                <span>{item.text}</span>
                            </li>
                        ))}
                </ul>
            ))}
      </div>
    </div>
  )
}

export default Marquee
