import type { Technologie } from '@/types/Technologie';
import './TechnologiesCarousel.css';

interface Props {
  technologies: Technologie[];
}

const TechnologiesCarousel = ({ technologies }: Props) => {
  const iconsLoop = [...technologies, ...technologies];

  return (
    <div className="slider">
      <div className="slide-track">
        {iconsLoop.map(({ name, icon: Icon }, idx) => (
          <div key={`icon-${name}-${idx}`} className="slide flex flex-col items-center">
            <Icon className="w-12 h-12" />
            <p className="text-center mt-2 text-sm">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesCarousel;