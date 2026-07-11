type Props = {
  title:string;
};

export default function SignTitle({title}:Props){
  return <h2 className="text-2xl mb-5">{title}</h2>
}