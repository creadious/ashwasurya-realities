
import { ImSpinner2 } from "react-icons/im";

const LoadingAnimation = () => {
    return <div className='h-[30rem] grid place-content-center'>
        <ImSpinner2 className='text-4xl animate-spin text-yellow-700' />
    </div>
};

export default LoadingAnimation;