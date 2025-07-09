interface SelectFilterProps {
  label: string;
  options: { value: string; label: string; selected?: boolean }[];
  id: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const SelectFilter = ({ label, options, id, onChange }: SelectFilterProps) => (
  <div>
    <label htmlFor={id} className="block text-gray-300 mb-2">
      {label}
    </label>
    <select
      id={id}
      className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-2"
      onChange={onChange}
      defaultValue={options.find((o) => o.selected)?.value || options[0].value}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
);
