type Props = {
  title: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;
};

export default function InputBox({title,placeholder,onChange}:Props){
  return <div className="flex flex-col gap-1 p-3 w-full"> 
    <h3>{title}</h3>
    <input onChange={onChange} 
    className="border border-gray-400 rounded-xl py-1 px-3" 
    type="text" 
    placeholder={placeholder}></input>
  </div>
}