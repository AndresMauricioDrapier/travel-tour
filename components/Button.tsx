'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

type ButtonMeProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
}
const ButtonMe = ({type, title, icon, variant} : ButtonMeProps) => {
  const router = useRouter();
  const lugar = () => {
    router.push(`/viajes/italia`);
  };
  return (
    <button className={`flexCenter gap-2 border rounded-full ${variant}`}
    type={type}
    onClick={()=>lugar()}
    >
        {icon && <Image src={icon} alt={title} width={20} height={20}/>}
        <label className="whitespace-nowrap cursor-pointer bold-16">{title}</label>
    </button>
  )
}

export default ButtonMe