export default function Card(props) {
  return (
    <div className="w-1/2 m-10 h-auto rounded-lg shadow-xl bg-gray-100">
      {props.children}
    </div>
  )
}
