;
import emailjs from "@emailjs/browser";
import { useState } from "react";




const useEmailjs = (form) => {

    const [send, setSend] = useState(true);

    


    return [send]
};

export default useEmailjs;