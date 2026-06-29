type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

function Input({ label, type = 'text', placeholder }: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-gray-700">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded border border-gray-300 px-4 py-3 outline-none focus:border-[#F4A300]"
      />
    </div>
  );
}

export default Input;
