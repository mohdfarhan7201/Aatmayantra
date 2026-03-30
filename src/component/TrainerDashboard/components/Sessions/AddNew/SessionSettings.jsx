export default function SessionSettings({ formData, setFormData }) {
  return (
    <div className="mt-6 border-t pt-6 -mb-1">
      <h3 className="font-medium text-2xl mb-4">Settings</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Session Type */}
        <div>
          <p className="text-mb font-medium mb-2">Session Type</p>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={formData.sessionType === "live"}
              onChange={() =>
                setFormData({ ...formData, sessionType: "live" })
              }
            />
            Live Stream
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={formData.sessionType === "recorded"}
              onChange={() =>
                setFormData({ ...formData, sessionType: "recorded" })
              }
            />
            Pre-recorded Session
          </label>
        </div>

        {/* Privacy */}
        <div>
          <p className="text-mb font-medium mb-2">Privacy</p>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={formData.privacy === "public"}
              onChange={() =>
                setFormData({ ...formData, privacy: "public" })
              }
            />
            Public
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={formData.privacy === "private"}
              onChange={() =>
                setFormData({ ...formData, privacy: "private" })
              }
            />
            Private (Premium Members)
          </label>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <input
          type="checkbox"
          checked={formData.comments}
          onChange={() =>
            setFormData({ ...formData, comments: !formData.comments })
          }
        />
        <span className="text-sm">Enable Comments</span>
      </div>
    </div>
  );
}
