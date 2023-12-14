export default function Field({
  for: htmlFor,
  label,
  type = '',
  name = '',
  value = '',
  onChange = () => {},
}) {
  return (
    <>
      {label && (
        <label htmlFor={htmlFor} className="block mx-4 mt-4">
          {label}
        </label>
      )}
      <input
        type={type}
        className="w-3/4 mx-4 mt-2 mb-6 border border-purple-700 rounded p-1"
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  )
}
