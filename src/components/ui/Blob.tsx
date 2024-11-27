import { motion } from "framer-motion";

interface SingleBlobProps {
  color: string;
  motionClass: string;
  blobClass: string;
  direction: number;
}
interface BlobProps {
  variant: number;
}

const SingleBlob: React.FC<SingleBlobProps> = (props) => {
  const { color, motionClass, blobClass, direction } = props;
  return (
    <motion.div
      animate={{ rotate: direction }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "linear",
      }}
      className={motionClass}
    >
      <svg
        id="visual"
        viewBox="0 0 200 200"
        className={blobClass}
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g transform="translate(96.45358370351123 99.78076634933376)">
          <path
            d="M58 -63.6C74.4 -55.3 86.4 -36.3 84.4 -19.1C82.4 -1.9 66.3 13.5 55.1 30.7C43.9 47.8 37.5 66.7 26.3 69.7C15 72.7 -1 59.8 -18.8 52.8C-36.5 45.8 -55.9 44.7 -66.5 34.5C-77.1 24.3 -79 5 -76.6 -14.4C-74.2 -33.8 -67.6 -53.3 -54.2 -62.1C-40.7 -70.8 -20.4 -68.9 0.2 -69.2C20.8 -69.4 41.6 -71.9 58 -63.6"
            fill={color}
          ></path>
        </g>
      </svg>
    </motion.div>
  );
};

const Blob: React.FC<BlobProps> = (blobProps) => {
  const { variant = 1 } = blobProps;
  return (
    <>
      <div className="">
        <SingleBlob
          color="var(--color-green_yellow-500)"
          motionClass="bg-transparent absolute top-2 left-2 z-[1]"
          blobClass="bg-transparent scale-[1]"
          direction={variant === 1 ? 360 : -360}
        />
        <SingleBlob
          color="var(--color-green_yellow-600)"
          motionClass="bg-transparent absolute top-4 left-4 z-[2]"
          blobClass="bg-transparent scale-[0.8] "
          direction={variant === 1 ? 360 : -360}
        />
        <SingleBlob
          color="var(--color-green_yellow-700)"
          motionClass="bg-transparent absolute top-6 left-6 z-[3]"
          blobClass="bg-transparent scale-[0.6] "
          direction={variant === 1 ? 360 : -360}
        />
        <SingleBlob
          color="var(--color-green_yellow-800)"
          motionClass="bg-transparent absolute top-8 left-8 z-[4]"
          blobClass="bg-transparent scale-[0.4] "
          direction={variant === 1 ? 360 : -360}
        />
        <SingleBlob
          color="var(--color-green_yellow-900)"
          motionClass="bg-transparent absolute top-10 left-10 z-[5]"
          blobClass="bg-transparent scale-[0.2] "
          direction={variant === 1 ? 360 : -360}
        />
      </div>
    </>
  );
};

export default Blob;
