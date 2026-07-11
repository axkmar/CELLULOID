type Props = {
  title: string;
  placeholder: string;
};

export default function InputBox({title,placeholder}:Props){
  return <div className="flex flex-col gap-1 p-3 "> 
    <h3>{title}</h3>
    <input className="border border-gray-400 rounded-xl py-1 px-3" type="text" placeholder={placeholder}></input>
  </div>
}