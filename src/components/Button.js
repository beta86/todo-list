export default function Button(props) {
  return (
    <div className="m-4">
      <button
        type="submit"
        className="bg-purple-900 text-white px-4 py-2 rounded"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  )
}
