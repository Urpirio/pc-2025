import { useState } from "react";
import { SetIsConfirmado } from "../components/Main - Login";

export default function useRecuperarC() {
const [Status, setStatus] = useState(true);
const [email, setEmail] = useState('');

const RecuperarC = ({email}) => {
    if(email.includes('@proconsumidor') && email.includes('.do')) {
        setStatus(true);
        SetIsConfirmado(true);
    } else {
        setStatus(false);
    }
}

return({
    Status,
    email,
    setEmail,
    RecuperarC,
})
};