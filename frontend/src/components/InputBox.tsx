type Props = {
  title: string;
  placeholder: string;
};

export default function InputBox({title,placeholder}:Props){
  return <div className="flex gap-2 p-5"> 
    <h3>{title}</h3>
    <input type="text" placeholder={placeholder}></input>
  </div>
}