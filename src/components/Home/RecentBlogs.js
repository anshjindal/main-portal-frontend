import MobileSEOServicesBlogImage from '../../assets/Images/MobileSEOServicesBlogImage.webp';
import TechnicalSEOServicesBlogImage from '../../assets/Images/TechnicalSEOServicesBlogImage.webp';
import { Link } from 'react-router-dom';
import content from '../../content/Home/RecentBlogsContent.json';

function RecentBlogs({ lang }) {
  const Content = content[lang];

  return (
    <div className="flex justify-center mt-[4vw] text-black text-left pb-[10vw]">
      <div className="w-[80%] max-[450px]:mt-[5vw] max-[450px]:mb-[5vw] max-[450px]:w-full">
        <p className="text-[1.1vw] text-[#666666] font-normal max-[450px]:text-[2.5vw] max-[450px]:pl-[10vw]">
          {Content.sectionTitle}
        </p>
        <div className="flex gap-x-[10vw] mt-[1vw] items-center max-[450px]:flex-col max-[450px]:space-y-[8vw]">
          <h1 className="text-[4vw]/[5vw] text-left w-[55vw] font-bold max-[450px]:text-[7vw]/[7.5vw] max-[450px]:w-[80%] max-[450px]:mt-[3vw]">
            {Content.mainHeading}
          </h1>
          <p className="w-[40vw] text-[1.1vw] text-left text-black float-right max-[450px]:text-[3vw] max-[450px]:w-[80%]">
            {Content.description}
          </p>
        </div>
        <div className="flex justify-between mt-[5vw] max-[450px]:flex-col max-[450px]:gap-y-[5vw] max-[450px]:mt-[7vw]">
          {Content.blogPosts.map((post, index) => (
            <div
              key={index}
              className={`flex ${
                index === 1 ? 'max-[450px]:flex-row-reverse' : ''
              }`} // Reverse layout for second post on mobile
            >
              <div
                style={{
                  backgroundImage: `url(${index === 0 ? MobileSEOServicesBlogImage : TechnicalSEOServicesBlogImage})`,
                }}
                className={`w-[20vw] h-[30vw] bg-cover bg-center max-[450px]:w-[40vw] max-[450px]:h-[60vw]`}
              ></div>
              <div
                className={`w-[18vw] h-fit mt-[6vw] ${
                  index === 1
                    ? 'ml-[-5vw] max-[450px]:ml-[0vw] max-[450px]:mr-[-5vw]' // Add overlap margin for second post on mobile
                    : 'ml-[-5vw]'
                } p-[1.5vw] drop-shadow-lg space-y-[4vw] bg-white max-[450px]:w-[55vw] max-[450px]:p-[6vw] max-[450px]:mt-[10vw] max-[450px]:space-y-[7vw]`}
              >
                <div className="text-[1.2vw] text-[#666666] border-[0.1vw] border-[#F2F2F2] p-[0.5vw] max-[450px]:text-[3vw]">
                  <p>{post.category}</p>
                  <p className="text-[#A7A9AA]">{post.date}</p>
                </div>
                <p className="text-[1.7vw] font-bold max-[450px]:text-[5vw]">
                  {post.title}
                </p>
                <p className="text-[1.1vw] text-[#666666] hover:text-[#FF9900] cursor-pointer underline max-[450px]:text-[3vw]">
                  <Link to="BlogPost">{post.linkText}</Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentBlogs;
