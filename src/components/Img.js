import React from 'react';

const Img = ({
  src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fplaceholder-image&psig=AOvVaw38d6y9hZ9wKtGd17M5A0JY&ust=1701277281463000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDUx_KV54IDFQAAAAAdAAAAABAE',
  alt = 'img',
  className = 'Image',
  ...props
}) => {
  return <img src={src} className={className} alt={alt} {...props} />;
};

export default Img;
