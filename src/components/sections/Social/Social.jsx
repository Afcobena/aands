// import SocialCard from "../../cards/SocialCard/SocialCard";

// import { socialData } from "../../../data/social";

export default function Social({className, dataSpeed}) {
  return (
    <section
      className={`social ${className}`}
      data-speed={dataSpeed}
    >
      {/* <div className="social__container">
        <h2>We are Social</h2>
        <div className='social__grid'>
        {socialData.map(eachCard => (
          <SocialCard
            key={eachCard.id}
            comment={eachCard.comment}
            name={eachCard.name}
            socialImg={eachCard.socialImg}
            img={eachCard.img}
            stars={eachCard.stars}
          />
        ))}
        </div>
      </div> */}
    </section>
  )
}
