interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmationModal({
  isOpen,
  title,
  onCancel,
  onConfirm,
}: ConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl border mx-4">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onCancel}
            className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold cursor-pointer text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2.5 rounded-lg bg-red-600 text-white hover:bg-red-700 font-semibold cursor-pointer text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
