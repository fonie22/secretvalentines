import christmasWreath from '../../static/christmas-wreath.svg';
import giftBox from '../../static/gift-box.svg';

interface PostCardProps {
  children: React.ReactNode;
  className?: string;
}

export function PostCard({ children, className = "" }: PostCardProps) {
  return (
    <div className={`shadow-[0_0_6px_6px_rgba(0,0,0,0.1)] relative z-10 transform rotate-2 transition-transform duration-300 p-3 bg-postcard rounded-lg ${className}`}>
      <div className="relative p-8 bg-[#FFE5EA]">
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#5CC48A] rounded-full flex items-center justify-center transform -rotate-12">
          <img className={`w-full h-full`} src={christmasWreath} />
        </div>
        
        {children}
        
        <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#EF3D3D] rounded-full flex items-center justify-center transform rotate-12">
          <img className={`w-full h-full`} src={giftBox} />
        </div>
      </div>
    </div>
  );
}
