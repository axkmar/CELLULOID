type Props = {
  title: string;
  link: string;
};

export default function AlreadySign({title,link}:Props){
  return <div className="flex flex-col gap-2 p-3 text-sm"> 
    <p>{title} <span className="hover:underline cursor-pointer font-bold">{link}</span> </p>
  </div>
}