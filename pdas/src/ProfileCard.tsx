// import './ProfileCard2.css';
import React from 'react';

interface ProfileCardProps {
  title: string;
  handle: string;
  image: any;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, handle, image, description } ) => {
  return (
    // <div className='column is-4'>
      <div className="card">
        {/* <div className="card-image"> */}
          <figure className="image is-1by1">
            <img src={image} alt={`Image of ${title}`}/>
          </figure>
        {/* </div> */}
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handle}</p>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default ProfileCard;