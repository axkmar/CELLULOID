type Props={
  title:string;
  onClick: ()=>void
}

export default function Button({title,onClick}:Props){
  return <>
  <button onClick={onClick}
  className="py-2 px-3 bg-gray-500 border-white border rounded-2xl hover:bg-gray-800 cursor-pointer">{title}</button>
  </>
}