import Image from 'next/image';

const Logo = () => {
  return (
    <div className="inline-flex items-center">
      <Image
        src="/assets/mrkit_light_logo.png"
        alt="Mark's IT"
        width={150}
        height={10}
        className="object-contain"
        style={{ height: 'auto', width: 'auto', fontSize: 'inherit' }}
      />
    </div>
  );
};

export default Logo; 